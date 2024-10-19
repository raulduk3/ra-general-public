---
title: Using Networks
---
2024-08-29 17:53

tags: #pro #cs`
# Unit 1 Networking Concepts
A **network** is a collection of two or more computer systems linked together through various communication channels to share resources and information. Networking allows for efficient data exchange, resource sharing, and communication across different devices and locations.

- **Clients:** These are computers or software applications that initiate requests for services or resources from other computers, known as servers.
- **Servers:** These are computers or programs that provide services, resources, or data to clients over a network. Servers can host websites, manage emails, store files, and more.

Understanding networking concepts is fundamental for designing, implementing, and managing efficient and secure communication systems.
## Local Area Networks (LANs) and Wide Area Networks (WANs)
### Local Area Network (LAN)
- **Definition:** A LAN is a network that spans a relatively small area, typically confined to a single building, office, or campus.
- **Characteristics:**
    - High data transfer rates due to proximity.
    - Low latency and minimal interference.
    - Typically owned, controlled, and managed by a single organization.
- **Uses:**
    - Connecting personal computers, printers, and servers within an office.
    - Facilitating resource sharing and collaboration among employees.
- **Examples:** Office networks, home networks, school networks.
### Wide Area Network (WAN)
- **Definition:** A WAN covers a broad area, potentially spanning cities, countries, or even continents.
- **Characteristics:**
    - Lower data transfer rates compared to LANs due to longer distances.
    - Higher latency and potential for more interference.
    - Often utilizes public networks or leased telecommunication lines.
- **Uses:**
    - Connecting multiple LANs across different geographic locations.
    - Facilitating communication and data exchange for multinational corporations.
- **Examples:** The Internet, corporate networks connecting various branch offices.
### Internet Service Providers (ISP)
- **Definition:** ISPs are companies that provide individuals and organizations access to the internet and other related services.
- **Services Provided:**
    - Internet connectivity via various technologies (e.g., DSL, fiber optics, satellite).
    - Email services, web hosting, and domain registration.
    - Customer support and network maintenance.
- **Role in Networking:**
    - ISPs act as gateways between local networks and the broader internet.
    - They manage infrastructure to ensure reliable and efficient data transmission.
## Network Media
Network media refers to the various physical or wireless pathways that connect nodes in a network, enabling communication and data transfer.
### Nodes and Hosts
- **Node:** Any active, addressable device connected to a network, such as computers, printers, or routers.
- **Host:** A specific type of node that hosts services and applications, typically a computer or server.
### Network Interfaces and Adapters
- **Network Interface Card (NIC):** Hardware component that connects a computer to a network. It facilitates the sending and receiving of data over network media.
- **Functions of NIC:**
    - Converts data from the computer into a format suitable for transmission over the network.
    - Manages data flow between the computer and the network.
### Types of Network Media
#### Wired Media
1. **Copper Cables:**
    - **Twisted Pair Cables:**
        - **Unshielded Twisted Pair (UTP):** Commonly used in Ethernet networks; cost-effective and easy to install.
        - **Shielded Twisted Pair (STP):** Provides additional shielding to reduce electromagnetic interference; used in environments with high interference.
    - **Coaxial Cables:**
        - Used for cable television and early Ethernet networks.
        - Provides better shielding and higher bandwidth than twisted pair cables.
2. **Fiber Optic Cables:**
    - Transmit data as light pulses through glass or plastic fibers.
    - **Advantages:**
        - Extremely high bandwidth and data transfer rates.
        - Immunity to electromagnetic interference.
        - Suitable for long-distance and high-speed data transmission.
    - **Types:**
        - **Single-mode Fiber:** Supports long-distance communication with a single light path.
        - **Multi-mode Fiber:** Suitable for shorter distances; multiple light paths increase data capacity.
#### Wireless Media
1. **Radio Waves (Wi-Fi):**
    - Uses electromagnetic waves to transmit data over the air.
    - **Standards:** Defined by IEEE 802.11 specifications (e.g., 802.11n, 802.11ac).
    - **Characteristics:**
        - Provides mobility and flexibility.
        - Limited by range and susceptible to interference from other devices and physical obstacles.
2. **Microwave and Satellite Communications:**
    - Used for long-distance and remote area communications.
    - **Characteristics:**
        - High bandwidth capabilities.
        - Can be affected by weather conditions and require line-of-sight alignment.
3. **Bluetooth:**
    - Short-range wireless technology for connecting personal devices.
    - **Uses:** Connecting peripherals like keyboards, mice, headphones, and enabling data transfer between devices.
### Considerations for Choosing Network Media
- **Bandwidth Requirements:** Amount of data that needs to be transmitted.
- **Distance:** Physical distance between nodes.
- **Environment:** Presence of electromagnetic interference or physical obstacles.
- **Cost:** Budget constraints and cost-effectiveness.
- **Security:** Susceptibility to eavesdropping or unauthorized access.
## Addressing and Protocols
Addressing and protocols are fundamental to ensuring that data is correctly and efficiently transmitted across networks.
### Network Protocols
- **Definition:** A set of rules and conventions that govern how data is transmitted and received across a network.
- **Functions:**
    - Establishing connections between devices.
    - Formatting and structuring data packets.
    - Error detection and correction.
    - Managing data flow control and congestion.
### Packets and Encapsulation
- **Packet:** A small unit of data transmitted over a network. It contains both the payload (actual data) and control information (headers and footers) needed for routing and delivery.
- **Encapsulation:** The process of wrapping data with protocol-specific information as it moves down the layers of the OSI or TCP/IP model.
    - **Process:**
        1. **Application Layer:** Data is created and formatted.
        2. **Transport Layer:** Adds transport headers (e.g., TCP/UDP headers) specifying source and destination ports.
        3. **Network Layer:** Adds IP headers with source and destination IP addresses.
        4. **Data Link Layer:** Adds frame headers and trailers, including MAC addresses.
        5. **Physical Layer:** Converts frames into electrical, optical, or radio signals for transmission.
### Importance of Protocol Stacks
- Protocols are often organized in layers (protocol stacks), each responsible for specific aspects of data communication.
- **Benefits:**
    - Modularity: Allows for easy updates and maintenance.
    - Interoperability: Enables different systems and devices to communicate effectively.
    - Abstraction: Simplifies complex communication processes by dividing them into manageable layers.
## Transmission Control Protocol/Internet Protocol (TCP/IP)
TCP/IP is the foundational suite of communication protocols used for the internet and most modern networks.
### Overview
- **TCP/IP Model:** Consists of four layers that correspond closely to the seven layers of the OSI model.
    - **Application Layer**
    - **Transport Layer**
    - **Internet Layer**
    - **Link (Network Interface) Layer**
### Detailed Layer Functions
#### 1. Link (Network Interface) Layer
- **Purpose:** Handles the physical transmission of data between devices on the same network.
- **Protocols and Technologies:**
    - **Ethernet:** The most widely used LAN technology, defines wiring and signaling standards.
    - **Wi-Fi (IEEE 802.11):** Defines wireless network communication standards.
- **Data Unit:** **Frame**
- **Functions:**
    - Framing: Encapsulating packets into frames.
    - Physical addressing: Using MAC addresses to identify devices.
    - Error detection: Identifying errors in transmitted frames using checksums or CRC.
#### 2. Internet Layer
- **Purpose:** Handles logical addressing and routing of data across multiple networks.
- **Primary Protocol:**
    - **Internet Protocol (IP):** Defines IP addresses and routes packets between networks.
- **Supporting Protocols:**
    - **Address Resolution Protocol (ARP):** Maps IP addresses to MAC addresses.
    - **Internet Control Message Protocol (ICMP):** Used for diagnostic and error-reporting purposes (e.g., ping).
- **Data Unit:** **Packet**
- **Functions:**
    - Logical addressing: Assigning and managing IP addresses.
    - Routing: Determining optimal paths for data to travel across networks.
    - Fragmentation and reassembly: Breaking down large packets and reconstructing them at the destination.
#### 3. Transport Layer
- **Purpose:** Provides end-to-end communication services for applications.
- **Protocols:**
    - **Transmission Control Protocol (TCP):**
        - Connection-oriented: Establishes a reliable connection before data transfer.
        - Ensures data integrity and correct sequencing.
        - Provides flow control and congestion avoidance.
    - **User Datagram Protocol (UDP):**
        - Connectionless: Sends data without establishing a prior connection.
        - Faster but does not guarantee delivery or order.
        - Suitable for applications where speed is critical, and occasional data loss is acceptable (e.g., streaming).
- **Data Unit:** **Segment (TCP)** / **Datagram (UDP)**
- **Functions:**
    - Port addressing: Identifies specific processes or services on a host.
    - Error detection and correction (TCP): Ensures data is correctly received.
    - Multiplexing: Allows multiple applications to use the network simultaneously.
#### 4. Application Layer
- **Purpose:** Provides protocols for specific data communications services directly to user applications.
- **Common Protocols:**
    - **HTTP/HTTPS:** For web browsing.
    - **SMTP/IMAP/POP3:** For email services.
    - **FTP/SFTP:** For file transfers.
    - **DNS:** For resolving domain names to IP addresses.
- **Functions:**
    - Data representation: Ensures that data is presented in a format understandable by different systems.
    - Session management: Establishes, manages, and terminates communication sessions.
    - Network transparency: Hides the complexities of the network from the user.
### Data Flow Example
1. **User requests a webpage through a browser (Application Layer).**
2. **HTTP request is prepared and passed to the Transport Layer.**
3. **TCP establishes a connection and segments the data.**
4. **Segments are encapsulated into IP packets at the Internet Layer.**
5. **Packets are framed at the Link Layer and transmitted over the physical medium.**
6. **Data travels through various routers and networks, following IP routing protocols.**
7. **At the destination, layers are reversed, and the webpage is reconstructed and displayed to the user.**
## Internet Protocol (IP)
IP is the principal protocol in the Internet Layer of the TCP/IP suite, responsible for addressing and routing packets across networks.

The Internet Protocol (IP) address information is usually configured by the router, using a service called the Dynamic Host Configuration Protocol (DHCP). You would need to investigate either the settings on the adapter or the switch/router. 
### IPv4 vs. IPv6
- **IPv4:**
    - 32-bit addresses, yielding approximately 4.3 billion unique addresses.
    - Address exhaustion led to the development of IPv6.
    - Address format: Four decimal numbers separated by dots (e.g., 192.168.1.1).
- **IPv6:**
    - 128-bit addresses, providing a vast address space.
    - Improved routing and security features.
    - Address format: Eight groups of four hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
### IP Packet Structure Details
- **Version:** Indicates IP protocol version (4 or 6).
- **Header Length:** Specifies the length of the IP header.
- **Type of Service (ToS):** Indicates priority and QoS requirements.
- **Total Length:** Length of the entire packet (header plus data).
- **Identification, Flags, Fragment Offset:** Used for fragmenting and reassembling packets.
- **Time to Live (TTL):** Limits the lifespan of a packet; decremented by each router to prevent endless loops.
- **Protocol:** Specifies the next-level protocol (e.g., TCP, UDP).
- **Header Checksum:** Ensures header integrity.
- **Source and Destination IP Addresses:** Indicates sender and receiver IP addresses.
- **Options:** Additional optional information.
- **Data (Payload):** Contains the actual data being transmitted.
### Routing
- **Static Routing:** Manually configured routes; suitable for small or simple networks.
- **Dynamic Routing:** Uses routing protocols (e.g., OSPF, BGP) to automatically adjust routes based on network conditions.
- **Routing Tables:** Maintained by routers to determine the best path for forwarding packets.
## MAC Addresses
A **Media Access Control (MAC) address** is a unique identifier assigned to a network interface for communications at the data link layer.
### Structure and Format
- **Length:** 48 bits (6 bytes).
- **Format:** Six groups of two hexadecimal digits separated by colons or hyphens (e.g., 00:1A:2B:3C:4D:5E).
- **Components:**
    - **Organizationally Unique Identifier (OUI):** First 24 bits; identifies the manufacturer.
    - **Device Identifier:** Last 24 bits; uniquely identifies the specific device.
### Importance in Networking
- **Local Identification:** Used within the local network segment to ensure data reaches the correct hardware device.
- **ARP Usage:** Essential for mapping IP addresses to physical devices within the same network.
### Security Considerations
- **MAC Filtering:** Network security measure where only devices with approved MAC addresses can access the network.
- **MAC Spoofing:** Malicious practice of changing a device's MAC address to bypass security measures.
## Address Resolution Protocol (ARP)
ARP resolves IP addresses to MAC addresses, enabling proper data transmission within a local network.
### ARP Process
1. **ARP Request:** A broadcast message sent by a device seeking the MAC address corresponding to a known IP address.
2. **ARP Reply:** The device owning the IP address responds with its MAC address.
3. **ARP Cache:** A table stored on devices that maps IP addresses to MAC addresses for faster future lookups.
### ARP Types
- **Proxy ARP:** Allows a router to answer ARP requests on behalf of another device, useful for extending network segments.
- **Gratuitous ARP:** A device announces its own IP-MAC mapping unsolicited, often used for detecting IP conflicts or updating other devices' ARP caches.
### Security Issues
- **ARP Spoofing/Poisoning:** An attacker sends falsified ARP messages to associate their MAC address with another device's IP address, enabling interception or disruption of traffic.
- **Mitigation Techniques:**
    - Static ARP entries.
    - ARP inspection and validation mechanisms.
    - Use of secure protocols like IPv6's Neighbor Discovery Protocol (which has built-in security features).
## Domain Name System (DNS)
DNS translates human-readable domain names (e.g., [www.example.com](http://www.example.com)) into IP addresses that computers use to identify each other on the network.
### DNS Hierarchy
- **Root Level:** Denoted by a dot (.) and managed by root servers.
- **Top-Level Domains (TLDs):** Include generic TLDs (gTLDs) like .com, .org, and country-code TLDs (ccTLDs) like .us, .uk.
- **Second-Level Domains:** Directly below TLDs, often representing organizations or individuals (e.g., example in example.com).
- **Subdomains:** Optional subdivisions under second-level domains (e.g., support.example.com).
### DNS Query Process
1. **Recursive Query:** A client's DNS resolver requests a full resolution from a DNS server, which then queries other servers as needed.
2. **Iterative Query:** The DNS server responds with the address of another server that can resolve the request, and the client queries each server in turn.
3. **Caching:** DNS responses are cached locally and by servers to expedite future resolutions.
### DNS Records
- **A Record:** Maps a domain name to an IPv4 address.
- **AAAA Record:** Maps a domain name to an IPv6 address.
- **CNAME Record:** Canonical name record; aliases one domain name to another.
- **MX Record:** Specifies mail exchange servers for email.
- **TXT Record:** Holds arbitrary text information; often used for verification and security (e.g., SPF, DKIM).
- **NS Record:** Indicates the authoritative name servers for a domain.
### DNS Security
- **DNSSEC (DNS Security Extensions):** Adds authentication to DNS responses, preventing spoofing and ensuring data integrity.
- **Common Threats:**
    - **DNS Spoofing/Poisoning:** Attacker redirects traffic by corrupting DNS cache entries.
    - **Mitigation:** Use of DNSSEC, secure recursive resolvers, and regular monitoring.
# Unit 2 Connecting to a Network 
## Internet Service Types
The sort of equipment and networks used at home and in small businesses are often described as **SOHO (Small Office Home Office)**.
* **Switch** connects four or eight computers together in an Ethernet LAN using RJ-45 network ports and twisted-pair cabling.
* **Access Point (AP)** creates a Wi-Fi wireless network (WLAN) between computers and mobile devices equipped with suitable adapters and also switches communications between the wired and wireless networks. 
* **Internet router/modem** connects the wired and wireless network clients to the Internet via a WAN link. 
### Digital Subscriber Line (DSL)
**Digital Subscriber Line (DSL)** is one of the most popular SOHO Internet service types. Data is transferred over the line using the high frequency ranges that voice calls don't need to use.
### Fiber Optic
Faster internet connections can be provisioned using **fiber optic** network. Fiber optic cables perform much better over long distances and are not affected by noise in the way that electrical signals over copper cable are. Providing fiber cable all the way to customer premises referred to as **Fiber to the Home (FTTH)** requires substantial investment by the telecom providers.
### Cable
A **cable** Internet connection is usually provided as part of a **Cable Access TV (CATV)** service. 
## Wireless Internet Service
### Microwave Satellite
**Satellite** systems provide far bigger areas of coverage that can be a achieved using other technologies. To create a satellite Internet connection, the ISP installs a satellite dish (antenna) at the customer's premises and aligns it with the orbital satellite. The satellites all orbit the equator, so in the northern hemisphere the dish will be pointing south. The antenna is connected via coaxial cabling to a DVB-S (Digital Video Broadcast Satellite) modem. This can be installed in the PC as an expansion card or as an external box connected via a USB or Ethernet port. 
### Cellular Radio
**Cellular** data connections use radio transmissions but at greater range than Wi-Fi. Cellular data is more closely associated with Internet access for cell phones and smartphones than with computers.
## Setting UP a Wireless Network
Most SOHO network rely heavily on wireless (Wi-Fi) networking.
### Wireless Standards and Compatibility
"Wireless networking" is generally understood to mean the IEEE's 802.11 standards for **Wireless LANs (WLAN)**, also called **Wi-Fi**. 
# References
- [[CS and IT]]
- [[CompTIA ITF]]