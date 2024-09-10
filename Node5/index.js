// The dns module in Node.js provides functions for performing DNS (Domain Name System) lookups and reverse lookups. It allows you to resolve domain names into IP addresses and vice versa, making it essential for network programming and applications that interact with domain names.

const dns = require("dns");

// dns.lookup("example.com", (err, address, family) => {
//   if (err) throw err;
//   console.log(`Address: ${address}`);
//   console.log(`Family: IPv${family}`);
// });

// dns.reverse("93.184.216.34", (err, hostnames) => {
//   if (err) throw err;
//   console.log(`Reverse lookup hostnames: ${hostnames}`);
// });

// // Resolves a domain name into an array of IP addresses or records
// dns.resolve("example.com", (err, addresses) => {
//   if (err) throw err;
//   console.log(`Addresses: ${addresses}`);
// });

// // Resolve MX records
// dns.resolve("example.com", "MX", (err, addresses) => {
//   if (err) throw err;
//   console.log(`MX Records: ${addresses}`);
// });
