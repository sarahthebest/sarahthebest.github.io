// document.addEventListener('DOMContentLoaded', function() {
//     function addScrollAnimation(selector, animationClass) {
//       const elements = document.querySelectorAll(selector);
//       const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(animationClass);
//             observer.unobserve(entry.target);
//           }
//         });
//       });
  
//       elements.forEach(element => {
//         observer.observe(element);
//       });
//     }
//     console.log("Adding is-visible class to element")
//     addScrollAnimation('.fade-in-section', 'is-visible');
//   });

// const cb = function(entries) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('is-visible');
//       } else {
//         entry.target.classList.remove('is-visible');
//       }
//       console.log(entry); 
//     });
//   }
  
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5 
//   };
  
//   const io = new IntersectionObserver(cb, options);
  
//   document.querySelectorAll('.fade-in-section').forEach(section => {
//     io.observe(section);
//   });
  
  

  