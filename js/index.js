window.onscroll = function() {ScrollNav()};

function ScrollNav() {
    let topnav = document.getElementById("topnav");

    if (window.pageYOffset > 0) {
        topnav.classList.add("navstick");
    } else {
        topnav.classList.remove("navstick");
    }
}
