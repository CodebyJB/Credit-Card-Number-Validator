"use strict";

const ccNumInput = document.querySelector(".cc_inputs");
const submitBtn = document.querySelector(".submit_btn");
const companyLogo = document.querySelector(".logo");
const resultDisplay = document.querySelector(".result");

ccNumInput.addEventListener("input", () => {});

const handleClick = () => {
  if (ccNumInput.value.length >= 14 && Math.abs(ccNumInput.value)) {
    const ccNum = ccNumInput.value.split("").reverse();

    const calcDigits = [];
    for (let i = 1; i < ccNum.length; i += 2) {
      calcDigits.push(`${ccNum[i] * 2 > 9 ? ccNum[i] * 2 - 9 : ccNum[i] * 2}`);
    }
    for (let j = 0; j < ccNum.length; j += 2) {
      calcDigits.push(ccNum[j]);
    }

    const addNums = calcDigits.reduce((num1, num2) => {
      return Number(num1) + Number(num2);
    });

    if (addNums % 10 === 0) {
      resultDisplay.innerText = "✅ VALID";
      if (ccNumInput.value[0] == 3) {
        companyLogo.src = "img/Amex Logo.png";
      } else if (ccNumInput.value[0] == 4) {
        companyLogo.src = "img/Visa Logo.png";
      } else if (ccNumInput.value[0] == 5) {
        companyLogo.src = "img/Mastercard Logo.png";
      } else if (ccNumInput.value[0] == 6) {
        companyLogo.src = "img/Discover Logo.png";
      }
    } else {
      resultDisplay.innerText = "❌ INVALID";
    }
  }
};

submitBtn.addEventListener("click", handleClick);
handleClick();
