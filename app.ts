const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
const buttonElement = document.querySelector('button')!

const numResult:number[] = []

function add(num1:number,num2:number){
    return num1+num2
}

function printResult(resultObj:{val:number;timestamp:Date}){
    console.log(resultObj)
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value
    const num2 = num2Element.value
    const result = add(+num1,+num2)
    numResult.push(result)
    // console.log(result)
    printResult({val:result,timestamp:new Date})
    console.log(numResult)
})