function calculateage() {
let x = new Date();

let y = document.getElementById("date").value

if (y ==="" || new Date(y).getFullYear() === x.getFullYear()){
  return  alert ("enter the correct DOB");

}


let a = new Date(y);

let q = x.getFullYear() -a.getFullYear();

if (x.getMonth() < a.getMonth() || (x.getMonth() === a.getMonth() && x.getDate() < a.getDate())) {
    q--;
}

 document.getElementById("result").innerHTML = "your age is " +" " +q ;
}