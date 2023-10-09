
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