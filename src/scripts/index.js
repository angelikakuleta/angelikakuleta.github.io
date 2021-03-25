(function(){

    const header = document.getElementById("site-header");
    let switchHeader = function() {

        if (window.scrollY > window.innerHeight){
            header.classList.add("header-show");
        }
        else{
            header.classList.remove("header-show");
        }
    }    
    window.addEventListener("scroll", switchHeader);

    const nav = document.getElementsByClassName("nav-links")[0];
    document.getElementsByClassName("fa-bars")[0].addEventListener("click", () =>
    {
        if (nav.style.display == "block") {
            nav.style.display = "none";
            nav.classList.remove("active-nav");
        }
        else {
            nav.style.display = "block";
            nav.classList.add("active-nav");
        }
        
    });

})();