var inc = 1;
$(document).ready(function () {
  $('nav').append(`
    <img class="rounded-full h-12 w-12" src="assets/images/my-logo.jpg" alt="Rizkia-Image">
    <ul class="hidden md:flex space-x-4 text-white">
      <li class="cursor-pointer menu hover:text-yellow-300">About Us</li>
      <li class="cursor-pointer menu hover:text-yellow-300">Certificates</li>
      <li class="cursor-pointer menu hover:text-yellow-300">Experiences</li>
      <li class="cursor-pointer menu hover:text-yellow-300">Expertises</li>
      <li class="cursor-pointer menu hover:text-yellow-300">Contacts</li>
    </ul>
    <button id="theme-toggle" class="resume hidden md:block p-2 bg-yellow-300 dark:bg-gray-600 rounded transition duration-300">CV</button>
        
    <button class="text-white menu-icon md:hidden flex text-3xl self-center">
      <i class="fa-solid fa-bars"></i>
    </button>

    <ul id="menuItems" class="md:hidden absolute top-12 right-0 grid grid-cols-1 bg-purple-500 dark:bg-gray-900 p-2 gap-2">
      <li class="text-center menu mx-1 rounded-md shadow-sm p-2 bg-blue-500 text-white">About</li>
      <li class="text-center menu mx-1 rounded-md shadow-sm p-2 bg-blue-500 text-white">Experiences</li>
      <li class="text-center menu mx-1 rounded-md shadow-sm p-2 bg-blue-500 text-white">Expertises</li>
      <li class="text-center menu mx-1 rounded-md shadow-sm p-2 bg-blue-500 text-white">Certificates</li>
      <li class="text-center menu mx-1 rounded-md shadow-sm p-2 bg-blue-500 text-white">Contacts</li>
      <li class="resume text-center menu mx-1 rounded-md shadow-sm p-2 bg-yellow-300 dark:bg-gray-600">CV</li>
      </ul>
  `);
  if ($('main').html() == '') {
    about();
  }
  mdIcon(inc);
});

$(document).on('click', '.menu-icon,.menu', function () {
  inc += 1;
  mdIcon(inc)
});

function mdIcon(toggle) {
  if (toggle % 2 == 1) {
    $('#menuItems').addClass('hidden');
  } else {
    $('#menuItems').removeClass('hidden');
  }
}

$(document).on('click', '.resume', function () {
  var url = "resume.html";
  window.open(url, '_blank');
});

$(document).on('click', '.menu', function () {
  let menu = $(this).text();
  $("main").empty();
  switch (menu) {
    case "Projects":
      project();
      break;
    case "Experiences":
      experience();
      break;
    case "Expertises":
      expertise();
      break;
    case "Certificates":
      certificate();
      break;
    case "Contacts":
      contact();
      break;
    default:
      about();
      break;
  }
});

function expertise() {
  script = document.createElement('script');
  script.src = 'layouts/expertise.js';
  script.type = 'text/javascript';
  document.body.parentNode.appendChild(script);
}

function certificate() {
  script = document.createElement('script');
  script.src = 'layouts/certificate.js';
  script.type = 'text/javascript';
  document.body.parentNode.appendChild(script);
}

function contact() {
  script = document.createElement('script');
  script.src = 'layouts/contact.js';
  script.type = 'text/javascript';
  document.body.parentNode.appendChild(script);
}

function experience() {
  script = document.createElement('script');
  script.src = 'layouts/experience.js';
  script.type = 'text/javascript';
  document.body.parentNode.appendChild(script);

  var link = document.createElement('link');
  link.href = 'assets/css/experience.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function about() {
  script = document.createElement('script');
  script.src = 'layouts/about.js';
  script.type = 'text/javascript';
  document.body.parentNode.appendChild(script);
}