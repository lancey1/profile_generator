const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your Nickname?', (answer1) => {
  rl.question("What are your hobbies?" , (answer2) => {
    rl.question("What is your favorite music genre?" , (answer3) => {
      rl.question("What's your favorite meal?" , (answer4) => {
        rl.question("What is your favorite sport?" , (answer5) => {
          rl.question("If you could choose a superpower what would it be?" , (answer6) => {
            console.log(`Welcome ${answer1}! My favorite sport is also ${answer2}. ${answer3} is a good choice. ${answer4} is very delicious. ${answer5} is really fun. ${answer6}, I would've chosen that too!`);
            rl.close();
          });
        });
      });
    });
  });
});