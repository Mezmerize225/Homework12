class BankAccount {
    accountNumber;
    owner;
    #balance;

    constructor(
        _accountNumber,
        _owner,
        _balance,
    ) { 
        this.accountNumber = _accountNumber;
        this.owner = _owner;
        this.#balance = _balance;
        // console.log(_accountNumber, _owner, _balance);
    }

    // set balance(value) {
    //     this.#balance = value; 
    // }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if(amount <= 0) {
            throw new Error('Please enter valid amount');
        }
        this.#balance = this.#balance + amount
    }

    withdraw(amount) {
        if(amount > this.#balance) {
            throw new Error('You do not have this amount on your bank account');
        }
        this.#balance = this.#balance - amount
    }

}

export default BankAccount;
// export { SavingsAccount, CheckingAccount};

