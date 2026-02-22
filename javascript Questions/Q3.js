function MySetInterval(callback,delay){
let Id;
    function run(){
        callback()
    Id=setTimeout(run,delay);
    }
    run();
    return Id;
}

setTimeout(()=>{
    console.log("stopped");
},6000)