function createRateLimiter(limit,time){
    let count=0
        setInterval(()=>{
            (count=0)
        },time);

        return function(){
            if(count<limit){
                count++;
                console.log("Allowed")
            }else{
                console.log("not allowed")
            }
        }
    
}
const limiter=createRateLimiter(3,5000)

limiter();
limiter();
limiter();
limiter();