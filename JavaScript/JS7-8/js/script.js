$(function(){

	$(".wrapper-tabs").on("click", ".tab", function(){

		var tabs = $(".wrapper-tabs .tab"),
			cont = $(".wrapper-tabs .tab-content");

		tabs.removeClass("active");
		cont.removeClass("active");

		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});


// Форма входа


$(function () {
    $('.helptip').hide();

    $('[data-tooltip]').on('mouseenter', function (eventObject) {
        var $dataTooltip = $(this).attr('data-tooltip');
        var $helpId = $(this).attr('id');
        $('.' + $helpId).text($dataTooltip).fadeIn()
    });

    $('[data-tooltip]').on('mouseleave', function () {
        $('.helptip').hide().text('')
    });

    $('<button>').text('Show help').insertAfter('form').on('click',function() {
        $('[data-tooltip]').each(function() {
            var $dataTooltip = $(this).attr('data-tooltip');
            var $helpId = $(this).attr('id');
            $('.' + $helpId).text($dataTooltip).fadeIn()
        })
    });
});

