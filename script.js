var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
 document.getElementById("button").addEventListener('click', function(){
    //  console.log('ok')
    Swal.fire({
    title: 'AMAZING',
    text: 'sweetalert comes with interesting presets',
    imageUrl: './img/logo.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
 }); 
 document.documentElement.style.setProperty('--animate-duration', '2s');


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });