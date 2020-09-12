const inputText = document.querySelector('#inputField');
const inputCard = document.querySelector('#input-card');
let i = 1;

const isFilled = () => {
    if(!(inputText.length > 0)) {
        inputText.classList.add('error');
    }
}

const createLink = () => {
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var button = document.createElement("button");
    var originalLink = document.createTextNode("https://www.frontendmentor.io");
    var shortLink = document.createTextNode("https://rel.ink/k4IKyk");

    div.classList.add("shortened-link-card")

    p1.classList.add("original-link");
    p1.appendChild(originalLink);

    

    p2.classList.add("shortened-link");
    p2.id = "link-to-copy" + i;
    p2.appendChild(shortLink)

    button.classList.add("copy", "button");
    button.id = "copy-button" + i;
    button.addEventListener("click", copy)

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);

    inputCard.after(div);
    i++;
}

const copy = () => {
    linkId = "#link-to-copy" + (i-1);
    var shortenedLink = document.querySelector(linkId).innerText;
    var copyButton = document.querySelector('#copy-button' + (i-1));
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = shortenedLink;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    copyButton.classList.add('copied');
}