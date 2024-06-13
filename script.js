const components = {
    cpu: null,
    gpu: null,
    ram: null,
    motherboard: null,
    storage: null,
    psu: null,
    cooler: null,
    case: null,
    networkCard: null
};

function updateSelection(component) {
    const dropdown = document.getElementById(component);
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('price'));
    const img = selectedOption.getAttribute('img');
    const link = selectedOption.getAttribute('link');

    components[component] = {
        name: selectedOption.value,
        price: price,
        img: img,
        link: link
    };

    updateSummary();
    updateDescription(component);
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

function updateDescription(component) {
    const componentData = components[component];
    if (componentData) {
        document.getElementById('componentImage').src = componentData.img;
        document.getElementById('componentName').innerText = componentData.name;
        document.getElementById('componentDescription').innerText = `Description of the ${componentData.name} goes here.`;
    } else {
        document.getElementById('componentImage').src = "https://via.placeholder.com/100";
        document.getElementById('componentName').innerText = "Component Name";
        document.getElementById('componentDescription').innerText = "Description of the selected component will be displayed here. This is just dummy text to show the placement of the description.";
    }
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
