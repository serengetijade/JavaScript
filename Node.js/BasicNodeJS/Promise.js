//Define a Promise
let chicken = new Promise(function(resolve,reject){
    let amount = makeEgg(2);    
    return resolve(amount)
})
//Chain promises
chicken.then(function(amount){
    let eggResult = incubateEgg(amount);
    if (eggResult <=0)
        throw err;
    return eggResult;
})
//Catch statement to handle errors
.catch(function(e){
    makeOmlette();
})

//makeEgg, incubateEgg, and makeOmlette are functions not defined in this example.