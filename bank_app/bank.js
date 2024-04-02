

class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited BDT ${amount} into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn BDT ${amount} from account ${this.accountNumber}.`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Closing Balance: BDT ${this.balance}`);
    }
}


const account1 = new BankAccount(8844, "Robin", 50000);
const account2 = new BankAccount(2587, "Faysal", 35000);


// User 1
account1.displayAccountInfo();
console.log("__________");
account1.deposit(5000);

console.log("__________");
account1.withdraw(2000);
console.log("__________");
account1.displayAccountInfo();
console.log("__________");

// User 2
account2.displayAccountInfo();
console.log("__________");
account2.deposit(1000); 
console.log("__________");
account2.withdraw(40000);
console.log("__________");
account2.displayAccountInfo();
