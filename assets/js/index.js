document.addEventListener('DOMContentLoaded', () => {
    // --- 1. AOS Init ---
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true
    });

    // --- 2. Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('guild-blur');
        });
        mobileMenu.querySelectorAll('a').forEach(link =>
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('guild-blur');
            })
        );
    }

    // --- 3. Custom Cursor ---
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        document.querySelectorAll('a, button, .card').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('pointer', 'aura'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('pointer', 'aura'));
        });
    }

    // --- 4. Parallax ---
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        parallaxLayers.forEach((layer, i) => {
            const speed = (i + 1) * 0.15;
            layer.style.transform = `translate3d(0, ${-(scrollTop * speed)}px, 0)`;
        });
    });
});
