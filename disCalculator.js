const amount = document.getElementById('amount');
const discount = document.getElementById('discount');
const discountMade = document.getElementById('discountMade');
const totalPay = document.getElementById('finalPay');
const buttonCalculate = document.getElementById('calculate');
const buttonReset = document.getElementById('reset')

buttonCalculate.addEventListener('click', (e)=>{
  e.preventDefault();
  discountMade.value = `${Number(amount.value) *(Number(discount.value)/100)}`
  totalPay.value = `${Number(amount.value) - discountMade.value}`
})

buttonReset.addEventListener('click', (e)=>{
  e.preventDefault();
  amount.value = '';
  discount.value = '';
  discountMade.value = '';
  totalPay.value = '';
})