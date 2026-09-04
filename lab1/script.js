const quotes = [
    {
        text: "Nu contează cât de încet mergi, atâta timp cât nu te oprești.",
        author: "Confucius"
    },
    {
        text: "Singurul mod de a realiza lucruri grozave este să iubești ceea ce faci.",
        author: "Steve Jobs"
    },
    {
        text: "Succesul nu este final, eșecul nu este fatal: curajul de a continua este ceea ce contează.",
        author: "Winston Churchill"
    },
    {
        text: "Fii schimbarea pe care vrei să o vezi în lume.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Viața este ceea ce se întâmplă în timp ce ești ocupat să îți faci alte planuri.",
        author: "John Lennon"
    }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const button = document.getElementById('new-quote-btn');

let index = 0;

function generateQuote() {
    const selectedQuote = quotes[index];
    
    quoteText.innerText = `"${selectedQuote.text}"`;
    authorText.innerText = `- ${selectedQuote.author}`;
    
    index = index + 1;
    
    if (index === quotes.length) {
        index = 0;
    }
}

button.addEventListener('click', generateQuote);
