function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M0XcOscfl/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    document.getElementById("result_label").innerHTML = 'The dog or cat sound is...'+ results[0].label;
    document.getElementById("result_accuracy").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;


    img = document.getElementById('animal_image');

    if (results[0].label == "dog bark") {
      img.src = 'barking-gif.gif';
      dog = dog+1;
    } else if (results[0].label == "cat meow") {
      img.src = 'meowing-gif.gif';
      cat = cat + 1;
    } else{
      img.src= 'https://www.animatedimages.org/data/media/1146/animated-dogs-and-cats-image-0004.gif'
    }
  }
}