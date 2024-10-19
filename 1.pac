function FindProxyForURL(url, host) {
    // Proxy for YouTube domains and IP ranges
    if (dnsDomainIs(host, ".youtube.com") ||
        dnsDomainIs(host, ".ytimg.com") ||
	      dnsDomainIs(host, "ipinfo.io") ||
        isInNet(host, "142.250.0.0", "255.255.0.0") ||
	      isInNet(host, "142.251.0.0", "255.255.0.0") ||
        isInNet(host, "172.217.0.0", "255.255.0.0") ||
        isInNet(host, "216.58.0.0", "255.255.0.0")) {
        return "SOCKS5 127.0.0.1:4444";
    }
    

    // Default: direct connection for everything else
    return "DIRECT";
}
