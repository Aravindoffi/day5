const myResume ={
    Name: "Aravind",
    Age : "25",
    Place: "coimbatore",
    Qualification: [{
      HigherEducation: "B.E",
      Dep: "ECE",
      University: "Anna university",
    },
    {
     HigherEducation: "HSC",
      Dep: "CS",
      school: "sarvajana",
    },
    {
        HigherEducation: "sslc",
        Dep: "state board",
        school: "spn",
    },
],
     LanguagesKnown: ["tamil","English"],
     Skills: ["linuxAdministation","AWS","Jenkins","Terraform"],
     Experience:[
        {
            company: "Abc",
            years: "2",
            designation: "systemadmin"
        },
        {
           company: "Acc",
            years: "1",
            designation: "systemadmin",
        },
    ],
};



//Using for in
for(let key in myResume){
    console.log(key + ":" + myResume[key])
}





//using for of
for (let key of Object.keys(myResume)) {
    if (key === "Name") {
      console.log("Name:", myResume[key]);
    }
  }
    



  // using for each 
myResume.Qualification.forEach((qualification) => {
    console.log("Qualification:", qualification);
  });
    





  //Using For Loop

for (let i = 0; i < myResume.Qualification.length; i++) {
    console.log("Qualification:");
    for (const key in myResume.Qualification[i]) {
      console.log(key + ": " + myResume.Qualification[i][key]);
    }
    console.log(""); // Add an empty line for separation
  }