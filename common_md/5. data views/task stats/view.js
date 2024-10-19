// Ensure Chart.js is loaded
if (!window.Chart) {
    let chartScript = document.createElement('script');
    chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    document.head.appendChild(chartScript);
}

// Wait for the scripts to load before running the charts
function loadScripts(callback) {
    let chartLoaded = !!window.Chart;

    if (chartLoaded) {
        callback();  // Run the callback when all scripts are loaded
    } else {
        setTimeout(() => loadScripts(callback), 100);  // Retry until scripts are loaded
    }
}

loadScripts(function () {
    // Load tasks with completed status
    const tasks = dv.pages().file.tasks
        .where(t => t.completed && t.completion)  // Ensure task is completed and has a completion date
        .map(t => {
            const rawDate = t.completion.toString();
            let completionDate = new Date(rawDate);  // Use native JavaScript Date

            if (isNaN(completionDate.getTime())) return null;  // Invalid date check

            return {
                completionDate: completionDate.toISOString().slice(0, 10),  // Format as YYYY-MM-DD
                dayOfWeek: completionDate.toLocaleString('en-US', { weekday: 'long' }),
                dueDate: t.due ? new Date(t.due.toString()).toISOString().slice(0, 10) : null,
                tags: t.tags
            };
        })
        .filter(t => t !== null);

    // --- Task Completion by Day of the Week ---
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const completionsByDay = daysOfWeek.map(day => ({
        day: day,
        count: tasks.filter(t => t.dayOfWeek === day).length
    }));

    // Create a canvas for the bar chart (Tasks by Day of the Week)
    dv.paragraph("### Task Completion by Day of the Week");
    const canvasDayOfWeek = dv.el("canvas", "", { attr: { id: "dayOfWeekChart", width: "400", height: "200" } });

    new Chart(canvasDayOfWeek.getContext('2d'), {
        type: 'bar',
        data: {
            labels: completionsByDay.map(d => d.day),
            datasets: [{
                label: 'Tasks Completed',
                data: completionsByDay.map(d => d.count),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true
        }
    });

    // --- Task Completion by Tags ---
    let tagCounts = {};
    tasks.forEach(task => {
        task.tags.forEach(tag => {
            if (tag && typeof tag === 'string') {  // Ensure the tag is valid
                if (tag in tagCounts) {
                    tagCounts[tag]++;
                } else {
                    tagCounts[tag] = 1;
                }
            }
        });
    });

    // Filter out tags that have a count of 1 or are invalid
    const sortedTags = Object.entries(tagCounts)
        .filter(([tag, count]) => count > 1)  // Only include tags with more than 1 count
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => ({ tag, count }));

    // Create a canvas for the pie chart (Tasks by Tag)
    dv.paragraph("### Most Frequently Completed Tags");
    const canvasTags = dv.el("canvas", "", { attr: { id: "tagsChart", width: "100", height: "100" } });

    new Chart(canvasTags.getContext('2d'), {
        type: 'pie',
        data: {
            labels: sortedTags.map(t => t.tag),
            datasets: [{
                label: 'Tag Frequency',
                data: sortedTags.map(t => t.count),
                backgroundColor: sortedTags.map(() => 'rgba(153, 102, 255, 0.2)'),
                borderColor: sortedTags.map(() => 'rgba(153, 102, 255, 1)'),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // --- Calculate 30-Day Simple Moving Average (SMA) ---
    const completionCounts = {};
    tasks.forEach(task => {
        if (task.completionDate) {
            if (completionCounts[task.completionDate]) {
                completionCounts[task.completionDate]++;
            } else {
                completionCounts[task.completionDate] = 1;
            }
        }
    });

    // Get all dates between the first and last completion date
    const firstDate = new Date(Object.keys(completionCounts).sort((a, b) => new Date(a) - new Date(b))[0]);
    const lastDate = new Date();  // Use today's date as the last date

    const allDates = [];
    let currentDate = new Date(firstDate);
    let daysWithoutTasks = 0;
    while (currentDate <= lastDate) {
        const formattedDate = currentDate.toISOString().slice(0, 10);
        if (!completionCounts[formattedDate]) {
            completionCounts[formattedDate] = 0;  // Fill missing dates with 0
            daysWithoutTasks++;
        }
        allDates.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);  // Increment the date by 1
    }

    // Calculate 30-day moving average, handling missing data more carefully
    const movingAverageData = allDates.map((date, index) => {
        let sum = 0;
        let count = 0;  // To count the days with task completions

        // Only average over dates with actual completions
        for (let i = 0; i < Math.min(30, index + 1); i++) {
            const prevDate = allDates[index - i];
            if (prevDate && completionCounts[prevDate] > 0) {
                sum += completionCounts[prevDate];
                count++;  // Increment the count of days with actual completions
            }
        }

        // Prevent division by zero
        return {
            date: date,
            count: count > 0 ? sum / count : 0  // Only divide by the number of days with completions
        };
    });

    // Create a canvas for the line chart (30-Day Moving Average)
    dv.paragraph("### Productivity Over Time (30-Day Moving Average)");
    const canvasProductivity = dv.el("canvas", "", { attr: { id: "productivityChart", width: "400", height: "200" } });

    new Chart(canvasProductivity.getContext('2d'), {
        type: 'line',
        data: {
            labels: movingAverageData.map(d => d.date),  // X-axis: All dates
            datasets: [{
                label: 'Tasks Completed (30-Day SMA)',
                data: movingAverageData.map(d => d.count),  // Y-axis: Moving average
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.8,  // Increased tension for the smoothest curve
                pointRadius: 0.2,  // Remove data points from the line
                borderWidth: 2  // Thicker line for better visibility
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 12,  // Limit number of labels shown on X-axis
                    }
                },
                y: {
                    beginAtZero: true,
                    suggestedMax: 3,  // Adjust this based on your data scale
                    ticks: {
                        stepSize: 0.5,  // Make the Y-axis more granular
                    }
                }
            },
            
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });

    // Calculate cumulative tasks completed over time
    let cumulativeTotal = 0;
    const cumulativeData = allDates.map(date => {
        cumulativeTotal += completionCounts[date] || 0;  // Add the number of completions for each date
        return { date: date, total: cumulativeTotal };
    });

    // Create a canvas for the cumulative line chart (Total Tasks Completed Over Time)
    dv.paragraph("### Cumulative Total Tasks Completed Over Time");
    const canvasCumulative = dv.el("canvas", "", { attr: { id: "cumulativeChart", width: "400", height: "200" } });

    new Chart(canvasCumulative.getContext('2d'), {
        type: 'line',
        data: {
            labels: cumulativeData.map(d => d.date),  // X-axis: All dates
            datasets: [{
                label: 'Cumulative Tasks Completed',
                data: cumulativeData.map(d => d.total),  // Y-axis: Cumulative total
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,  // Lowered tension for readability
                pointRadius: 0,  // No data points on the line
                borderWidth: 2  // Thicker line for visibility
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 12  // Limit number of labels shown on X-axis
                    }
                },
                y: {
                    beginAtZero: true  // Ensure the Y-axis starts at zero
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });

    // --- Additional Productivity Analytics ---

    // Total tasks completed
    const totalTasksCompleted = tasks.length;

    // Average tasks completed per week
    const totalDays = Math.ceil((lastDate - firstDate) / (1000 * 60 * 60 * 24)) + 1;
    const weeks = totalDays / 7;
    const averageTasksPerWeek = (totalTasksCompleted / weeks).toFixed(2);

    // Most productive day of the week
    const mostProductiveDay = completionsByDay.reduce((max, day) => day.count > max.count ? day : max, completionsByDay[0]);

    dv.paragraph(`### Productivity Summary\nTotal tasks completed: ${totalTasksCompleted}\nAverage tasks completed per week: ${averageTasksPerWeek}\nMost productive day of the week: ${mostProductiveDay.day} (${mostProductiveDay.count} tasks)\nDays without task completions: ${daysWithoutTasks}`);

});
