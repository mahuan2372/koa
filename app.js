async function f() {
   console.log(300)
   let t= await new Promise(function(r,j){
        setTimeout(function(){r(100)},2000)
   });
   console.log(t)
};
f();