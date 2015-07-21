
var app = app || {};


app = (function (){

    var photoId = null;

    function login(){
        //verify login status

        FB.getLoginStatus(function (response) {

            if (response.status === 'connected'){//User already logged in

                $("#login_state").text("You are logged In").addClass("bg-success").show();

            }else if(response.status === 'not_authorized'){//User not logged in

                $("#login_state").text("User not authorized").addClass("bg-danger").show();

            }else {
                //Start Login process
                FB.login(function (response){
                    if(response.authResponse) {
                        FB.api('/me', function (response) {
                            $("#login_state").text("You are logged In as "+ response.name).addClass("bg-success").show();
                        });
                    }else {
                        $("#login_state").text("An error has ocurred, try again").addClass("bg-warning").show();
                    }
                }, {scope: 'public_profile,email,publish_actions'});
            }
        });
    }



    function doUpload(){// Do upload method
        var imageURL = $('#image_url').val(), description = $("#desc_area").val();

        FB.api('/me/photos', 'post',
            {
                url: imageURL,
                message: description
            },
            function (response) {
                if(response.id) {
                    photoId = response.id;
                    $("#login_state").text("Your photo has been published");
                }else{
                    $("#login_state").text("Error ocurred" + response.message).addClass("bg-danger");
                }
            });
    }



    function addComment (){ //Add  comment function

        var comment;

        if(photoId) {
            comment = $("#comment_area").val();
            FB.api("/" + photoId + "/comments", "post",
                {
                    message: comment
                },
                function (response) {
                    $("#login_state").text("The comment has been published");
                    $("#comment_area").val("");
                });
        }
    }

//This is the return arguments
    return{
        login: login,
        addComment: addComment,
        doUpload: doUpload
    }
})();


