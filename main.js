document.querySelector('.menu-btn').addEventListener('click', function(

){
    document.querySelector('.menu-btn .first').classList.toggle('active')
    document.querySelector('.menu-btn .second').classList.toggle('active')
    document.querySelector('.menu-btn .third').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
    
    
})


document.querySelector('.header__nav-ul').addEventListener('click', function(

    ){
        document.querySelector('.menu-btn .first').classList.toggle('active')
        document.querySelector('.menu-btn .second').classList.toggle('active')
        document.querySelector('.menu-btn .third').classList.toggle('active')
        document.querySelector('nav').classList.toggle('active')
        
        
    })