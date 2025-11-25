document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent refresh

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    let correctUser = "admin";
    let correctPass = "1234";

    if(user === correctUser && pass === correctPass) {
        alert('Login successful!');
    }   
    if(user == "" && pass == ""){
        alert('Please input Username and Password!');
    }
    else if(user !== correctUser || pass !== correct){ 
        alert('Incorect username or password.');
    }  
});
