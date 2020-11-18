const simplequotes = [
    {
        nameof:' Elbert Hubbard',
        quote:'A friend is someone who knows all about you and still loves you.'
    }
    ,
    {
        nameof:'Marilyn Monroe',
        quote:'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    }
    ,
    {
        nameof:' Albert Camus',
        quote:'Don’t walk in front of me… I may not follow Dont walk behind me… I may not lead   Walk beside me… just be my friend'
    }
    ,
    {
        nameof:' Eleanor Roosevelt',
        quote:'No one can make you feel inferior without your consent.'
    }
    ,
    {
        nameof:'Mark Twain',
        quote:'If you tell the truth, you dont have to remember anything.'
    }
    ,
    {
        nameof:' C.S. Lewis',
        quote:'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .'
    
    }
];
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*simplequotes.length);
    quoteAuthor.innerHTML = simplequotes[number].nameof;
    quote.innerHTML = simplequotes[number].quote;
}