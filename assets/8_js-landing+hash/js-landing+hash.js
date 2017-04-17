$(document).ready(function() {
	
	/*$('.main__title').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	/*$('.main__title').html('Hello WOrld');
	});*/

	$('.nav__item-link').on('click', function(event) {
		event.preventDefault();
		var section = $(this).attr('href');
		showSection(section, true);
	});

	$('.arrowDown__link').on('click', function(event) {
		event.preventDefault();
		var section2 = $('.section__two').offset().top - 400;
		$('body, html').animate({scrollTop: section2}, 500);
	});

	showSection(window.location.hash, false);
		moveSlide();
		countItems();
		

	$(window).scroll(function() {
		checkSection();
	});

	$('.close').on('click', function(event) {
		event.preventDefault();
		$('.gallery__slider').css({'visibility':'hidden'});
	});

	/*$('.galery__item').on('click', function(event) {*/
	$('.galery__grid').on('click', '.galery__item', function (event) {	
		event.preventDefault();
		var scrollTop = $(window).scrollTop();
  		var windowHeight = $(window).height();
  		var $set = $('.galery__grid .galery__item');
  		var n = $set.index(this); 

		$('.gallery__slider').css({'visibility':'visible'});
		$('.insertImg').attr("src","/img/gallery/"+(n+1)+".jpg");
	    console.log(n);

	    $('.left__button').on('click', function(event) {
	    	event.preventDefault();
	    	var attribut = +$('.insertImg').attr("src").replace(/\D+/g,"");
	    	var prev = attribut - 1;
	    	var itemsQuantity = $('.galery__grid .galery__item').length;
	    	
	    	if (prev <= 0) {
		  	prev = itemsQuantity;
		  	}
	    	$('.insertImg').attr("src","/img/gallery/"+(prev)+".jpg");
			
	    });

	    $('.right__button').on('click', function(event) {
	    	event.preventDefault();
	    	var attribut = +$('.insertImg').attr("src").replace(/\D+/g,"");
	    	var next = attribut + 1;
	    	var itemsQuantity = $('.galery__grid .galery__item').length;
	    	
	    	if (next > itemsQuantity ) {
		  	next = 1;
		  	}
	    	$('.insertImg').attr("src","/img/gallery/"+(next)+".jpg");
			
	    });
	});
});

// поменять класс на активный
function moveSlide() {
	var slider = document.querySelector('.slider');
	var i = 0;

	function slide() {
	  for (var j = 0; j < slider.children.length; j++) {
	    slider.children[j].className = 'slide'; /*заменяет все классы на указанный*/
	  }
	  slider.children[i].classList = 'slide active'; /*добавит текущие классы*/
	  i < slider.children.length - 1 ? i++ : i = 0; /*есле И < кол.слайдов-1 то добавить один иначе задать И=0*/
	}
	setInterval(slide, 1000);
    
}
	
// показать секцию
function showSection(section, isAnimate) {
	var	direction = section.replace(/#/, ''),
		reqSection = $('.section').filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top;

	if (isAnimate) {
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

// проверим видна ли секция
function checkSection() { 
	$('.section').each(function(){
		var	$this = $(this),
			topEdge = $this.offset().top - 400, // узнаем верхнюю границу
			bottomEdge = topEdge + $this.height(), // узнаем нижнюю грницу путем добавления к верхней высоты элемента
			wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll) {
			var currentId = $this.data('section');
				//console.log(currentId);
				reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');
				reqLink.closest('.nav__item').addClass('active').siblings().removeClass('active');
				window.location.hash = currentId;
			
			if (currentId == 'masters')	{
				
				$('.masters__changer--first').addClass('mastersLeftMovingImg'); 
				$('.masters__description--rightAnimation').addClass('mastersRightMovingText');
				$('.masters__description--leftAnimation').addClass('mastersLeftMovingText');
				$('.masters__changer--second').addClass('mastersRightMovingImg');
				$('.masters__image').css({display: 'block'});
				$('.masters__changer').css({display: 'block'});
			}
		}

	});
	
}

function countItems() { 
		
}
