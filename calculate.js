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
   
   total= hindi + english + maths + science + history + arts ;
   percentage=(total/6).toFixed(2);
 if((inputField[0].value && inputField[1].value && inputField[2].value && inputField[3].value && inputField[4].value && inputField[5].value)==''){
     resultShow.innerText='fill all the fields'

    }
    else{
     resultShow.innerText=''
  
    }
   if((inputField[0].value || inputField[1].value || inputField[2].value || inputField[3].value || inputField[4].value || inputField[5].value) > 101){
         resultShow.innerText='fill all the 54'
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