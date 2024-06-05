    const components = [
        {
            name: 'CPU',
            variants: [
                { company: 'Intel', description: 'Intel Core i7', price: '$300' },
                { company: 'AMD', description: 'AMD Ryzen 7', price: '$350' },
                { company: 'AMD', description: 'AMD Ryzen 9', price: '$500' },
                { company: 'AMD', description: 'AMD Ryzen 5', price: '$200' },
            ]
        },
        {
            name: 'GPU',
            variants: [
                { company: 'Nvidia', description: 'Nvidia GeForce RTX 3080', price: '$800' },
                { company: 'AMD', description: 'AMD Radeon RX 6800 XT', price: '$700' }
            ]
        },
        {
            name: 'RAM',
            variants: [
                { company: 'Corsair', description: 'Corsair Vengeance LPX 16GB', price: '$100' },
                { company: 'Kingston', description: 'Kingston HyperX Fury 16GB', price: '$90' }
            ]
        },
        // Add more components and their variants as needed
    ];

    const componentsContainer = document.getElementById('components');
    const categorySelect = document.getElementById('category');

    function populateComponents(category) {
        componentsContainer.innerHTML = '';
        components.forEach(component => {
            if (category === 'all' || component.name === category) {
                component.variants.forEach(variant => {
                    const componentElement = document.createElement('div');
                    componentElement.classList.add('component');
                    componentElement.innerHTML = `
                        <h2>${component.name} - ${variant.company}</h2>
                        <p><strong>Description:</strong> ${variant.description}</p>
                        <p><strong>Price:</strong> ${variant.price}</p>
                    `;
                    componentsContainer.appendChild(componentElement);
                });
            }
        });
    }

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        populateComponents(selectedCategory);
    });

    // Populate components initially with all components
    populateComponents('all');