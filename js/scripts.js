// Filtrado de productos
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        document.querySelectorAll('.product').forEach(product => {
            if (filter === 'all' || product.dataset.category === filter) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Integración de WhatsApp
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = e.target.closest('.product').querySelector('h3').innerText;
        const message = `Hola, quiero cotizar el producto: ${productName}`;
        window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
    });
});