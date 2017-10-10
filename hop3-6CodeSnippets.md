Hands-On Project 3-6:  Student Profile

#A
----------------------------------------------------------------------------------
    function getProfile() {
      studentName = document.getElementById("fname").value + " " + document.getElementById("lname").value;

      //getClassStanding();   //calls the getClassStanding function

      //getPreferences();    //calls the getPreferences function

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
    
     var button = document.getElementById("createBtn");
       if (button.addEventListener) {
          button.addEventListener("click", getProfile);
       }
----------------------------------------------------------------------------------
#B
----------------------------------------------------------------------------------
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

----------------------------------------------------------------------------------
#C
----------------------------------------------------------------------------------
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

#D
----------------------------------------------------------------------------------
    function getClassStanding() {
      classYears = document.getElementsByName("classStanding");
      //store the radio button values to the array classSYears(index values 0 - 3)
      if(classYears[0].checked) {
        studentYear = classYears[0].value;
      } else if(classYears[1].checked) {
        studentYear = classYears[1].value;
      } else if(classYears[2].checked) {
        studentYear = classYears[2].value;
      } else if(classYears[3].checked) {
        studentYear = classYears[3].value;
      } else {
        alert("Please select a class year!")
      }
    }
#E
----------------------------------------------------------------------------------
    function getClassStanding() {
      var currentYear = 2017;
        var graduation = "";

          //store the radio button elements to the array (index values 0-3)
        classYears = document.getElementsByName("classStanding");    
        for (var i = 0; i < 4; i++) {
             if (classYears[i].checked) {               //if the current value is checked
                 studentYear = classYears[i].value;     //store the current value to studentYear
                 i = 4;                                 //break the loop by setting the counter to a number that connot be processed
             }
        }

        //use a switch statement block to evaluate the value stored to studentYear
      switch(studentYear) {
          case "Freshman":
              graduation = currentYear + 4;
              break;                                //break statements are used to break to the bottom rather than process other cases
          case "Sophomore":
              graduation = currentYear + 3;
              break;
          case "Junior":
              graduation = currentYear + 2;
              break;
          case "Senior":
              graduation = currentYear + 1;
      }
    }
----------------------------------------------------------------------------------