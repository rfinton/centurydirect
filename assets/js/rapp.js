(function() {
  firebase.initializeApp({
    apiKey: "AIzaSyA8doQGd72_pTg3zws0im9kwVUFGqGUdaw",
    authDomain: "tuneintocentury.firebaseapp.com",
    databaseURL: "https://tuneintocentury.firebaseio.com",
    projectId: "tuneintocentury"
  });

  var db = firebase.database();
  var ref = db.ref('/RayFinton');
})();
