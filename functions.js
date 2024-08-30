

function factorial(value){
    factorialAnswer = 1
    if((value - Math.floor(value)) !== 0){
        factorialAnswer = Math.sqrt((2*value+1/3)*Math.PI)*(value**value)*Math.E**(0-value)
    }
    else{
        if(value <= 170)
        for(let i = value; i > 0; i--){
            factorialAnswer = factorialAnswer * i
        }
        else{
            factorialAnswer = `Infinity`
        }

    }
}

function factorialCalculator(){
    if(!secondNumber){
        factorial(answerText)
        answerText = factorialAnswer
        document.getElementById("answer-text").innerHTML = answerText
    }
    else{
        factorial(answerText2)
        answerText2 = factorialAnswer
        document.getElementById("answer-text").innerHTML = answerText2
    }
}

function abs() {
    if(!secondNumber){
        if(answerText < 0){
            answerText = 0 - answerText
            document.getElementById("answer-text").innerHTML = answerText
        }
    }
    else{
        if(answerText2 < 0){
            answerText2 = 0 - answerText2
            document.getElementById("answer-text").innerHTML = answerText2
        }
    }
}

function ln(){
    if(!secondNumber){
        answerText = Math.log(answerText)
        document.getElementById("answer-text").innerHTML = answerText
    }
    else{
        answerText= Math.log(answerText2)
        document.getElementById("answer-text").innerHTML = answerText2
    }
}

function pow10(){
    if(!secondNumber){
        answerText = 10**answerText
        document.getElementById("answer-text").innerHTML = answerText
    }
    else{
        answerText2 = 10**answerText2
        document.getElementById("answer-text").innerHTML = answerText2
    }
}

function powe(){
    if(!secondNumber){
        answerText = Math.E**answerText
        document.getElementById("answer-text").innerHTML = answerText
    }
    else{
        answerText2 = Math.E**answerText2
        document.getElementById("answer-text").innerHTML = answerText2
    }
}

function trig(which){
    if(!secondNumber){
        if(which == "sin"){answerText = Math.sin(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "asin"){answerText = Math.asin(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "sinh"){answerText = Math.sinh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "asinh"){answerText = Math.asinh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "cos"){answerText = Math.cos(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "acos"){answerText = Math.acos(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "cosh"){answerText = Math.cosh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "acosh"){answerText = Math.acosh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "tan"){answerText = Math.tan(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "atan"){answerText = Math.atan(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "tanh"){answerText = Math.tanh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
        if(which == "atanh"){answerText = Math.atanh(answerText*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText}
    }
    else{
        if(which == "sin"){answerText2 = Math.sin(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "asin"){answerText2 = Math.asin(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "sinh"){answerText2 = Math.sinh(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "asinh"){answerText2 = Math.asinh(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "cos"){answerText2 = Math.cos(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "acos"){answerText2 = Math.acos(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "cosh"){answerText2 = Math.cosh(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "acosh"){answerText2 = Math.acosh(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "tan"){answerText2 = Math.tan(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "atan"){answerText2 = Math.atan(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "tanh"){answerText2 = Math.tanh(answerText2*(((Math.PI/180)-1)*RadOrDeg+1)); document.getElementById("answer-text").innerHTML = answerText2}
        if(which == "atanh"){answerText2 = Math.atanh(answerText2)*((((Math.PI/180)-1)-1)*RadOrDeg+1); document.getElementById("answer-text").innerHTML = answerText2}
    }
}

function writeConstant(constant) {
    if(!secondNumber){
        if (constant == 'pi') {
            answerText = `3.14159265359`
            document.getElementById("answer-text").innerHTML = answerText
        }
        if(constant == "e"){
            answerText = "2.71828182846"
            document.getElementById("answer-text").innerHTML = answerText
        }
        if (constant == 'phi') {
            answerText = `1.61803398874`
            document.getElementById("answer-text").innerHTML = answerText
        }
        if(constant == "gm"){
            answerText = "0.57721566490"
            document.getElementById("answer-text").innerHTML = answerText
        }
    }
    else{
        if (constant == 'pi') {
            answerText2 = `3.14159265359`
            document.getElementById("answer-text").innerHTML = answerText2
        }
        if(constant == "e"){
            answerText2 = "2.71828182846"
            document.getElementById("answer-text").innerHTML = answerText2
        }
        if (constant == 'phi') {
            answerText2 = `1.61803398874`
            document.getElementById("answer-text").innerHTML = answerText2
        }
        if(constant == "gm"){
            answerText2 = "0.57721566490"
            document.getElementById("answer-text").innerHTML = answerText2
        }

   }
}