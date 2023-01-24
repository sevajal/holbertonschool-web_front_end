function changeMode(size, weight, transform, background, color) {
    return function () {
        const root =  document.documentElement;
        root.style.fontSize = size;
        root.style.fontWeight = weight;
        root.style.textTransform = transform;
        root.style.backgroundColor = background;
        root.style.color = color;
    }
};

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    const p = document.createElement('p');
    const p_text = document.createTextNode('Welcome Holberton!');
    const btnSpooky = document.createElement('button');
    const spooky_text = document.createTextNode('Spooky');
    const btnDark = document.createElement('button');
    const dark_text = document.createTextNode('Dark');
    const btnScream = document.createElement('button');
    const scream_text = document.createTextNode('Scream');
    p.appendChild(p_text);
    btnSpooky.appendChild(spooky_text); 
    btnDark.appendChild(dark_text);
    btnScream.appendChild(scream_text);
    document.body.appendChild(p);
    document.body.appendChild(btnSpooky);
    document.body.appendChild(btnDark);
    document.body.appendChild(btnScream);
    btnSpooky.addEventListener('click', function () { spooky(); });
    btnDark.addEventListener('click', function () { darkMode(); });
    btnScream.addEventListener('click', function () { screamMode(); });
};

main();
