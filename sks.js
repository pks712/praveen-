function calculateage() {
let x = new Date();

let y = document.getElementById("date").value

if (y ==="" || new Date(y).getFullYear() === x.getFullYear()){
  return  alert ("enter the correct DOB");

}


let a = new Date(y);

let years = x.getFullYear() - a.getFullYear();
            let months = x.getMonth() - a.getMonth();
            let days = x.getDate() - a.getDate();

            if (months < 0 || (months === 0 && days < 0)) {
                years--;
                months += 12;
            }

            if (days < 0) {
              let lastMonth = new Date(x.getFullYear(), x.getMonth() - 1, 0);
              days += lastMonth.getDate(); // Number of days in the previous month
          }

          document.getElementById("result").innerHTML = `Your age is ${years} years and ${months} months`;
        }