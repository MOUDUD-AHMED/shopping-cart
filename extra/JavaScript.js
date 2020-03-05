//plus button event handler
const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click",function(){  
const totalAdd = getPlusMobile("current-quantity");
const TotalMobileAmount = totalAdd * 1219;
document.getElementById("priceMobile").innerText = TotalMobileAmount;
const totalAmount = totalPrice();
})

//minus button event handler
const minusBtn = document.getElementById("minus-btn")
minusBtn.addEventListener("click",function(){   
const totalMinus = getMinusCase("current-quantity");
const TotalMobileAmount = totalMinus*1219;
document.getElementById("priceMobile").innerText = TotalMobileAmount;
const totalAmount = totalPrice();

})

//plus case button event handler
const casePlusBtn = document.getElementById("plusCaseBtn");
casePlusBtn.addEventListener("click",function(){  
  const caseTotalAdd = getPlusMobile("CaseQuantity");
  const TotalCaseAmount = caseTotalAdd  * 59;
  document.getElementById("currentCasePrice").innerText = TotalCaseAmount;
  const totalAmount = totalPrice();
})

//minus case button event handler
const caseMinusBtn = document.getElementById("minusCaseBtn");
caseMinusBtn.addEventListener("click",function(){   
  const caseTotalMinus = getMinusCase("CaseQuantity");
  const TotalCaseOfAmount = caseTotalMinus*59;
  document.getElementById("currentCasePrice").innerText = TotalCaseOfAmount;
  const totalAmount = totalPrice();
})  

function totalPrice(){
const mobilePrice = document.getElementById("priceMobile").innerText;
const mobilePriceNumber = parseInt(mobilePrice);
const casePrice = document.getElementById("currentCasePrice").innerText;
const casePriceNumber = parseInt(casePrice);
const totalPriceNumber = mobilePriceNumber + casePriceNumber;     
document.getElementById("subtotal").innerText = totalPriceNumber;
document.getElementById("total").innerText = totalPriceNumber;
return totalPriceNumber;    
}
function getPlusMobile(id){
const currentNumber = getCurrentNumber(id);
const totalAdd = currentNumber+1;
document.getElementById(id).value = totalAdd;
return totalAdd;
}
function getMinusCase(id){
const currentNumber = getCurrentNumber(id);
const totalMinus = currentNumber-1;
if(totalMinus >= 0){
  console.log(totalMinus);
}
else{
  return 0;
}
document.getElementById(id).value = totalMinus;
return totalMinus;
}

function getCurrentNumber(id){
const addValue = document.getElementById(id).value;
const currentNumber = parseInt(addValue);
return currentNumber;
}