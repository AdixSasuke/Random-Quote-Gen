const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "The purpose of our lives is to be happy.",
          "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "You can observe a lot just by watching.",
      "A house divided against itself cannot stand.",
      "Difficulties increase the nearer we get to the goal.",
      "Fate is in your hands and no one else's.",
      "Be the chief but never the lord.",
      "Nothing happens unless first we dream.",
      "Well begun is half done.",
      "Life is a learning experience, only if you learn.",
      "Self-complacency is fatal to progress.",
      "Peace comes from within. Do not seek it without.",
      "What you give is what you get.",
      "We can only learn to love by loving." ,
      "Life is change. Growth is optional. Choose wisely.",
      "You'll see it when you believe it.",
      "Today is the tomorrow we worried about yesterday."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
