var qoutes = [
  {
    qoute: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    auther:`Marilyn Monroe`,
  },
  {
    qoute: `Be yourself; everyone else is already taken.`,
    auther:`Oscar Wilde`,
  },
  {
    qoute: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    auther:`Albert Einstein`,
  },
  {
    qoute: `So many books, so little time.`,
    auther:`Frank Zappa`,
  },
  {
    qoute: `A room without books is like a body without a soul.`,
    auther:`Marcus Tullius Cicero`,
  },
  {
    qoute: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    auther:`Bernard M. Baruch`,
  },
  {
    qoute: `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`,
    auther:`William W. Purkey`,
  },
  {
    qoute: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    auther:`Dr. Seuss`,
  },
  {
    qoute: `You only live once, but if you do it right, once is enough.`,
    auther:`Mae West`,
  },
  {
    qoute: `Be the change that you wish to see in the world.`,
    auther:`Mahatma Gandhi`,
  },
  {
    qoute: `In three words I can sum up everything I've learned about life: it goes on.`,
    auther:`Robert Frost`,
  },
  {
    qoute: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
    auther:`J.K. Rowling, Harry Potter and the Goblet of Fire`,
  },
]

var previousRandom = -1;

function getRandom() {
  var random;
  do {
    random = Math.floor(Math.random() * qoutes.length);
  } while (random === previousRandom);
  previousRandom = random;
  document.getElementById('qoute').innerHTML = qoutes[random].qoute;
  document.getElementById('auther').innerHTML = '― ' + qoutes[random].auther;
}

