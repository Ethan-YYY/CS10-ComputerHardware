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

const componentDescriptions = {
    cpu: "The CPU (Central Processing Unit) is the brain of the computer, responsible for executing instructions and processing data. It performs basic arithmetic, logic, control, and input/output operations specified by the instructions in a program. Modern CPUs consist of multiple cores, allowing them to handle several tasks simultaneously, increasing performance and efficiency. Key performance indicators include clock speed, measured in GHz, and the number of cores. Brands like Intel and AMD are major players in the CPU market.",
    gpu: "The GPU (Graphics Processing Unit) specializes in rendering images, videos, and animations for display. While CPUs are designed for general-purpose processing, GPUs handle parallel processing tasks more efficiently, making them ideal for graphics rendering and complex computations. This makes GPUs essential for gaming, video editing, and applications involving heavy graphical content or computational tasks, like deep learning. Nvidia and AMD are leading GPU manufacturers, providing discrete (dedicated) GPUs and integrated graphics solutions within CPUs.",
    ram: "RAM (Random Access Memory) is a type of volatile memory that provides temporary storage for data and instructions that the CPU needs while performing tasks. Unlike storage drives, RAM is much faster but does not retain information when the computer is powered off. It plays a crucial role in the overall speed and responsiveness of a system, as insufficient RAM can lead to bottlenecks and slow performance. Typical sizes range from 4GB to 64GB, depending on the needs of the user, with higher capacities and speeds improving multitasking and performance.",
    motherboard: "The motherboard is the main circuit board that houses the CPU, RAM, and other essential components, providing connectivity between them. It contains the chipset, which manages data flow between the processor, memory, and peripherals. Additionally, it offers expansion slots for GPUs, network cards, and storage devices, as well as ports for connecting external devices. Motherboards vary in size (ATX, microATX, Mini-ITX) and features, including support for different CPUs, RAM types, and storage interfaces like SATA and NVMe.",
    storage: "Storage devices are used to save data permanently, even when the computer is turned off. There are two main types: Hard Disk Drives (HDDs) and Solid State Drives (SSDs). HDDs use spinning magnetic disks to read/write data, offering larger capacities at lower prices. SSDs use flash memory, providing faster read/write speeds, better durability, and lower power consumption. The choice between HDDs and SSDs often involves a trade-off between speed (SSDs) and capacity/cost (HDDs). Modern PCs frequently use a combination of both to balance performance and storage needs.",
    psu: "The PSU (Power Supply Unit) converts electricity from an outlet into usable power for the computer's components. It supplies power through various cables and connectors, ensuring stable and adequate energy distribution. The power rating of a PSU, measured in watts, indicates how much power it can provide. It is crucial to choose a PSU that meets the power requirements of all components, especially high-performance GPUs and CPUs. Efficiency ratings (80 Plus certifications) indicate how effectively a PSU converts power and manages heat, with higher ratings being more efficient.",
    cooler: "A cooler maintains optimal temperatures for the CPU and GPU by dissipating heat generated during operation. There are two main types: air coolers and liquid coolers. Air coolers use heatsinks and fans to transfer heat away from the CPU/GPU. Liquid coolers use a liquid coolant circulated through tubes and a radiator to disperse heat more efficiently, often resulting in quieter operation and better cooling performance. Proper cooling is essential to prevent overheating, maintain system stability, and extend the lifespan of components.",
    case: "The case, or chassis, houses and protects all the internal components of a computer, providing a structured layout for installation and airflow. Cases come in various sizes (full-tower, mid-tower, mini-tower) to accommodate different motherboard sizes and component configurations. They include mounting points for motherboards, drives, and expansion cards, as well as bays for fans and radiators for cooling. A good case design ensures efficient airflow, cable management, and accessibility for upgrades, while also contributing to the overall aesthetics of the build.",
    networkCard: "A network card, or NIC (Network Interface Card), allows a computer to connect to a network, enabling communication with other devices and access to the internet. Network cards can be integrated into the motherboard or installed as separate expansion cards. They support various connection types, including wired (Ethernet) and wireless (Wi-Fi). Wired connections offer more stable and faster data transfer rates, while wireless cards provide flexibility and mobility. Advanced network cards may support higher speeds, multiple bands, and additional features like Bluetooth connectivity."
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
        document.getElementById('componentDescription').innerText = componentDescriptions[component];
    } else {
        document.getElementById('componentImage').src = "https://via.placeholder.com/100";
        document.getElementById('componentName').innerText = "Component Name";
        document.getElementById('componentDescription').innerText = "Description of the selected component type will be displayed here.";
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