function createElement(data) {
    let p = document.createElement("p");
    let text = document.createTextNode(data);
    p.appendChild(text);
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    request.addEventListener("load", () => { 
        const jsonRes = JSON.parse(request.response);
        callback(jsonRes.query.pages['21721040'].extract);
     });
    request.send();
}

queryWikipedia(createElement);
