const darkMode = document.querySelector('.dark-mode');
darkMode.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Light Mode <i class="fa-solid fa-sun"></i>') {
        document.documentElement.style.setProperty('--main-background', '#eeeeeef8');
        document.documentElement.style.setProperty('--secondary-background', '#eeeeeef5');
        document.documentElement.style.setProperty('--content', '#eeeeeef1');
        document.documentElement.style.setProperty('--main-text', '#0030ce');
        document.documentElement.style.setProperty('--secondary-text', '#0028ad');
        document.documentElement.style.setProperty('--content-text', '#00196d');
        document.documentElement.style.setProperty('--main-border', '#003cff');
        document.documentElement.style.setProperty('--secondary-border', '#0034e0');

        e.target.innerHTML = 'Dark Mode <i class="fa-solid fa-moon"></i>';
    }
    else {
        document.documentElement.style.setProperty('--main-background', '#202020f8');
        document.documentElement.style.setProperty('--secondary-background', '#202020f8');
        document.documentElement.style.setProperty('--content', '#202020f8');
        document.documentElement.style.setProperty('--main-text', '#07cdff');
        document.documentElement.style.setProperty('--secondary-text', '#31c5ff');
        document.documentElement.style.setProperty('--content-text', '#cccccc');
        document.documentElement.style.setProperty('--main-border', '#20deff');
        document.documentElement.style.setProperty('--secondary-border', '#05c1da');

        e.target.innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
    }
});