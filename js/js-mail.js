window.addEventListener("DOMContentLoaded", () => {

    let content = document.querySelectorAll('.content'),
            titles = document.querySelectorAll('.write'),
            active = false;
    
    
    
    for(let i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', () => {
            if(active == false) {
                content[i].style.display = 'block';
                active = true;
            } else if(active == true) {
                content[i].style.display = 'none';
                active = false;
            }
        });
    }
    
    });

    