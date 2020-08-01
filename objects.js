var employee={
  name: "Taranjeet Singh",
  job: "Data Scientist",
  age: 21
}

// Pr0blem 1: Add a method to calculate the length of the names
var employee={
  name: "Taranjeet Singh",
  job: "Data Scientist",
  age: 21,
  nameLength: len() {
    console.log(this.name,length);

  }
}

// Problem2: Add a method that prints the entier object as an exampleFormControlTextarea
var employee={
  name: "Taranjeet Singh",
  job: "Data Scientist",
  age: 21,
  data: dataAlert(){
    alert("name is: "+this.name+" job is: "+this.job+" Age is: "+this.age);
  }
}

//Problem3: add a method that prints last name to tge consile
var employee={
  name: "Taranjeet Singh",
  job: "Data Scientist",
  age: 21,
  Lname: lastName(){
    console.log(this.name.split()[1]);
  }
}

alert("Welcome to the objects exercise")
console.log(employee);
employee.len;
employee.data;
employee.Lname;
