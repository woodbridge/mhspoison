var User = {

}

window.App = {
  boot: function() {
    FB.api('/me/friends', function(response) {
      console.log(response)
    })
  }
}
