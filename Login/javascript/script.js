$(document).ready(function(){
    $('#login-btn').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();

        // Add your login logic here
        console.log('Username: ' + username + ', Password: ' + password);
    });
});