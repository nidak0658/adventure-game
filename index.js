#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class player {
    names;
    fuel = 100;
    constructor(name) {
        this.names = name;
    }
    feulDec() {
        let fuell = this.fuel - 25;
        this.fuel = fuell;
    }
    feulIn() {
        this.fuel = 100;
    }
}
class oponent {
    names;
    fuel = 100;
    constructor(name) {
        this.names = name;
    }
    feulDec() {
        let fuell = this.fuel - 25;
        this.fuel = fuell;
    }
}
let players = await inquirer.prompt({
    name: "pl",
    type: "input",
    message: "Enter your name: "
});
let oponents = await inquirer.prompt({
    name: "char",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Master Chief", "Sam Fisher", "Pyramid Head", "Ryu", "Sephiroth"]
});
let p1 = new player(players.pl);
let o1 = new oponent(oponents.char);
do {
    if (oponents.char === "Master Chief" || oponents.char === "Sam Fisher" || oponents.char === "Pyramid Head" || oponents.char === "Ryu" || oponents.char === "Sephiroth") {
        //    console.log(`${chalk.bold.green(p1.names)} VS ${chalk.bold.red(o1.names)}`)
        let askToplayer = await inquirer.prompt({
            type: "list",
            name: "ak",
            message: "What do you want to do ?",
            choices: ["Attack", "Drink portion", "Run for life"]
        });
        if (askToplayer.ak === "Attack") {
            let genNum = Math.floor(Math.random() * 2);
            if (genNum > 0) {
                p1.feulDec();
                console.log(chalk.bold.red(`${p1.names} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.names} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(players.pl + " You Loose, better luck for next time"));
                    process.exit();
                }
            }
            if (genNum <= 0) {
                o1.feulDec();
                console.log(chalk.bold.green(`${p1.names} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.names} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(players.pl + " You Win"));
                    process.exit();
                }
            }
        }
        if (askToplayer.ak === "Drink portion") {
            p1.feulIn();
            console.log(chalk.bold.italic.green(`You Drink Health Your feul is ${p1.fuel}`));
        }
        if (askToplayer.ak === "Run for life") {
            console.log(chalk.red.bold.italic(players.pl + " You Loose, better luck for next time"));
        }
    }
} while (true);
