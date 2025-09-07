import BankAccount from "./class-bank.js";

class CheckingAccount extends BankAccount {
    // #balance;

    constructor (
        _accountNumber,
        _owner,
        _balance,
    ) {
        super( _accountNumber, _owner, _balance,);
        // this.#balance = _balance;
      
    }

    // set balance(mybalance) {
    //     this.balance = mybalance;
    // }

    withdraw(amount) {
        let mybalance = this.balance;
        if(amount > (mybalance + 100)) {
            throw new Error('You can not withdraw this amount');
        } else {
            mybalance = mybalance - amount;
        }
        // this.#balance = this.#balance - amount
        console.log('WITHDRAW THIS', mybalance);
       
    }

}

export {CheckingAccount};