(function($) {

// search
$("#search").on("focus", function(){
	$(".fa-search").css("color", "#279cc7");
});

$("#search").on("blur", function(){
	$(".fa-search").css("color", "#828282");
});


$('<i class="fa fa-user" aria-hidden="true"> </i>').prependTo($('.accountMenu')).css('marginRight', 5);
$('<i class="fa fa-sort-desc" aria-hidden="true"></i>').appendTo($('.selectMenu'));



$(".selectMenu").on("click", function(e){
	e.preventDefault();
	let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
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


function bigMenuRwsizing() {
  	let winLen = $('.container').innerWidth();
  	if( winLen > 768){
  		$('.featuresMenuSubmenuWrap').width(winLen);
  		return;
  	}else if(winLen > 530){
  		$('.featuresMenuSubmenuWrap').width(400);
  	return;
  	}else{
  		$('.featuresMenuSubmenuWrap').width(280);
  	}
}
bigMenuRwsizing()
$( window ).resize(bigMenuRwsizing);


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


})(jQuery);



