import BankAccount from "./class-bank.js";

class SavingsAccount extends BankAccount { 
    interestRate;

    constructor (
        _interestRate,
        _accountNumber,
        _owner,
        _balance,
    ) {
        super( _accountNumber, _owner, _balance,);
        this.interestRate = _interestRate
    }

    // get balance() {
    //     return this._balance;
    // }

    // set saver(value){

    // }


    addInterest() {
        let mybalance = this.balance
        mybalance = mybalance + mybalance*0.06%
    }
}

export {SavingsAccount};