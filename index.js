document.addEventListener('DOMContentLoaded', () => {
    // Fungsi Lightbox
    function openLightbox(imgElement) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = imgElement.src;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    }

    document.getElementById('lightbox').addEventListener('click', closeLightbox);

    // Arahkan ke Halaman Pesan Rahasia
    const romanticMessage = document.getElementById('romanticMessage');
    romanticMessage.addEventListener('click', () => {
        window.location.href = 'secret-message.html';
    });

    // Animasi Timeline
    const BIOGRAFI = document.getElementById('BIOGRAFI');
    const events = [
        { year: 'AWEN ITU ?', event: 'Orang yang sangat menyebalkan ketika ngambek' },
        { year: 'MAS', event: 'Orang yang selalu buat Pacarnya ngambek ' },
        { year: 'MASA DEPAN KITA', event: 'Mas Awen dan Kebahagiaan' }
    ];

    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<strong>${event.year}</strong><p>${event.event}</p>`;
        eventElement.style.animation = `fadeIn 1s ${index * 0.5}s forwards`;
        timeline.appendChild(eventElement);
    });

    // Animasi Partikel
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particlesContainer.appendChild(particle);

            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
        }
    }

    createParticles();
});
