---
title: Week 2 - Data Types, Expressions and Proofs
---
2024-09-12 16:36

tags: #cs #grad

- [x] complete the reading assignment “Week 2: Additional Proving Techniques” in [[Discrete Mathematics on zyBooks]] 📅 2024-09-25 ✅ 2024-09-26
- [x] complete the reading assignment “Week 2: Direct Proofs” in [[Discrete Mathematics on zyBooks]] 📅 2024-09-23 ✅ 2024-09-23
- [x] complete the reading assignment “Week 2: Rules of Inference” in [[Discrete Mathematics on zyBooks]] 📅 2024-09-23 ✅ 2024-09-23
- [x] watch [[Week 2 - Data Types, Expressions and Proofs]] webinar video 📅 2024-09-20 ✅ 2024-09-19
- [x] read and note on in [[Problem Solving with Cpp]] (1.1 - 1.4, 2.1-2.3, 3.1) 📅 2024-09-18 ✅ 2024-09-18
- [x] module 4 📅 2024-09-16 ✅ 2024-09-16
- [x] watch module 3 📅 2024-09-12✅ 2024-09-14
# Module Notes
## Program Execution
CPU <-> RAM –> Secondary Storage

> The first thing that happens is this program is copied into our main memory in order for the computer to have fast access to this set of instructions. And then these instructions are starting to execute one after the other. Obviously the CPU is responsible for that. The CPU has a program counter register that says where or what’s the next instruction that would be executed. It is initialized to 100 which is the first instruction in this program and then the fetch decode executes cycle is starting to happen. Each cycle the instruction that the program counter points to is fetched from the main memory into the CPU. Then the CPU decodes it understand what the meaning what it has to do with this instruction and then it executes it. And over and over so the program counter is increased and the next instruction is fetched decoded and executed. Program counter is increased and the instruction is fetched decoded and executed. This happens literally million times each second and each the instructions are just executed one after the other

High-level languages are compiled into machine language that is executable by the CPU (a set of instructions), that's why compilers are CPU and architecture dependent.
## Data Types and Expressions
Main elements of programming consist of data types, expressions, and control flow.

Data is represented as **variables** and **integers**.

C++ literals: 3, 4, -6, 3954, etc.
### The $int$ Data Type 
Represents any integers number

Inner representation: each $int$ data uses 4 bytes (32 bits)

Arithmetic operations can be performed on integers. (+, -, \*, /, %, =)

32bit 2's compliment for storing integers.

| Address | Memory Value |      |
| ------- | ------------ | ---- |
| 100     | 00010101     | <- x |
| $...$   | $...$        |      |
| $...$   | $...$        |      |
| 104     | 00000000     | <- x |
```c++
int main() {
	int x;
	int y;

	x = 6;
	y = -6;

	return 0;
}
```

# The $double$ and $float$ Data Type
Real numbers (could have fractional parts)

Each $double$ takes about 8 bytes (64 bits)

Each $float$ takes about 4 bytes (32 bits)
# The $char$ Data Type
Each $char$ uses 1 bytes (8 bits)

The characters are mapped to numbers by the ASCII table, which are then represented in binary

C++ literal: 'a', 'B', '1', '^'
# The $string$ Class
$string$ is not a C++ built-in type. To use it you need to have ```#include<string>```

Sequences of characters; text

C++ literals: "abc", "This is a string\n",

Arithmetic Operators: +, =
# The $bool$ Data Type
True/False - Truth value

Each $bool$ uses 1 bytes or 8 bits of data

**False** is represented as a byte of 0s. **True** is any non-zero value.

C++ literals: ```true``` or ```false```

Arithemetic Operators: &&, ||, !
# References
- [[NYU Tandon Bridge]]
