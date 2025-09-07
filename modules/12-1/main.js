import BankAccount from "../classes/class-bank.js";
// import { SavingsAccount, CheckingAccount } from "./class.js";
import { SavingsAccount } from "../classes/class-savings.js";
import { CheckingAccount } from "../classes/class-checking.js";


const myAccount = new BankAccount (
    'abc',
    'dd',
    100,
);


const mySavings = new SavingsAccount (
    101,
    'abb',
    'bb',
    200,
);


const myExpenses = new CheckingAccount (
    'ccc',
    'ddd',
    50,
);

myAccount.deposit(20);
myAccount.withdraw(90);
// console.log(myAccount);
console.log(myAccount.balance);

console.log(mySavings);
console.log(myExpenses);

myExpenses.withdraw(60);
console.log(myExpenses.balance);
addInterest();