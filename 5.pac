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

    // Define a list of Discord-related domains (for regular traffic and voice chat)
    var discordDomains = [
        "*.discord.com",            // Main Discord domain
        "*.discordapp.com",          // Legacy domain
        "*.cdn.discordapp.com",      // CDN for images, videos, etc.
        "*.media.discordapp.net",    // Media server
        "*.discord.gg",              // Invite links
        "*.gateway.discord.gg",      // WebSocket for real-time comms (chat, voice)
        "*.status.discord.com",      // Status page
        "*.discord.media",           // Media for voice, video
        "*.discordapp.net",          // Legacy or regional static content
        "*.discordapp.net",          // Some static resources
        "*.voice.discord.gg",        // Voice server connections (region-based)
        "*.region.discord.gg",       // Region-based voice servers
        "*.discord.media",           // Media resources, potentially for VC
        "*.rtc.discord.gg"           // Real-time communication servers (voice/video)
    ];

    // Check if the current host matches any of the Google domains
    for (var i = 0; i < googleDomains.length; i++) {
        if (shExpMatch(host, googleDomains[i])) {
            // Return SOCKS5 proxy configuration for Google-related traffic
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Check if the current host matches any of the Discord domains (regular and VC)
    for (var i = 0; i < discordDomains.length; i++) {
        if (shExpMatch(host, discordDomains[i])) {
            // Return SOCKS5 proxy configuration for Discord-related traffic
            return "SOCKS5 127.0.0.1:4444";
        }
    }

    // Default rule for all other traffic (DIRECT means no proxy)
    return "DIRECT";
}
