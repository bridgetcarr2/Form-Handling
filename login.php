<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flower Shop Login</title>
    <link rel="stylesheet" href="login.css">
    <script src="validate.js"></script>
</head>
<body>
    <!--this will include the header info, including menu-->
    <?php include 'header.php' ; ?>
    <br>
    <div id="errorMessage"></div>
    <br>
        <form name="userForm" onsubmit="return validateForm();">
            <!--Get the username-->
            <label for="userName" id="lblUserName">User Name:</label>
            <input type="text" name="userName" id="userName">
            <br>
            <br>
            <label for="userPassword" id="lblPassword">Password: </label>
            <input type="password" name="userPassword" id="userPassword">
            <button type="submit">Submit</button>
</form>
     <!--this will include the footer info, -->
     <?php include 'footer.php' ; ?>
</body>
</html>