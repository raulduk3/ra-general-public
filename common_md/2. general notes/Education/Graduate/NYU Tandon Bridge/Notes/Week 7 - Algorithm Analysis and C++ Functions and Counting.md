---
title: Untitled
---
2024-10-09

tags: #cs #grad

We will introduce the run-time-stack as an execution model that manages the scope of variables as well as assists in controlling the flow.

# Module Notes

## Primality Testing

A numbers is prime, if its only divisors are 1 and itself

13 is prime because 1 and 13 are the 13's only factors. 

We say k and d are complementary divisors of a number if, if d * k is equal to that number.

4 and 25 are complementary divisors of 100.

## Runtime Analysis and Big-O notation

The running time depends on the size of the input
- parameterize running time by the size of the input
The running time depends on the operators we use and on the types of the data they are applied
- ignore machine-dependent constants, we count each primitive operator as one

**We compare (asymptotic order of the) number of primitive operations executed by a process as a function of its input size**

$$ \begin{align}
T_{1}(n) = 5n + 4 = \theta(n) \\
T_{2}(n) = 3n + 4 = \theta(n)\\
T_{3}(n) = 6\sqrt{n} + 4 = \theta(\sqrt{n})\\ \\
\text{Let } n \text{ be the size of the input} 
\end{align}
$$

$T_{1}(n)$ is asymptotically equivalent $T_{2}(n)$
$T_{3}(n)$ is asymptotically lower than $T_{2}(n)$ and $T_{1}(n)$

The running time depends on the machine's hardware technology
- make an asymptotic analysis: look at the order of growth of $T(n)$

$$
T(n) = 3n^{2} + 6n - 15 = \theta(n^{2})
$$

We compare the asymptotic order of the number of primitive operations executed by a process, as a function of its input size 

**Rule of thumb**:
- Drop lower-order terms
- Ignore leading constants
- Go inside out

$$
n^{2}
$$
```c++
int main() {
	int n, i, j;
	cout << "Please enter n: " << endl;
	cin >> n;
	for (i = 1; i <= n; i++) {
		for(j = 1; j <= n; j++)
			cout << '*';
		cout << endl;
	}
	return 0;
}
```

$$
T(n) = 1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2} = \frac{1}{2}*n^{2}+\frac{1}{2}*n = \theta(n^{2})
$$
```c++
int main() {
	int n, i, j;2
	cout << "Please enter n: " << endl;
	cin >> n;
	for (i = 1; i <= n; i++) { 
		for(j = 1; j <= i; j++)
			cout << '*';
		cout << endl;
	}
	return 0;
}
```

## Functions

### K-combinations Problem

Let $n$ and $k$ be two non negative integers, such that two k <= n. we define k-combinations as the number of unordered selections of k-combinations is denoted by $n \choose k$ and is also called n choose k. 

$$
{n \choose k}=\frac{n!}{k!\cdot(n-k)!}
$$

```c++
#include <iostream>
#include <cmath>

using namespace std;

int factorial(int num);
int kCombinations(int n, int k);

int main() {
    int n, k; 
    cout << "Please enter n and k (n>=k): " << endl;
    cin >> n >> k;
    cout << n << " choose " << k << " is " << kCombinations(n, k) << endl;
    return 0;
}

int kCombinations(int n, int k) {
    int nFact, kFact, n_kFact; 
    nFact = factorial(n);
    kFact = factorial(k);
    n_kFact = factorial(n - k);

    return nFact / (kFact * n_kFact);
}

int factorial(int n) {
    int acc = 1;
    for (int i = 1; i <= n; i++)
        acc *= i;
    return acc;
}
```

## Parameter Passing

### Call-by-value

When passing by value, the argument is evaluated and its value is passed

```c++
void func (int x)
```

### Call-by-reference

When passing by reference, a reference to the arguments memory location is passed

```c++
void func (int &x)
```

# Questions

* For modern C++ compilers, when using `include` in our programs are we importing header files or compiled binaries? 
* Should we avoid passing by reference?

# Todo
- [ ] read pages 181-240, 251-292 in the “Problem Solving with C++” textbook (chapters 4 and 5) #grad 📅 2024-10-19
- [ ] complete the reading assignment “Week 7: Permutations and Combinations” in zyBooks #grad 📅 2024-10-19
- [ ] complete the reading assignment “Week 7: Additional Topics” in zyBooks #grad 📅 2024-10-19
- [ ] read pages 51-70 in the “Data structures and Algorithms in C++” textbook #grad (chapter 2) 📅 2024-10-19
- [x] watch [[Week 7 - Algorithm Analysis and C++ Functions and Counting]] webinar #grad 📅 2024-10-17 ✅ 2024-10-17
- [x] complete the reading assignment “Week 7: Counting Basics” in zyBooks #grad 📅 2024-10-14 ✅ 2024-10-14
- [x] watch module 8 - Functions #grad 📅 2024-10-17 ✅ 2024-10-12
- [x] watch module 7 – Algorithm Analysis #grad 📅 2024-10-17 ✅ 2024-10-12 
# References
- [[NYU Tandon Bridge]]