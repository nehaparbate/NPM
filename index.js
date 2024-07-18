import generateName from 'sillyname';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter 1 to output a silly name and 0 for a superhero name: ', (num) => {
  if (num === '1') {
    const sillyName = generateName();
    console.log(`My name is ${sillyName}.`);
  } else if (num === '0') {
    // Assuming you also want to use a superhero name here, though it should be a separate package
    // For demonstration, using the same function
    const superhero = generateName();
    console.log(`My superhero name is ${superhero}.`);
  } else {
    console.log('Invalid input. Please enter 1 or 0.');
  }
  rl.close();
});
