---
title: IT Concepts and Terminology
---
2024-08-19 07:41
tags: #cs #pro 
# Unit 1 Common Computing Devices
**Information Technology (IT)** is one that processes, stores, and transfers information. *Information* can be any form of data represented by binary digits one and zero

A computer is a system that manipulates data according to set of instructions. It is composed of hardware, software, and computer user. All attachments and core components of the physical computer are hardware. Parts attached to the physical computer are called **peripheral devices**. 

Software runs on the **operating system (OS)** and is the main interface for the user to execute and relay instructions to the computer hardware. 

> When a user selects a **command** (perhaps using a mouse to click an icon on the application toolbar), the **software application** receives the command and, using the functions of the operating system, converts it into a series of **instructions**, which are stored in system memory, commonly referred to as **Random Access Memory (RAM)**. Similarly, when a user types using the keyboard or scans a picture, the input is converted to digital data and stored in memory. 

The four functions that represent that ways data moves through a computer system: input, processing, output, and storage. Most computers are also configured in networks, allowing them to exchange data.

> A server is any computer providing services to other computers, but usually the term server implies a powerful computer that supports a number of users simultaneously in a computer network. Consequently, servers need to be very reliable. This is achieved by specifying high quality components and also by using extra copies of components for redundancy. This makes a server system **fault tolerant**. 
# Unit 2 Using a Workstation 
The main function of an operating system such as Microsoft Windows is to provide a stable environment for different software applications to work together
# Unit 3 Using an OS 
The operating system provides interfaces between the hardware, application programs, and the user. 

OS software is built from a kernel of core functions with additional driver software and system utility applications. Each hardware component requires a driver to work.

With a workstation, laptop, or server, you can delete the operating system and install a different one. These are general purpose types of computer systems capable of running software to perform a variety of different tasks. An embedded system by contrast is a computer or appliance designed for a very specific function. 

> There are two types of PC firmware: 
> 	■ The Basic Input/Output System (BIOS)  provides industry standard firmware that operates the essential components of the PC and ensures that the design of each manufacturer's motherboard is PC compatible. 
> 	■ Newer motherboards may use a different kind of firmware called Unified Extensible Firmware Interface (UEFI). UEFI provides support for 64-bit CPU operation at boot, a full GUI and mouse operation at boot, and better boot security. A computer with UEFI may also support booting in a legacy BIOS mode. 

Resources on the Internet are accessed using an address known as a **Uniform Resource Locator (URL)**. 
# Unit 4 Managing an OS
Registry Editor (regedit)—when you change a setting via a management interface, you are usually changing something stored in the Windows Registry configuration database. The Registry Editor is a means of directly editing this database. 

Badly written programs and malware can cause a memory leak, where the process keeps claiming memory addresses without releasing them. If the system keeps running out of memory, you would use Task Manager or another monitoring program to find the offending process and disable it from running. 

The OS can use the fixed disk to supplement RAM by paging it to the disk. This is called a **pagefile** or **virtual memory**.

**Partitions** allow a single disk to be divided into multiple different logical areas, each of which can be accessed via the OS as a separate **drive**. A disk must have at least one partition for the OS to use it. Also, each partition must be formatted with a file system so that the OS can read and write files to the drive.

**Access control** means that a computing device (or any information stored on the device) can only be used by authorized accounts. 

> Each user of the device is allocated an account and uses a password (or other credential) to authenticate to that account. The OS can restrict the privileges allocated to an account so that it is not able to reconfigure settings or access certain data areas.  

The principle of **least privilege** is that users should have only sufficient permissions required to perform tasks and no more.  

**User Account Control (UAC)** is Windows' solution to the problem of elevated privileges. 
# Unit 5 Troubleshooting and Support
Troubleshooting is a process of problem solving. It is important to realize that problems have **causes**, **symptoms**, and consequences.

You should read your manufacturer's documentation prior to attempting to fix a problem yourself because you might void your warranty and be unable to return the item for replacement if there is evidence of tinkering.

The manufacturer's documentation would certainly tell you what tools you would need to use to work on their hardware systems, but it is not the primary reason for reading the information.

Warnings, caveats, and guidelines for dismantling and repairing your system are usually meant for a trained technician

> 1) Identify the problem. 
> 	○ Gather information. 
> 	○ Duplicate the problem, if possible. 
> 	○ Question users. 
> 	○ Identify symptoms. 
> 	○ Determine if anything has changed. 
> 	○ Approach multiple problems individually. 
> 2) Research knowledge base/Internet, if applicable. 
> 3) Establish a theory of probable cause. 
> 	○ Question the obvious. 
> 	○ Consider multiple approaches. 
> 	○ Divide and conquer.
> 4) Test the theory to determine cause. 
> 	○ Once the theory is confirmed (confirmed root cause), determine the next steps to resolve the problem. 
> 	○ If the theory is not confirmed, establish a new theory or escalate. 
> 5) Establish a plan of action to resolve the problem and identify potential effects. 
> 6) Implement the solution or escalate as necessary. 
> 7) Verify full system functionality and, if applicable, implement preventive measures. 
> 8) Document findings/lessons learned, actions and outcomes. 

The first step of the troubleshooting model is to identify the problem. This involves the actions mentioned in the scenario, but the action that is missing is to determine if anything has changed.

Researching the knowledge base is part of the second step of the troubleshooting model, which occurs after identifying the problem.

Establishing a theory of probable cause is the third step of the troubleshooting model, which occurs after conducting research.

Testing the theory is the fourth step of the troubleshooting model, which occurs after establishing a theory of probable cause.

If there are errors during the **Power-On Self-Test (POST)**, the system will alert you through a series of beeps. Different sequences of beeps indicate specific types of problem. For example, you might hear a single beep, then three beeps, then a single beep again. You would then look up the codes for the manufacturer of the BIOS to determine what problem a code of 1-3-1 indicates.
# References
- [[CS and IT]]
- [[CompTIA ITF]]