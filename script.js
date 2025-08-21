document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    
    // Lista de URLs das imagens da gestão
    const images = [
        { src: 'img1.png', alt: 'Membro 1 - Nome' },
        { src: 'img2.png', alt: 'Membro 2 - Nome' },
        { src: 'img3.png', alt: 'Membro 3 - Nome' },
        { src: 'img4.png', alt: 'Membro 4 - Nome' },
        // Adicione mais imagens conforme necessário
    ];

    let currentIndex = 0;
    const intervalTime = 4000; // Tempo em milissegundos (4 segundos)

    // Função para mostrar uma imagem específica do carrossel
    function showImage(index) {
        const images = document.querySelectorAll('.carousel-image');
        // Esconde todas as imagens
        images.forEach(img => img.classList.remove('active'));
        // Mostra a imagem no índice desejado
        if (images[index]) {
            images[index].classList.add('active');
        }
    }

    // Função para avançar para a próxima imagem
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Iniciar o carrossel
    function initializeCarousel() {
        if (carouselTrack) {
            // Crie as imagens e as insira no HTML
            images.forEach((image) => {
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.classList.add('carousel-image');
                carouselTrack.appendChild(imgElement);
            });

            // Mostra a primeira imagem e inicia o intervalo
            showImage(currentIndex);
            setInterval(showNextImage, intervalTime);
        }
    }

    // Chama a função de inicialização do carrossel
    initializeCarousel();

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

    // Alteração para garantir que o ícone do relógio seja renderizado
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