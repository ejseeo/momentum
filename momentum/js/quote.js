//Quotes from TheGoldenQueotes.Net
const quotes = [
    {
        quote: "I’m a great believer in luck, and I find the harder I work, the more I have of it", 
        author: "Thomas Jefferson", 
    },
    {
        quote: "Try not to become a man of success but a man of value", 
        author: "Albert Einstein", 
    },
    {
        quote: "Forever – is composed of nows", 
        author: "Emily Dickinson", 
    },
    {
        quote: "With the new day comes new strength and new thoughts", 
        author: "Eleanor Roosevelt", 
    },
    {
        quote: "Never tell me the sky is the limit when there are footprints on the moon", 
        author: "Author Unknown", 
    },
    {
        quote: "It is never too late to be what you might have been", 
        author: "George Eliot", 
    },
    {
        quote: "Others can stop you temporarily. You are the only one who can do it permanantly", 
        author: "Zig Ziglar", 
    },
    {
        quote: "Everyday is a gift, which is why they call it the present", 
        author: "Alfred Hitchcock", 
    },
    {
        quote: "Things turn out best for people who make the best of the way things turn out", 
        author: "John Wooden", 
    },
    {
        quote: "Do we not all agree to call rapid thought and noble impulse by the name of inspiration?", 
        author: "George Eliot", 
    },
    {
        quote: "No man can tell whether he is rich or poor by turning to his ledger. It is the heart that makes a man rich. He is rich according to what he is, not according to what he has", 
        author: "Henry Ward Beecher", 
    },
    {
        quote: "Some people want it to happen, some wish it would happen, others make it happen", 
        author: "Michael Jordan", 
    },
    {
        quote: "Your success and happiness lie in you", 
        author: "Helen Keller", 
    },
    {
        quote: "Better keep yourself clean and bright; you are the window through which you must see the world", 
        author: "George Bernard Shaw", 
    },
    {
        quote: "Strive to be first: First to nod, First to smile, First to compliment, and first to forgive", 
        author: "Author Unknown", 
    },
    {
        quote: "It’s never too late to get back on your feet though we won’t live forever. Make sure you accomplish what you were put here for", 
        author: "Abigail Adams", 
    },
    {
        quote: "Anyone can hold the helm when the sea is calm", 
        author: "Publilius Syrus", 
    },
    {
        quote: "You jump off a cliff and you assemble an airplane on the way down", 
        author: "Reid Hoffman", 
    },
    {
        quote: "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest", 
        author: "Pema Chodron", 
    },
    {
        quote: "Bringing up the past only if it will help to build the future, otherwise it’s best to be left to sleep", 
        author: "Tahir M. Khan", 
    },
    {
        quote: "First say to yourself what you would be; and then do what you have to do", 
        author: "Epictetus", 
    },
    {
        quote: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree", 
        author: "Martin Luther King, Jr.", 
    },
    {
        quote: "Never fear shadows. They simply mean there’s a light shining somewhere nearby", 
        author: "Ruth E. Renkel", 
    },
    {
        quote: "Forget not that the earth delights to feel your bare feet and the winds long to play with your hair", 
        author: "Kahlil Gibran", 
    },
    {
        quote: "The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be", 
        author: "Horace Bushnell", 
    },
    {
        quote: "Inspiration and genius, one and the same", 
        author: "Victor Hugo", 
    },
    {
        quote: "The world is full of suffering. It is also full of overcoming it", 
        author: "Helen Keller", 
    },
    {
        quote: "Step through new doors. The majority of the time there’s something fantastic on the other side", 
        author: "Terry Mindock", 
    },
    {
        quote: "Each day, accept everything that comes to you as a gift. At night, mentally give it all back. In this way, you become free", 
        author: "Daniel Levin", 
    },
    {
        quote: "In chaos, there is fertility", 
        author: "Anais Nin", 
    },
    {
        quote: "The difference between ordinary and extraordinary is that little extra", 
        author: "Jimmy Johnson", 
    },
    {
        quote: "After a storm, comes a calm", 
        author: "Matthew Henry", 
    },
    {
        quote: "Believe in yourself!.. Have faith in your abilities!.. Without a humble but reasonable confidence in your own powers, you cannot be successful or happy", 
        author: "Norman Vincent Peale", 
    },
    {
        quote: "The best way to predict the future is to create it", 
        author: "Abraham Lincoln", 
    },
    {
        quote: "In any moment of decision the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing", 
        author: "Theodore Roosevelt", 
    },
    {
        quote: "We think too small, like the frog at the bottom of the well. He thinks the sky is only as big as the top of the well. If he surfaced, he would have an entirely different view", 
        author: "Mao Tse-Tung", 
    },
    {
        quote: "We are still masters of our fate. We are still captains of our souls", 
        author: "Winston Churchill", 
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const numOfQuotes = quotes.length;

function paintQuotes(){
    let index = Math.floor(Math.random()*numOfQuotes);
    quote.innerText = quotes[index].quote;
    author.innerText = " --- " + quotes[index].author;
}

paintQuotes();
setInterval(paintQuotes, 1000*60*60);