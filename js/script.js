//1.박스 2개 만들기
//2. 드랍다운 리스트만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//7. 숫자를 한국어로 읽는 법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율을 적용

let currencyRatio = {

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

console.log(currencyRatio["VND"]["unit"]);
console.log(currencyRatio["VND"].unit);


document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("click" , function(){

    //1.버튼을 가져온다
    //2. 버튼에 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;


    //3. 선택된 currency값을 변수에 저장한다.
    var fromCurrency = this.textContent;
    console.log(this);
    console.log(`fromCurrency는`,fromCurrency);
    convert();

})

);

document.querySelectorAll("#to-currency-list a").forEach(menu2 => menu2.addEventListener("click" , function(){

     //1.버튼을 가져온다
    //2. 버튼에 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;


    //3. 선택된 currency값을 변수에 저장한다.
    var toCurrency = this.textContent;
    console.log(this);
    console.log(`toCurrency는`, toCurrency);
    convert();


})

)

//1. 키를 입력하는 순간
//2. 환전이 되서 
//3. 환전값이 보인다.


function convert(){

 //1. 환전
 //얼마를 환전할것인가
 //가지고 있는 화폐
 //바꾸고자 하는 화폐 
 //돈 * 환율 = 환전금액

 let amount = document.getElementById("from_input").value;
 console.log(amount);
 let convertedAmount = amount * currencyRatio.fromCurrency.toCurrency;
 console.log(`환전결과 ${convertedAmount}`);

 document.getElementById("to_input").value = convertedAmount;

 }