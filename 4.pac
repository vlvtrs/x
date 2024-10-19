function FindProxyForURL(url, host) {
    // Define a list of Google-related domains
    var googleDomains = [
        "*.google.com",
        "*.youtube.com",
        "*.googleapis.com",
        "*.gstatic.com",
        "*.ytimg.com",
        "*.ggpht.com",
        "*.googlevideo.com",
        "*.ytstatic.com"
    ];

    // Define a list of Discord-related domains
    var discordDomains = [
        "*.discord.com",
        "*.discordapp.com",
        "*.cdn.discordapp.com",
        "*.media.discordapp.net",
        "*.discord.gg"
    ];

    // Check if the current host matches any of the Google domains
    for (var i = 0; i < googleDomains.length; i++) {
        if (shExpMatch(host, googleDomains[i])) {
            // Return SOCKS5 proxy configuration for Google-related traffic
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Check if the current host matches any of the Discord domains
    for (var i = 0; i < discordDomains.length; i++) {
        if (shExpMatch(host, discordDomains[i])) {
            // Return SOCKS5 proxy configuration for Discord-related traffic
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Default rule for all other traffic (DIRECT means no proxy)
    return "DIRECT";
}
