function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }
    
    function changeIcon(x){
      x.classList.toggle('fa-moon');
    }
    
    function home() {
      const element = document.getElementById("Home");
      element.scrollIntoView();
    }
    function about() {
  const element = document.getElementById("About");
  element.scrollIntoView();
}
function skill() {
  const element = document.getElementById("Skills");
  element.scrollIntoView();
}
function experience() {
  const element = document.getElementById("Experience");
  element.scrollIntoView();
}
function project() {
  const element = document.getElementById("Project");
  element.scrollIntoView();
}
function contact() {
  const element = document.getElementById("Contact");
  element.scrollIntoView();
}
/*
function nextCard(projectBox, scrollDistance) {
  projectBox.scrollBy({ left: scrollDistance, behaviour: "smooth" })
}

document.addEventListener("DOMContentLoaded", function () {
const scrollImages = document.querySelector(".productBox");
function leftScroll() {
    scrollImages.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});
*/  
  