function FindProxyForURL(url, host) {
    // Aggressive list of Discord-related domains and subdomains
    var discordDomains = [
        "*.discord.com",
        "*.discordapp.com",
        "*.discord.gg",
        "*.discord.media",
        "*.discordapp.net",
        "*.discordstatus.com",
        "cdn.discordapp.com",
        "gateway.discord.gg",
        "voice.discord.gg",
        "api.discord.com",
        "status.discord.com",
        "media.discordapp.net",
        "router.discordapp.net",
        "*.discordusercontent.com",
        "*.discordcdn.com"
    ];

    // Cloudflare IP ranges (Discord uses Cloudflare for its services)
    var cloudflareIPs = [
        "104.16.0.0/12",  // Cloudflare's common ranges
        "104.17.0.0/12",
        "104.18.0.0/12",
        "104.19.0.0/12",
        "162.159.0.0/16", 
        "108.162.0.0/16", 
        "172.64.0.0/13",  
        "131.0.72.0/22"  
    ];

    // Check if the host matches any of the Discord-related domains or wildcards
    for (var i = 0; i < discordDomains.length; i++) {
        if (shExpMatch(host, discordDomains[i])) {
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Check if the host's IP falls within Cloudflare's ranges
    for (var i = 0; i < cloudflareIPs.length; i++) {
        if (isInNet(host, cloudflareIPs[i].split('/')[0], cloudflareIPs[i].split('/')[1])) {
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Extra aggressive check for anything containing 'discord' in the host
    if (shExpMatch(host, "*discord*")) {
        return "SOCKS5 127.0.0.1:4444";
    }

    // Default: Direct connection for everything else
    return "DIRECT";
}
