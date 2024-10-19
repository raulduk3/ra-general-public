---
title: Using Apps and Databases
---
2024-08-19 15:48
tags: #cs #pro 
# Unit 1 Using Data Types and Units 
**Notational Systems** represent different quantities or characters.

**Decimal notation**: Based on the principle of expressing ten different numbers using a single digit in the range 0 to 9. Base 10.

**Binary Notation**: A numbering systems where each single digit can express two values, in the range 0 to 1. Also referred to as base 2.

**Hexadecimal Notation**: When handling large digits, you can express them more efficiently using hexadecimal. The hex notation enables you to express 16 different numbers using a single digit in the rang of 0 to F. Base 16.
## Units of Measure
The basic unit of computer data is the **binary digit** or **bit**, which can represent two values (zero or one). The first multiple is the **byte**, which is eight bits.

> ■ KiloByte (KB)—1000 bytes (or 103 or 10*10*10 bytes). Small files are often measured in KB. 
> 
> ■ MegaByte (MB)—1000*1000 bytes (or 1,000,000 bytes). Many files would be measured in megabytes. 
> 
> ■ GigaByte (GB)—1000*1000*1000 bytes (1,000,000,000 bytes). Gigabytes are usually used to talk about disk capacity. 
> 
> ■ TeraByte (TB)—1000 GB (1,000,000,000,000 bytes). Some individual disk units might be 1 or 2 terabytes but these units are usually used to describe large storage networks. 
> 
> ■ PetaByte (PB)—1000 TB or 1015 bytes (1,000,000,000,000,000 bytes). The largest storage networks and cloud systems would have petabytes of capacity.

When data is transferred between components in the computer or between computers over a network, the throughput rate that a particular connection can sustain is measured in bits per second (bps). Mb/s is 100 bits per second. 

**Processing Speed Units**
The speed at which a computer works can be described independently of how much data is involved in each operation.

A computer's internal clock and the speed at which its processors work is measured in units of time called Hertz (Hz). 1 Hz represents one cycle per second. Gigahertz and Megahertz.

**Data Types**
> ■ **Integers**—these are whole numbers. For example: 5, 21, or 65536. An integer data type consumes 1 to 8 bytes of computer storage.  
> 
> ■ **Floating-point numbers**—this type can support decimal fractions such as 4.1, 26.4, or 5.62. A floating-point number (or just "float") consumes between 4 and 8 bytes of storage. Note that the floating-point type could store a whole number too (4.0 for instance). 
> 
> ■ **Boolean values**—these are a special numeric data type indicating that something is either TRUE or FALSE (with a 1 or 0). They consume a single bit of storage.  
> 
> ■ **Characters**—a character (or char) is a single textual character, and can be a letter of the alphabet, a symbol, or, indeed, a numerical character. For example: a, D, 7, $, @, #. These consume one byte of storage. Note that when a number is entered as a character data type, you cannot perform any mathematical operations on it.  
> 
> ■ **Strings**—a string is a collection of text characters. For example: XYZ, Hello world. There is no real limit on the amount of storage that can be used by a string. Generally, you define the string length when you define the data type.  

ASCII (American Standard Code for Information Interchange), each number or character in a text file or string variable is represented by a seven-bit binary number.
A = 65 = 100 0001
## The Value of Data
The business case for investing in security is made by a calculation called **Return on Security Investment (ROSI)**. To calculate ROSI, you perform risk assessments to work out how much the loss of data would cost your organization and how likely it is that data loss might occur.

**Data encryption**—this means that data is encoded in some way that only a person with the correct key can read it.

**Firewalls**—on a network, a firewall can control how hosts and network applications are accessible to one another. 
 
**Data-driven Business Decisions**

> ■ Data is the raw values collected by the system. The system must have some way of tagging or normalizing these values, similar to the way that data is defined with different types, so that they can be used for comparisons. For example, a web server might log whenever a page is visited and record information about the visitor, such as the time, the location, the type of browser, how long they spent viewing the page, or any link from the page that was clicked. All these things are data points with distinct types and formats. 
> 
> ■ Information is some level of summarization of the individual data points. For example, you could use the logs of page visits to work out how many unique visitors there were (as opposed to the same visitor viewing the page more than once). 
> 
> ■ Insights are things that inform meaningful business decisions. For example, from the information provided by the analysis of unique visitors, you may devise a plan to increase unique visitor numbers through better marketing or page design.

Data capture and collection --> Data correlation --> Meaningful reporting
# Unit 2 Using Apps
Pretty straight forward Windows knowledge.
## Remote Desktop and Screen Sharing Software 
Remote Desktop allows a user to connect to a computer over a network. The remote desktop server runs on the target computer. The user starts a remote desktop client application and enters the connection information. When the connection is established, the user can operate the remote computer's desktop via a window on their local computer. An ordinary user might use remote desktop to connect from a field laptop to a machine in the office. Remote desktop is also used by IT support staff to login to a user's computer to provide support and assistance without having to travel to the user's location. Remote connection utilities can also be used in a "read-only" type of mode to facilitate screen sharing. This means that the remote user can view the host's desktop but cannot interact with it. This mode is often used for software demonstrations and for product support. 
# Unit 3 Programming and App Development
A **program** is a sequences of instructions for your computer to perform.

A **branch** is an instruction in your computer to execute a different sequence of instructions.

A **loop** is similar to a branch as it repeats a set of instructions a set number of times.

**Scripted**, **interpreted**, and **compiled** programming languages

Software has to be built per platform. Some services/applications are delivered as **web applications**.
# Unit 4 Using Databases
A **database** is an organized collection of information. Usually consisting of **tables** organized in **columns** and **rows**. 

**Spreadsheets** and **Comma Separated Values (CSV)** are examples of **flat file** data.

> Databases can enforce data types for each column and validate information entered as fields and records. Spreadsheets can mimic some of this functionality but not as robustly. Databases consequently support a wider variety of data formats. 
> 
>  Databases are also more scalable. Scalability means being able to expand usage without increasing costs at the same rate. For example, in a non-scalable system, doubling the number of users would also double the costs of the system. Database architecture means that extra capacity can be added later with much less investment. 

A **relational database** is the type we have been describing so far. A relational database is a highly structured type of database. **Relational Database Management Systems (RDBMS)**
# References
- [[CS and IT]]
- [[CompTIA ITF]]