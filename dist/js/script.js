
document.getElementById('nav').onclick = function(event) {
    var target = event.target;
    if (target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onclick=function(event) {
    var target = event.target;
    console.log(event.target);
    if(target.className!='menu-item'&& target.className!='submenu'){
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++) {
        subm[i].style.display="none";
    }
}


/* Открыть боковую навигацию */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    }
    
    /* закрыть/скрыть боковую навигацию */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    function viewDiv(){
        document.getElementById("div1").style.display = "block";
        document.getElementById("div2").style.display = "block";
        document.getElementById("div3").style.display = "block";
        document.getElementById("div4").style.boxShadow = "0px 7px 24px 0 rgba(0, 0, 0, 0.14)";
        };

    function closeDiv(){
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.boxShadow = "none";
        };

        // slider
        var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }

    // filter
        ;(function() {
            let catalogSection = document.querySelector(".section-catalog");
            if(catalogSection === null) {
                return;
            }

            let removeChildren = function(item) {
                while (item.firstChild) {
                    item.removeChild(item.firstChild);
                }
            }

            let updateChildren = function (item, children){
                removeChildren(item);

            for (let i = 0; i < children.length; i += 1) {
                item.appendChild(children[i]);
            }
        };

            let catalog = catalogSection.querySelector('.box__photo');
            let catalogNav = catalogSection.querySelector('.catalog-nav');
            let catalogItems = catalogSection.querySelectorAll('.catalog__item');

            catalogNav.addEventListener('click',function(e){
                let target = e.target;
                let item = myLib.closestItemByClass(target, "catalog-nav__btn");

            if (item === null || item.classList.contains('is-active')) {
                return;
            }
            
            e.preventDefault();
            let filterValue = item.getAttribute('data-filter');
            let previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');

            previousBtnActive.classList.remove('is-active');
            item.classList.add('is-active');

            if (filterValue === 'all') {
                updateChildren(catalog, catalogItems);
                return;
            }
            if (filterValue === 'best') {
                updateChildren(catalog, catalogItems);
                return;
            }
            if (filterValue === 'special') {
                updateChildren(catalog, catalogItems);
                return;
            }
            let filteredItems = [];
            for (let i = 0; i < catalogItems; i += 1) {
                let current = catalogItems[i];
                if(current.getAttribute('data-category') === filterValue ) {
                    filteredItems.push(current);
                }
            }
            updateChildren(catalog, filteredItems);
            });
        })();
    // filter

    // filter



    ;(function() {
        window.myLib = {};
    
        window.myLib.body = document.querySelector('body');
    
        window.myLib.closesAttr = function(item, attr) {
            var node = item;
    
            while(node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }
                node = node.parrentElement;
            }
            return null;
        };
        window.myLib.closestItemByClass = function(item, className) {
            var node = item;
            while (node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            }
            return null;
        };
        window.myLib.toggleScroll = function() {
            muLib.body.classList.toggle('no-scroll');
        };
    })();
    
// popup
;(function() {
    let body = document.querySelector('body');

    window.myLib.closestItemByClass = function(item, className) {
        var node = item;
        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };
    window.myLib.toggleScroll = function() {
        muLib.body.classList.toggle('no-scroll');
    };

    let closesAttr = function(item , attr) {
        let node = item;

        while(node) {
            let attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }
        return null;
    };

    var closestItemByClass = function(item, className) {
        var node = item;

        while(node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };

    let showPopup = function(target) {
        target.classList.add('is-active');
    };
    let closePopup = function(target) {
        target.classList.remove('is-active');
    };
    let toggleScroll = function() {
        body.classList.toggle('no-scroll');
    }

    body.addEventListener('click' , function(e) {
        let target = e.target;
        let popupClass =   closesAttr(target, 'data-popup');
        if(popupClass === null) {
            return;
        }
        e.preventDefault();
        let popup = document.querySelector('.' + popupClass);
        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('click' , function(e) {
        let target = e.target;

        if (target.classList.contains('popup-close') || 
            target.classList.contains('popup__inner')) {
                let popup = closestItemByClass(target, 'popup');
                closePopup(popup);
                toggleScroll();
            }
        });

    body.addEventListener('keydown' , function(e) {
    console.log(e.keyCode);
    if (e.keyCode !== 27){
        return;
    }
    let popup = document.querySelector('.popup.is-active');
    if (popup) {
        closePopup(popup);
    
    }
    });
})();
    





