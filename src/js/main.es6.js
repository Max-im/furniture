(function($) {


$('.topLine__select').each(function(item, i){
	$(item).css('z-index', 10-i);
})


// topLine
$('.topLine__link_target').on('click', toggleMenu)

function toggleMenu(e){
	e.preventDefault();
	const subMenu = $(e.target).closest('.topLine__select').find('.topLine__subMenu');
	$(subMenu).toggle();
}


$('.topLine__link_sub').on('click', changeTarget)

function changeTarget(e){
	e.preventDefault();
	const value = e.target.innerHTML;
	const subMenu = $(e.target).closest('.topLine__select').find('.topLine__subMenu');
	const menuTarget = $(e.target).closest('.topLine__select').find('.topLine__link_target');
	menuTarget.html(value);
	$(subMenu).toggle();
}





// search
$("#search").on("focus", function(){
	$(".fa-search").css("color", "#279cc7");
});

$("#search").on("blur", function(){
	$(".fa-search").css("color", "#828282");
});


// mainMenu
function bigMenuRwsizing() {
  	let winLen = $('.container').innerWidth();
  	if( winLen > 768){
  		$('.featuresMenuSubmenuWrap').width(winLen);
  		return;
  	}else if(winLen > 530){
  		$('.featuresMenuSubmenuWrap').width(400);
  	return;
  	}else if(winLen > 480){
  		$('.featuresMenuSubmenuWrap').width(280);
  	}
  	else{
  		$('.featuresMenuSubmenuWrap').width(200);
  	}
}
bigMenuRwsizing()
$( window ).resize(bigMenuRwsizing);


// sendwich
$(".sandwich, .menu_item").click(function() {

  	$(".sandwich").toggleClass("swich");
  	menuToggle();
});

function menuToggle(){

  if($("#sandwich").hasClass('swich')){
  	$('.mainMenuItem').slideDown();
  } else{
  	$('.mainMenuItem').slideUp();
  }

}

function makeHover(parentEl, childElem){
	$(parentEl).on('click', function(e){
		let eventTar =  e.target;
		if($(eventTar).hasClass('features') ||
			$(eventTar).hasClass('livingRoom') ||
			$(eventTar).hasClass('badrooms')){
			e.preventDefault();
		}
	})
	$(parentEl).hover(
		function(e){
			$(childElem).fadeIn();
			$(parentEl)
				.closest('div')
				.children('a')
				.css('background', '#279cc7')
		},
		function(){
			$(childElem).fadeOut();
			$(parentEl)
				.closest('div')
				.children('a')
				.css('background', 'none')
		}
	);
}

makeHover('.badroomsMenuItem', '.subMenuBadroomsWrap');
makeHover('.cartMainDiv', '.cartPopup');
makeHover('.livingroomMenuItem', '.livingroomMenuSubmenuWrap');
makeHover('.featuresMainMenuItem', '.featuresMenuSubmenuWrap');


let contWid = $('.container').innerWidth();
if( contWid > 768){


	$('.footer').hover(
		function(e){
			$('.bottomLine').fadeIn(1000);
			$('.supportPanel').fadeIn(1000);
			let winHeight = $(document).height();
			$(window).scrollTop(winHeight);
		},
		function(){
			$('.bottomLine').fadeOut();
			$('.supportPanel').fadeOut();
		}
	);

}
else{

	$('.bottomLine').css('display', 'block');
	$('.supportPanel').show();

}





$("#carousel").owlCarousel({
	items : 1,
	autoPlay : 5000,
	pagination: true,
	navigation : true,
	mouseDrag: false,
	slideSpeed : 300,
    paginationSpeed : 400,
    transitionStyle : "fade",
    singleItem: true

});







// carousel-2
$('#owlCarousel-2').owlCarousel({
	items : 4,
	autoPlay : 5000,
	pagination: false,
	navigation : true,
	mouseDrag: false,
	slideSpeed : 800,
    paginationSpeed : 1300,
    singleItem: false,

});

// carousel-3
$('#tester').owlCarousel({
	items : 4,
	autoPlay : 5000,
	pagination: false,
	navigation : true,
	mouseDrag: false,
	slideSpeed : 800,
    paginationSpeed : 1300,
    singleItem: false

});



$('.owl-prev').empty().append('<i class="fa fa-angle-left" aria-hidden="true"></i>');
$('.owl-next').empty().append('<i class="fa fa-angle-right" aria-hidden="true"></i>');




})(jQuery);



