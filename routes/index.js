var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: "#FFFFFF",
    textColor: "#000000"
  });
});

router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  });
})

module.exports = router;

function getStory(formData) {
 if (formData.storyChoice === "4") {
   formData.storyChoice = getRandomInt(3).toString();
 }
    if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function generateStory1(formData){
  return `Inside the dark and gloomy forest, there once was a little orange fox who lived in a cave full of food. Berries, apples, and other fruits all laid on top of a shelf made of ${formData.noun1} with a ${formData.adjective1} surface that some strawberries apples ${formData.verb1} away. Once a week the fox would go on a stroll along the path, visiting other animals who lived nearby.  

The fox would then give his ${formData.noun2} some of his fruits. To the ${formData.noun3} who lived upstream, he gave a ${formData.adjective2} and soft pear. “Thanks” said the tortoise as he gave the fox a ${formData.verb2}. To the wolves who lived in between the trees and under, was a handful of ${formData.adjective3} berries. The wolves aggressively started to ${formData.verb3} as the little fox scurried away. To the owl who lives just above the cherry tree, was some snails and worms, which fox handpicked just for owl. The owl hooted in acknowledgement as he ${formData.verb4} back inside his home.  

As the fox wandered the forest joyfully, following the steep dirt path it discovered something new. A ${formData.adjective4} open grass area filled with flowers, trees, and more animals it has never met before. The fox ran joyously through the ${formData.adjective5} flowers as the leaves fell from the trees. Different colored apples fell from the trees, some green and some yellow, each with their own taste.  

Behind the tree filled with apples lay a wonderful waterfall that carried bliss to all who saw it. Inside the stream, the waterfall produced, were many shining ${formData.noun4} that swam in the water. Some had purple scales, others had a light blueish color. The fox dropped some berries the size of pebbles for the fish. Nearby and hidden fish ${formData.verb5} to eat the berries in glee.  

Not long after, the moon started to rise. The fox hurried home running past the tree full of apples, past the big grass area, past the colorful flowers, past the cherry trees, then ran along the dirt path then soon he was at his cave full of food. He took a couple of bites of his apples before going to sleep and wondering what other joyful adventures await next.  `
}

function generateStory2(formData){
  return `Today I went to my favorite Taco Stand called the ${formData.adjective1} Fox. Unlike most food stands, they cook and ${formData.verb1} the food in a Plane while you ${formData.verb2}. The best thing on the menu is the ${formData.adjective2} ${formData.noun1}. Instead of ground beef they fill the taco with Tacos, cheese, and top it off with a salsa made from ${formData.noun2}. If that doesn't make your mouth water, then it' just like Obama always says: Fuck You!`
}

function generateStory3(formData){
  return `Walking down the path the ${formData.adjective1} Dog spots a ${formData.noun1} near a tree. ${formData.adjective2} sneaking up on it, the dog plans to ${formData.verb1} the cat. As the dog approaches, the cat turns around and ${formData.verb2} before running away.`
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

