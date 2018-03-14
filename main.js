$(document).ready(function () {
	$(".that").on("click", function (e) {
		e.preventDefault();
		console.log("keysAreWorking");
		var clicked_pic = $(this);
		console.log(clicked_pic);
		var description = clicked_pic.data("description");
		$(".modal").find(".inner").find("p").text(description);
		$(".modal").addClass("active");

	});
	$(".close").on("click", function (e) {
		e.preventDefault();

		$(".modal").removeClass("active");
	});



})