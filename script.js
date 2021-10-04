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
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: './img/logo.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
 }); 



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