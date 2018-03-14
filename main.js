$(document).ready(function () {
	$(".that").on("click", function (e) {
		e.preventDefault();
		var photo = $(this);
		var src = photo.attr("src");
		var data_src = photo.attr("data-src");

		photo.attr("src", data_src);
		photo.attr("data-src", src);


	});

});