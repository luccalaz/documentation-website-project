// importing the sass stylesheet for bundling
import "./../sass/styles.scss";
import "@fortawesome/fontawesome-free"

// JS content goes here
// ...

let navbar;

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

document.querySelectorAll("nav button, span[href]").forEach((element) => {
    element.addEventListener("click", function() {
        let id = element.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});

function main() {
    // navbar collapse
    let hmbButton = document.getElementById("hmbButton");
    let collapseButton = document.getElementById("collapse");
    let subanchorButtons = document.querySelectorAll("button.subanchor");

    hmbButton.addEventListener("click", () => {
        navbar = document.querySelector("nav")

        if (navbar.classList.contains("collapsed")) {
            document.querySelector("main").style.marginLeft = "16rem";
            navbar.classList.toggle("collapsed")
            setTimeout(() => navbar.classList.toggle("finish-collapse"), 300)
        } else {
            document.querySelector("main").style.marginLeft = "3.5rem";
            navbar.classList.toggle("collapsed")
            navbar.classList.toggle("finish-collapse")
        }
    }); 

    collapseButton.addEventListener("click", () => {
        console.log("clicked")

        subanchorButtons.forEach((button) => {
            button.classList.toggle("hidden");
            collapseButton.classList.toggle("-rotate-180");
            collapseButton.classList.toggle("mb-2");
        })
    })
}

main()