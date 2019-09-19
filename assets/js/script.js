var toggles = document.getElementsByClassName("header-mobile-button-x");
var button = document.getElementById("header-mobile-activation");
var wrapper = document.getElementById("wrapper");
for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
};
function toggleHandler(toggle) {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        (button.classList.contains("header-mobile-nav-visible") === true) ? button.classList.remove("header-mobile-nav-visible") : button.classList.add("header-mobile-nav-visible");
        (this.classList.contains("is-active") === true) ? wrapper.classList.add("noScroll") : wrapper.classList.remove("noScroll");
    });
};


var searchbar = document.getElementById("searchbar");
var searchicon = document.getElementById("searchicon");
var searchinput = document.getElementById("searchinput");
var searchsvg = document.getElementById("searchsvg");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
if (document.body.scrollTop === 0) {
    searchicon.onclick = function () {
        searchbar.classList.toggle("searchbar-active"),
            searchsvg.classList.toggle("icon-search-active"),
            searchinput.focus();
    };
};
window.addEventListener('scroll', function (e) {
    searchicon.onclick = function () {
        if (((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && !searchbar.classList.contains("searchbar-active")) || ((document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20) && !searchbar.classList.contains("searchbar-active"))) {
            searchbar.classList.add("searchbar-active"),
                searchsvg.classList.add("icon-search-active"),
                searchinput.focus();
        } else {
            searchbar.classList.remove("searchbar-active"),
                searchsvg.classList.remove("icon-search-active");
        };
        if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && searchbar.classList.contains("searchbar-active")) {
            searchbar.classList.add("searchbar-resize");
        } else {
            searchbar.classList.remove("searchbar-resize");
        };
    };
});
window.addEventListener('scroll', function (e) {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && searchbar.classList.contains("searchbar-active")) {
        searchbar.classList.add("searchbar-resize");
    } else {
        searchbar.classList.remove("searchbar-resize");
    };
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("header-resize");
        logo1.classList.add("header-logo-resize");
        logo2.classList.add("header-logo-resize");
        logo3.classList.add("header-logo-resize");
    } else {
        header.classList.remove("header-resize");
        logo1.classList.remove("header-logo-resize");
        logo2.classList.remove("header-logo-resize");
        logo3.classList.remove("header-logo-resize");
    };
});


if (document.querySelector(".slider-navigation")) {
    var slideIndex = 1;
    showDivs(slideIndex);
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    function currentDiv(n) {
        showDivs(slideIndex = n);
    }
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("slider-item");
        var dots = document.getElementsByClassName("slider-navigation-dot");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slider-navigation-dot-active", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " slider-navigation-dot-active";
    }
}
