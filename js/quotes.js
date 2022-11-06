const quotes = [
    {
        quotes: "You will face many defeats in life, but never let yourself be defeated",
        autuor: "Maya Angelou"
    },
    {
        quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        autuor: "Nelson Mandela"
    },
    {
        quotes: " In the end, it's not the years in your life that count. It's the life in your years. ",
        autuor: "Abraham Lincol"
    },
    {
        quotes: " Never let the fear of striking out keep you from playing the game.",
        autuor: "Babe Ruth"
    },
    {
        quotes: "Life is either a daring adventure or nothing at all.",
        autuor: "Helen Keller"
    },
    {
        quotes: "Many of life's failures are people who did not realize how close they were to success when they gave up. ",
        autuor: "Thomas A. Edison"
    },
    {
        quotes: " I don't go by the rule book…I lead from the heart, not the head. ",
        autuor: "Princess Diana"
    },

    {
        quotes: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        autuor: "Dr. Seuss"
    },

    {
        quotes: " Being happy never goes out of style. ",
        autuor:  "Lilly Pulitzer"
    },

    {
        quotes: "Life is either a great adventure or nothing.",
        autuor: "Helen Keller"
    }
]; // array안의 object들이라 이렇게 표기한다

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*
console.log(quotes[10-1]);
math.round()=>소수 뒤에 버리고 반올림
  math.ceil() => 올림
  math.floor() => 버림
  */

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.autuor;
