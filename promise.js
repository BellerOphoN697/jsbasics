let a=247
function Calc(a){
    return new Promise((res,rej)=>{
        if(a%2==0){
            res("Even")
            
        }
        else{
            rej("Odd")
        }
    })
}
function Even(value){
    console.log(value)
}
function Odd(error){
    console.log(error)
}
Calc(a).then(Even).catch(Odd)