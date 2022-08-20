document.getElementById('calculate').addEventListener('click',function(){
      
     function callById(inputId){
         const inputValue = parseFloat(document.getElementById(inputId).value);
         return inputValue ;
    }
     const incomeFieldValue = callById('income-value');
    const foodFieldValue = callById('food-value');
    const rentFieldValue = callById('rent-value');
    const clothFieldValue = callById('cloth-value');
    const totalExpense = foodFieldValue + rentFieldValue + clothFieldValue;
    const expenseField = document.getElementById('expense-field');
    const expenseFieldValue = parseFloat(expenseField.innerText);
    expenseField.innerText = expenseFieldValue + totalExpense;
    const balanceField = document.getElementById('balance-field');
    const balanceFieldValue = parseFloat(balanceField.innerText);
    balanceField.innerText = incomeFieldValue -(balanceFieldValue+totalExpense);
    document.getElementById('save-btn').addEventListener('click',function(){
        const saveFieldValue = callById('save-field');
        const percentValue = (incomeFieldValue*saveFieldValue)/100;
        document.getElementById('saving-amt').innerText = percentValue;
        document.getElementById('remaining-amt').innerText = parseFloat(balanceField.innerText)- percentValue;
    })

})