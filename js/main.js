// const rate = 10;
// rate = 20
// console.log( 10 * rate )

// 1. RefVar to the form
const calculatorForm = document.querySelector('#calculator');
const shippingWeight = document.querySelector('#shippingWeight');
const quotedPrice = document.querySelector('#quotedPrice span');
const rate = 10;

// 2. Form.addEventListener to the submit event
calculatorForm.addEventListener('submit', onCalculateShippingRate);

function onCalculateShippingRate (e){
    //현재 이벤트의 기본 동작 중지. to prevent the form refreshing after sending data
    e.preventDefault();
    quotedPrice.textContent = parseFloat(shippingWeight.valueAsNumber * rate) + ".00"; 
    //valueAsNumber: value를 숫자로 바꿔 저장 
    //parseFloat(shippingWeight.valueAsNumber * rate) : string으로 바꿔버렸음 그냥 간단한 방법으로 
}




