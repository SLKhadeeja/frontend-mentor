const popUp = () => {
    var x = document.getElementById("share-mod");
    var y = document.getElementById("footer");
    var z = document.getElementById("share-fa");
    if (x.className === "share"){
        x.className += " popUp";
        y.className += " close";
        z.className += " opened";
    }
    else {
        x.className = "share";
        y.className = "footer";
        z.className = "icon-share";
    }
}