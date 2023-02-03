module.exports = function print(message){
    console.log('**********');
    console.log(message);
    console.log('**********');
}
//The top level export is the captured print variable (from text/index.js), which is a function
//print = the name of the function
//message = the name of the argument passed to the function