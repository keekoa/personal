const darkMode = document.querySelector('.dark-mode');
darkMode.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Light Mode <i class="fa-solid fa-sun"></i>') {
        document.documentElement.style.setProperty('--main-background', '#eeeeeef8');
        document.documentElement.style.setProperty('--secondary-background', '#eeeeeef5');
        document.documentElement.style.setProperty('--content', '#eeeeeef1');
        document.documentElement.style.setProperty('--main-text', '#212121');
        document.documentElement.style.setProperty('--secondary-text', '#19be8d');
        document.documentElement.style.setProperty('--content-text', '#393E46');
        document.documentElement.style.setProperty('--main-border', '#212121');
        document.documentElement.style.setProperty('--secondary-border', '#212121');

        e.target.innerHTML = 'Dark Mode <i class="fa-solid fa-moon"></i>';
    }
    else {
        document.documentElement.style.setProperty('--main-background', '#212121');
        document.documentElement.style.setProperty('--secondary-background', '#212121');
        document.documentElement.style.setProperty('--content', '#212121');
        document.documentElement.style.setProperty('--main-text', '#ebebeb');
        document.documentElement.style.setProperty('--secondary-text', '#19be8d');
        document.documentElement.style.setProperty('--content-text', '#d3d3d3');
        document.documentElement.style.setProperty('--main-border', '#19be8d');
        document.documentElement.style.setProperty('--secondary-border', '#19be8d');

        e.target.innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
    }
});