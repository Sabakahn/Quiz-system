#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magentaBright("***** WELLCOME TO QUIZ SYSTEM *****"));
let points = 0;
let question_1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "Typescript is the super set of?",
        choices: ["java", "python", "c++", "HTML"],
    }
]);
if (question_1.one == "java") {
    console.log(chalk.yellowBright("Correct Answer!"));
    points++;
}
else {
    console.log(chalk.greenBright("Incorrect!"));
}
let question_2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "Who is the founder of microsoft?",
        choices: ["elon musk", "bill gates", "Mark", "Ali"],
    }
]);
if (question_2.two == "bill gates") {
    console.log(chalk.yellowBright("Correct Answer!"));
    points++;
}
else {
    console.log(chalk.greenBright("Incorrect!"));
}
let question_3 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "Capital of pakistan",
        choices: ["Karachi", "Punjab", "Islamabad", "KPK"],
    }
]);
if (question_3.three == "Islamabad") {
    console.log(chalk.yellowBright("Correct Answer!"));
    points++;
}
else {
    console.log(chalk.greenBright("Incorrect!"));
}
let question_4 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "Who is the current governor of Sindh",
        choices: ["Ali", "kamran Tessori", "Bilala", "Wajahat"],
    }
]);
if (question_4.four == "Kamran Tessori") {
    console.log(chalk.yellowBright("Correct Answer!"));
    points++;
}
else {
    console.log(chalk.greenBright("Incorrect!"));
}
let question_5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "What is the correct way to check if two value are note equal?",
        choices: ["a==b", "a===b", "a=b", "a!==b"],
    }
]);
if (question_5.five == "a!==b") {
    console.log(chalk.yellowBright("Correct Answer!"));
    points++;
}
else {
    console.log(chalk.greenBright("Incorrect!"));
}
if (points <= 4) {
    console.log(chalk.bold.magentaBright("congratulations"));
    console.log(chalk.bold.magenta(`Your points are ${points}`));
}
else {
    console.log(chalk.bold.blueBright(`You Lose Try again. Youre points are ${points}`));
}
