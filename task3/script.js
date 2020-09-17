const inputText = document.querySelector('#inputField');
const inputCard = document.querySelector('#input-card');
const shortenButton = document.querySelector("#shorten-button");
let i = 1;
var link = "";


const isFilled = () => {
    if(!(inputText.value.length > 0)) {
        return false;
    }
    else {
        return true;
    }
}

const validateUrl = (url) => {
    const urlRegex = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
            '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i');
    return urlRegex.test(url);
}

const makeUrl = (url) => {
    if (!(url.startsWith("https://"))) {
        return("https://" + url);
    }
    else {
        return url;
    }
}

const createLink = async () => {
    if (isFilled()) {
        inputText.classList.add('ok');
        if (validateUrl(`${inputText.value}`)) {

            shortenButton.innerText = "Loading...";
            shortenButton.classList.add('loading');
            shortenButton.disabled = true;

            let validUrl = makeUrl(`${inputText.value}`)
            const url = {
                "url": validUrl
            };
            
            let response = await fetch('https://rel.ink/api/links/', {
                    method: 'POST',
                    body: JSON.stringify(url),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                });
            let res = await response.json();
            link = `https://rel.ink/${res.hashid}`;

            var div = document.createElement("div");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var button = document.createElement("button");
            var originalLink = document.createTextNode(inputText.value);
            var shortLink = document.createTextNode(link);

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
            shortenButton.innerText = "Shorten It!";
            shortenButton.classList.remove('loading');
            inputText.value = "";
            i++;
        }
        else {
            inputText.classList.add('error');
        }
    }
    else {
        inputText.classList.add('error');
    }
}

const copy = (e) => {
    let currentId = e.target.id;
    const i = currentId.replace(/[a-zA-Z-]/g, '');
    let linkId = "#link-to-copy" + (i);
    var shortenedLink = document.querySelector(linkId).innerText;
    var copyButton = document.getElementById(e.target.id);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = shortenedLink;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    copyButton.classList.add('copied');
}