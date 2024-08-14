// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = awaite rsponse.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

const dropdown = document.querySelectorAll(".selection");


for(let select of dropdown){
    for( let currcode in countryList){
       let newoption = document.createElement("option");
        newoption.value = currcode;
        newoption.innerText = currcode;
        select.appendChild(newoption);
        // select.addEventListener( "change" , () => {
        //     let img = select.parentElement.querySelector("img");
        //     let newsrc = `https://flagsapi.com/${countryList[currcode]}/flat/64.png`;
        //     img.src = newsrc;
        // })
           if( select.name == "con1" && newoption.value == "USD" ){
            newoption.selected = "selected";
           }
           else if(select.name == "con2" && newoption.value == "INR"){
            newoption.selected = "selected";
           }

           
    }
    select.addEventListener( "change" , () => {
            let img = select.parentElement.querySelector("img");
            let newsrc = `https://flagsapi.com/${countryList[select.value]}/flat/64.png`;
            img.src = newsrc;
        })
    
};

let burl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let fcur =  document.querySelector("#c1");
let tcur =  document.querySelector("#c2");

// let getexchange = async() =>{
//     let url = `${burl}/${fcur.value.toLowerCase()}/${tcur.value.toLowerCase()}.json `;
//     let response = await fetch(url);
//     let data = await response.json();
//     // let rate = data[tcur.value.toLowerCase()];
//     // return rate;
//     let rate = data[tcur.value.toLowerCase()];
    
// }

let result = document.querySelector(".result");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
btn.addEventListener( "click" , async() =>{
    let getexchange = async() =>{
        console.log(`${burl}/${fcur.value.toLowerCase()}.json `)
        let url = `${burl}/${fcur.value.toLowerCase()}.json `;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data , 'data')
        let frm = await fcur.value.toLowerCase();
        let to = await tcur.value.toLowerCase();
        // let rate = data[tcur.value.toLowerCase()];
        // return rate;
        
        let rate = data[fcur.value.toLowerCase()][to];
        console.log(rate , 'rate')
        result.innerText = ` ${fcur.value} = ${rate} ${tcur.value}`;
        
        input.value = rate*input.value;
 
    }
    getexchange();

});