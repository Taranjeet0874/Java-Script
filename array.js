var array =[];
function add() {
  var name = prompt("Enter the name you want to add:");
  array.push(name);
}
function remove() {
  var name1 = prompt("Enter the name you want to remove from the array");
  var index=array.indexOf(name1);
  array.splice(index,1);

}
function display() {
  console.log(array);

}

alert("Welcome");
var start = prompt("Do you want to go ahead(y/n)")
var request= null;

if(start=="y")
{
  while(request!="quit"){
    request=prompt("Which action you want to perform: add , remove , display , quit")
    if(request=="add")
    {
      add();
    }
    else if(request=="remove")
    {
      remove();
    }
    else if(request=="display")
    {
      display();
    }
    else
    {
      requset="quit";
    }
  }
}
