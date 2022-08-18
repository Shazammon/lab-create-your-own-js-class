console.log('hello front end 👋')

class BankAccount {
    static totalMoney = 0;
    
    constructor(accountType, balance, overDraftFees) {
        this.accountType = accountType
        this.balance = 0
        this.overDraftFees = 0
        
    }
    withdraw(funds) {
        this.balance = this.balance - funds
        BankAccount.totalMoney = BankAccount.totalMoney + this.balance
        if (this.balance < 0) {
            this.overDraftFees += 20
        }

        console.log(`I withdrew ${funds}`)
        

    }
    deposit(funds) {
        this.balance = this.balance + funds
        BankAccount.totalMoney = BankAccount.totalMoney + this.balance
    }

}



class ChildBankAccount extends BankAccount {
    constructor(accountType, balance, overDraftFees) {
        super(accountType, balance, overDraftFees)
    }
    withdraw(funds) {
        if (funds > this.balance) {
            console.log(`You do not currently have the funds to withdraw ${funds}`)
        } else {
        this.balance = this.balance - funds
        BankAccount.totalMoney = BankAccount.totalMoney + this.balance
        console.log(`I withdrew ${funds}`)
        }
        return
    }
}


// console.log(tyler.balance)
// console.log(BankAccount.totalMoney)
// tyler.withdraw(100)
// console.log(tyler.balance)
// console.log(BankAccount.totalMoney)

let tyler = new BankAccount("savings")
tyler.deposit(5000)
tyler.withdraw(6000)
console.log(tyler.overDraftFees)
let ammon = new ChildBankAccount("checking")
ammon.deposit(50)
ammon.withdraw(100)
ammon.withdraw(25)
console.log(ammon)