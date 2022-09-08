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
   
   console.log(inputField[0].value);
   total= hindi + english + maths + science + history + arts ;
   percentage=(total/6).toFixed(2);
   //  debugger;
   if((inputField[0].value && inputField[1].value && inputField[2].value && inputField[3].value && inputField[4].value && inputField[5].value) !== ''){
     if(inputField[0].value > 0 && inputField[1].value > 0 && inputField[2].value > 0 && inputField[3].value > 0 && inputField[4].value > 0 && inputField[5].value > 0){
     if(inputField[0].value < 100 && inputField[1].value < 100 && inputField[2].value < 100 && inputField[3].value < 100 && inputField[4].value < 100 && inputField[5].value < 100){
      resultShow.style.color="green";
       
       resultShow.innerText=`Your total marks is : ${total} and your percenatage is : ${percentage}%`;
      }
      else{
        resultShow.innerText=`All Value should be less then 100 `;
        resultShow.style.color="red";
      }
    }
      else{
        resultShow.style.color="red";
        resultShow.innerText=`All Value should be greater then 0 `;
      }
 }
  else{
    resultShow.style.color="red";

    resultShow.innerText='Fill all the fields'
  }
  
       
        

  

        //    if(percentage > 90){
//    resultShow.innerText=` dictinction great Your total marks is ${total} and your percantage is ${percentage}% `;

//    }else if(percentage > 70){
//    resultShow.innerText=`second Your total marks is ${total} and your percantage is ${percentage}% `;
// }else if(percentage > 50){
//    resultShow.innerText=`first Your total marks is ${total} and your percantage is ${percentage}% `;

// }else{
//     resultShow.innerText=`failed first Your total marks is ${total} and your percantage is ${percentage}% `;

// }

}



checkResult.addEventListener('click', calculate)