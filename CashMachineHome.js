let actualPin = 0001
let actualBalance = 2000

// inputs
let withdrawalAmount = 200
let inputPin = 0000

let balanceAfterWithdrawal = actualBalance - withdrawalAmount

const ValidatePin_ShowBalance = (inputPin) => {
    if (inputPin != actualPin){
        console.log("Incorrect Pin!")
        return false 
        
    }else{
        console.log("Access successful! Your current balance is "+ actualBalance)
        return true
    }
}

const WithdrawProcess = (actualBalance, withdrawalAmount) => {
    if (ValidatePin_ShowBalance(inputPin, actualBalance) != false){
        if (withdrawalAmount <= actualBalance){
            return "Your withdrawal is successful, your new balance is " + balanceAfterWithdrawal
        }else{
            return "Insufficient funds to make withdrawal"
        }
    }    
}

console.log(WithdrawProcess(actualBalance, withdrawalAmount))