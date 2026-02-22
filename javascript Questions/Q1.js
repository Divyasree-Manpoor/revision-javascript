function createBankaccount(balance){
   let history=[]

   return{
    deposit(amount){
        if(amount<=0){
            console.log("Invalid deposit")
            return;
        }
        balance+=amount;
        history.push("deposit",+amount)
        console.log("deposit:",amount)
    }
     withdraw(amount){
        if(amount>balance){
         console.log("Insufficent balance")
         return;
        }
        balance -= amount;
        history.push("withdraw",+amount)
        console.log("withdraw:",amount)
    }

    getBalance(){
        console.log("Balance:",balance)
    }
    getTransactionHistory(){
        console.log("History",history)
    }
    }
}

const acc=createBankaccount(5000)
acc.deposit(300);
acc.withdraw(200);
acc.getBalance();
acc.getTranscation();