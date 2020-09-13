const inputText = document.querySelector('#inputField');
const inputCard = document.querySelector('#input-card');
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

const createLink = () => {
    if (isFilled()) {
        inputText.classList.add('ok');

        const url = {
            "url": `${inputText.value}`
        };
        
        fetch('https://rel.ink/api/links/', {
                method: 'POST',
                body: JSON.stringify(url),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(json => {
                link = `https://rel.ink/${json.hashid}`
                console.log(link)
            });

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
        i++;
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