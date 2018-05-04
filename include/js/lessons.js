//JS FILE FOR LESSONS HTML
$(document).ready(function(){
	//Function to determine viewport width - use in conjunction with removing/adding HTML elements based on viewport
	function updateTabbedContent() {
	  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);//variable w = the larger of the either the clientWidth, innerWidth or 0, for nothing

	  if ( w < 450 ) {
		//Mobile widtth - do mobile stuff...
			console.log(w + ": Mobile" );
	  } else if ( w >= 450 && w < 800  ) {
		//Tablet width - do tablet stuff..
		console.log( w + ": Tablet" );
	  } else {
		//Desktop width - do desktop stuff
		console.log( w + ": Desktop" );
	  }
	}

	updateTabbedContent();

	$(window).on('resize', function() {
	  updateTabbedContent();
	});


	var moreLink = $('a.more-link'), moreMenu = $('span.more-menu'), subList = $('ul'), mobMenu = $('a#mobMenu, a#mobMenu *'), navList = $('#mainNav'), caret = $('nav#mainNav > ul > li > a span.more-menu'), hotDog = $('svg#hotdog'), screen = $('#screen');

	function openMenu() {
		navList.addClass('slide-down');
		$('a#mobMenu > div').addClass('fade');
		screen.addClass('darken');
		if (subList.hasClass('slide-in') ) {
			subList.removeClass('slide-in');
			caret.removeClass('spin-right');
		}
	}

	function closeMenu() {
		navList.removeClass('slide-down');
		$('a#mobMenu > div').removeClass('fade');
		screen.removeClass('darken');
		if (subList.hasClass('slide-in') ) {
			subList.removeClass('slide-in');
			caret.removeClass('spin-right');
		}
	}

	var mobBtn = $('#mobBtn'), mainNav = $('#mainNav');

  function mobileMenuFunx() {
    mobBtn.on('click', function(event) {
      if ( mainNav.hasClass('slide-down') ) {
        $(this).removeClass('spin');
        closeMenu();
      } else {
        $(this).addClass('spin');
        openMenu();
      }
    });
  }

  mobileMenuFunx();

	$.each(moreMenu, function() {

		$(this).on('click', function(event) {
			var traverseUp = $(event.target).parent('a');

			event.stopPropagation();
			event.preventDefault();
			subList.removeClass('slide-in');
			if ( $(this).hasClass('spin-right') ) {
				$(this).removeClass('spin-right');
				caret.removeClass('spin-right');

			} else {
				$(this).addClass('spin-right');
				traverseUp.siblings(subList).addClass('slide-in');
			}

		})
	})


	function elevator() {
		var elevatorBtn = $('#elevatorBtn');
		var offset = 450, headerOffset = 0, elevatorBtn = $('#elevatorBtn');

		$(window).scroll(function() {
			( $(this).scrollTop() > offset ) ? elevatorBtn.addClass('appear') : elevatorBtn.removeClass('appear');
		});


		elevatorBtn.on('click', function(event) {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: 0
			}, 250, function() {
				window.location.has = hash;
			});
		});
	}

	elevator();


});
