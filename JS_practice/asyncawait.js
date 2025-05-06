function step1(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Step 1 Completed");
            resolve();
        },1000)
    })
}
function step2(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Step 2 Completed");
            resolve();
        },1000)
    })
}
function step3(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Step 3 Completed");
            resolve();
        },1000)
    })
}

async function runFunction() {
    await step1();
    await step2();
    await step3();
    console.log("Doneeee");
}

runFunction();