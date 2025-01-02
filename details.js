const loader = document.getElementById('loader');
const detailsContainer = document.getElementById('details-container');

loader.style.display = 'flex';

fetch('https://script.google.com/macros/s/AKfycbzwsWPoq12BBUUJZok5KmLMmVQ7_GbH4ZcZFVTJ-YjsZQiiZyu1ZsVf3FkQ7w-93dhqog/exec', {
    method: 'POST'
})
    .then(response => response.json())
    .then(data => {
        loader.style.display = 'none';
        const currentIndex = localStorage.getItem('currentIndex');
        const row = data[currentIndex];
        const html = `
            <div class="frames">
            <iframe src="${row[2]}"></iframe>
            <img src="${row[3]}">
            <img src="${row[4]}">
            </div>
            <div class="text">
            <h2>${row[0]}</h2>
            <p class="des">${row[1]}</p>
            <p class="prince">Price: ₹${row[5]}</p>
            <button id="buy-now-button">Buy Now</button>
            </div>
        `;
        detailsContainer.innerHTML = html;

        document.getElementById('buy-now-button').addEventListener('click', () => {
            const message = `Title: ${row[0]}\nVideo: ${row[2]}\nPrice: ${row[5]}`;
            const whatsappUrl = `https://wa.me/+919695631607?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    })
    .catch(error => {
        loader.style.display = 'none';
        console.error('Error fetching data:', error);
    });