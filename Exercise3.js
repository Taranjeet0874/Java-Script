alert("Welcome to the project");
var firstname = prompt("Enter your first name:");
var lastname = prompt("Enter your last name");
var age= prompt("What is your age");
var height = prompt("What is your height in cm");
var petname = prompt("What is your pet name");

var name_con = null;
var age_con = null;
var height_con = null;
var pet_con = null;

// name condition
if(firstname[0]===lastname[0])
{
  name_con = true;
}
else{
  name_con =false;
}

//age condition
if(age>20 && age<30)
{
  age_con =true;
}
else{
  age_con = false;
}

// height condition
if(height>=170)
{
  height_con =true;
}
else{
  height_con=false;
}

//pet_con
if(petname[petname.length-1] === "y"){
  pet_con =true;
}
else{
  pet_con= false;
}

//combining all conditions
if(name_con && age_con && height_con && pet_con)
{
  console.log("Welcome spy");
}
else{
  console.log("get lost");
}
