const fs = require("fs");

const twitchChannels = process.env["TWITCH_CHANNELS"] || "";
const announceChannel = process.env["ANNOUNCE_CHANNEL"] || "";
const discordBotToken = process.env["DISCORD_BOT_TOKEN"] || "";
const twitchClientId = process.env["TWITCH_CLIENT_ID"] || "";
const twitchOauthtoken = process.env["TWITCH_OAUTH_TOKEN"] || "";
const twitchCheckInterval = parseInt(
  process.env["TWITCH_CHECK_INTERVAL"] || "60000"
);
const useTwitchBoxart = process.env["USE_TWITCH_BOXART"] === "1";
const discordMentions = process.env["DISCORD_MENTIONS"] || "here";

const mentions = {};

discordMentions.split(",").forEach((mentionType) => {
  twitchChannels.split(",").forEach((twitchChannel) => {
    mentions[twitchChannel] = mentionType;
  });
});

const config = {
  twitch_channels: twitchChannels,
  discord_announce_channel: announceChannel,
  discord_mentions: mentions,
  discord_bot_token: discordBotToken,
  twitch_client_id: twitchClientId,
  twitch_oauth_token: twitchOauthtoken,
  twitch_check_internal_ms: twitchCheckInterval,
  twitch_use_boxart: useTwitchBoxart,
};

const configFile = "./config.json";

fs.writeFileSync(configFile, JSON.stringify(config));

console.log(`Wrote config to ${configFile}`);
