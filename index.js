const inputField = document.querySelectorAll('.subject-marks');

const errorHandle = document.querySelectorAll('.error');

const checkResult = document.querySelector('.result');

const resultShow = document.querySelector('.output');

function calculate() {
   const hindi = Number(inputField[0].value);
   const english = Number(inputField[1].value);
   const maths = Number(inputField[2].value);
   const science = Number(inputField[3].value);
   const history = Number(inputField[4].value);
   const arts = Number(inputField[5].value);

      if (inputField[0].value === '') {
         errorHandle[0].innerText = "Subject marks should not be empty";
         inputField[0].style.border = "1px solid red";
         errorHandle[0].style.color = "red";

      } else if (inputField[0].value > 100) {
         errorHandle[0].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[0].style.border = "1px solid red";
         errorHandle[0].style.color = "red";
      }
      else if (inputField[0].value < 0) {
         errorHandle[0].innerText = "Subject marks should not be less then zero";
         inputField[0].style.border = "1px solid red";
         errorHandle[0].style.color = "red";
      }
      else {
         errorHandle[0].innerText = "";
         inputField[0].style.border = "";
         errorHandle[0].style.color = "";
      }

     if (inputField[1].value === '') {
         errorHandle[1].innerText = "Subject marks should not be empty";
         inputField[1].style.border = "1px solid red";
         errorHandle[1].style.color = "red";

      } else if (inputField[1].value > 100) {
         errorHandle[1].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[1].style.border = "1px solid red";
         errorHandle[1].style.color = "red";
      }
      else if (inputField[1].value < 0) {
         errorHandle[1].innerText = "Subject marks should not be less then zero";
         inputField[1].style.border = "1px solid red";
         errorHandle[1].style.color = "red";
      }
      else {
         errorHandle[1].innerText = "";
         inputField[1].style.border = "";
         errorHandle[1].style.color = "";
      }
      if (inputField[2].value === '') {
         errorHandle[2].innerText = "Subject marks should not be empty";
         inputField[2].style.border = "1px solid red";
         errorHandle[2].style.color = "red";

      } else if (inputField[2].value > 100) {
         errorHandle[2].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[2].style.border = "1px solid red";
         errorHandle[2].style.color = "red";
      }
      else if (inputField[2].value < 0) {
         errorHandle[2].innerText = "Subject marks should not be less then zero";
         inputField[2].style.border = "1px solid red";
         errorHandle[2].style.color = "red";
      }
      else {
         errorHandle[2].innerText = "";
         inputField[2].style.border = "";
         errorHandle[2].style.color = "";
      }

      if (inputField[3].value === '') {
         errorHandle[3].innerText = "Subject marks should not be empty";
         inputField[3].style.border = "1px solid red";
         errorHandle[3].style.color = "red";

      } else if (inputField[3].value > 100) {
         errorHandle[3].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[3].style.border = "1px solid red";
         errorHandle[3].style.color = "red";
      }
      else if (inputField[3].value < 0) {
         errorHandle[3].innerText = "Subject marks should not be less then zero";
         inputField[3].style.border = "1px solid red";
         errorHandle[3].style.color = "red";
      }
      else {
         errorHandle[3].innerText = "";
         inputField[3].style.border = "";
         errorHandle[3].style.color = "";
      }

      if (inputField[4].value === '') {
         errorHandle[4].innerText = "Subject marks should not be empty";
         inputField[4].style.border = "1px solid red";
         errorHandle[4].style.color = "red";

      } else if (inputField[4].value > 100) {
         errorHandle[4].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[4].style.border = "1px solid red";
         errorHandle[4].style.color = "red";
      }
      else if (inputField[4].value < 0) {
         errorHandle[4].innerText = "Subject marks should not be less then zero";
         inputField[4].style.border = "1px solid red";
         errorHandle[4].style.color = "red";
      }
      else {
         errorHandle[4].innerText = "";
         inputField[4].style.border = "";
         errorHandle[4].style.color = "";

      }

      if (inputField[5].value === '') {
         errorHandle[5].innerText = "Subject marks should not be empty";
         inputField[5].style.border = "1px solid red";
         errorHandle[5].style.color = "red";

      } else if (inputField[5].value > 100) {
         errorHandle[5].innerText = "Subject marks should be less than 100 and equal to 100";
         inputField[5].style.border = "1px solid red";
         errorHandle[5].style.color = "red";
      }
      else if (inputField[5].value < 0) {
         errorHandle[5].innerText = "Subject marks should not be less then zero";
         inputField[5].style.border = "1px solid red";
         errorHandle[5].style.color = "red";
      }
      else {
         errorHandle[5].innerText = "";
         inputField[5].style.border = "";
         errorHandle[5].style.color = "";
      }

      total = hindi + english + maths + history + arts + science;
      console.log(total);
      if (hindi < 33) {
         resultShow.innerText = `You have failed in hindi Your marks should be greater then 32 number ${total} `
      }
       if (english < 33) {
         resultShow.innerText = `You have failed in english Your marks should be greater then 32 ${total} `
      }

       if (maths < 33) {
         resultShow.innerText = `You have failed in Math Your marks should be greater then 32 ${total} `
      }  if (science < 33) {
         resultShow.innerText = `You have failed in Science Your marks should be greater then 32 ${total} `
      }  if (arts < 33) {
         resultShow.innerText = `You have failed in Arts Your marks should be greater then 32 ${total} `
      }  if (history < 33) {
         resultShow.innerText = `You have failed in History Your marks should be greater then 32 ${total} `
      }
      // resultShow.innerText = `Your have passed you total marks is ${total}`
   }



checkResult.addEventListener('click', calculate)