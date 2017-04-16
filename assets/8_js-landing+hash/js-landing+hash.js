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
	});

	$(window).scroll(function() {
	checkSection();
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

