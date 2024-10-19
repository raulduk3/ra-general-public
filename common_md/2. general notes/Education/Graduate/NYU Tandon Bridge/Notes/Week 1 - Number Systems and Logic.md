---
title: Week 1 - Number Systems and Logic
---
e2024-09-05 14:22
tags: #grad #cs 

- [x] watch [[Week 1 - Number Systems and Logic]] webinar video #grad 🔺 📅 2024-09-13 ✅ 2024-09-12
- [x] module 2 ✅ 2024-09-08
- [x] module 1 ✅ 2024-09-08
- [x] complete the reading assignment “Week 1: Predicate Logic” in [[Discrete Mathematics on zyBooks]] #grad 📅 2024-09-11 ✅ 2024-09-12
- [x] complete the reading assignment “Week 1: Propositional Logic” in [[Discrete Mathematics on zyBooks]] #grad 📅 2024-09-11 ✅ 2024-09-12
# Module Notes
## 1.1 Fundamentals of Systems 
A **computer** is an electromechanical device which takes input does processing and produces output.  

Input -> Computer -> Output.

**Mainframe** - one centralized machine
**Sever** - dedicated machine in controlled environment to server a purpose
**Desktop/Laptop/Tablet/Phone** - used by end user for work 

All computers have **components**:
- at least one Central Processing Unit (CPU) which is the “brain” of the computer.
- Main memory where code and data is stored temporarily
- Secondary storage where information is stored permanently

Most computers will have:
- A video graphic controller where images can be rendered for display on a screen
- A network interface for communications
- Peripheral interfaces (USB, Thunderbolt, Firewire, SCSI, etc)

Communication between machine components is done via a "bus" a two way physical pathway on the motherboard Primary, the system bus is between main memory and the cpu.
### CPU
The Central Processing Unit is a single piece of silicon in the form of a chop. It only understand machine code, and is the only location where code is executed. The CPU operates on a **"fetch-decode-execute" cycle**. Each type of CPU has its now set of "instructions". Each CPU has a small amount of memory call "registers" which is uses to perform operations and store results.

CPU's understand a very basic set of commands like:
- move
- add
- subtract
- multiply
- compare
- jump

The CPU is designed with its **instruction set** and is related to it's physical design. This set of instructions, usually as small as 100, can each be represented by a numeric value. **Opcode**. When the CPU receives a particular instruction, it performs that task.

**Fetch-Execute Cycle** (Fetch-Decode-Execute Cycle): Move one instruction from main memory into a register in the CPU, the instruction register, and decodes it and moves in an additional parameters from main memory, and then the CPU can execute the instruction. Process repeats with the next instruction in the sequence
### Memory
All the data and instructions has to be stored somewhere.

In order for code to execute it has to be in a register built into the CPU

Registers are too expensive, as memory gets faster, it tends to get more expensive
#### The Hierarchy
- Registers (Nanosecond access time, but size measured in bytes)
	- Instructions can be executed only here
- Cache (Nanosecond access time, size measured in megabytes)
	- Useful for the processor designers, not terribly useful for programmers
- RAM (10+ nanosecond access time, size measured in gigabytes)
	- This is where all of your code and data will be stored temporarily
	- Loads into registers/cache for execution
	- This is known as volatile memory because it is all lost when the computer is off
- Secondary Storage(10 millisecond access time, size measured in terabytes)
	- Permanent storage, your hard drive.
- Tierterary storage (offline, size measured only by your imagination)
	- Used for backup or other information that doesn’t need to be immediately accessible
#### RAM
*Random* Access Memory because any place in it can be accessed in the same amount of time

The areas are broken down into bytes (8 bits) with each bytes being able to be accessed independently of other, or they can be grouped together into words (64/32/16 bits).

When electricity stop running through the system, RAM is lost

When running a program, all the machine language instructions are brought into RAM, and one-by-one pulled into the CPU by the fetch and execute cycle. 

RAM is on a **PCB (printed circuit board)**.
#### Secondary Storage
Moving away from HDDs to SSDs

**HDDs** - Hard drive disks, also known as spinning drives
* Contain multiple magnetic material discs which rotate together at a constant rate
* Contain read heads which move to different radii on disk
* Allow the system to read and access any position via it's three dimensional polar coordinates (radius, degree of rotation of the read head)
* There are tracks around the disk that each contain information. It is expensive to move the head between tracks, it is easier to rotate and read data
* Can be energy expensive
**SSDs** - Solid State Drives
* Most end-user machines
* Contain a number of chips like USB drives
* Data is stored, electrically, in these chips, similar to RAM.
* All data can be accesses in the same amount of time
* Much smaller storage sizes and more expensive than HDDs
* Performance and heat benefit
## Networking
Networks are interconnected via the Internet

Accessing data remotely on LANs and WANs
### Physical Connections
**Copper** - any metal writing that has 8 pairs of twisted metals strips and uses electrical signals
**Fiber** - transmitting information (bits) over light and a piece of glass, costs a lot more
**Wireless** - only for the last twenty years, primarily over WiFi, 

**Protocols**
* Ethernet (signal protocol + copper)
* Wifi (802.11)
* ATM
### Packets
Data is sent from a program to another program indirectly by using multiple protocols

There are protocols for transmitting packets at
* each application
* each logical network
* each physical network

As data moves down the layers, information is added by the sender so the receiver can appropriately route the packets to the correct network, machine, and application. 

**Application**
* **HTTP** – Hyper Text Transport Protocol
* **SMTP** – Simple Mail Transport Protocol
* **IMAP** – Internet Mail Access Protocol

**Network/Logical**
* Usually broken down into two layer
	* UDP - connectionless, no guarantee of delivery or ordering
	* TCP - connection oriented
* Globally delivered of packets
	* Internet Protocol - IP
	* Almost every machine in the world has unique IP adress related to the machines router
	* Network Address Translation Ipv4 vs Ipv6

**Physical**
* Often adds a header and footer (to indicate the end) 
* Mostly concerned with local addressing and how to deal with eccentricities of the physical medium
* Ethernet
* 802.11
# 1.2 Positional Number Systems
Data in the computer's memory is represented using units that can each be in one of 2-states (0 or 1), **binary**.

Data is represented digitally, using binary numbers

Kinds of data, all represented as binary: 
- Numbers: represented in binary 
- Text: each character is mapped to a number
- Images: matrix of pixel's colors
- Video: a matrix of images
- Audio: discrete samples of voltage levels

Each number in the English alphabet maps to a number. (ASCII table or Unicode)
## Counting in Base 16 (Hexadecimal)
In base-16, or hexadecimal, the place values are **powers of 16**
Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
## Equivalent Representations
$$
(13)_{10} = (15)_{8} = (23)_{5} = (1101)_{2} = (D)_{16}
$$
## Base Conversions
### N in base b to N in decimal
$$ 
\begin{align}
(375)_{10} = 5*10^0 + 7 * 10^1 + 3*10^2 \\
(125)_{8} = 5*8^0 + 2*8^1 + 1*8^2 = (85)_{10} \\
(1011)_{2} = 1*2^0 + 1*2^1 + 0*2^2 = (11)_{10} \\
(3b2)_{16}=2*16^0 + 11*16^1 + 3*16^2 = (946)_{10} \\ \\

(a_{n}\dots a_{2}a_{1}a_{0})_{b} = a_{0}*b^0 + a_{1}*b^1 + a_{2}*b^2 + \dots + a_{n}*b^n
\end{align}
$$
### N in decimal to N in base b
**Base-10 to Binary**
1. Divide by base, keep track of remainder
2. Write 1 for odd numbers; 0 for even numbers, left to right 
**Unsigned Binary Number System**
$$
2^{k}-1
$$

**Signed Binary Number System**

$$\begin{align} 
1 + 2 + 4 + 8 + 16 + 32 + \dots +2^k = 2^{k +1}-1
\end{align}
$$

### N in binary to N in hexadecimal
| Hex Digit | 4 bit binary |
| --------- | ------------ |
| 0         | 0000         |
| 1         | 0001         |
| 2         | 0010         |
| 3         | 0011         |
| 4         | 0100         |
| 5         | 0101         |
| 6         | 0110         |
| 7         | 0111         |
| 8         | 1000         |
| 9         | 1001         |
| a         | 1010         |
| b         | 1011         |
| c         | 1100         |
| d         | 1101         |
| e         | 1110         |
| f         | 1111         |
N in binary <-> N in hexadecimal
$$ \begin{align}
(3b9)_{16}=(0011 1011 1001)_{2} \\
\end{align}
$$
## Addition
$$\begin{align}
325 \\
+692 \\
=1017 \\
\\
(365)_{8}  \\
+ (243)_{8} \\
= (630)_{8}
\end{align}
$$
## Subtraction
$$ \begin{align}
475 \\
- 192 \\
= 235 \\
 \\
(536)_{8} \\
-(351)_{8} \\
= (165)_{8}
\end{align}
$$
## Two's Complement Binary Number System
In a k-bit two's complement representation of a number:
* a positive integer is represented in its (k-1)-bit unsigned binary representation, padded with a 0 to its left
* The sum of a number and its additive inverse is: $$ 2^k$$
$$ \begin{align}
(26)_{10}= 00011010 \\
(-26)_{10} = (11100110) \\ \\
  00011010 \\
+ 11100110 \\
=100000000
\end{align}
$$
# References
- [[NYU Tandon Bridge]]