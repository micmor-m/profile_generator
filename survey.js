const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? ', (answer7) => {
              console.log(``);
              console.log(`------------------------------------------------------`);
              console.log(`Name: ${answer1}`);
              console.log(`Favorite activity: ${answer2}`);
              console.log(`Music listened when doing favorit activity: ${answer3}`);
              console.log(`Favorite meal:${answer4}`);
              console.log(`Favorit thing t eat at favorite meal: ${answer5}`);
              console.log(`Favorite sport: ${answer6}`);
              console.log(`Superpower:${answer6}`);
              console.log(`------------------------------------------------------`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
