$(document).ready(function() {
  $("main").append(`
    <div class="fixed p-2 flex justify-between overflow-x-scroll text-white text-center bg-black w-full md:max-h-15 max-h-20">
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Front-End</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Back-End</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Android</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Mobile</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Fullstack</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Scrum Master</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Database Engineer</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">UI/UX</div>
      <div class="self-center hover:font-bold mx-1 hover:cursor-pointer border border-white rounded rounded-md p-1">Sys Admin</div>
    </div>
    <div class="p-2 grid grid-cols-2 md:grid-cols-5 gap-2 mt-20 md:mt-15">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/android_studio.png" alt="img_error" title="ANDROID STUDIO">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/api.png" alt="img_error" title="API">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/app_inventor.png" alt="img_error" title="APP INVENTOR">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/aws.png" alt="img_error" title="AWS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/bootstrap.png" alt="img_error" title="BOOTSTRAP">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/click_up.png" alt="img_error" title="CLICK UP">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/dbeaver.png" alt="img_error" title="DBEAVER">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/docker.png" alt="img_error" title="DOCKER">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/draw_io.png" alt="img_error" title="DRAW IO">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/figma.png" alt="img_error" title="FIGMA">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/filmora.png" alt="img_error" title="FILMORA">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/firebase.png" alt="img_error" title="FIREBASE">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/flutter.png" alt="img_error" title="FLUTTER">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/ftp.png" alt="img_error" title="FTP">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/git.png" alt="img_error" title="GIT">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/golang.png" alt="img_error" title="GO">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/heroku.png" alt="img_error" title="HEROKU">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/html_css_js.png" alt="img_error" title="HTML CSS JS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/ilustrator.png" alt="img_error" title="ADOBE ILUSTRATOR">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/java.png" alt="img_error" title="JAVA">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/jquery.png" alt="img_error" title="JQUERY">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/kotlin.png" alt="img_error" title="KOTLIN">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/laravel.png" alt="img_error" title="LARAVEL">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/linux.png" alt="img_error" title="LINUX">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/mongodb.png" alt="img_error" title="MONGODB">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/mysql.png" alt="img_error" title="MYSQL">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/nginx.png" alt="img_error" title="NGINX">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/node_js.png" alt="img_error" title="NODE JS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/nuxt_js.png" alt="img_error" title="NUXT JS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/php.png" alt="img_error" title="PHP">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/postgresql.png" alt="img_error" title="POSTGRE SQL">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/postman.png" alt="img_error" title="POSTMAN">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/putty.png" alt="img_error" title="PUTTY">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/pwa.png" alt="img_error" title="PWA">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/python.png" alt="img_error" title="PYTHON">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/react.png" alt="img_error" title="REACT JS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/scrum.png" alt="img_error" title="SCRUM">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/sqlserver.png" alt="img_error" title="MICROSOFT SQL SERVER">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/ssh.png" alt="img_error" title="SSH">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/tailwind.png" alt="img_error" title="TAILWIND">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/trello.png" alt="img_error" title="TRELLO">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/vim.png" alt="img_error" title="VIM">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/visio.png" alt="img_error" title="MICROSOFT VISIO">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/vs_code.png" alt="img_error" title="VISUAL STUDIO CODE">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/vue.png" alt="img_error" title="VUE JS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/websocket.png" alt="img_error" title="WEB SOCKET">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/windows.png" alt="img_error" title="WINDOWS OS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/woo_commerce.png" alt="img_error" title="WOO COMMERCE">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/wordpress.png" alt="img_error" title="WORDPRESS">
      <img class="h-1/2 self-center w-auto object-fit" src="assets/images/expertises/xd.png" alt="img_error" title="ADOBE XD">
    </div>
  `);
});