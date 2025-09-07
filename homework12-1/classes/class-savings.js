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


    addInterest() {
        const mybalance = this.getbalance
        this.interestRate = mybalance*0.0006
        this.deposit(this.interestRate);
    }

}

export {SavingsAccount};