// spinner
window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add ("display");
    }, 4000);
}



// hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click',() => {
    document.querySelector('.container').classList.toggle('change');
})



// Scroll effect
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000)
})




