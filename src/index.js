
  // when user scroll and the header changing background color
  window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;
    if (scrollY > 110) {
      document.querySelector(".header").classList.add("header-scrolled");
      this.document.querySelector('.logo *').style.color = "#f2f2f2";
    }
    else if (scrollY > 110) {
        document.querySelector(".logo *").style.color = "#fff";
      } else {
      document.querySelector(".header").classList.remove("header-scrolled");
      this.document.querySelector('.logo *').style.color = ""
    }
  });
  // MODAL POPUP
  const openEls = document.querySelectorAll("[data-open]");
  const closeEls = document.querySelectorAll("[data-close]");
  const isVisible = "is-visible";
  
  for (const ob of openEls){
      ob.addEventListener('click', function(){
          const modalID= this.dataset.open;
          document.getElementById(modalID).classList.add(isVisible);
      } )
  };
  
  for (const cb of closeEls){
     cb.addEventListener('click', function(){
      this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
     })
  }
  document.addEventListener('click', e =>{
      if (e.target == document.querySelector(".modal.is-visible")){
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
      }
    });
  
    document.addEventListener('keyup', e =>{
      if (e.key == "Escape" && document.querySelector(".modal.is-visible")){
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
      }
    });
  
    // Changin color button
  const form = document.getElementById('myForm');
  const button = document.getElementById('submitButton');
  
//   document.getElementById('dataForm').addEventListener('input', function () {
//     if (this.value.trim() !== '') {
//       button.style.backgroundColor = '#EE4540' ;
//       button.style.color = '#fafafa';
//       button.style.textShadow = '1px 1px 5px rgba(0, 0, 0, 0.6)';
//     } else {
//       button.style.backgroundColor = ''; 
//     }
//   });
  
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//   });
  
  // TAB GALERY
  
  {
    filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
    Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  }
  
  // Get the modal
  const thumbnails = document.querySelectorAll(".content img[data-tab]");
  const modal = document.querySelector(".modalImg");
  const modalImg = document.querySelector(".modal-content-img");
  const closeButton = document.querySelector(".close");
  
//   thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener("click", function() {
//       modal.classList.add("Isvisible");
//       modalImg.src = this.src;
//     });
//   });
  
//   closeButton.addEventListener("click", function() {
//     modal.classList.remove("Isvisible")
//   });
  
//   window.addEventListener("click", function(event) {
//     if (event.target === modal) {
//       modal.classList.remove("Isvisible")
//     }
//   });
  
  
   
  
  // REVEAL ACTION
  
  {
    function reveal() {
      var reveals = document.querySelectorAll('[data-reveal]');
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          var dataAnimation = reveals[i].dataset.reveal;
          reveals[i].classList.add('actives');
        } else {
          reveals[i].classList.remove('actives');
        }
      }
    }
    
    window.addEventListener('scroll', reveal);
  }