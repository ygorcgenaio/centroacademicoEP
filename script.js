document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    
    // Lista de URLs das imagens da gestão
    // Substitua 'url_da_imagem_1.jpg', etc., pelos URLs reais das fotos dos membros.
    const images = [
        { src: 'img1.png', alt: 'Membro 1 - Nome' },
        { src: 'img2.png', alt: 'Membro 2 - Nome' },
        { src: 'img3.png', alt: 'Membro 3 - Nome' },
        { src: 'img4.png', alt: 'Membro 3 - Nome' },
        // Adicione mais imagens conforme necessário
    ];

    let currentIndex = 0;
    const intervalTime = 4000; // Tempo em milissegundos (4 segundos)

    // Função para criar e inserir as imagens no carrossel
    function createCarouselImages() {
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.classList.add('carousel-image');
            if (index === 0) {
                imgElement.classList.add('active');
            }
            carouselTrack.appendChild(imgElement);
        });
    }

    // Função para mostrar a próxima imagem
    function showNextImage() {
        const currentImage = document.querySelector('.carousel-image.active');
        currentImage.classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;
        
        const nextImage = document.querySelectorAll('.carousel-image')[currentIndex];
        nextImage.classList.add('active');
    }

    // Iniciar o carrossel
    createCarouselImages();
    setInterval(showNextImage, intervalTime);


// --- Lógica para o link do Quadro de Horários ---
const linksGridContainer = document.querySelector('.links-grid-new');
const baseUrl = 'http://200.159.243.250:8010/index.php/';

const diasDaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
const hoje = new Date();
const diaAtualIndex = hoje.getDay();
const diaAtualNome = diasDaSemana[diaAtualIndex];

const urlCompleta = `${baseUrl}${diaAtualNome}/`;

const horariosLink = document.createElement('a');
horariosLink.href = urlCompleta;
horariosLink.target = '_blank';
horariosLink.classList.add('link-card-new', 'schedule');

horariosLink.innerHTML = `
    <div class="link-icon">
        <i class="fas fa-clock"></i>
    </div>
    <h3>Quadro de Horários</h3>
    <p>Acesse o quadro de horários de hoje.</p>
`;
if (linksGridContainer) {
    linksGridContainer.appendChild(horariosLink);
}

console.log('URL do Quadro de Horários gerado:', urlCompleta);


});