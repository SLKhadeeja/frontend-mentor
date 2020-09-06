const inputText = document.querySelector('#inputField');
const shortenedLink = document.querySelector('#link-to-copy').innerText;
const copyButton = document.querySelector('#copy-button');

const isFilled = () => {
    if(!(inputText.length > 0)) {
        inputText.classList.add('error');
    }
}

const copy = () => {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = shortenedLink;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    copyButton.classList.add('copied');
}