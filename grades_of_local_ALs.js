//An application to indicate grades of local ALs

function checkGrades() {
    var score = document.getElementById('grade').value;
    var result= '';
    if (score>=75){
        result='A-Distinction Pass';
    }else if (score>=65){
        result='B-Very Good Pass';
    }else if (score>=55){
        result='C-Credit Pass';
    }else if (score>=40){
        result='D-Ordinary Pass';
    }else if (score>=0){
        result='F-Fail';
    }
    document.getElementById('result').innerHTML=result;
}

// Validation to see if the input is a number or text
