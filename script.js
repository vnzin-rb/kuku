document.getElementById('generateButton').addEventListener('click', generateContent);

function generateContent() {
    const leftImages = document.getElementById('left-images');
    const rightImages = document.getElementById('right-images');
    const centerText = document.getElementById('center-text');

    // Clear any previous content
    leftImages.innerHTML = '';
    rightImages.innerHTML = '';
    centerText.innerHTML = '';

    // Array of image paths (using relative paths)
    const imagePaths = [
        'images/WhatsApp Image 2024-07-30 at 16.03.17.jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.43 (1).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.43 (2).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.43 (3).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.43.jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44 (1).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44 (2).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44 (3).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44 (4).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44 (5).jpeg',
        'images/WhatsApp Image 2024-07-30 at 16.41.44.jpeg',
        'images/WhatsApp Image 2024-07-30 at 17.47.42.jpeg'
    ];

    // Generate 6 unique images for the left side
    for (let i = 0; i < 6; i++) {
        let imgLeft = document.createElement('img');
        imgLeft.src = imagePaths[i];
        imgLeft.alt = `Image ${i+1}`; // Optional: add alt text for accessibility
        leftImages.appendChild(imgLeft);
    }

    // Generate 6 unique images for the right side
    for (let i = 6; i < 12; i++) {
        let imgRight = document.createElement('img');
        imgRight.src = imagePaths[i % imagePaths.length];
        imgRight.alt = `Image ${i+1}`; // Optional: add alt text for accessibility
        rightImages.appendChild(imgRight);
    }

    // Add the text in the middle
    centerText.textContent = 'Querida rebeca, através desse css eu queria te mostrar o quanto você é incrivel, e o quanto vc me fez feliz quando estava mais proxima de mim,vc é uma menina inefavel que sempre pensa em ajudar os outros,e msm com uma vibe darknes,consegue ser a garota com o sorriso mais lindo e singelo desse mundo, é uma menina que é uma mistura de uma artista,leitora,vampira,vc é unica e essas fotos sao as melhores lembramças que eu tenho com vc, vc é um anjo e foi a melhor coisa me aconteceu,me perdoa pela imaturidade que eu tive, eu sou horrivel pra encerrar ciclo,mas eu ja mudei muita coisa,mas desde aquele dia eu sinto muita falta da minha amiga,falta de quando eu conversava sem achar q estava incomodando,falta das conversas e fotos bobas q vc me mandava,vc é a melhor companhia alguem pode ter,queria muito poder te deixar confortavel igual ce ficava, vc vai conseguir tudo que deseja, vai ser uma excelente profissional,saiba q eu to doido pra ti ver logo viu,sabe as vezes doi quando eu vou pro if e sei q nao tem nenhuma baixinha do cabelo roxo esperando por mim, de q quando eu vou almoçar sozinho nao tem aquela garotinha q sempre pegava meus talheres e comia minha melancia,de q quando eu to mal la, vc nao ta pra me da aquele abraço,vc faz falta pq vc mudou minha vida, vc consegiu vibrar minha alma com um olhar,todo dia sem exceçao, eu rezo pra Deus acalmar sua mente,pra te ajudar a passar na ufpi, eu amo ver vc sorrindo, olhar pro abismo castanho dos seus olhos, entt quando se sentir feia,incapaz,com ansiedade, o vini vai ta sempre aqui nao tenha vergonha sei q minhas palavrass nao importam tanto como antigamente,mas eu so quero ver vc feliz,ate seus defeitos são perfeitos, entt nao desita viu continua estudando q logo logo vai ser uma grande programadora,eu te amo a cada print executado, a cada suspiro, a cada batida do meu coração, prfv tenta me ver logo quero muito aproveitar o tempinho q ce tem aqui viu, eu espero o tempo q for,para a melhor pessoa do mundo ÀVILLA REBECA VIEIRA COIMBRA,MUITO OBRIGADO POR TER ME AMADO!!-ASS-vivi-';

    // Show the content
    document.getElementById('content').classList.remove('hidden');
}
