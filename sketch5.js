var input;
var inputP;

var kenText;
var amyText;
var simonText;
var talkText;
var markov;

function setup() {

  document.body.style.backgroundImage = "url('images/ted.jpg')";

  noCanvas();
  input = select('#textArea'); //input A
  inputP = select('#textAreaP');

  kenText = loadStrings('data/ken.txt'); //input B
  amyText = loadStrings('data/amy.txt');
  simonText = loadStrings('data/simon.txt');

  var kenButton = select('#ken');
  kenButton.mousePressed(soundLikeKen);
  var amyButton = select('#amy');
  amyButton.mousePressed(soundLikeAmy);
  var simonButton = select('#simon');
  simonButton.mousePressed(soundLikeSimon);
}

function soundLikeKen () {

  document.body.style.backgroundImage = "url('images/ken.jpg')";

  //get the user input text
  talkText = input.value();

  //merge both text sources
  textP = talkText + kenText;

  // Make the markov generator each time we generate text!
  markov = new MarkovGenerator(5, talkText.length);
  
  //feed the text into a Markov chain
  markov.feed(textP);

  //Generate some text and show it
  var kenOutput = markov.generate();
  console.log(kenOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', kenOutput);
  newPText.parent(newP);
  newP.parent(inputP);
}

function soundLikeAmy () {

  document.body.style.backgroundImage = "url('images/amy2.jpg')";

  //get the user input text
  talkText = input.value();

  //merge both text sources
  textP = talkText + amyText;

  // Make the markov generator each time we generate text!
  markov = new MarkovGenerator(5, talkText.length);
  
  //feed the text into a Markov chain
  markov.feed(textP);

  //Generate some text and show it
  var amyOutput = markov.generate();
  console.log(amyOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', amyOutput);
  newPText.parent(newP);
  newP.parent(inputP);
}

function soundLikeSimon () {

  document.body.style.backgroundImage = "url('images/simon.jpg')";

  //get the user input text
  talkText = input.value();

  //merge both text sources
  textP = talkText + simonText;

  // Make the markov generator each time we generate text!
  markov = new MarkovGenerator(4, talkText.length);
  
  //feed the text into a Markov chain
  markov.feed(textP);

  //Generate some text and show it
  var simonOutput = markov.generate();
  console.log(simonOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', simonOutput);
  newPText.parent(newP);
  newP.parent(inputP);
}