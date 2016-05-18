$(function(){

	$(".wrapper-tabs").on("click", ".tab", function(){

		var tabs = $(".wrapper-tabs .tab"),
			cont = $(".wrapper-tabs .tab-content");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});
