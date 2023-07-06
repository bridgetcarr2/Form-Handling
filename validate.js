function validateForm(){
    //get the user name that was entered in the form
    var userName = document.userForm.userName.value;
     //get the user name that was entered in the form
    var password = document.userForm.userPassword.value;
    //reset the html elements to their defualt looks
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("lblUserName").style.backgroundColor ="white";
    document.getElementById("lblPassword").style.backgroundColor = "white";
    //if no user name entered, alert the user
    if(userName == null || userName == ""){
        document.getElementById("errorMessage").innerHTML = "User name cannot be blank";
        document.getElementById("lblUserName").style.backgroundColor = "red";
        //alert(User name cannot be blank)
        document.getElementById("userName").focus();
        return false;
    }
    //If no password entered alert the user
    else if (password.length < 8){
        document.getElementById("errorMessage").innerHTML = "Password cannot be blank";
        document.getElementById("lblPassword").style.backgroundColor = "red";
        document.getElementById("userPassword").focus();
        return false;
    }
}