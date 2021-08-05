$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    lazyLoad:true,
    animateOut: 'fadeOut',
    responsiveClass:true,
    merge:true,
    responsive:{
        0:{
            items:1,
            nav:false
            
        },
        600:{
            items:2,
            nav:false
        },
    }
})