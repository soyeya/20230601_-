let CurrencyRatio = {

    USD : {

        KRW : 1322.43,
        USD : 1,
        VND : 23490.00,
        unit : "달러"
    },

    KRW : {

        KRW : 1,
        USD : 0.00076,
        VND : 17.76,
        unit : "원"

    },

    VND : {

        KRW : 0.056,
        USD : 0.000043,
        VND : 1,
        unit : "동"
    }

}

console.log(3 * CurrencyRatio.USD.KRW);



const from_currencyList = document.querySelectorAll("#from-currency-list a");
let fromBtn = document.querySelector("#from-button");
var fromCurrency = "";

from_currencyList.forEach( function(menu){
    
    menu.addEventListener("click" , function(){

    const fromBtnText = fromBtn.textContent = this.textContent;
    console.log(fromBtnText);
    fromCurrency = fromBtnText;

    console.log(fromCurrency);
    convert();
    let coverUnit1 = document.querySelector(".coverunit1").textContent  = CurrencyRatio[fromCurrency].unit;
 


})

})


const to_currencyList = document.querySelectorAll("#to-currency-list a");
let toBtn = document.querySelector("#to-button");
var toCurrency = "";

to_currencyList.forEach( function(menu){
    
    menu.addEventListener("click" , function(){

    const toBtnTxt = toBtn.textContent = this.textContent;
    console.log(toBtnTxt);

    toCurrency = toBtnTxt;
    console.log(toCurrency);
    convert();


    let coverUnit2 = document.querySelector(".coverunit2").textContent  = CurrencyRatio[toCurrency].unit;




})

})

function convert(){

    let amount = document.getElementById("from_input").value;
    console.log(amount);
    const convertedAmount = amount * ( CurrencyRatio[fromCurrency][toCurrency]);
    let Change_result = convertedAmount.toFixed(2);


    console.log(`환전결과 ${Change_result}`);
   
    document.getElementById("to_input").value =  Change_result;

}

/*소수점 자리수 정하기*/

// 숫자값.toFixed([자리수*]) => 소수점 이하 자리수 지정 / 문자열 반환 == 소수점 이하의 자리수가 늘어날 경우 0으로 채워진다.
// 숫자값.toPrecision([자리수*]) => 자리수 지정 정밀도 반환 / 문자열 반환 == toFixes()와 같이 자리수가 늘어나면 근사치 변환, 줄어들면 0으로 채워 넣는다.

(4.56).toPrecision(2);  // 4.6(근사치 변환)
(10).toPrecision(4);  // 10.00(정밀도 4가 되도록 0으로 채움)


