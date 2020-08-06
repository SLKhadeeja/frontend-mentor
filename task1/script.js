const popUp = () => {
    var x = document.getElementById("share-mod");
    if (x.className === "share"){
        x.className += " popUp";
    }
    else {
        x.className = "share";
    }
}