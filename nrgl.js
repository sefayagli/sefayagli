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

const proposals = [
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

// Her 5 saniyede bir güzel söz değiştir
setInterval(autoChangeMessage, 5000);

// Sayfa yüklendiğinde ilk mesajı göster
window.onload = function() {
    autoChangeMessage();
    
    // Loader'ı gizle ve içeriği göster
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    loader.style.display = 'none';
    content.style.display = 'block';
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}