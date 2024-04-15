var inc = 1;
$(document).ready(function() {
  $('nav').append(`
    <div class="flex-1 self-center flex cursor-pointer resume">
      <i class="fa-solid fa-user-tie text-white bg-blue-500 rounded rounded-full md:w-8 md:h-8 w-6 h-6 p-2"></i>
      <p class="font-semibold self-center ml-2">Resume</p>
    </div>
    <div class="flex-1 justify-end hidden md:flex">
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">About</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Experiences</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Expertises</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Certificates</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Contacts</button>
    </div>

    <button class="menu-icon md:hidden flex text-3xl self-center">
      <i class="fa-solid fa-bars"></i>
    </button>

    <div id="menuItems" class="md:hidden absolute top-12 right-0 grid grid-cols-1 bg-blue-200 p-2 gap-2">
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">About</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Experiences</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Expertises</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Certificates</button>
      <button class="menu mx-1 rounded-md border border-gray-300 shadow-sm p-1 bg-blue-500 font-medium text-white hover:bg-blue-600">Contacts</button>
    </div>
  `);
  if ($('main').html() == '') {
    about();
  }
  mdIcon(inc);
});

$(document).on('click', '.menu-icon,.menu', function() {
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

$(document).on('click', '.resume', function() {
  var url = "resume.html";
  window.open(url, '_blank');
});

$(document).on('click', '.menu', function() {
  let menu = $(this).text();
  $("main").empty();
  switch (menu) {
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