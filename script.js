const darkMode = document.querySelector('.dark-mode');
darkMode.addEventListener('click', () => {
    document.documentElement.style.setProperty('--main-background', '#202020f8');
    document.documentElement.style.setProperty('--secondary-background', '#202020f8');
    document.documentElement.style.setProperty('--content', '#202020f8');
    document.documentElement.style.setProperty('--main-text', '#07cdff');
    document.documentElement.style.setProperty('--secondary-text', '#31c5ff');
    document.documentElement.style.setProperty('--content-text', '#cccccc');
    document.documentElement.style.setProperty('--main-border', '#20deff');
    document.documentElement.style.setProperty('--secondary-border', '#05c1da');
});