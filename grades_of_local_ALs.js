


//An application to indicate grades of local ALs

function checkGrades() {
    //get the score from the input tag
    var score = document.getElementById('grade').value;
    //validate the score, this should return true/false based on the validation logic
    var isValid = validateScore(score);

    if (isValid){
        //if validation is true checking
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
        document.getElementById('error').innerHTML='';
    } else {
    //if validation is false
        document.getElementById('error').innerHTML='invalid number'
        document.getElementById('result').innerHTML='';
    }
}

function validateScore(score){
    var isNotEmpty = score !== '';
    var isNumber = !isNaN(score);
    
    return isNotEmpty && isNumber;
}
// var form = document.getElementById('form')

// var error = []form.addEventListener('submit',function(e){
//     e.preventDefault() //Prevent auto submission
    
//  var grade = document.getElementById('grade')

//     if (grade.value==""||grade.value!="text"){
//         error = 'Please enter a number';
// }

//  var error = document.getElementById('error').innerHTML=error;
    


// Validation to see if the input is a number or text
