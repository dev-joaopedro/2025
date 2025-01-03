// Função para atualizar o progresso e salvar no LocalStorage
function updateProgress(index, value) {
    const progressElement = document.getElementById(`progress${index + 1}`);
    const percentageElement = document.getElementById(`percentage${index + 1}`);
    
    progressElement.style.width = `${value}%`;
    percentageElement.textContent = `${value}%`;
    
    // Salvar no LocalStorage
    localStorage.setItem(`meta${index + 1}`, value);
}

// Função para carregar o progresso do LocalStorage
function loadProgress() {
    for (let i = 1; i <= 4; i++) {
        const savedValue = localStorage.getItem(`meta${i}`);
        if (savedValue !== null) {
            const sliderElement = document.getElementById(`slider${i}`);
            const progressElement = document.getElementById(`progress${i}`);
            const percentageElement = document.getElementById(`percentage${i}`);
            
            sliderElement.value = savedValue;
            progressElement.style.width = `${savedValue}%`;
            percentageElement.textContent = `${savedValue}%`;
        }
    }
}

// Carregar o progresso quando a página for carregada
window.onload = loadProgress;