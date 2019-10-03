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
  time: 60,
  pet: null,
  //timer belongs in game
  //only one timer in game, no multiple setIntervals
  //lightswitch function decl here
  // a good function ex. print(values(all values, no nuance))
  startTimer(){
        const $timer = $('#timer');
        const interval = setInterval(() => {

          $timer.text(`timer: ${this.time}`)

          this.tomagotchiDeathInc();
          this.updateStats();
          this.time--;
          this.pet.age += 0.5;
          this.killTomagatchi(interval);
          this.lightsOn();
          this.winState();
      }, 1200)

  },

  start(){
    const tomagotchi = new Tomagotchi($('#inputBox').val());
    this.pet = tomagotchi;
    console.log(this.pet, 'last');
    this.startTimer();
  },

  killTomagatchi(interval){
    if ((this.pet.hunger >= 10) || (this.pet.sleepiness >= 10) ||     (this.pet.boredom >= 10)) {
      $('#tomagotchi').hide();
      clearInterval(interval);
    }
  },

  tomagotchiDeathInc(){
    // while (this.pet.hunger < 10 || this.pet.sleepiness < 10 ||     this.pet.boredom < 10) {
    //   if (this.time % 2 === 0) {
        this.pet.hunger++;
        this.pet.sleepiness++;
        this.pet.boredom++;
      // }
    //}
  },
  winState(interval){
    const $win = $('#win');
    if (game.time === 0) {
      clearInterval(interval);
      $win.html(`You won!`);
    }
  },
  lightsOn(interval){
    if (this.pet.sleepiness == 4) {
      $('body').css('background-color', 'yellow')
    }
  },
  lightsOff(){

  //$('body').css('background-color', 'blue');
    this.pet.sleepiness = 1;
  },
  fillBelly(){
    //  const $feed = $('#feed');
    this.pet.hunger -= 2 ;
  },
  throwBone(){
    //  const $excite = $('#excite');
    this.pet.boredom -= 3;
  },
  evolve(){
    if(this.pet.age == 8){

    }
  },
  updateStats(){
    const $hunger = $('#hunger');
    const $sleepiness = $('#sleepiness');
    const $boredom = $('#boredom');
    const $age = $('#age');
    // $this.pet.boredom++;
    // $this.pet.sleepiness++;
    // $this.pet.hunger = this.pet.hunger + 2;

    $hunger.text(`${this.pet.name}s Hunger: ${this.pet.hunger}`)
    $sleepiness.text(`${this.pet.name}s Sleepiness: ${this.pet.sleepiness}`)
    $boredom.text(`${this.pet.name}s Boredom: ${this.pet.boredom}`)
    $age.text(`${this.pet.name}s Age: ${this.pet.age}`)

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

$('#rest').on('click', () => {
  console.log('this rest button works')
  game.lightsOff();
 $('body').css('background-color', 'blue')
});

$('#feed').on('click', () => {
  game.fillBelly();

});
$('#excite').on('click', () => {
  game.throwBone();

});
// tomagotchiDeathInc: function(){
//   this.hunger++;
//   this.sleepiness++;
//   this.boredom++;
// }
