class Tomagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 1,//1-10,
    this.sleepiness = 1, //1-10
    this.boredom = 1, //1-10
    this.age = 0
  }

};

const game ={
  time: 30,
  pet: null,
  //timer belongs in game
  //only one timer in game, no multiple setIntervals
  //lightswitch function decl here
  // a good function ex. print(values(all values, no nuance))
  startTimer(){
        const $timer = $('#timer');
        const interval = setInterval(() => {
          if (this.time !== 0){
            this.time--;
            this.tomagotchiDeathInc();
          } else {
              clearInterval(interval);
          }
            $timer.text(`timer: ${this.time}`)

      }, 1000)

  },

  start(){
    const tomagotchi = new Tomagotchi($('#inputBox').val());
    this.pet = tomagotchi;
    console.log(this.pet, 'last');
    this.killTomagatchi();
    this.startTimer();
  },

  killTomagatchi(){
    if (this.pet.hunger === 10 || this.pet.sleepiness === 10 ||     this.pet.boredom === 10) {
      $('#tomagotchi').hide();
    }
  },

  tomagotchiDeathInc(){
    this.pet.hunger++;
    this.pet.sleepiness++;
    this.pet.boredom++;
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

// $('#start').on('click', () => {
//   game.start();
//   $('#start').hide();
// });

// tomagotchiDeathInc: function(){
//   this.hunger++;
//   this.sleepiness++;
//   this.boredom++;
// }
