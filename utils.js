export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const p = document.createElement('p');
    p.textContent = `${crystal.name} is used for ${crystal.healingProperties}`;

    div.append(h1, img, p);
    return div;
}