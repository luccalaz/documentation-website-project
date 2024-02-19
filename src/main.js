// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

let navbar = document.querySelector("nav");

function onHmbClick(e) {
    navbar = document.querySelector("nav");

    if (navbar.classList.contains("collapsed")) {
        if (window.innerWidth > 600) document.querySelector("main").style.marginLeft = "16rem";
        navbar.classList.toggle("collapsed");
        setTimeout(() => navbar.classList.toggle("finish-collapse"), 300);
    } else {
        if (window.innerWidth > 600) document.querySelector("main").style.marginLeft = "3.5rem";
        navbar.classList.toggle("collapsed");
        navbar.classList.toggle("finish-collapse");
    }
}

function main() {
    // initialize variables
    let hmbButton = document.getElementById("hmbButton");
    let collapseButton = document.getElementById("collapse");
    let subanchorButtons = document.querySelectorAll("button.subanchor");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let id = entry.target.getAttribute("id");
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav button[href="#${id}"]`).classList.add("selected");
            } else {
                document.querySelector(`nav button[href="#${id}"]`).classList.remove("selected");
            }
        });
    },
    { rootMargin: "1% 0% -97% 0%" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
    });

    // navbar start collapsed on mobile
    if (window.innerWidth <= 600) {
        navbar.classList.add("collapsed", "finish-collapse");
    }

    // event listeners
    hmbButton.addEventListener("click", onHmbClick); 
    collapseButton.addEventListener("click", () => {
        subanchorButtons.forEach((button) => {
            button.classList.toggle("hidden");
            collapseButton.classList.toggle("-rotate-180");
        })
    })

    document.querySelectorAll("nav button").forEach((element) => {
        element.addEventListener("click", function() {
            let id = element.getAttribute("href");
            window.scrollTo({
                behavior: 'smooth',
                top:
                    document.querySelector(id).getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    14,
            })
            if (window.innerWidth <= 600 && id != "#mysql") {
                onHmbClick();
            }
        });
    });
    
    document.querySelectorAll("span[href]").forEach((element) => {
        element.addEventListener("click", function() {
            let id = element.getAttribute("href");
            window.scrollTo({
                behavior: 'smooth',
                top:
                    document.querySelector(id).getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    14,
            })
        });
    });
}

main();