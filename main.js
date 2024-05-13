function submit(){
    
    let input1=document.getElementById('input1')
    console.log(input1.value);
    let input2=document.getElementById('input2')
    console.log(input2.value);
    let result=(input2.value/(input1.value*input1.value)).toFixed(2);
    let result1=document.getElementById('result');
    result1.innerText=result
    let status=document.getElementById('status');
    if(result <18.5){
        status.innerText="Underweight"
    }else if(result>= 18.5 && result<=24.9){
        status.innerText="Normal"
    }else if(result>= 25 && result<=29.9){
        status.innerText="Overweight"
    }else if(result>= 30 && result<=35){
        status.innerText="Obesity"
    }else{
        status.innerText="Severe obesity"
    }        
    


}