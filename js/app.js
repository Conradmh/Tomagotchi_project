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

          $timer.text(`timer: ${this.time}`)

          this.tomagotchiDeathInc();
          this.updateStats();
          this.time--;
          this.pet.age += 0.5;
          this.killTomagatchi(interval);
          this.lightsOn();
          this.winState(interval);
          this.evolve();
          this.evolve2();
      }, 1100)

  },

  start(){
    const tomagotchi = new Tomagotchi($('#inputBox').val());
    this.pet = tomagotchi;
    console.log(this.pet, 'last');
    this.startTimer();
  },

  killTomagatchi(interval){
    if ((this.pet.hunger >= 10) || (this.pet.sleepiness >= 10) ||     (this.pet.boredom >= 10)) {
      $('#tImage').hide();
      const $win = $('#winPhrase');
      $win.text(`You Lose!`);
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
    const $win = $('#winPhrase');
    if (game.time === 0) {
      $win.text(`You won!`);
      clearInterval(interval);

    }
  },
  lightsOn(interval){
    if (this.pet.sleepiness == 4) {
      $('body').css('background', 'url(http://www.jhgphoto.com/storage/thumbnails/3044724-19889236-thumbnail.jpg?__SQUARESPACE_CACHEVERSION=1345048726279)')
      $('body').css('background-size', 'cover')
      $('body').css('background-repeat', 'no-repeat')
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
    // game.tRexBounce();
    this.pet.boredom -= 3;
  },
  evolve(interval){
    if(this.pet.age % 8 == 0){
      $('#tImage').css('height', '85%');
      $('#tImage').css('width', '100%');
    }
  },
  evolve2(interval){
    if(this.pet.age % 16 == 0){
      $('#tImage').css('height', '125%');
      $('#tImage').css('width', '150%');
    }
  },
  // tRexBounce(){
  //   // $('#tImage').animate({
  //   //   transform: ['translateX(20px)', 'translateX(-20px)']},
  //   //   {
  //   //   duration: 400,
  //   //   iterations: 5,
  //   //   });
  //
  //     $('#tomagotchi').animate({
  //         transform: ['translateX(150px)'],
  //         duration: 3
  //     });
  //     $('#tomagotchi').animate({
  //         transform: ['translateX(-150px)'],
  //         duration: 3
  //
  //     });
  // },
  updateStats(){
    const $hunger = $('#hunger');
    const $sleepiness = $('#sleepiness');
    const $boredom = $('#boredom');
    const $age = $('#age');
    const $name = $('#name');
    // $this.pet.boredom++;
    // $this.pet.sleepiness++;
    // $this.pet.hunger = this.pet.hunger + 2;

    $hunger.text(` Hunger: ${this.pet.hunger}`);
    $sleepiness.text(` Sleepiness: ${this.pet.sleepiness}`);
    $boredom.text(` Boredom: ${this.pet.boredom}`);
    $age.text(` Age: ${this.pet.age}`);
    $name.text(`${$('#inputBox').val()}`);
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
 $('body').css('background', 'url(https://i.redd.it/puhiuz7r4msz.jpg)')
 $('body').css('background-size', 'cover')
 $('body').css('background-repeat', 'no-repeat')

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
