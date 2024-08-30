let answerText = "0"
let answerText2 = "0"
let secondNumber = false
let currentOperator = ""
let factorialAnswer = 1
let RadOrDeg = 0
let displayAnswer = document.getElementById("answer-text")


function addSymbol(symbol){
    displayAnswer.style.color = "#000000"
    if(!secondNumber){
        if(!(answerText.length > 34) && answerText.toString() !== "0"){
            answerText = `${answerText}${symbol}`
            displayAnswer.innerHTML = answerText
        }
        if(answerText.length == 0 || answerText.toString() == "0"){
            answerText = symbol + ''
            displayAnswer.innerHTML = answerText
        }
    }
    else{
        if(!(answerText2.length > 34) && answerText2.toString() !== "0"){
            answerText2 = `${answerText2}${symbol}`
            displayAnswer.innerHTML = answerText2
        }
        if(answerText2.length == 0 || answerText2.toString() == "0"){
            answerText2 = `${symbol}`
            displayAnswer.innerHTML = answerText2
        }
    }
    

}

function eraseAll(){
    document.getElementById("operation-text").innerHTML = ""
    displayAnswer.style.color = "#000000"
    answerText = "0"
    answerText2 = "0"
    displayAnswer.innerHTML = 0

}

function removeSymbol(){
    displayAnswer.style.color = "#000000"
    if(!secondNumber){
        if(answerText.indexOf("e") == -1){
            if(answerText !== "0" && answerText.length > 1){
                answerText = answerText.slice(0,answerText.length-1)
                displayAnswer.innerHTML = answerText
            }
            else{
                if(answerText.length < 2){
                    answerText = ""
                    displayAnswer.innerHTML = 0
                }
            }
        }
        else{
            displayAnswer.innerHTML = 0
            answerText = '0'
            answerText2 = '0'
        }
    }
    else{
        if(answerText2 !== "0" && answerText2.length > 1){
            answerText2 = answerText2.slice(0,answerText2.length-1)
            displayAnswer.innerHTML = answerText2
        }
        else{
            if(answerText2.length < 2){
                answerText2 = ""
                displayAnswer.innerHTML = answerText2 
            }
        }
    }

}

function calculateCalculator(){
    document.getElementById("operation-text").innerHTML = ""
    displayAnswer.style.color = "#000000"
    if(secondNumber){
        if(currentOperator == "sum"){
            displayAnswer.innerHTML = parseFloat(answerText)+parseFloat(answerText2)
            if(displayAnswer.innerHTML.includes(".")){
                if(answerText.length - answerText.indexOf(".") - 1 >= answerText2.length - answerText2.indexOf(".") - 1){
                    displayAnswer.innerHTML = Math.round(displayAnswer.innerHTML*(10**(answerText.length - answerText.indexOf(".") - 1)))/(10**(answerText.length - answerText.indexOf(".") - 1))
                }
                else{
                    displayAnswer.innerHTML = Math.round(displayAnswer.innerHTML*(10**(answerText2.length - answerText2.indexOf(".") - 1)))/(10**(answerText2.length - answerText2.indexOf(".") - 1))  
                }
            }
            answerText = displayAnswer.innerHTML
            answerText2 = `0` 
            secondNumber = false
        }
        if(currentOperator == "sub"){
            displayAnswer.innerHTML = parseFloat(answerText)-parseFloat(answerText2)
            if(displayAnswer.innerHTML.includes(".")){
                if(answerText.length - answerText.indexOf(".") - 1 >= answerText2.length - answerText2.indexOf(".") - 1){
                    displayAnswer.innerHTML = Math.round(displayAnswer.innerHTML*(10**(answerText.length - answerText.indexOf(".") - 1)))/(10**(answerText.length - answerText.indexOf(".") - 1))
                }
                else{
                    displayAnswer.innerHTML = Math.round(displayAnswer.innerHTML*(10**(answerText2.length - answerText2.indexOf(".") - 1)))/(10**(answerText2.length - answerText2.indexOf(".") - 1))  
                }
            }
            answerText = displayAnswer.innerHTML
            answerText2 =`0` 
            secondNumber = false
        }
        if(currentOperator == "mul"){
            displayAnswer.innerHTML = parseFloat(answerText)*parseFloat(answerText2)
            if(displayAnswer.innerHTML.includes(".")){
                    if(answerText.indexOf(".") == -1){
                        displayAnswer.innerHTML = Math.round(parseFloat(displayAnswer.innerHTML)*10**(answerText.length-answerText.indexOf(".")+1))/10**(answerText.length-answerText.indexOf(".")+1)
                    }
                    if(answerText2.indexOf(".") == -1){
                        displayAnswer.innerHTML = Math.round(parseFloat(displayAnswer.innerHTML)*10**(answerText.length-answerText.indexOf(".")-1))/10**((answerText.length-answerText.indexOf(".")-1))
                    }
                    if(answerText.includes(".") && answerText2.includes(".")){
                        displayAnswer.innerHTML = Math.round(parseFloat(displayAnswer.innerHTML)*10**(answerText.length-answerText.toString().indexOf(".")+answerText2.length-answerText2.toString().indexOf(".")+1))/10**(answerText.length-answerText.toString().indexOf(".")+answerText2.length-answerText2.toString().indexOf(".")+1)
                }
            }
            answerText = displayAnswer.innerHTML
            answerText2 = `0` 
            secondNumber = false
        }
    }
    if(currentOperator == "div"){
        if(answerText2.toString() == "0" || answerText2 == ""){
            displayAnswer.style.color = "#ec1c24"
            displayAnswer.innerHTML = "Нельзя делить на ноль"
        }
        else{
            displayAnswer.innerHTML = parseFloat(answerText)/parseFloat(answerText2)
        }

        answerText = displayAnswer.innerHTML
        answerText2 = `0`
        secondNumber = false

    }
    if(currentOperator == "pow"){
        displayAnswer.innerHTML = parseFloat(answerText)**parseFloat(answerText2)
        answerText = displayAnswer.innerHTML
        answerText2 = `0`
        secondNumber = false
    }
    if(currentOperator == "rt"){
        displayAnswer.innerHTML = parseFloat(answerText)**(1/parseFloat(answerText2))
        answerText = displayAnswer.innerHTML
        answerText2 = `0`
        secondNumber = false
    }
    if(currentOperator == "log"){
        displayAnswer.innerHTML = Math.log10(parseFloat(answerText))/Math.log10(parseFloat(answerText2))
        answerText = displayAnswer.innerHTML
        answerText2 = `0`
        secondNumber = false
    }
    
}

function changeInput(operator){
    if(!secondNumber){
        secondNumber = true
        displayAnswer.innerHTML = "0"
        currentOperator = operator
        if(currentOperator == "sum"){document.getElementById("operation-text").innerHTML = "+"}
        if(currentOperator == "sub"){document.getElementById("operation-text").innerHTML = "-"}
        if(currentOperator == "mul"){document.getElementById("operation-text").innerHTML = "*"}
        if(currentOperator == "div"){document.getElementById("operation-text").innerHTML = "÷"}
        if(currentOperator == "pow"){document.getElementById("operation-text").innerHTML = "^"}
        if(currentOperator == "pow"){document.getElementById("operation-text").innerHTML = "√"}
        if(currentOperator == "log"){document.getElementById("operation-text").innerHTML = "log"}
    }
        
    }


function inverseSign(){
    if(!secondNumber){
        if(answerText == ""){
            answerText = "0"
        }
        answerText = `${0-parseFloat(answerText)}`
        displayAnswer.innerHTML = answerText
    }
    else{
        if(answerText2 == ""){
            answerText2 = "0"
        }
        answerText2 = `${0-parseFloat(answerText2)}`
        displayAnswer.innerHTML = answerText2
    }

}

function findPercent(){
    if(!secondNumber){
        answerText = parseFloat(answerText)/100
        displayAnswer.innerHTML = answerText
    }
    else{
        answerText2 = parseFloat(answerText2)/100
        displayAnswer.innerHTML = answerText2
    }
}

function addDot(){
    if(!secondNumber){
        if(!answerText.toString().includes(".")){
            if(answerText.length == 0){
                answerText = "0."
            }
            else{
                answerText = answerText + "."
            }
            displayAnswer.innerHTML = answerText
        }
        
    }
    else{
        if(!answerText2.toString().includes(".")){
            if(answerText2.length == 0){
                answerText2 = "0."
            }
            else{
                answerText2 = answerText2 + "."
                
            }
            displayAnswer.innerHTML = answerText2
        }
        

    }
}

function switchDegRad(){
    if(RadOrDeg == 0){
        RadOrDeg = 1
        document.getElementById("radian-button").innerHTML = `DEG`
    }
    else{
        RadOrDeg = 0
        document.getElementById("radian-button").innerHTML = `RAD`
    }
}
