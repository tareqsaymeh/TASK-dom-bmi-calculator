function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
}

let bmi = weight / (height^2);

if (bmi < 18.5) { "Underweight";
} else 
if (bmi 18.5 - 24.9) {"healthy weight";
else 
if (bmi 25 - 29.9) { "Over weight";
} else 
if (bmi >= 30) { "obese";
}
}