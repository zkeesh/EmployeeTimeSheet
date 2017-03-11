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
 var name;
 var role;
 var startDate;
 var monthlyRate;

 var reference = firebase.database();

//Event listeners
	
$(document).on("click", ".submit-button", function(event){
	event.preventDefault();

//Initial Variables

 name = $("#name").val().trim();
 role = $("#role").val().trim();
 startDate = $("#startDate").val().trim();
 monthlyRate = $("#monthlyRate").val().trim();

	
 //Pushing employee data to the database
	reference.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	});


});

reference.ref().on("child_added", function(childSnapshot){
	var data = childSnapshot.val();
	var dataKeys = Object.keys(data);
	var lastItem = dataKeys.length - 1;
	console.log(lastItem);

	//Displaying properties of last submission in the table
	
	
	//Calculating Months Worked
	
	var startDateFormat = moment(new Date(startDate));
	var monthsWorked = (moment().diff(startDateFormat, "months"));


	// console.log(lastItem);
}, function(dataError){
	alert("Errors handled:" + dataError);
});




});
