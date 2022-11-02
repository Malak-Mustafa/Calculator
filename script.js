let EquationField = document.getElementById("equation");
let ButtonsContainer = document.querySelectorAll(".container");
let Numbers = document.querySelectorAll(".numbers");
let Operations = document.querySelectorAll(".operations");


for (let i = 0; i < Numbers.length; i++) {
  Numbers[i].addEventListener("click", () => {
    console.log(Numbers[i].innerHTML);
    let number = Numbers[i].innerHTML;
    EquationField.value += number;
  });
}
for (let i = 0; i < Operations.length; i++) {
  Operations[i].addEventListener("click", () => {
    console.log(Operations[i].innerHTML);
    let operation = Operations[i].innerHTML;
    let Equation = EquationField.value;
    let lastChar = Equation.slice(-1, Equation.length);
    if (!/\/|\*|\-|\+|\./.test(lastChar)) EquationField.value += operation;
  });
}

let Clear = document.getElementById("clear");
Clear.addEventListener("click", () => {
  EquationField.value = "";
});

let EqualBtn = document.getElementById("equal")
EqualBtn.addEventListener("click" , ()=>{
    Result=eval(EquationField.value)
    EquationField.value = Result;
});
