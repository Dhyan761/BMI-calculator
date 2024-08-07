const bmitext=document.getElementById('bmi');
const desctext=document.getElementById('desc');
const form=document.querySelector('form');
form.addEventListener('submit',onFormSubmit)

 function onFormSubmit(e){
    e.preventDefault();

    const weight =parseFloat(form.weight.value);
    const height=parseFloat(form.height.value);
     if(isNaN(weight) || isNaN(height) || weight <= 0 || height <=0){
        alert("Please enter a valid weieght and height");
        return ;
     }
     const heightInMeters=height/100;
     const bmi= weight/Math.pow(heightInMeters,2);
     const desc=interpretBMI(bmi);
     
     bmitext.textContent= bmi.toFixed(2);
     bmitext.className=desc;
     desctext.innerHTML=`You are <strong>${desc}</strong>`;
 }
 function interpretBMI(bmi){
    if(bmi<18.5){
        return 'Underweight';
    }
    else if(bmi<25){
        return 'Healthy';

    }
    else if(bmi<30){
        return 'Overweight';
    }
    else{
        return 'Obese';
    }
 }