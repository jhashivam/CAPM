//A module provided by Node JS out of the box to work with events
const events = require('events');
const util = require('util');

//define a custom class
var Pokymon = function(name){
    this.name = name;
}

//inherit the EventEmitter class/methods
util.inherits(Pokymon, events.EventEmitter);

//create an instance of Pokymon
var pikachu = new Pokymon('Pikachu');
var raichu = new Pokymon('Raichu');

//add them in an array
var pokymonArr = [pikachu, raichu];

//create event handlers (listeners) for each pokymon - on will register the event
pokymonArr.forEach(function(pokymon){
    pokymon.on('attack', function(move){
        console.log(`${this.name} used ${move} attack!`);
    });
    pokymon.on('jump', function(meter){
        console.log(`${this.name} jumped ${meter} meters!`);
    });
});

//Sony Creates a controller of the game - emit will trigger the event
raichu.emit('attack', 'Thunder Shock');
pikachu.emit('jump', 5);



/// Ctrl+/ to comment and uncomment multiple lines ///

// //Create an instance of EventEmitter
// const anubhav = new events.EventEmitter();

// //create an event handler (listener)
// anubhav.on('speak', () => {
//     console.log("Anubhav is speaking");
// });
// anubhav.on('dance', () => {
//     console.log("Anubhav is dancing");
// });
// anubhav.on('walk', () => {
//     console.log("Anubhav is walking");
// });

// //Raise the events
// anubhav.emit('speak');
// anubhav.emit('dance');
// anubhav.emit('walk');