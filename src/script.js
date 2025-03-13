7
document.getElementById('get-meme').addEventListener('click', function() {
    fetch('https://meme-api.com/gimme')
    .then(response => response.json())
    .then(data => {
        const memeContent = document.getElementById('meme-content');
        memeContent.innerHTML = `
            <img src="${data.url}" alt="Meme" style="max-width: 100%; border-radius: 8px;">
            <p>${data.title}</p>
        `;
    })
    .catch(error => console.error('Ошибка:', error));
});


const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
