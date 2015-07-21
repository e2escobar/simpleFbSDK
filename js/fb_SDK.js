/**
 * Created by Luis on 31/05/2015.
 */

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1577443585849187',
        xfbml      : true,
        version    : 'v2.3'
    });
    app.login();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
