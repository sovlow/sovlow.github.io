$(document).ready(function() {
  $("main").append(`
    <div id="modal" class="fixed top-0 flex justify-center bg-opacity-70 bg-black h-screen w-screen z-10 hidden"></div>
    <div id="gallery" class="p-2 grid grid-cols-2 md:grid-cols-4 gap-2">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/android.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/css.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/data.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/devops.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/git.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/html.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/jarkom.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/js.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/kotlin.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/ma_guru.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/problem_solving.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/react.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/solid.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/sql_intermediate.png">
      <img class="certificate hover:cursor-pointer" src="assets/images/certificates/ui_ux.png">
    </div>
	`);
});

$(document).on('click', '.certificate', function(){
  let img = $(this).attr('src');
  $(".preview").remove();
  $("#modal").append(`
    <img src="${img}" class="preview object-fit w-1/2 h-auto self-center flex-shrink ">
  `);
  $("#modal").removeClass('hidden');
});

$(document).on('mouseenter', '.certificate', function(){
  $(this).addClass('transition ease-in-out delay-150 bg-blue-500 -translate-y-1 scale-110');
});

$(document).on('mouseleave', '.certificate', function(){
  $(this).removeClass('transition ease-in-out delay-150 bg-blue-500 -translate-y-1 scale-110');
});

$(document).on('click', '#modal', function(){
  $("#modal").addClass('hidden');
});