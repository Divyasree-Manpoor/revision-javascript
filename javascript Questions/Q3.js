function MySetInterval(callback,delay){
let timerId;
    function run(){
        callback()
    timerId=setTimeout(run,delay);
    }
    return run;
}

setTimeout(()=>{
    console.log("stopped");
},6000)