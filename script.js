//display no in trext box
function buttonClick(num){
 result.value+=num
}

// clear text box
function clearbox(){
    result.value=""
}

// evaluate expression
function evaluateExpression(){
    expression=result.value
   output= eval(expression)
   result.value=output
}

//remove last item
function removeLastItem(){
    currentexpression=result.value
    result.value=currentexpression.slice(0,-1)
}