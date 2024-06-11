const components = {
    cpu: null,
    gpu: null,
    ram: null,
    motherboard: null,
    storage: null,
    psu: null
};

function updateSelection(component) {
    const dropdown = document.getElementById(component);
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price'));
    const img = selectedOption.getAttribute('data-img');
    const link = selectedOption.getAttribute('data-link');

    components[component] = {
        name: selectedOption.value,
        price: price,
        img: img,
        link: link
    };

    updateSummary();
}

function updateSummary() {
    const selectedComponentsDiv = document.getElementById('selectedComponents');
    selectedComponentsDiv.innerHTML = '';

    let totalPrice = 0;

    for (const component in components) {
        if (components[component]) {
            totalPrice += components[component].price;
            const imgElement = document.createElement('img');
            imgElement.src = components[component].img;
            selectedComponentsDiv.appendChild(imgElement);
        }
    }

    document.getElementById('totalPrice').innerText = totalPrice;
}

function submitBuild() {
    const selectedComponentsDiv = document.getElementById('selectedComponents');
    selectedComponentsDiv.innerHTML = '<h2>Your Selected Components</h2>';

    for (const component in components) {
        if (components[component]) {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${components[component].name}</h3>
                <img src="${components[component].img}" alt="${components[component].name}">
                <p>Price: $${components[component].price}</p>
                <a href="${components[component].link}" target="_blank">Buy Now</a>`;
            selectedComponentsDiv.appendChild(div);
        }
    }
}
