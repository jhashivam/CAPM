////Example 2: using Promises in JavaScript

//Whatever your asyc logic is, you need tie it with a promise
const timerFunction = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, ms);
    });
}


///Create a wrapper function over the promise – can be called both sync (async…await) or asyc
const callMyFunction= () => {
    return timerFunction(5000).then(() => {
        console.log("2. John comes at 8 AM and collects the key");
    });
}

//The main function which will be called
//async keyword will allow us to use await inside the function - 
// that will wait for the promise to resolve - achieve synchronous behaviour
const julie = async () => {
    console.log("1. Hello I am Julie, I wake up and getting ready for office");
    await callMyFunction();
    console.log("3. Julie: I am ready, now calling Uber, and left at 7 AM");
}

julie();

/// Example 1: using callbacks in java script

// function julie(){
//     console.log("1. Hello I am Julie, I wake up and getting ready for office");

//     ////WAIT FOR 5 SECONDS ////
//     //John function which is a asynchronous function
//     setTimeout(
//         //Rob Uncle - the callback function which will be called after 5 seconds
//         function(){
//             console.log("2. John comes at 8 AM and collects the key");
//         },
//         5000);

//     console.log("3. Julie: I am ready, now calling Uber, and left at 7 AM");
// }

// julie();