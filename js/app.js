class Tomagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 0,//1-10,
    this.sleepiness = 0, //1-10
    this.boredom = 0, //1-10
    this.age = 0
  }

};

const game ={
  time: 0,
  pet: null,
  //timer belongs in game
  //only one timer in game, no multiple setIntervals
  //lightswitch function decl here
  // a good function ex. print(values(all values, no nuance))
  start: function(){
    const tomagotchi = new Tomagotchi($('#inputBox').val());
    this.pet = tomagotchi;
    // this.pet.name = $('#inputBox').val();

  //  console.log(tomagotchiName, 'before');
    // this.pet = tomagotchiName;
    console.log(this.pet, 'last');

 }
}



//--------
//listeners
//no logic down here
//only call functions
// $('').on('click')

$('form').on('submit', (e) => {
  $('#inputBox').val()
  e.preventDefault();
  $('form').hide();
  $('inputBox').html();
  game.start();

});
