window.onload = function(){
    document.querySelector('.main-menu').addEventListener('click', ftabs);

    function ftabs(event){
        if (event.target.className == 'tab-h'){
            var dataTab = event.target.getAttribute('data-tab');
            //отключ
            var tabes = document.getElementsByClassName('tab-h');
            for (var i=0; i<tabes.length; i++){
                tabes[i].classList.remove('active');
            }
            event.target.classList.add('active');
            var tabBody = document.getElementsByClassName('tab-b');
            for (var i = 0 ; i < tabBody.length; i++){
                if (dataTab==i){
                    tabBody[i].style.display = 'block';
                }
                else{
                    tabBody[i].style.display = 'none';
                }
            }

        }
    }
}