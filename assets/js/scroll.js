window.addEventListener('scroll', function(){
    var navbar = document.getElementById('mainNav');
    var scollPosition = window.scrollY;


    if (scollPosition > 0){
        navbar.classList.add("navbar-shrink");
    }else{
        navbar.classList.remove("navbar-shrink");
    }
})


const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})