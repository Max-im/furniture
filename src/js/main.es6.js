(function($) {




// top selectMenu
$('<i class="fa fa-user" aria-hidden="true"> </i>').prependTo($('.accountMenu')).css('marginRight', 5);
$('<i class="fa fa-sort-desc" aria-hidden="true"></i>').appendTo($('.selectMenu'));



$(".selectMenu").on("click", function(e){
	e.preventDefault();
	let item = e.target;
	let itemObj = $(e.target.nextElementSibling);
	function hideMenu(){
		itemObj.slideUp().addClass("hide");
	};
	if(itemObj.hasClass("hide")){
		itemObj.slideDown().removeClass('hide');
		itemObj.on('click', function(e){
			e.preventDefault();
			let textNode = e.target.innerHTML;
			item.innerHTML = textNode;
			hideMenu();
		});
	} else{
		
		hideMenu();
	}

})



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
		e.preventDefault();
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



$("#carousel").owlCarousel({
	items : 1,
	autoPlay : 5000,
	pagination: true,
	navigation : true,
	mouseDrag: false,
	slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true

});


$('.owl-prev').empty().append('<i class="fa fa-angle-left" aria-hidden="true"></i>');
$('.owl-next').empty().append('<i class="fa fa-angle-right" aria-hidden="true"></i>');


$( window ).resize(showLog);

console.log($(window).width());
console.log($('.slider').width());

function showLog(){
	console.log('window' + $(window).width());
	console.log('slider' + $('.slider').width());
	console.log('slider inn ' + $('.slider').innerWidth());
	// $('.slideImg').innerWidth($('.slider').width());
}

})(jQuery);


