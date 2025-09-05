// . **შექმენით `BankAccount` კლასი** შემდეგი თვისებებით:
//    - `accountNumber` (public)
//    - `owner` (public)
//    - `balance` (private ველი)

// **დამატეთ შემდეგი მეთოდები `BankAccount` კლასში:**
//    - `deposit(amount)` → თანხის დამატება ანგარიშზე. უარყოს უარყოფითი თანხა.
//    - `withdraw(amount)` → თანხის ჩამოჭრა ანგარიშიდან. აკრძალეთ ზღვარს მიღმა გადახდები.
//    - `getBalance()` → ანგარიშის მიმდინარე ბალანსის დაბრუნება.

class BankAccount {
    accountNumber;
    owner;
    // ვიცი რომ ბალანსი უნდა დავმალო, მარა ჯერ ვამოწმებ ასე. დამალულის შემოწმება როგორ უნდა?
    balance;

    constructor(
        _accountNumber,
        _owner,
        _balance,
    ) { 
        this.accountNumber = _accountNumber;
        this.owner = _owner;
        this.balance = _balance;
        console.log(_accountNumber, _owner, _balance)
    }

    set deposit(value) {
        if(value <= 0) {
            throw new Error('Please enter valid amount');
        }
        this.balance = this.balance + value
    }

    set withdraw(value) {
        if(value > this.balance) {
            throw new Error('You do not have this amount on your bank account');
        }
        this.balance = this.balance - value
    }

}

const myAccount = new BankAccount (
    'abc',
    'dd',
    '100',
);
myAccount.deposit = 20;
myAccount.withdraw = 90;
console.log(myAccount);