document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    const onScroll = () => {
        galleryItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

            if (isVisible) {
                item.classList.add("show");
            }
        });
    };

    // Ejecutar cuando se haga scroll
    window.addEventListener("scroll", onScroll);

    // Ejecutar una vez al cargar para verificar qué elementos ya son visibles
    onScroll();
});