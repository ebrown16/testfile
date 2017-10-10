/*    SU Student Profile
 *    Author: 
 *    Date:   

 *    Filename: profile1.js
 */
 //global variables
  var studentName = "";
	var studentYear = "";
	var tuition = "";
	var housing = "";
	var finAid = "";
	var classYears = [];   
  var graduation = "";

function getProfile() {
  studentName = document.getElementById("fname").value + " " + document.getElementById("lname").value;

  getClassStanding();   //calls the getClassStanding function

  getPreferences();    //calls the getPreferences function

  document.getElementById("studentName").innerHTML += studentName;
  document.getElementById("classYear").innerHTML += studentYear + " (Exp. Grad:  " + graduation + ")";
  document.getElementById("tuitionPreference").innerHTML += tuition;
  document.getElementById("housingPreference").innerHTML += housing;
  document.getElementById("finAidPreference").innerHTML += finAid;

  // make profile section and username section visible
  document.getElementById("profile").style.display = "block";
  document.getElementById("studentNameSection").style.display = "block";	  
  document.getElementById("preferencesSection").style.display = "block";
}

function getClassStanding() {
      //store the radio button elements to the array (index values 0-3)
    classYears = document.getElementsByName("classStanding");    
    for (var i = 0; i < 4; i++) {
         if (classYears[i].checked) {               //if the current value is checked
             studentYear = classYears[i].value;     //store the current value to studentYear
             i = 4;                                 //break the loop by setting the counter to a number that connot be processed
         }
    }
}
function getPreferences() {
//each checkbox is an independent decision, requiring its own decision structure
  if(document.getElementById("tuition").checked){
    tuition = "In-State";
  } else {
    tuition = "Out-of-State";    
  }
  
   if(document.getElementById("housing").checked){
    housing = "On-Campus";
  } else {
    housing = "Off-Campus";    
  }

   if(document.getElementById("finAid").checked){
    finAid = "Receives Financial Aid";
  } else {
    finAid = "No Financial Aid";    
  }
}
 var button = document.getElementById("createBtn");
   if (button.addEventListener) {
      button.addEventListener("click", getProfile);
   }