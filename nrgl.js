const messages = [
    "En değerli hazinem ol benim.",
    "Her anımda yanımda olmanı istiyorum.",
    "Sana olan sevgim her geçen gün daha da artsın istiyorum.",
    "Gözlerinde hayatımın anlamını bulmak istiyorum.",
    "Seninle olmak dünyanın en güzel şeyi.",
    "Sana her baktığımda, seninle her konuştuğumda kalbim hızla çarpıyor.",
    "Seninle geçirdiğim her saniye bir ömür gibi.",
    "Sevgimiz sonsuza dek sürsün istiyorum.",
    "Seni sevmek benim en büyük mutluluğum.",
    "Her şeyim olmanı istiyorum."
];

const proposals = [
    "Seninle daha fazla vakit geçirmek istiyorum, benimle çıkar mısın?",
    "Hayatımın her anında seninle olmayı hayal ediyorum. Benimle çıkar mısın?",
    "Kalbim hep seninle atıyor. Benimle çıkar mısın?",
    "Sana olan duygularım tarifsiz. Benimle bir ilişkiye başlamayı düşünür müsün?",
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
window.onload = autoChangeMessage;
