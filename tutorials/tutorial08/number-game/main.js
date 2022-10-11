// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

//make a counter!
let counter = 0;


function check() {
    // your code here.
    // counter += 1;
    // counter++
    counter = counter + 1
    // 1) get user input and store in a varaiable
    let userGuess = document.querySelector('#guess').value;
    console.log(userGuess);

    // 2) convert the value (string) to a number
    userGuess = Number(userGuess)
    console.log(userGuess)

    // 3) check if useer input is the same as "secret"
    // psuedo code if 'guess' === 'secret": You win
    // if 'guess' < 'secret': Too high!
    // if 'guess' > 'secret': Too low!
    // if 'guess' === 420: Way too high (emoji)
    if (userGuess === 420) {
        console.log('Way too high')
        document.querySelector('#message').innerHTML = "Way too high"

    } else if (userGuess === secret) {
        console.log('You Win!')
        document.querySelector('#message').innerHTML = "You're the Moon Master";
        document.querySelector('#celebrate').className = ''

    } else if (userGuess < secret) {
        console.log('Too Low!')
        document.querySelector('#message').innerHTML = 'Too Low!'

    } else if (userGuess > secret) {
        console.log('Too High!');
        document.querySelector('#message').innerHTML = 'Too High!'
    } 
 
    document.querySelector('#num-guesses').innerHTML
    = 'You have guessed ' + counter + ' time(s)'
}