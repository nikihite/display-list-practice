export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const p = document.createElement('p');
    p.textContent = `${crystal.name} is used for ${crystal.healingProperties}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Chakras';

    const ul = document.createElement('ul');
    for (let chakra of crystal.chakras) {
        const li = document.createElement('li');
        li.textContent = chakra;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;
}

export function renderPlant(plant) {
    const div = document.createElement('div');
    div.classList.add('plant');

    const h1 = document.createElement('h1');
    h1.textContent = plant.name;

    const img = document.createElement('img');
    img.src = plant.image;

    const p = document.createElement('p');
    p.textContent = `${plant.name} should be kept in ${plant.lightAmount} , kept within a temperature of ${plant.temperature} , and a humidity of ${plant.humidity}`;

    div.append(h1, img, p);
    return div;
}