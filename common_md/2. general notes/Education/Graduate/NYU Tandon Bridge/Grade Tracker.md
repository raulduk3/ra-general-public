---
title: Grade Tracker
assignments:
  - name: Homework 1
    type: homework
    max_score: 100
    score: 88.75
  - name: Homework 2 - A
    type: homework
    max_score: 80
    score: 80
  - name: Homework 2 - B
    type: homework
    max_score: 20
    score: 20
  - name: Homework 3 - A
    type: homework
    max_score: 48
    score: 45.75
  - name: Homework 3 - B
    type: homework
    max_score: 52
    score: 54
  - name: Homework 4
    type: homework
    max_score: 100
    score: 100 
  - name: Homework 5
    type: homework
    max_score: 100
    score: 
  - name: Homework 6
    type: homework
    max_score: 100
    score: 
  - name: Homework 7
    type: homework
    max_score: 100
    score: 
  - name: Homework 8
    type: homework
    max_score: 100
    score: 
  - name: Homework 9
    type: homework
    max_score: 100
    score: 
  - name: Homework 10
    type: homework
    max_score: 100
    score: 
  - name: Homework 11
    type: homework
    max_score: 100
    score: 
  - name: Homework 12
    type: homework
    max_score: 100
    score: 
  - name: Homework 13
    type: homework
    max_score: 100
    score: 
  - name: Homework 14
    type: homework
    max_score: 100
    score: 
  - name: Homework 15
    type: homework
    max_score: 100
    score: 
  - name: Homework 16
    type: homework
    max_score: 100
    score: 
  - name: Homework 17
    type: homework
    max_score: 100
    score: 
  - name: Homework 18
    type: homework
    max_score: 100
    score: 
  - name: Homework 19
    type: homework
    max_score: 100
    score: 
  - name: Homework 20
    type: homework
    max_score: 100
    score: 
  - name: Exam 1
    type: exam
    max_score: 100
    score:  
  - name: Exam 2
    type: exam
    max_score: 100
    score:  
  - name: Exam 3
    type: exam
    max_score: 100
    score:  
  - name: Exam 4
    type: exam
    max_score: 100
    score:  
---
```dataviewjs
// Get all assignments from the frontmatter
let assignments = dv.current().assignments;

// Separate homework and exams, and filter out incomplete ones
let homeworkAssignments = assignments.filter(a => a.type === "homework" && a.score !== null && a.score !== undefined);
let examAssignments = assignments.filter(a => a.type === "exam" && a.score !== null && a.score !== undefined);

// Calculate the total score and max score for all completed homework assignments
let totalHomeworkScore = homeworkAssignments.reduce((sum, assignment) => sum + assignment.score, 0);
let totalHomeworkMaxScore = homeworkAssignments.reduce((sum, assignment) => sum + assignment.max_score, 0);

// Calculate the overall homework average (grouped as a single total)
let homeworkAverage = (totalHomeworkMaxScore > 0) ? (totalHomeworkScore / totalHomeworkMaxScore) * 100 : 0;

// Calculate the weighted homework contribution to the final grade
let weightedHomework = (homeworkAverage / 100) * 8;  // Homework contributes 8% to the final grade

// Calculate the weighted contribution for each completed exam
let totalExamWeight = 23; // Each exam is worth 23%
let weightedExamSum = examAssignments.reduce((sum, exam) => {
    let examPercentage = (exam.score / exam.max_score) * 100;
    return sum + (examPercentage / 100) * totalExamWeight;
}, 0);

// Calculate the total weight of all completed work (homework + exams)
let totalCompletedWeight = (homeworkAssignments.length > 0 ? 8 : 0) + (examAssignments.length * totalExamWeight);

// Normalize the grade based on the total weight of completed assignments
let predictedGrade = (totalCompletedWeight > 0) ? ((weightedHomework + weightedExamSum) / totalCompletedWeight) * 100 : 0;
predictedGrade = predictedGrade.toFixed(2);

// Function to map the numerical grade to a letter grade
function getLetterGrade(grade) {
    if (grade >= 93) return 'A';
    else if (grade >= 90) return 'A-';
    else if (grade >= 87) return 'B+';
    else if (grade >= 83) return 'B';
    else if (grade >= 80) return 'B-';
    else if (grade >= 77) return 'C+';
    else if (grade >= 73) return 'C';
    else if (grade >= 70) return 'C-';
    else if (grade >= 67) return 'D+';
    else if (grade >= 63) return 'D';
    else if (grade >= 60) return 'D-';
    else return 'F';
}

// Get the corresponding letter grade
let letterGrade = getLetterGrade(predictedGrade);

// Display the result (Predicted Grade + Letter Grade) at the top
dv.header(2, `Predicted Grade: ${predictedGrade}% (${letterGrade})`);

// Display the homework average
dv.header(2, `Homework Average (Grouped Total): ${homeworkAverage.toFixed(2)}%`);

// Show completed exams and their contribution (optional)
if (examAssignments.length > 0) {
    dv.header(3, "Completed Exams:");
    dv.table(["Exam", "Score", "Max Score", "Percentage"], 
        examAssignments.map(a => [a.name, a.score, a.max_score, ((a.score / a.max_score) * 100).toFixed(2) + "%"])
    );
}

// Show completed homework and their details (optional)
if (homeworkAssignments.length > 0) {
    dv.header(3, "Completed Homework Assignments:");
    dv.table(["Completed Assignment", "Score", "Max Score", "Percentage"], 
        homeworkAssignments.map(a => [a.name, a.score, a.max_score, ((a.score / a.max_score) * 100).toFixed(2) + "%"])
    );
}

// List incomplete homework and exams for debugging (optional)
let incompleteAssignments = assignments.filter(a => a.score === null || a.score === undefined);
if (incompleteAssignments.length > 0) {
    dv.header(3, "Incomplete Assignments (Not Factored In):");
    dv.table(["Assignment", "Max Score"], 
        incompleteAssignments.map(a => [a.name, a.max_score, a.weight])
    );
}
```
