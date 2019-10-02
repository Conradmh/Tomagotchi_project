class Tomagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 0,//1-10,
    this.sleepiness = 0, //1-10
    this.boredom = 0, //1-10
    this.age = 0
  }

  changeName(){
    tomagotchi.name = prompt(`Please name your new little creature`);
    return tomagotchi.name;
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
const tomagotchi = new Tomagotchi(/*name*/);
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
  console.log(tomagotchi.name);
});

$('form' /*#submitBut*/).on('submit', (e) => {
  tomagotchi.name = $('#inputBox').val();
  console.log(tomagotchi.name);
  //console.log('clicked');
  //console.log( $('#inputBox').val());
  e.preventDefault();
  $('form').hide();
});
