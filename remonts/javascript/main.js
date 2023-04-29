$(function(){
var mixer = mixitup('.projects__divani');
$( '.projects__works-top').on('click', function(){
    $( '.projects__works-top').removeClass('projects__works-top--active')
    $( this).addClass('projects__works-top--active')
}
)


    let old;

document.querySelector('.kviz__mebel').addEventListener('click',e => {
	if (e.target.classList.contains('kviz__mebel-item')) {
    	if (old) old.style.background = '';
    	old = e.target;
    	e.target.style.background = '#2C79FF';
    }
});





$('.otzivi__slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    appendDots: $('.otzivi__dots'),
    waitForAnimate:false,
  })

$('.otzivi__prev').on('click', function (e) {
    e.preventDefault()
    $('.otzivi__slide').slick('slickPrev')
})

$('.otzivi__next').on('click', function (e) {
    e.preventDefault()
    
$('.otzivi__slide').slick('slickNext')





})
$('.programm__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('programm__acc-link--active')
    $(this).children('.programm__acc-text').slideToggle()
})

$('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
})










})


