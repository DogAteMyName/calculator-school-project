let factorialAnswer2
let iterations
let iterationsLeft
let taylorFormula = ''
let originalFormula
let offset = parseFloat(document.getElementById("f-os").value)

function factorial(n){
    factorialAnswer2 = 1
    for(let i = 1;i < n+1; i++){
        factorialAnswer2 *= i
    }
}


function calculateTaylorSeries(){
    try{
        offset = parseFloat(document.getElementById("f-os").value)
        originalFormula = document.getElementById("inputFormula").value.toString().split("Math.").join("")
        iterations = document.getElementById("f-it").value
        taylorFormula = ""
        
        for(iterationsLeft = 0; iterationsLeft < iterations;iterationsLeft++){
    
            factorial(iterationsLeft)
            taylorFormula = `${taylorFormula}+(${nerdamer(originalFormula,{x:offset}).evaluate()}/${factorialAnswer2}*(x-(${offset}))^${iterationsLeft})`
            originalFormula =   nerdamer(`diff(${originalFormula},x)`).toString()
        }
        taylorFormula = taylorFormula.slice(1, taylorFormula.length)
        document.getElementById("taylor-expansion").value = taylorFormula
    }
    catch(err){
        document.getElementById("taylor-expansion").value = err.message 
    }
    
}