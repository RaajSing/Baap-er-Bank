
document.getElementById("depositBtn").addEventListener("click", function(){

    // Get the Deposit Input Field value....
    const depositInputField = document.getElementById("depositInput");
    const depositInputValue = depositInputField.value ;
    const depositInputValueConvert = parseFloat(depositInputValue);

    // Get the DepositValue Display...
    const depositDisplay = document.getElementById("depositTotal");
    const depositDisplayText = depositDisplay.innerText ;
    const depositDisplayTextConvert = parseFloat(depositDisplayText);
    
    const totalDepositValue = depositInputValueConvert + depositDisplayTextConvert;
    depositDisplay.innerText = totalDepositValue;


    // DepositValue Add Main Total Balance....
    let totalBalance = document.getElementById("mainAcBalance");
    let totalBalanceText = totalBalance.innerText ;
    let totalBalanceTextConvert = parseFloat(totalBalanceText);
    let depositTotalBalanceSum =  totalBalanceTextConvert + depositInputValueConvert ;
    
    totalBalance.innerText = depositTotalBalanceSum;


    // Clear Input Field....
    depositInputField.value = "";

});







document.getElementById("withdrawBtn").addEventListener("click", function(){
    // Get withdrawInputFieldValue......
    const withdrawInputField = document.getElementById("withdrawInput");
    const withdrawInputFieldText = withdrawInputField.value;
    const withdrawInputFieldTextConvert = parseFloat(withdrawInputFieldText);


    // Get displayWithdrawValue......
    const displayWithdrawValue = document.getElementById("totalWithdraw");
    const displayWithdrawText = displayWithdrawValue.innerText;
    const displayWithdrawTextConvert = parseFloat(displayWithdrawText);
    const totalWithdrawValue = displayWithdrawTextConvert + withdrawInputFieldTextConvert;

    displayWithdrawValue.innerText = totalWithdrawValue;


    // Get Main Ac Balance....
    const mainAcBalance = document.getElementById("mainAcBalance");
    const mainAcBalanceText = mainAcBalance.innerText;
    const mainAcBalanceTextConvert = parseFloat(mainAcBalanceText);
    const totalBalanceSub = mainAcBalanceTextConvert - withdrawInputFieldTextConvert;

    mainAcBalance.innerText = totalBalanceSub;


    // Clear Withdraw Input Field.....
    withdrawInputField.value = "";

})