function newFollower(follower)
{
    $('<div class="row entry entry' + follower.provider + '">' +
    '<div class="columns small-3 large-2 provider">' + follower.provider + '</div>' +
    '<div class="columns small-4 large-2 date">' + moment().format('LTS') + '</div>' +
    '<div class="columns small-5 large-8 username">' + follower.user + '</div>' +
    '</div>').hide().prependTo('#follower-log #list').slideDown('slow');
}
