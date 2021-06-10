/* links */
let programming = document.querySelector("#programming");
let design = document.querySelector("#design");
let photography = document.querySelector("#photography");
let sticky = document.querySelector('#sticky')

/*locations*/
let programmingSection = document.querySelector("#programmingSection");
let designSection = document.querySelector("#designSection");
let photographySection = document.querySelector("#photographySection");

/*code*/
programming.addEventListener("click", function() {
    programmingSection.scrollIntoView({ behavior: 'smooth' });
    console.log("in");
})

design.addEventListener("click", function() {
    designSection.scrollIntoView({ behavior: 'smooth' });
    console.log("in");
})

photography.addEventListener("click", function() {
    photographySection.scrollIntoView({ behavior: 'smooth' });
    console.log("in");
})

sticky.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    console.log("in");
})