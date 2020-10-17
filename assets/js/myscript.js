var praisesarr;
var ap = document.getElementById('praises');
praisesarr = ap.textContent.split("\n");
var r = 10;
var cancel;

var control = 0;
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function getPraise() {
    return praisesarr[Math.floor(Math.random() * praisesarr.length)];
}
function WorkTime() {

    var el = document.getElementById('fullscreen');
    el.style.visibility = "hidden";
    el.style.opacity = "0";

    var timeis = 1500.0;
    var el = document.getElementById('seconds-counter');
    function incrementSeconds() {
        if (timeis >= (1500 - 5) && control == 0) {
            var ht = document.getElementById('headertext');
            ht.innerHTML = " " + getPraise();
            control = 1;
        }
        else {
            if (timeis == (1500 - 5)) {
                var ht = document.getElementById('headertext');
                ht.innerHTML = " ";
            }
        }
        if (timeis == 0) {
            myStopFunction();

            var el2 = document.getElementById('fullscreen');
            el2.style.visibility = "visible";
            el2.style.opacity = "1";


            BreakTime();
        }
        timeis -= 1;
        el.innerText = "" + pad(Math.floor(timeis / 60)) + ":" + pad(Math.round((timeis / 60 - Math.floor(timeis / 60)) * 60)) + "";
    }
    cancel = setInterval(incrementSeconds, 1000);
    el.classList.remove("breaktime");

}
WorkTime();
function myStopFunction() {
    clearInterval(cancel);
}
function BreakTime() {
    control = 0;
    var timeis = 300.0 - 1;

    var el = document.getElementById('seconds-counter');
    el.classList.add("breaktime");



    function incrementSeconds() {
        if (timeis == 0) {
            myStopFunction();
            WorkTime();
        }
        timeis -= 1;
        el.innerText = "" + pad(Math.floor(timeis / 60)) + ":" + pad(Math.round((timeis / 60 - Math.floor(timeis / 60)) * 60)) + "";
    }
    cancel = setInterval(incrementSeconds, 1000);
}


var elem = document.getElementById("body");

var array;
var i = 0;
var jedan, dva, tri;
jedan = 0; dva = 0; tri = 0;
var k = 0;
var submit = document.getElementById("submit");
var neznam = document.getElementById("neznam");
var onako = document.getElementById("onako");
var znam = document.getElementById("znam");

var ch1 = document.getElementById("vehicle1");
var ch2 = document.getElementById("vehicle2");
var ch3 = document.getElementById("vehicle3");

function getSplitedRows() {

    var nf = document.getElementById("newfile");
    nf.style.display = "none";
    var nf = document.getElementById("textmarking");
    nf.style.display = "block";
    var textarea = document.getElementById("here");
    textarea.innerHTML = "";

    ch1 = document.getElementById("vehicle1");
    ch2 = document.getElementById("vehicle2");
    ch3 = document.getElementById("vehicle3");
    var textarea = document.getElementById("here");
    var divhere = document.getElementById("divhere");
    divhere.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"; //clear divhere before inputing everything
    array = textarea.value.split("\n");
    var novired = document.createElement("p");
    novired.textContent = array[i];
    divhere.appendChild(novired);
    divhere.lastChild.style.fontSize = "20px";


}
function getNewRow() {
    k++;
    i++;
    var novired = document.createElement("p");
    novired.textContent = array[i];
    //  if first letter R then color red

    divhere.appendChild(novired);
    divhere.lastChild.style.fontSize = "20px";

    switch (divhere.children[divhere.children.length - 1].textContent.substring(1, 0)) {
        case "R": if (ch1.checked) { JustColorRed() } else { JustColorUnvisible() }; break;
        case "Y": if (ch2.checked) { JustColorYellow() } else { JustColorUnvisible() }; break;
        case "G": if (ch3.checked) { JustColorGreen() } else { JustColorUnvisible() }; break;
        default: break;
    }
    novired.scrollIntoView();
}
function RemoveLastRow() {
    var one = document.getElementById("removelastrow");
    one.className += " act";

    setTimeout(function () {
        one.classList.remove("act");
    }, 70);

    i--;
    divhere.children[divhere.children.length - 1].remove();
    Progress();
}

window.onkeydown = CheckKey;

function CheckKey(e) {
    if (e.keyCode == '49' || e.keyCode == '97') {
        neZnam();
    } else if (e.keyCode == '50' || e.keyCode == '98') {
        Onako();
    } else if (e.keyCode == '51' || e.keyCode == '99') {
        Znam();
    } else if (e.keyCode == '38') {
        RemoveLastRow();
    }
}

function neZnam(e) {
    var one = document.getElementById("neznam");
    one.className += " act";

    setTimeout(function () {
        one.classList.remove("act");
    }, 70);

    ColorRed();
    getNewRow();
    Progress();
}
function Onako(e) {
    var one = document.getElementById("onako");
    one.className += " act";

    setTimeout(function () {
        one.classList.remove("act");
    }, 70);
    ColorYelow();
    getNewRow();
    Progress();
}
function Znam(e) {
    var one = document.getElementById("znam");
    one.className += " act";

    setTimeout(function () {
        one.classList.remove("act");
    }, 70);
    ColorGreen();
    getNewRow();
    Progress();
}
function ColorRed() {
    divhere.children[divhere.children.length - 1].style.background = "#FA633C";
    divhere.children[divhere.children.length - 1].style.fontSize = "14px";
    //divhere.children[divhere.children.length - 1].textContent = "R " + divhere.children[divhere.children.length - 1].textContent;

}
function ColorYelow() {
    divhere.children[divhere.children.length - 1].style.fontSize = "14px";
    divhere.children[divhere.children.length - 1].style.background = "#FFB624";
    //divhere.children[divhere.children.length - 1].textContent = "Y " + divhere.children[divhere.children.length - 1].textContent;

}
function ColorGreen() {
    divhere.children[divhere.children.length - 1].style.fontSize = "14px";
    divhere.children[divhere.children.length - 1].style.background = "#92FF6D";
    //divhere.children[divhere.children.length - 1].textContent = "G " + divhere.children[divhere.children.length - 1].textContent;

}
function JustColorRed() {
    divhere.children[divhere.children.length - 1].style.color = "#ff6d6d";

}
function JustColorYelow() {
    divhere.children[divhere.children.length - 1].style.color = "#e6e625";

}
function JustColorGreen() {
    divhere.children[divhere.children.length - 1].style.color = "#85ff85";

}
function JustColorUnvisible() {
    divhere.children[divhere.children.length - 1].style.visibility = "hidden";

}

function Progress() {
    var ii = 0;
    var elem = document.getElementById("myBar");
    var width = (100 / array.length) * i;
    elem.style.width = width + "%";
    if (width > 99.99) {
        elem.innerHTML = "Well done";
        window.alert("You finished");
    }
    else {
        elem.innerHTML = "";
        elem.style.background = "#85ff85";
    }
}

function NewFileFunction() {
    var nf = document.getElementById("newfile");
    nf.style.display = "block";
    var nf2 = document.getElementById("textmarking");
    nf2.style.display = "none";

    var nf3 = document.getElementById("here");
    nf3.value = "";

}

function openFullscreen() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}