
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyB7BfqYs47x-q9hQ_EMBvTkz46s1MZ2Uu4",
  authDomain: "testappannie-31cef.firebaseapp.com",
  databaseURL: "https://testappannie-31cef-default-rtdb.firebaseio.com",
  projectId: "testappannie-31cef",
  storageBucket: "testappannie-31cef.appspot.com",
  messagingSenderId: "892830589759",
  appId: "1:892830589759:web:100208ba8750d8f239a98a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "kwitter.html";
  
}
