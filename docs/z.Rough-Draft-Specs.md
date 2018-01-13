# Rough Draft Specifications #
This page is a kind of scratchpad for hashing out and sharing additional specification
ideas.


## Rough-Draft-Specs

### Rebooting:
* In the flash-shell client, people need to be able to reboot the device without wiping the flash storage or re-registering the device.
* On reboot, the client could check the expiration date on the server and decide whether to re-register or not.

### Refunds and pro-rating of contracts
* If the Listing Manager triggers an expiration date reset, it could also trigger a refund in OpenBazaar for the current contract. The trick is calculating the pro-rated fee. Would this also require all sales to use multi-sig contracts and a moderator?
* This scheme would also require the server to hold payment until the terms of the contract are complete. Then it could distribute the money to the Owner.

### Extensions to the expiration date
* This would best be handled within the Vue application. Renters could log in and request an extension.
* This request would generate an OB contract that they would then purchase.

### Logging
* The NPM package `winston` needs to be implemented into all aspects of the server and client. Right now
there is no logging and it will be needed to scale up tests and usage of the software.



### Client Server Handshaking
Below are a series of steps specifiying how the Server and Client (Raspberry Pi or other IoT device) will initiate a
connection to the Server in order to allow global internet connections to the Client behind any arbitrary firewalls and network devices.

1. The device Owner logs into their account on the Server to register the Client device. They recieve a hash the Client
uses to identify itself to the Server.

2. The Owner copies the hash into a .json file on the Client and starts the Client software.

3. The Client software makes a REST API call to the Server. It passes in the hash and the Server responds with
a computer-generated username, password, and a port number. The port number is used to establish an reverse SSH
tunnel to the Client device. A subdomain is also set up on the server using [LocalTunnel](https://github.com/localtunnel/server)
to forward ports 80 (http) and 443 (https) from the Client device to the new subdomain on the Server.

4. When a Renter rents the device, they are emailed the username and password for the device.

5. When the rental contract ends, the ports and subdomains are released by the server.
The Client software destroys the Docker container the Renter was using and wipes any peristant storage.
The Client re-registers itself back into the marketplace by repeating the process from Step 3.

*Note:* It is not possible to make a reverse SSH call without giving the Client shell access to the Server. By restricting
the connection to a minimal Ubuntu Docker image, the server can be better protected against malicious users.
One area of improvement is to research a way of establishing an SSH server capable of doing
reverse tunneling without giving command line access.
