// Animação suave no título ao passar o mouse
const titulo = document.getElementById('titulo');
if (titulo) {
    titulo.addEventListener('mouseenter', () => {
        titulo.style.transition = 'color 0.5s';
        titulo.style.color = '#3498db';
    });
    titulo.addEventListener('mouseleave', () => {
        titulo.style.color = '';
    });
}

// Efeito de digitação no título + animação de cor
function typeWriter(element, text, i = 0, callback) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1, callback), 80);
    } else if (callback) {
        callback();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (titulo) {
        const textoOriginal = 'Olá, eu sou o Micael';
        titulo.textContent = '';
        typeWriter(titulo, textoOriginal, 0, () => {
            // Após digitar, aplica animação de cor
            titulo.style.animation = 'changeColor 1.5s 1';
            setTimeout(() => {
                titulo.style.color = 'yellow';
            }, 2000);
        });
    }
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});