document.addEventListener('DOMContentLoaded', function () {
    const quoteCard = document.querySelector('.quote-card');
    const authorElement = document.getElementById('author');
    const quoteElement = document.getElementById('quote');
    const getQuoteButton = document.getElementById('getQuote');

    function fetchQuote() {
        fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(data => {
                const randomQuote = data[Math.floor(Math.random() * data.length)];
                updateQuoteCard(randomQuote);
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }

    function updateQuoteCard(quote) {

        const authorParts = (quote.author || 'Unknown Author').split(',');
        const firstPartOfAuthor = authorParts[0].trim();

        authorElement.textContent = firstPartOfAuthor;
        quoteElement.textContent = quote.text || 'No text available';
    }

    getQuoteButton.addEventListener('click', fetchQuote);


    fetchQuote();
});
