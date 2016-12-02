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
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	var item = e.target;
	var itemObj = $(e.target.nextElementSibling);
	function hideMenu(){itemObj.addClass("animated flipOutX").one(
			animationEnd, function(){$(this).removeClass(
			'animated flipOutX').addClass("hide");
			itemObj.css("display", "none");});
		};
	if(itemObj.hasClass("hide")){
		itemObj.css("display", "block");
		itemObj.addClass("animated flipInX").one(
			animationEnd, function(){$(this).removeClass(
			'animated flipInX hide')});
		itemObj.on('click', function(e){
			e.preventDefault();
			var textNode = e.target.innerHTML;
			item.innerHTML = textNode;
			hideMenu();
		});
	} else{
		
		hideMenu();
	}

})


})(jQuery);

