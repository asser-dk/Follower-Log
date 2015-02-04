function launchFollowerLog(twitchChannelName, hitboxChannelName)
{
    var baseUrl = 'http://followerlog.sexyfishhorse.com/follower-log.html';
    var url = addArgumentToUrl(baseUrl, 'twitchChannelName', twitchChannelName);
    url = addArgumentToUrl(url, 'hitboxChannelName', hitboxChannelName);
    window.open(url);
}
