$(document).ready(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCJ-rIaFwOI2RrzMm2oDvdWUSqtxa7GFg",
    authDomain: "timesheetapplication-1ce52.firebaseapp.com",
    databaseURL: "https://timesheetapplication-1ce52.firebaseio.com",
    storageBucket: "timesheetapplication-1ce52.appspot.com",
    messagingSenderId: "1051261456859"
  };

  firebase.initializeApp(config);

 //Variables

 var reference = firebase.database();

//Event listeners
	
$(document).on("click", ".submit-button", function(event){
	event.preventDefault();

//Initial Variables

 var name = $("#name").val().trim();
 var role = $("#role").val().trim();
 var startDate = $("#startDate").val().trim();
 var monthlyRate = $("#monthlyRate").val().trim();

	
 //Pushing employee data to the database
	reference.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	});


});

// reference.on("child_added", function(childRow){

// });




});
