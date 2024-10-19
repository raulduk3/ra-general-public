---
title: Data structures and Algorithms in C++
---
2024-10-04 18:10

tags: #grad #book 

# 2 Algorithm Analysis

An **algorithm** is a clearly specified set of simple instructions to be followed to solve a problem. Once an algorithm is given for a problem, an important step is to determine how much in the way of resources, such as time or space, the algorithm will require. 

* How to estimate the time required for a program.
* How to reduce the running time of a program from days to years to fractions of a second.
* The results of careless use of recursion.
* Very efficient algorithms to raise a number to a power and to compute the greatest common divisor of two numbers.

## 2.1 Mathematical Background

### Definition 2.1.1

$T(N) = O(f(N))$ if there are positive constants $c$ and $n_{0}$ such that $T(N) \leq cf(N)$ when $N \geq n_{0}$.

### Definition 2.1.2

$T(N) = \Omega(g(N))$ if there are positive constants $c$ and $n_{0}$ such that $T(N) \geq cf(N)$ when $N \geq n_{0}$.

### Definition 2.1.3

$T(N) = \Theta(h(N))$ if and only if $T(N) = O(h(N))$ and $T(N) = \Omega(h(N))$. 

### Definition 2.1.4

$T(N) = o(p(N))$ if, for all positive constants $c$, there exists an $n_{0}$ such that $T(N) < cp(N)$ when $N > n_{0}$. Less formally, $T(N) = o(p(N))$ if $T(N) = O(p(N))$ and $T(N) \neq \Theta(p(N))$.

## 2.1 Mathematical Background (cont.)

When we say that $T(N) = O(f(N))$, we are guaranteeing that the function $T(N)$ grows at a rate no faster than $f(N)$; thus $f(N)$ is an upper bound on $T(N)$. Since this implies that $f(N)$ = $\Omega (T(N))$, we say that $T(N)$ is a lower bound on $f(N)$.
