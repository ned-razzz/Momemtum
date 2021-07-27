const quotes = [
	{
		quote: "Be yourself; everyone else is already taken.",
		author: "Oscar Wilde"
	},
	{
		quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		author: "Albert Einstein"
	},
	{
		quote: "So many books, so little time.",
		author: "Frank Zappa"
	},
	{
		quote: "A room without books is like a body without a soul.",
		author: "Marcus Tullius Cicero"
	},
	{
		quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		author: "Bernard M. Baruch"
	},
	{
		quote: "You only live once, but if you do it right, once is enough.",
		author: "Mae West"
	},
	{
		quote: "Be the change that you wish to see in the world.",
		author: "Mahatma Gandhi"
	},
	{
		quote: "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
		author: "Albert Camus"
	},
	{
		quote: "If you tell the truth, you don't have to remember anything.",
		author: "Mark Twain"
	},
	{
		quote: "I have not failed. I've just found 10,000 ways that won't work.",
		author: "Thomas A. Edison"
	}
];

const quote_element = document.querySelector("#quote span:first-child")

const author_element = document.querySelector("#quote span:last-child")

function getIntFromZero(range) {
	return Math.floor(Math.random() * range);
}

const todaysQuote = quotes[getIntFromZero(quotes.length)];

quote_element.innerText = todaysQuote.quote;
author_element.innerText = todaysQuote.author;
