$("#to-do-list-ul").on("click", "li", function() {
	$(this).toggleClass("done");
})

$("#to-do-list-ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
})

$("input").keypress(function(event) {
	if(event.which === 13) {
		var itemText = $(this).val();
		$(this).val("");
		$('#to-do-list-ul').append('<li>' + itemText + '<span><i class="fas fa-check"></i></span></li>');
	}
})

$("h2 span").click(function() {
	$("input").fadeToggle();
})