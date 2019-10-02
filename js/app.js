class Tomagotchi {
  constructor(name, hunger,sleepiness, boredom, age){
    this.name = name;
    this.hunger = hunger,//1-10,
    this.sleepiness = sleepiness, //1-10
    this.boredom = boredom, //1-10
    this.age = age
  }

  changeName(){
    tomagotchi.name = prompt(`Please name your new little creature`);
  }
//   myMove: function() {
//   var elem = document.getElementById("animate");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

};
const tomagotchi = new Tomagotchi('rob'/*name*/);
const game ={
  time: 0,
  //timer belongs in game
  //only one timer in game, no multiple setIntervals
  //lightswitch function decl here
  // a good function ex. print(values(all values, no nuance))
};






//--------
//listeners
//no logic down here
//only call functions
// $('').on('click')

$('#start').on('click', (e) => {
  tomagotchi.changeName();
  console.log('name');
});
