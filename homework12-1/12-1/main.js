// import BankAccount from "../classes/class-bank.js";
import { SavingsAccount } from "../classes/class-savings.js";
import { CheckingAccount } from "../classes/class-checking.js";


// const myAccount = new BankAccount (
//     'abc',
//     'dd',
//     100,
// );


const mySavings = new SavingsAccount (
    0,
    'abb',
    'bb',
    200,
);


const myExpenses = new CheckingAccount (
    'ccc',
    'ddd',
    50,
);


myExpenses.withdraw(60);
console.log(myExpenses);
mySavings.addInterest();
mySavings.addInterest();
mySavings.deposit(100);
console.log(myExpenses.getbalance);
console.log(mySavings.getbalance);

