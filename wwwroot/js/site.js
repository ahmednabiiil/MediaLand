$(() => {
   history.scrollRestoration = "manual";

   $(window).on("beforeunload", function () {
      $(window).scrollTop(0);
   });
   //SVG converter
   const svgConverter = function () {
      $("img.svg").each(function () {
         var $img = jQuery(this);
         var imgID = $img.attr("id");
         var imgClass = $img.attr("class");
         var imgURL = $img.attr("src");
         jQuery.get(
            imgURL,
            function (data) {
               var $svg = jQuery(data).find("svg");
               if (typeof imgID !== "undefined") {
                  $svg = $svg.attr("id", imgID);
               }
               if (typeof imgClass !== "undefined") {
                  $svg = $svg
                     .attr("class", imgClass + " replaced-svg")
                     .css("display", "inline-block");
               }
               $svg = $svg.removeAttr("xmlns:a");
               $img.replaceWith($svg);
            },
            "xml"
         );
      });
   };
   svgConverter();

   $("img").on("error", function () {
      var resize = $(this).attr("src").split("?")[1];
      $(this).attr(
         "src",
         "/images/placeholder.jpg" +
            (resize != null
               ? "?" + resize
               : "?w=500&h=500&mode=crop&scale=both")
      );
      $(this).addClass("img-fluid");
   });
   // start project-slider
   const projectSlider = $(".project-slider");
   if (projectSlider.length > 0) {
      projectSlider.slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         // centerMode: true,
         autoplay: true,
         speed: 2000,
         arrows: false,
         dots: true,
         infinite: true,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 1025,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  arrows: false,
                  dots: true,
               },
            },
            {
               breakpoint: 800,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
               },
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
               },
            },
         ],
      });
   }

   // end project-slider

   const sliderLogoOne = $(
      ".slider-logo-one ,.slider-logo-two ,.slider-logo-three"
   );
   if (sliderLogoOne.length > 0) {
      sliderLogoOne.slick({
         slidesToShow: 8,
         slidesToScroll: 3,
         centerMode: true,
         // autoplay: true,
         arrows: false,
         dots: false,
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  infinite: true,
                  arrows: false,
                  dots: false,
               },
            },
            {
               breakpoint: 800,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false,
               },
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
               },
            },
         ],
      });
   }
});

// start counterup
// start counter

$(".num").counterUp({
   // delay: 20,
   time: 2000,
});
//

// start gsap

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const circle = () => {
   tl.to(".main-banner .we-are .circle", { x: 0, scale: 1, duration: 0.6 });
};

const line = () => {
   tl.to(".main-banner .we-are .line", { width: "83px", duration: 0.6 }, "+=0");
};

const titleMove = () => {
   tl.to(".main-banner .we-are .title h2", { x: 0, duration: 0.6 }, "+=.3");
};

const paragUp = () => {
   tl.to(".main-banner .we-are .parag p", { y: "0%", duration: 1 });
};

const bannerScroll = () => {
   // gsap
   //    .timeline({
   //       scrollTrigger: {
   //          trigger: "video",
   //          start: "center center",
   //          end: "bottom 90%",
   //          markers: false,
   //          scrub: 1,
   //          pin: true,
   //          toggleActions: "restart none none none",
   //       },
   //    })
   //    .to(".banner .we-are", { y: -300 });
};

circle();
line();
titleMove();
paragUp();
bannerScroll();

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".drow-line",
         start: "top-=10% bottom",
         end: "bottom-=20% bottom",
         markers: false,
         scrub: 1,
         pin: false,
         toggleActions: "restart none none none",
      },
   })
   .to(".drow-line .we-are .circle", { x: 0, scale: 1, duration: 0.6 })
   .to(".drow-line .we-are .line", { width: "83px", duration: 0.6 }, "+=0")
   .to(".drow-line .we-are .title h2", { x: 0, duration: 0.6 }, "+=.3")
   .to(".drow-line .we-are .title-two h3", { y: "0%", duration: 1 })
   .to(".drow-line .we-are .parag p", { y: "0%", duration: 1 });

// end gsap

///////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////

// start new section
gsap
   .timeline({
      scrollTrigger: {
         trigger: ".drow-line",
         // start: "90% 40%",
         // end: "bottom 50%",
         start: "top 40%",
         end: "center 50%",
         markers: false,
         scrub: 1,
         // pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".long-line-1 .back-line", { y: 650, duration: 1 });

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".drow-line",
         // start: "90% 40%",
         // end: "bottom 50%",
         start: "top 40%",
         end: "center 50%",
         markers: false,
         scrub: 1,
         // pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".long-line-2 .back-line", { y: 280, duration: 1 });

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".drow-line",
         // start: "90% 40%",
         // end: "bottom 50%",
         start: "top 40%",
         end: "center 50%",
         markers: false,
         scrub: 1,
         // pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".long-line-3 .back-line", { y: 300, duration: 1 });
gsap
   .timeline({
      scrollTrigger: {
         trigger: ".drow-line",
         // start: "90% 40%",
         // end: "bottom 50%",
         start: "top 40%",
         end: "center 50%",
         markers: false,
         scrub: 1,
         // pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".long-line-4 .back-line", { y: 150, duration: 1 });

// end new section

// gsap
//    .timeline({
//       scrollTrigger: {
//          trigger: "drow-line",
//          start: "49% 50%",
//          end: "50% 80%",
//          markers: false,
//          scrub: 1,
//          pin: true,
//          toggleActions: "restart none none none",
//          onEnter: () => {
//             circle();
//             line();
//             titleMove();
//             paragUp();
//          },
//       },
//    })
//    .to(".photo-line img", { opacity: 1 });

const counter = () => {
   gsap
      .timeline({
         scrollTrigger: {
            trigger: "drow-line",
            start: "50% 40%",
            end: "60% 50%",
            markers: false,
            scrub: 1,
            pin: true,
            toggleActions: "restart none none none",
         },
      })
      .to(".counter-detials", { opacity: 1, stagger: 5, duration: 2 });
};

counter();

// tl.to(".counter-detials", { y: "-120%", stagger: 0, duration: 0.5 });

// start what-we-do
gsap
   .timeline({
      scrollTrigger: {
         trigger: "drow-line",
         start: "70% 40%",
         end: "80% 50%",
         markers: false,
         scrub: 1,
         pin: false,
         toggleActions: "restart none none none",
      },
   })
   .to("body", {
      backgroundColor: "#F2F2F2",
      color: "#171717",
   })
   .to(
      ".icon-menu",
      {
         filter: "invert(1) brightness(0)",
      },
      "0"
   )
   .to(
      [".main-logo", ".ar"],
      {
         filter: "invert(1)",
      },
      "0"
   )
   .to(
      "drow-line",
      {
         color: "#171717",
      },
      0
   )
   .to(
      ".counter",
      {
         color: "#171717",
      },
      0
   );

gsap
   .timeline({
      scrollTrigger: {
         trigger: "we-are-inside",
         // start: "65% 40%",
         // end: "100% 100%",
         start: "65% center",
         end: "85% center",
         markers: false,
         scrub: 1,
         pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to([".we-are-inside .circle", ".we-are-inside .circle-2"], {
      x: 0,
      scale: 1,
      duration: 0.3,
   })
   .to([".we-are-inside .line", ".we-are-inside .line-2"], {
      width: "83px",
      duration: 0.3,
   })
   // .to(".we-are-inside .circle-2", { x: 0, scale: 1, duration: 0.6 })
   // .to(".we-are-inside .line-2", { width: "83px", duration: 0.6 })
   .to(".we-are-inside .title h2", { y: "0%", duration: 0.4 })
   .to(".we-are-inside .parag p", { y: "0%", duration: 0.4 });

gsap
   .timeline({
      scrollTrigger: {
         trigger: "we-are-inside",
         start: "82% center",
         end: "93% center",
         markers: false,
         scrub: 1,
         pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".event", { y: "0%", stagger: 1, opacity: 1, duration: 2 });

// end what-we-do

// start gallery

// gsap.timeline({
//    scrollTrigger: {
//       trigger: ".gallery",
//       start: "45% 40%",
//       end: "95% 50%",
//       markers: false,
//       scrub: 1,
//       pin: true,
//       toggleActions: "restart none none none",
//    },
// });
// .to(".gallery .circle", { x: 0, scale: 1, duration: 0.6 })
// .to(".gallery .line", { width: "83px", duration: 0.6 }, "+=0")
// .to(".gallery .title h2", { x: 0, duration: 1 }, "+=.3")
// .to(".gallery .move__cus .cus__btn", { y: "0%", duration: 0 })
// .to(".gallery .parag p", { y: "0%", duration: 1 });

// gsap
//    .timeline({
//       scrollTrigger: {
//          trigger: ".scroll-gallery",
//          start: "40% 50%",
//          end: "120% 50%",
//          markers: false,
//          scrub: 1,
//          pin: false,
//          toggleActions: "pause pause pause pause",
//       },
//    })
//    // .to(".scroll-gallery img", { y: "50%" });
//    .to(".scroll-gallery img", { y: "-120%" });
// // end gallery

// start our
gsap
   .timeline({
      scrollTrigger: {
         trigger: ".gallery",
         start: "10% 50%",
         end: "20% 50%",
         markers: false,
         scrub: 1,
         pin: false,
         toggleActions: "restart none none none",
      },
   })
   .to("body", {
      backgroundColor: "#171717",
      color: "#F2F2F2",
   })
   .to(
      ".icon-menu",
      {
         filter: "invert(0) brightness(1)",
      },
      "0"
   )
   .to(
      [".main-logo", ".ar"],
      {
         filter: "invert(0)",
      },
      "0"
   );

// start our-projects

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".our-projects",
         // start: "top center",
         // end: "250px 50%",
         start: "top center",
         end: "20% 50%",
         markers: false,
         scrub: 1,
         // pin: true,
         toggleActions: "restart none none none",
      },
   })
   .to(".our-projects .circle", { x: 0, scale: 1, duration: 0.6 })
   .to(".our-projects .move__cus .cus__btn", { y: "0%", duration: 0 })
   .to(".our-projects .line", { width: "83px", duration: 0.6 }, "+=0")
   .to(".our-projects .title h2", { x: 0, duration: 1 }, "+=.3")
   .to(".our-projects .parag p", { y: "0%", duration: 1 });

// gsap
//    .timeline({
//       scrollTrigger: {
//          trigger: ".gallery",
//          start: "100% 50%",
//          end: "110% 50%",
//          markers: false,
//          scrub: 1,
//          pin: false,
//          toggleActions: "restart none none none",
//       },
//    })
//    .to("body", {
//       backgroundColor: "#F2F2F2",
//       color: "#171717",
//    });

// end our-projects

// start our-clients
// gsap
//    .timeline({
//       scrollTrigger: {
//          trigger: ".our-clients",
//          start: "top center",
//          end: "20px 50%",
//          markers: true,
//          scrub: 1,
//          // pin: true,
//          toggleActions: "restart none none none",
//       },
//    })
//    .to(".our-clients .circle", { x: 0, scale: 1, duration: 0.6 })
//    .to(".our-clients .move__cus .cus__btn", { y: "0%", duration: 0 })
//    .to(".our-clients .line", { width: "83px", duration: 0.6 }, "+=0")
//    .to(".our-clients .title h2", { x: 0, duration: 1 }, "+=.3")
//    .to(".our-clients .parag p", { y: "0%", duration: 1 });

/////////////////////////////////
gsap
   .timeline({
      scrollTrigger: {
         trigger: ".project-container",
         start: "top-=70% 10%",
         end: "bottom+=20% 20%",
         markers: false,
         toggleActions: "play none none none",
      },
   })
   .to(".project-container", { x: 0, duration: 1 });
/////////////////////////////////////

// end our-clients
// end our

// start brands logo

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".our-projects",
         start: "top bottom",
         end: "bottom top",
         // trigger: ".our-clients",
         // start: "70% 50%",
         // end: "50% 60%",
         markers: false,
         scrub: 1,
         pin: false,
         repeat: -1,
         yoyo: true,
         toggleActions: "restart none none none ",
      },
   })
   .from(".slider-logo-one", { x: innerWidth * -0.5 });
// .from(".slider-logo-one", { x: innerWidth * -0.1 });

gsap
   .timeline({
      scrollTrigger: {
         trigger: ".our-projects",
         start: "top bottom",
         end: "bottom top",
         markers: false,
         scrub: 1,
         pin: false,
         repeat: -1,
         yoyo: true,
         toggleActions: "restart none none none ",
      },
   })

   // .from(".slider-logo-two", { x: innerWidth * -0.1 })
   .from(".slider-logo-two", { x: innerWidth * 0.7 });
gsap
   .timeline({
      scrollTrigger: {
         trigger: ".our-projects",
         start: "top bottom",
         end: "bottom top",
         markers: false,
         scrub: 1,
         pin: false,
         repeat: -1,
         yoyo: true,
         toggleActions: "restart none none none ",
      },
   })

   // .from(".slider-logo-three", { x: innerWidth * 0.1 })
   .from(".slider-logo-three", { x: innerWidth * -0.7 });

// end brands logo

// start footer

// end footer
ScrollTrigger.matchMedia({
   "(min-width: 992px)": function () {
      // setup animations and ScrollTriggers for screens 960px wide or greater...
      // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      // da el scroll el adeem
      // gsap
      //    .timeline({
      //       scrollTrigger: {
      //          trigger: ".scroll-gallery",
      //          start: "40% 50%",
      //          end: "120% 50%",
      //          markers: false,
      //          scrub: 1,
      //          pin: false,
      //          toggleActions: "pause pause pause pause",
      //       },
      //    })
      //    .to(".scroll-gallery img", { y: "-120%" });
      //////////////////////
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".scroll-gallery",
               start: "40% 50%",
               end: "120% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "pause pause pause pause",
            },
         })
         .to(".scroll-gallery .menu-gallery img", { y: "-120%" });
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".scroll-gallery",
               start: "40% 50%",
               end: "120% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "pause pause pause pause",
            },
         })
         .to(".scroll-gallery .menu-gallery-two img", { y: "-180%" });
   },

   // large
   "(min-width: 1200px)": function () {
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".gallery",
               start: "100% 50%",
               end: "110% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to("body", {
            backgroundColor: "#F2F2F2",
            color: "#171717",
         })
         .to(
            ".icon-menu",
            {
               filter: "invert(1) brightness(0)",
            },
            "0"
         )
         .to(
            [".main-logo", ".ar"],
            {
               filter: "invert(1)",
            },
            "0"
         );
      gsap.timeline({
         scrollTrigger: {
            trigger: ".gallery",
            start: 10,
            end: "bottom bottom",
            markers: false,
            scrub: 1,
            pin: false,
            toggleActions: "restart none none none",
         },
      });

      //  el scroll el adeeem
      // gsap
      //    .timeline({
      //       scrollTrigger: {
      //          trigger: ".scroll-gallery",
      //          start: "40% 50%",
      //          end: "90% 50%",
      //          markers: false,
      //          scrub: 1,
      //          pin: false,
      //          toggleActions: "pause pause pause pause",
      //       },
      //    })
      //    .to(".scroll-gallery img", { y: "-120%" });

      ////////////////////////////////////
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".scroll-gallery",
               start: "40% 50%",
               end: "90% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "pause pause pause pause",
            },
         })
         .to(".scroll-gallery .menu-gallery img", { y: "-120%" });
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".scroll-gallery",
               start: "40% 50%",
               end: "90% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "pause pause pause pause",
            },
         })
         .to(".scroll-gallery .menu-gallery-two img", { y: "-180%" });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".footer",
               start: "10% 50%",
               end: "20% 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to("body", {
            backgroundColor: "#171717",
            color: "#F2F2F2",
         })
         .to(
            ".icon-menu",
            {
               filter: "invert(0) brightness(1)",
            },
            "0"
         )
         .to(
            [".main-logo", ".ar"],
            {
               filter: "invert(0)",
            },
            "0"
         );
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".drow-line",
               // start: "top bottom",
               // end: "bottom bottom",
               start: "top+=30% bottom",
               end: "bottom bottom",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         // .to(".drow-line .big-gragh", { y: 0 });
         .to(".drow-line .big-gragh", { y: 150 });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".drow-line",
               // start: "top bottom",
               // end: "bottom bottom",
               start: "top+=30% bottom",
               end: "bottom bottom",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         // .to(".drow-line .small-gragh", { y: 0 });
         .to(".drow-line .small-gragh", { y: -150 });
   },

   // medium
   "(min-width: 1025px) and (max-width: 1439px)": function () {
      gsap
         .timeline({
            scrollTrigger: {
               trigger: "we-are-inside",
               start: "75% 40%",
               end: "85% 50%",
               markers: false,
               scrub: 1,
               pin: true,
               toggleActions: "restart none none none",
            },
         })
         .to(".event", { y: "0%", stagger: 2, duration: 1, opacity: 1 });
   },
   "(min-width: 320px) and (max-width: 1199px)": function () {
      console.log("small");
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".scroll-gallery",
               start: "40% 50%",
               end: "50% 50%",
               markers: false,
               scrub: false,
               pin: false,
               toggleActions: "pause pause pause pause",
            },
         })
         .to(".scroll-gallery img", { y: "0" })
         .pause();

      gsap
         .timeline({
            scrollTrigger: {
               trigger: "we-are-inside",
               start: "center center",
               end: "center 50%",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "none none none none",
            },
         })
         .to([".we-are-inside .circle", ".we-are-inside .circle-2"], {
            x: 0,
            scale: 1,
            duration: 0.3,
         })
         .to([".we-are-inside .line", ".we-are-inside .line-2"], {
            width: "83px",
            duration: 0.3,
         })

         .to(".we-are-inside .title h2", { y: "0%", duration: 0.4 })
         .to(".we-are-inside .parag p", { y: "0%", duration: 0.4 });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: "drow-line",
               start: "40% 40%",
               end: "60% 50%",
               markers: false,
               scrub: 1,
               pin: true,
               toggleActions: "restart none none none",
            },
         })
         .to(".counter-detials", { opacity: 1, stagger: 5, duration: 2 });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: "we-are-inside",
               start: "60% 40%",
               end: "70% 50%",
               markers: false,
               scrub: 1,
               pin: true,
               toggleActions: "restart none none none",
            },
         })
         .to(".event", { y: "0%", stagger: 2, duration: 1, opacity: 1 });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".gallery",
               start: "90% 40%",
               end: "100% 50%",
               markers: false,
               scrub: 0,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to("body", {
            backgroundColor: "#F2F2F2",
            color: "#171717",
         });
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".footer",
               start: "top center",
               end: "5% center",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to("body", {
            backgroundColor: "#171717",
            color: "#F2F2F2",
         });

      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".drow-line",
               start: "top bottom",
               end: "bottom bottom",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to(".drow-line .we-are .circle", { x: 0, scale: 1, duration: 0.6 })
         .to(
            ".drow-line .we-are .line",
            { width: "83px", duration: 0.6 },
            "+=0"
         )
         .to(".drow-line .we-are .title h2", { x: 0, duration: 0.6 }, "+=.3")
         .to(".drow-line .we-are .title-two h3", { y: "0%", duration: 1 })
         .to(".drow-line .we-are .parag p", { y: "0%", duration: 1 });
   },
   "(min-width: 320px) and (max-width: 980px)": function () {},

   // small
   "(max-width: 767px)": function () {
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".drow-line",
               start: "top-=10% bottom",
               end: "bottom-=50% bottom",
               markers: false,
               scrub: 1,
               pin: false,
               toggleActions: "restart none none none",
            },
         })
         .to(".drow-line .we-are .circle", { x: 0, scale: 1, duration: 0.6 })
         .to(
            ".drow-line .we-are .line",
            { width: "83px", duration: 0.6 },
            "+=0"
         )
         .to(".drow-line .we-are .title h2", { x: 0, duration: 0.6 }, "+=.3")
         .to(".drow-line .we-are .title-two h3", { y: "0%", duration: 1 })
         .to(".drow-line .we-are .parag p", { y: "0%", duration: 1 });
   },

   // all
   all: function () {
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
   },
});

// start tilt.js on photo
$(document).ready(function () {
   $(".box").tilt({
      maxTilt: 20,
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 300, // Speed of the enter/exit transition.
      transition: true, // Set a transition on enter/exit.
      disableAxis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      glare: false, // Enables glare effect
      maxGlare: 1, // From 0 - 1.
   });
});

// end tilt.js on photo

// start burger menu

$(".icon-menu").click(function () {
   $(".show-menu").addClass("open");
});
$(".close__menu").click(function () {
   $(".show-menu").removeClass("open");
});
// end burger menu
