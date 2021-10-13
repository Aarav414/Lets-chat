function addUser(){
    login_button = document.getElementById("login_button").value;

    localStorage.setItem("login_button", login_button);

    window.location = "letschatroom.html";
}
