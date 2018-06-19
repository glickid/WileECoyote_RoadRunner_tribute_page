
function changeLink() {
    var link = document.getElementById("mylink");

    window.open(link.href,'_blank');

    link.innerHTML = "Google";
    link.setAttribute('href', "http://www.google.com");

    // return false;
}