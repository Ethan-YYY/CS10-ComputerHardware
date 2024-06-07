const components = {
    CPU: { name: 'CPU', price: 0 },
    GPU: { name: 'GPU', price: 0 },
    RAM: { name: 'RAM', price: 0 },
    Motherboard: { name: 'Motherboard', price: 0 },
    Storage: { name: 'Storage', price: 0 },
    PSU: { name: 'PSU', price: 0 }
};

document.getElementById('component-select').addEventListener('change', function() {
    const componentType = this.value;
    if (componentType !== "0") {
        const component = components[componentType];
        const componentDiv = document.createElement('div');
        componentDiv.className = 'component';
        componentDiv.innerHTML = `
            <h3>${component.name}</h3>
            <input type="number" min="0" value="${component.price}" class="price-input">
            <input type="file" accept="image/*" class="image-input">
        `;
        document.getElementById('selected-components').appendChild(componentDiv);

        // Update price when input changes
        componentDiv.querySelector('.price-input').addEventListener('input', function() {
            component.price = parseInt(this.value) || 0;
            updateTotalPrice();
        });

        // Update image when uploaded
        componentDiv.querySelector('.image-input').addEventListener('change', function() {
            const file = this.files[0];
            const reader = new FileReader();
            const imageElement = document.createElement('img');
            reader.onload = function(event) {
                imageElement.src = event.target.result;
                imageElement.style.maxWidth = '100px';
                imageElement.style.maxHeight = '100px';
            };
            reader.readAsDataURL(file);
            componentDiv.appendChild(imageElement);
        });
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const totalPrice = Object.values(components).reduce((acc, curr) => acc + curr.price, 0);
    alert(`Your PC build total price is: $${totalPrice}`);
});

function updateTotalPrice() {
    const totalPrice = Object.values(components).reduce((acc, curr) => acc + curr.price, 0);
    document.getElementById('total').textContent = totalPrice;
}
