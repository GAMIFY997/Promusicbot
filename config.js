

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://GAMIFY:GAMIFY7231@musicbot.jv38uq2.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
lavalink:
    plugins:
        - dependency: dev.lavalink.youtube:youtube-plugin:130561e2d2f76605eb08b2c9cc4facbf400caccb
          snapshot: true
    server:
        bufferDurationMs: 400
        filters:
            channelMix: true
            distortion: true
            equalizer: true
            karaoke: true
            lowPass: true
            rotation: true
            timescale: true
            tremolo: true
            vibrato: true
            volume: true
        frameBufferDurationMs: 5000
        gcWarnings: true
        opusEncodingQuality: 10
        password: glaceyt
        playerUpdateInterval: 5
        resamplingQuality: HIGH
        soundcloudSearchEnabled: true
        sources:
            bandcamp: true
            http: true
            local: false
            nico: true
            soundcloud: true
            twitch: true
            vimeo: true
            youtube: false
        trackStuckThresholdMs: 10000
        useSeekGhosting: true
        youtubePlaylistLoadLimit: 6
        youtubeSearchEnabled: true
lavasrc:
    applemusic:
        albumLoadLimit: 6
        countryCode: US
        mediaAPIToken: REDACTED
        playlistLoadLimit: 6
    flowerytts:
        audioFormat: mp3
        silence: 0
        speed: 1
        translate: false
        voice: default voice
    providers:
        - spsearch:%QUERY%
        - ytmsearch:"%ISRC%"
        - ytmsearch:%QUERY%
    sources:
        applemusic: false
        deezer: false
        flowerytts: false
        spotify: true
        yandexmusic: false
    spotify:
        albumLoadLimit: 6
        clientId: f71a3da30e254962965ca2a89d6f74b9
        clientSecret: 199a619d22dd4e55a4a2c1a7a3d70e63
        countryCode: US
        playlistLoadLimit: 6
    yandexmusic:
        accessToken: REDACTED
logging:
    file:
        path: ./logs/
    level:
        lavalink: INFO
        root: INFO
    logback:
        rollingPolicy:
            maxFileSize: 1GB
            maxHistory: 30
    request:
        enabled: true
        includeClientInfo: true
        includeHeaders: false
        includePayload: true
        includeQueryString: true
        maxPayloadLength: 10000
metrics:
    prometheus:
        enabled: false
        endpoint: /metrics
plugins:
    youtube:
        enabled: true
        oauth:
            enabled: true
            refreshToken:MTM2Mjc5MjU4MTYxNjEwNzU4MQ.GwNxNG.rDeH4Vs2rd7EHxVz8ceMBWf6V1PD0bTDKHxNy4
            skipInitialization: true
sentry:
    dsn: ""
    environment: ""
server:
    address: 0.0.0.0
    http2:
        enabled: false
    port: 9372
