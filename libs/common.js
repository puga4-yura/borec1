	$(document).ready(function () {
		$("#back-top").hide();
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			$('#back-top ').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});



		$('.cmn-toggle-switch__htx').on('click', function (e) {
			e.preventDefault();
			$('.bl2__flex-container__menu ').slideToggle();
		});
		$(window).resize(function () {
			var wid = $(window).width();
			if (wid > 767 && $('.bl2__flex-container__menu').is(':hidden')) {
				$('.bl2__flex-container__menu').removeAttr('style');
			}
		});
		(function () {
			var toggles = document.querySelectorAll(".cmn-toggle-switch");
			for (var i = toggles.length - 1; i >= 0; i--) {
				var toggle = toggles[i];
				toggleHandler(toggle);
			};

			function toggleHandler(toggle) {
				toggle.addEventListener("click", function (e) {
					e.preventDefault();
					(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
				});
			}
		})();
	})