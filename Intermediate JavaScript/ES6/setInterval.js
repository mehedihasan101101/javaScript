let n = 1;
setInterval(()=>{
    n++;
    console.log(n)
}
,2000);

//set interval works like set time out but in different way. it execute the same task again and again by following a specific time frame.

//to stop set time interval.

let x = 2;
const clockId = setInterval(()=>{
    x++;
    if(x >7){
        clearInterval(clockId);
    }
    console.log(x);
}
,2000);