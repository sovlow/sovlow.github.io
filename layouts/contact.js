$(document).ready(function() {
  $("main").append(`
    <div class="grid grid-cols-1 gap-2 p-2">
     <div class="flex justify-between border-2 border-red-500 rounded-full">
      <a rel="noopener noreferrer" href="mailto:admin@integer.fun" class="icon rounded-full bg-red-500 hover:bg-red-600 cursor-pointer">
        <i class="fa-solid fa-envelope w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center">admin@integer.fun</p>
      <div class="copy rounded-full hover:bg-black cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>

     <div class="flex justify-between border-2 border-black rounded-full">
      <a rel="noopener noreferrer"  href="https://www.tiktok.com/@sovlow" class="icon rounded-full bg-black hover:bg-red-500 cursor-pointer">
        <i class="fa-brands fa-tiktok w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center text-red-500">https://www.tiktok.com/@sovlow</p>
      <div class="copy rounded-full hover:bg-red-500 cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>

     <div class="flex justify-between border-2 border-blue-500 rounded-full">
      <a rel="noopener noreferrer" href="https://bit.ly/rizkia_linkedIn" class="icon rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer">
        <i class="fa-brands fa-linkedin-in w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center text-blue-500">https://bit.ly/rizkia_linkedIn</p>
      <div class="copy rounded-full hover:bg-blue-500 cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>

     <div class="flex justify-between border-2 border-green-500 rounded-full">
      <a rel="noopener noreferrer" href="https://wa.me/+6282211274577" class="icon rounded-full bg-green-500 hover:bg-green-600 cursor-pointer">
        <i class="fa-brands fa-whatsapp w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center text-green-500">+62 822-1127-4577</p>
      <div class="copy rounded-full hover:bg-green-500 cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>

     <div class="flex justify-between border-2 border-gray-500 rounded-full">
      <a rel="noopener noreferrer" href="https://github.com/sovlow" class="icon rounded-full bg-gray-500 hover:bg-black cursor-pointer">
        <i class="fa-brands fa-github w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center text-gray-500">https://github.com/sovlow</p>
      <div class="copy rounded-full hover:bg-gray-500 cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>

     <div class="flex justify-between border-2 border-blue-500 rounded-full">
      <a rel="noopener noreferrer" href="https://discord.com/channels/@sovlow" class="icon rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer">
        <i class="fa-brands fa-discord w-8 h-8 text-white p-2"></i>
      </a>
      <p class="font-semibold flex-2 self-center text-blue-500">https://discord.com/channels/@sovlow</p>
      <div class="copy rounded-full hover:bg-blue-500 cursor-pointer">
        <i class="fa-solid fa-copy w-9 h-9 text-gray-500 hover:text-white p-2"></i>
      </div>
     </div>
    </div>
	`);
});

function copyToClipboard(text) {
  var $temp = $("<textarea>");
  $temp.val(text);
  $("body").append($temp);
  $temp.select();
  document.execCommand("copy");
  $temp.remove();
}

function removeCopiedText() {
  $('.txt-cd').remove();
}

$(document).on('click', '.copy', function() {
  let val = $(this).parent('div').find('p').text();
  copyToClipboard(val);
  $('main').prepend(`
  <div class="fixed txt-cd" style="top:50%; left:50%; transform: translate(-50%, -50%);">
    <p class="bg-black rounded-xl text-white p-2 text-xl font-semibold">copied</p>
  </div>`);
  setTimeout(removeCopiedText, 1000);
});