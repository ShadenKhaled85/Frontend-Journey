const quotes = [
    '"Be yourself; everyone else is already taken."―- Oscar Wilde',
    '"So many books, so little time."― Marilyn Monroe',
    '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."-― Albert Einstein',
    '"A room without books is like a body without a soul."― Marcus Tullius Cicero',
    '"Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind."― Bernard M. Baruch',
    '"Do what you can, with what you have, where you are." -- Theodore Roosevelt',
    '"The best way to predict the future is to invent it." -- Alan Kay',
    '"Strive not to be a success, but rather to be of value." -- Albert Einstein',
    '"Life is 10% what happens to us and 90% how we react to it." -- Charles R. Swindoll',
    '"The only way to do great work is to love what you do." -- Steve Jobs',
    '"You know you are in love when you cant fall asleep because reality is finally better than your dreams." -- Dr. Seuss',
    '"You only live once, but if you do it right, once is enough." -- Mae West',
    '"Be the change that you wish to see in the world." -- Mahatma Gandhi',
    '"In three words I can sum up everything I have learned about life: it goes on." -- Robert Frost',
    '"If you tell the truth, you dont have to remember anything." -- Mahatma Gandhi',
    '"Be the change that you wish to see in the world." -- Mark Twain',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." -- Mahatma Gandhi',
    'We accept the love we think we deserve." -- Stephen Chbosky',

];

/*
var lastQuote = null; // Track the last displayed quote
// Function to generate a random quote
function generateQuote(){
    let randomIndex;
    let randomQuote;
    do{
        randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
        randomQuote = quotes[randomIndex]; // Get a random quote
    }while(lastQuote===randomQuote) // Repeat if the quote is the same as the last one
    lastQuote = randomQuote; // Update the last displayed quote
    document.getElementById("quote").textContent = randomQuote; // Display the quote
}
*/

let remainingQuotes = [...quotes]; // Create a copy of the quotes array

// Function to generate a random quote
function generateQuote() {
    if (remainingQuotes.length === 0) {
        remainingQuotes = [...quotes]; // Reset the array if all quotes have been shown
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length); // Generate a random index
    const randomQuote = remainingQuotes[randomIndex]; // Get a random quote
    remainingQuotes.splice(randomIndex, 1); // Remove the displayed quote from the array

    document.getElementById("quote").textContent = randomQuote; // Display the quote
}
