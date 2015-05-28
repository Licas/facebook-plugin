
/* FACEBOOK API V2.3
You can publish posts by using the /{user-id}/feed, /{page-id}/feed, /{event-id}/feed, or /{group-id}/feed edges.

When creating a Post for a Page if you use a user access token the post will be in the voice of the user that posted it. If you use a page access token, the post will be in the voice of the page.

### Simple Post ###
POST graph.facebook.com
  /{user-id}/feed?
    message={message}&
    access_token={access-token}

### Error body ###
{
   "error": {
     "message": "Message describing the error",
     "type": "OAuthException",
     "code": 190,
     "error_subcode": 460,
     "error_user_title": "A title",
     "error_user_msg": "A message"
   }
 }
*/
function publishToWall(post) {

    FB.api('/search?q=\"'+query+'\"&type=event&center='+lat+','+lng+'&limit=200',
          {access_token:Meteor.user().services.facebook.accessToken},
          function(res){
            var events= [];

            if (res && !res.error) {

                res.data.forEach(function(element) {
                    var timeToCompare;
                    if(element.end_time) {
                        timeToCompare = element.end_time;
                    } else {
                        timeToCompare = element.start_time;
                    }

                    if( eventUtil.checkEventEndTime(timeToCompare) ) {
                       fbGraphUtil.loadEventInvitedList(element.id, function(list){
                            element.invited = list;
                            events.push(element);
                            //events = eventUtil.sortEventsByInvited(events);
                            Session.set("localEvents",events);
                        });
                    }
                });

            } else {
                console.log("error occurred: " + JSON.stringify(res.error));
            }
    });
}
