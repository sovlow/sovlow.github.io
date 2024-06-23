$(document).ready(function() {
  $("main").append(`
    <div class="p-2">
      <img src="assets/images/my-ascii.png" class="m-10 float-right object-cover h-80 w-auto rounded-md shadow-lg shadow-black dark:shadow-white dark:bg-white bg-black" alt="img_error">
      <div class="text-justify text-lg mx-10">
        <span>Hello my name is </span>
        <span class="font-semibold">Rizkia Febri Hardiansyah</span>
        <span>
          , you can call me Rizki. I was born in 
          <a class="text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://maps.app.goo.gl/SqZBAKa9YZBB6aUS8">Bekasi, </a>
          19 Februari 1998.
        </span>
        <span> I have one Wife, one Son, and one Daughter, ooh they are very easy going.</span>
        <br><br>
        <span> Anyway i'm <span class="font-semibold underline">Fullstack Developer</span> <span>, you can see my 
          <button class="menu text-blue-500 hover:text-blue-600">Experiences</button>, and my
          <button class="menu text-blue-500 hover:text-blue-600">Expertises</button>.
        </span>
        <br><br>
        <span>My last education is 
          <a class="font-semibold text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://pnj.ac.id/">Politeknik Negeri Jakarta</a>.
        </span>
        <!-- <span>from 2017 to 2019, to preview my document of it, please 
          <a class="text-blue-500 hover:text-blue-600" href="">check this out</a>.
        </span> -->
        <span> While as students i have joined organizations,
          <!-- <a class="text-blue-500 hover:text-blue-600" href="">organizations</a>, -->
          The biggest motivation what i look for is connections and responsibilities.
        </span>
        <br>
        <span>Anyway, right now i really care about business, so i continue my education in 
          <a class="font-semibold text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://www.unj.ac.id/">Universitas Negeri Jakarta </a>, since 2024's.
          I take business education in faculty of economics. The reason why i decided to take this one is because i have failed build my own business, and i need learn more.
        </span>
        <br><br>
        <span>I love teaching, that's why in my Social Media such a 
          <a class="text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://bit.ly/rizkia_linkedIn">LinkedIn</a>,
          <a class="text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCnVfDu39F09cwhRSryf3tdw">youtube</a>, and 
          <a class="text-blue-500 hover:text-blue-600" rel="noopener noreferrer" href="https://www.tiktok.com/@sovlow">tiktok</a>
          i shared what i cared about, especially joking and programming about.
        </span>
        <span>Unfortunately i don't have much time so i don't make it much.</span>
      <div>
    </div>
  `);
  $("a").attr("target", "_blank");
});

$('title').replaceWith('<title>Rizkia Portfolio | About</title>');
