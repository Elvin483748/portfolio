

const count1=document.querySelector("#count1")
const count2=document.querySelector('#count2')
const count3=document.querySelector('#count3')
   let counter=0;


const interval=setInterval(()=>{
    counter++;
    count1.innerHTML=counter
    if(counter>=378){
        clearInterval(interval)
    }
},43)




let counter2=0
const interval2=setInterval(()=>{
    counter2++;
    count2.innerHTML=counter2
    if(counter2>=30){
        clearInterval(interval2)
    }
},549)


let counter3=0

const interval3=setInterval(()=>{
    counter3++
    count3.innerHTML=counter3
    if(counter3>=2263){
        clearInterval(interval3)
    }
},2)