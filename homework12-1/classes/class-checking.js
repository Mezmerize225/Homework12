import BankAccount from "./class-bank.js";

class CheckingAccount extends BankAccount {

    constructor (
        _accountNumber,
        _owner,
        _balance,
    ) {
        super( _accountNumber, _owner, _balance,);
    }


    withdraw(amount) {
        let mybalance = this.getbalance;
        if(amount > (mybalance + 100)) {
            throw new Error('You can not withdraw this amount');
        } else {
            mybalance = mybalance - amount;
            this.newbalance(mybalance);
        }
    }

}

export {CheckingAccount};