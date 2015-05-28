
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

 ### Post message body ###
 {
    name: "",
    message: "",
    description:"",
    imageUrl:"",
    caption:"",
    url:""
 }

### Post image ###
FB.api('/me/photos', 'post', { source:data});
 URL: '/me/photos'
 {
    "url": http://yourimageurl --> usa questo invece di source se hai una url
    "source" => new CURLFile('path/to/file.name', 'image/png'), --> Usa questo se hai il base64
        'message' => 'User provided message'
        ...
    }
*/
function publishToWall(post) {


}
