var swiper = new Swiper(".event-swiper", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 800,
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        480:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

const events = [
    {
        title:"Azure and github backpack",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      title:"2",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
  },
  {
    title:"3",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
},
{
  title:"4",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
},
{
  title:"5",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
]



for(let i=1;i<=events.length;i++){
  document.getElementById("swiper_images").innerHTML += `
  <div class="swiper-slide"> <img src="assets/event1/${i}.jpg"> </div>`
}

  

swiper.on('slideChange', function () {
  document.getElementById("event-title").innerHTML = events[swiper.realIndex].title;
  document.getElementById("event-desc").innerHTML = events[swiper.realIndex].desc;  
});
