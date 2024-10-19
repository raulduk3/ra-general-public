---
title: Using Computer Hardware
---
2024-08-22 10:57
tags: #cs #pro 

# Unit 1 System Components
The **Central Processing Unit (CPU)** is the device that "runs" software programs.

System memory uses a type of technology called **Random Access Memory (RAM)**.

The CPU fetches instructions from system memory as it needs them. This means that the bus between the CPU and memory, often referred to as the **Front Side Bus (FSB)**, must be as fast as possible. If the memory is slow and the CPU is fast, the CPU will not be supplied with enough instructions and become under-utilized.  

> If you open up a PC or a laptop, the main thing you will see is the motherboard (or system board). The motherboard is a Printed Circuit Board (PCB) with some built-in processors (the chipset), sockets and slots for upgradable components (CPU, RAM, adapter cards, disk drives), and wires (buses) to connect them together. 

The CPU is designed to run software programs. When a software program runs (whether it be an operating system, anti-virus utility, or word processing application), it is assembled into machine code instructions utilizing the fundamental instruction set of the CPU and loaded into system memory. The CPU then performs the following operations on these instructions: 

■ The Control Unit fetches the next instruction in sequence from system memory to the pipeline. 
■ The control unit decodes each instruction in turn and either executes it itself or passes it to the Arithmetic Logic Unit (ALU) or Floating Point Unit (FPU) for execution. 
■ The result of the executed instruction is written back to a register or to system memory. A register is a temporary storage area available to the different units within the CPU. 

This overview is grossly simplified of course. Over the years, many different internal architectures have been developed to optimize the process of fetch, decode, execute, and writeback, while retaining compatibility with the basic x86 instruction set, which defines a CPU as IBM PC compatible.

A CPU's **clock speed** is the number of instructions it can process in one second.

Newer motherboards may use a different kind of firmware called **UEFI (Unified Extensible Firmware Interface)**.
# Unit 2 Using Device Interfaces 
## Graphics Devices
A computer image is made up of a number of **pixels**. The number of horizontal and vertical pixels gives the resolution of the image. Each pixel can be a different color. The total number of colors supported in the image is referred to as the **color depth** (or **bit depth**).  

The other important component of video is the speed at which the display is refreshed, measured in Hertz (Hz). Increasing any one of these factors increases the amount of bandwidth required for the video signal and the amount of processing that the CPU or GPU (Graphics Processing Unit) must do and the amount of system or graphics memory required. 
## Input devices
**Human Interface Devices (HID)**, are peripherals that enable the user to enter data and select commands. Mouse, keyboard, stylus pens, speakers, webcams, etc.
## Networking Interfaces
Most computers will have a local network adapter or **Network Interface Card (NIC)**.

**Ethernet Connector (RJ-45)** An Ethernet network adapter used with twisted pair cable will have an RJ-45 port to connect the computer to the network, via another RJ-45 port in the network equipment. 

**Telephone Connector (RJ-11)** Not many computers and laptops ship with a dial-up/analog modem anymore, but they are still often a feature of "all-in -one" print/scan/fax devices. If required, a modem could be added to a PC using an expansion card or to a laptop using a USB fax modem adapter.  
# Unit 3 Using Peripheral Devices 
Windows devices are now all **Plug-and-Play**, meaning Windows will detect when a new devices as been conncted and automatically identify and attempt to install a **device driver**. Often times when Plug-and-Play doesn't work, you need to install drive software from the vendor's website. 
## Removing and Uninstalling Devices 
Windows detects when a device has been removed and will only load the driver for it when it is necessary. In some circumstances however you may want to completely uninstall a driver. Usually you can do this by uninstalling the software package used to install the driver in the first place. Alternatively, you can open **Device Manager** via the START+X menu, locate the device, then right-click and select Uninstall. A check box may allow you to remove the driver files from the system at the same time.
## Display Devices 
Some notable manufacturers of display devices include Viewsonic, Iiyama, Sony, Panasonic, Toshiba, LG, Acer, Sanyo, and Mitsubishi. Flat-screen Displays **Liquid Crystal Display (LCD)** screens, or **flat-screen displays**, are used by portable computers and have also replaced the old and bulky Cathode Ray Tube (CRT) units as the standard display type for desktops.  

Each picture element (pixel) in a color LCD comprises cells (or subpixels) with filters to generate the three primary colors (red, green, and blue) and transistors to vary the intensity of each cell, so creating the gamut (range of colors) that the display can generate.  

The whole panel is illuminated by a fluorescent or LED (Light Emitting Diode) backlight. 

HDMI Type C is the compact version of HDMI connector, also called the Mini HDMI connector, which was introduced in HDMI 1.3. It's used on portable devices, such as camcorders, and has the same number of pins as earlier versions, despite its smaller size.

HDMI Type D is an even smaller version, called the Micro HDMI connector, introduced in HDMI 1.4. This connector also uses the full 19 pins of earlier versions.

HDMI Standard 2.1 is the most recent update of the HDMI specification (at the time of this writing) and supports a range of higher video resolutions and refresh rates.

The HDMI Type A connector is the standard large size connector that uses a proprietary 19-pin connector.
# Unit 4 Using Storage Devices 
## System Memory
The main storage area for programs and data when the computer is running. System memory is a type of volatile memory called **Random Access Memory (RAM)**. Volatile means that data is only retained in the memory chips while there is a power source. 

A **mass storage device** provides **non-volatile storage** where the data is preserved when the power is turned off.

> External Hard Drives HDDs are also available as external units. The drive is shipped in a special enclosure, which provides some combination of USB, Firewire, eSATA, and/or Thunderbolt ports. External units may be designed for desk use (3.5" drives) or to be portable (2.5" drives). 3.5" drives require a separate power supply too; consequently, most external drives now use the 2.5" form factor. 

> Solid State Drives (SSD) are designed to replicate or supplement the function of the hard drive. Solid state storage uses a type of non-volatile memory technology called flash memory. Flash memory is non-volatile because it does not need a poweorr source to retain information even though it is a transistor-based technology. Compared to spinning disk stage, flash memory is very small and light and much faster. Mass manufacturing has seen prices fall to very affordable levels, though the cost per gigabyte of an SSD is still considerably higher than an HDD and it is unusual for SSDs to be supplied with more than 512 GB capacity.  

Solid State Drives (SSDs) can be hybrid drives in which the SSD portion functions as a large cache, containing data that is accessed frequently. The magnetic disc portions spin up when accessing non-cached data.

Synchronous Dynamic RAM (SDRAM) is DRAM used in laptops. This memory stores each data bit as an electrical charge and needs refreshing by an electrical charge.

A USB drive, or “thumb drive,” uses flash memory to store the data. The computer writes the data through an USB port to the data stick.

Many consumer digital imaging products use memory cards that have flash memory, such as digital still and video cameras. Some examples include Compact Flash (CF), Secure Digital (SD), Sony Memory Stick, and xD Picture Card.

Many types of mobile audio players (or mp3 players) use flash memory as the main storage on the device.
# Unit 5 Using File Systems 
## Managing the File System
Non-volatile computer storage is based around mass storage drives. Every computer will come with a primary fixed disk (HDD or SSD). This stores the operating system and potentially other data files.

In order for the OS to able to read and write files to a drive, it must be **partitioned** and formatted with a **file system**.
## Hard Disk Partitioning
**Partitioning** a hard disk is the act of dividing it into logically separate storage areas.

> On the primary fixed disk, one of the partitions must be made active. This active partition is also referred to as the system partition. An active partition is used by the computer to boot. In Windows, the system partition is usually hidden from File Explorer and is not allocated a drive letter. 
## Windows Drives
Each formatted partition can be allocated a drive letter from A to Z. The **boot partition** is usually allocated the letter C. 
## File Systems
Each partition can be formatted with a different **file system**. 

> ■ FAT (File Allocation Table)—this was used for older versions of Windows and is preserved under Windows for compatibility. Typically, the 32-bit version (FAT32) is used. This permits a maximum file size of 4 GB and a maximum partition size of 32 GB. 
> 
> ■ NTFS (New Technology File System)—as a 64-bit addressing scheme, NTFS allows much larger partitions (up to 2 TB) than FAT. NTFS also supports extended attributes, allowing for file-level security permissions, compression, and encryption. These features make NTFS much more stable and secure than FAT. Windows must be installed to an NTFS partition. 

Most Linux distributions use some version of the ext file system to format partitions on mass storage devices. ext3 is a 64-bit file system with support for journaling, which means that the file system tracks changes, giving better reliability and less chance of file corruption in the event of crashes or power outages.

Apple Mac workstations and laptops use the extended Hierarchical File System (HFS+), though the latest macOS version is being updated to the Apple File System (APFS).  
## File System Features  
> ■ Compression—the file system can automatically reduce the amount of disk space taken up by a file. The file system applies a non-lossy algorithm to the file to find ways to store the data in it more efficiently without discarding any information. Note that file system compression only benefits files that are not already compressed. A file type such as JPEG that already applies compression will be significantly reduced in size. 
> 
> ■ Encryption—the file system can automatically encrypt data in a file when it is saved. This means that the file can only be opened when there is access to the encryption key. If this is stored separately to the data and/or its use is protected by a password, the data on the drive is protected even if the disk is stolen and installed in another computer system. 
> 
> ■ Permissions—the file system maintains an Access Control List (ACL) for each file or folder object. The ACL records which user accounts are allowed to read, write, or control the object. 
> 
> ■ Journaling—the file system tracks changes or intended changes in a log. This means that if there is a sudden power cut and a particular write operation was interrupted, the journal may be used to recover the data or at least restore the file system to good working order (consistent state). 
> 
> ■ Limitations—as noted in the table below, file systems have limits in terms of their maximum capacity and the size of individual files. 
## Folders and Directories
The purpose of a drive is to store files. Folders are a means of organizing files on each drive to make them easier to find. Folders can also create distinct areas in terms of security access controls. 

The first level of the hierarchy is called the **root** folder.

"Folder" is a Windows-specific term. In Linux, these containers are called directories.

For Linux, A file system configured on a partition on a particular storage device is attached to a particular directory (mount point) within the unified file system using the mount command. 

Think of the root file system representing everything on the computer as "THE" file system and a file system for a particular partition as just "A" file system.
## Files
Files follow a similar naming convention to folders, except that the last part of the file name represents an extension, which describes what type of file it is and is used by Windows to associate the file with an application.
# Notes
Personal Area Networks (PAN) use Bluetooth to share data. Bluetooth is a radio-based technology designed to work over close range, but a Bluetooth Class 1 device has a range of up to 100 meters (300 feet). For this reason, it would be used for industrial purposes only.

For a wireless printer, you would use a Bluetooth Class 2 device with a range of up to 10 meters (30 feet).

For a wireless keyboard, you would use a Bluetooth Class 3 device with a range of up to 1 meter (3 feet).

For an automobile hotspot, you would use a Bluetooth Class 2 device with a range of up to 10 meters (30 feet).
# References
[[CompTIA ITF]]