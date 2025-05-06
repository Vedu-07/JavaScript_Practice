function step1(callback){
    setTimeout(() => {
        console.log("Step 1 Completed");
        callback(); 
    },1000);
}
function step2(callback){
    setTimeout(() => {
        console.log("Step 2 Completed");
        callback(); 
    },1000);
}
function step3(callback){
    setTimeout(() => {
        console.log("Step 3 Completed");
        callback(); 
    },1000);
}

step1(()=>{
    step2(()=> {
        step3(()=>{
            console.log("All Steps Completed");
        })
    })
})