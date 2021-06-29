function calculateBMI(){
    var weight = document.bmiForm.weight.value;
    var height = document.bmiForm.height.value;


    if (weight > 0 && height > 0){
        var finalBMI = weight/(height/100*height/100);
        var finalBMI = finalBMI.toFixed(2);
        document.bmiForm.bmi.value = finalBMI;

        if (finalBMI < 19.5){
            document.getElementById('results').innerText = 'You are underweight';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 19.5 && finalBMI <= 26.9){
            document.getElementById('results').innerText = 'You have a normal body index';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 26.9 && finalBMI <= 30.9){
            document.getElementById('results').innerText = 'You are overweight';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 30.9 && finalBMI <= 36.9){
            document.getElementById('results').innerText = 'You are obese';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 36.9){
            document.getElementById('results').innerText = 'You are extremely obese';
            document.getElementById('results').classList.remove('hide');
        } 
    } else {
        alert('Please fill in everything correctly')
    }
};