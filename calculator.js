import inquirer from "inquirer";
console.log("Welcome to Raiyan's Simple Calculator");
const answer = await inquirer.prompt([
    { massage: "Enter your first number", type: "number", name: "firstNumber" },
    { massage: "Enter your first number", type: "number", name: "secondNumber" },
    { massage: "Select an operator to perform action", type: "list", name: "operator", choices: ["Add", "Subtract", "Multiply", "Divide"] }
]);
if (answer.operator === "Add") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtract") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Divide") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    ("Invalid Input");
