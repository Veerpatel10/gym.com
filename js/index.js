function info() {
    if (count == 1) {
        document.getElementById('sh').style.cssText = 'right: 10px;transition:0.5s ease-in-out;';
        count++;
    }
    else {
        document.getElementById('sh').style.cssText = 'right: -47px;transition:0.5s ease-in-out;';
        count--;
    }
}


document.getElementsByClassName('ti-h').cssText="hello";
document.getElementById("bli-text").innerHTML="hello";