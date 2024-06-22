let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function showPage(index) {
    if (index >= 0 && index < totalPages) {
        pages[currentPage].style.top = '100%';
        pages[index].style.top = '0';
        currentPage = index;
    }
}

function handleScroll(event) {
    if (event.deltaY > 0) {
        showPage(currentPage + 1);
    } else {
        showPage(currentPage - 1);
    }
}

function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        showPage(currentPage + 1);
    } else if (event.key === 'ArrowUp') {
        showPage(currentPage - 1);
    }
}

function handleTouchStart(event) {
    this.touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!this.touchStartY) return;

    const touchEndY = event.touches[0].clientY;
    const touchDiff = this.touchStartY - touchEndY;

    if (touchDiff > 50) {
        showPage(currentPage + 1);
    } else if (touchDiff < -50) {
        showPage(currentPage - 1);
    }
    this.touchStartY = null;
}

document.addEventListener('wheel', handleScroll);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);


const messages = [
  "En değerli hazinem ol benim.",
  "Her anımda yanımda olmanı çok istiyorum.",
  "Sana olan sevgim ve hayretim her geçen gün daha da artıyor.",
  "Gözlerinde hayatımın anlamını bulmak istiyorum.",
  "Seninle olmak dünyanın en güzel şeyi.",
  "Sana her baktığımda, seninle her konuştuğumda kalbim hızla çarpıyor.",
  "Seninle geçirdiğim her saniye bir ömür gibi.",
  "Sevgimiz sonsuza dek sürsün istiyorum.",
  "Seni sevmek,seni mutlu etmek benim en büyük mutluluğum.",
  "Her şeyim olmanı istiyorum.",
  "Birtanem..."
];

const messages2 = [
  "Kalan ömrümü seninle geçirmek istiyorum, evlenene kadar benimle çıkar mısın?",
  "Evlilik yolunda ilerlemek üzere, benimle çıkar mısın?",
  "Hayatımın her anında seninle olmayı çok isterim. Benimle çıkar mısın?",
  "Kalbim hep seninle atıyor, atacak da. Benimle çıkar mısın?",
  "Kısa bir sürede senden çok etkilendim. Benimle evlilik yolunda ilk adımı atar mısın?",
  "Seninle bir ömür geçirmek istiyorum. Benimle çıkar mısın?"
];

function showProposal() {
  const proposalElement = document.getElementById('proposal');
  const proposalButton = document.getElementById('proposalButton');
  const randomIndex = Math.floor(Math.random() * proposals.length);
  proposalElement.textContent = proposals[randomIndex];
  proposalButton.textContent = "Yine Tıklayınız...";
}

function autoChangeMessage() {
  const autoMessageElement = document.getElementById('autoMessage');
  const randomIndex = Math.floor(Math.random() * messages.length);
  autoMessageElement.textContent = messages[randomIndex];
}
function autoChangeMessage2() {
  const autoMessage2Element = document.getElementById('autoMessage2');
  const randomIndex = Math.floor(Math.random() * messages2.length);
  autoMessage2Element.textContent = messages2[randomIndex];
}


// Her 5 saniyede bir güzel söz değiştir
setInterval(autoChangeMessage, 5000);
setInterval(autoChangeMessage2, 3000);
// Sayfa yüklendiğinde ilk mesajı göster
window.onload = function() {
  autoChangeMessage();
  
  // Loader'ı gizle ve içeriği göster
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  loader.style.display = 'none';
  content.style.display = 'block';
}