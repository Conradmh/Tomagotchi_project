class Tomagotchi {
  constructor: (eat, sleep, play){
    this.eat = eat;
    this.sleep = sleep;
    this.play = play;
  }
  name: 'nagato',
  hunger: 1,//1-10,
  sleepiness: 1, //1-10
  boredom: 1, //1-10
  age:  0

  myMove: function() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

};
const tomagotchi = new Tomagotchi;
const game ={
  
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
