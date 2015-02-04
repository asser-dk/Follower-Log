function launchFollowerLog(twitchChannelName, hitboxChannelName)
{
    var url = 'http://followerlog.sexyfishhorse.com/follower-log.html';
    if(!Modernizr.localstorage)
    {
        url = addArgumentToUrl(url, 'twitchChannelName', twitchChannelName);
        url = addArgumentToUrl(url, 'hitboxChannelName', hitboxChannelName);
    }
    window.open(url);
}
