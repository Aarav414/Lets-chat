
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjm03i_w8ikixRAM2r9tQ2Hyo3THn4ESs",
    authDomain: "kwitter1-b35ed.firebaseapp.com",
    databaseURL: "https://kwitter1-b35ed-default-rtdb.firebaseio.com",
    projectId: "kwitter1-b35ed",
    storageBucket: "kwitter1-b35ed.appspot.com",
    messagingSenderId: "716086837612",
    appId: "1:716086837612:web:01301f092925c3c91ef349"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
localStorage.setItem("room_name", room_name)
window.location = "letschat_page.html";

}
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}