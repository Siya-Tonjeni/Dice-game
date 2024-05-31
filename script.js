// Splash page to dissapear and appear main page
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 4000);
}) 