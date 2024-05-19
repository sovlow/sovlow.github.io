$(document).ready(function () {
  $("main").append(`
    <section class="portfolio" id="portfolio">
      <div class="container">
        <div class="section--heading">
          <h1>My Projects</h1>
          <h6>Masterpiece came from pieces of projects</h6>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <div class="portfolio__item__img has-margin-right">
            <img src="assets/images/self-gokil.png" alt="Img not found" />
          </div>
          <div class="portfolio__item__description">
            <h6>Self Government Keuangan Interest Laporan</h6>
            <h1>Indonesia of Bank</h1>
            <p>
              It has purpose to make a dynamic report template and dynamic hierarchy or leveling access report
            </p>
          </div>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <div class="portfolio__item__description">
            <h6>Zegen's hotel</h6>
            <h1>Zegen Inc.</h1>
            <p>
              The hotel want better performance for UI & UX for their employees and visitors to make faster and easier reservation 
            </p>
          </div>
          <div class="portfolio__item__img has-margin-left">
            <img src="assets/images/hotel.png" alt="Img not found" />
          </div>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <div class="portfolio__item__img has-margin-right">
            <img src="assets/images/lims.png" alt="Img not found" />
          </div>
          <div class="portfolio__item__description">
            <h6>Lab Inventory Management System</h6>
            <h1>Aneka Tambang Inc.</h1>
            <p>
              The system i made in a week which has 4 modules, that User, Inventory, Product, Sample, and Material. 
              Which those main purpose are gathering data to produce some a new inovation
            </p>
          </div>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <div class="portfolio__item__description">
            <h6>ERP(powered by odoo)</h6>
            <h1>Intelegensi Teknologi Internasional Inc</h1>
            <p>
              Manage ERP for every business such as restaurant, school, hotel also landing page web, POS and HRIS of it.
            </p>
          </div>
          <div class="portfolio__item__img has-margin-left">
            <img src="assets/images/iti-erp.png" alt="Img not found" />
          </div>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <a href="https://ceisa.akebono-astra.co.id/" class="portfolio__item__img has-margin-right">
            <img src="assets/images/ceisa.png" alt="Img not found" />
          </a>
          <div class="portfolio__item__description">
            <h6>Ceisa</h6>
            <h1>Akebono Brake Astra Indonesia Inc.</h1>
            <p>
              Akebono needs system to gathering data about their export-import then syncronize to 
              Indonesia Directorate General of Customs and Excise, Then it(Ceisa) made to help for
            </p>
          </div>
        </div>

        <div class="portfolio__item" data-aos="fade-in" data-aos-duration="300ms">
          <div class="portfolio__item__description">
            <h6>Project Management</h6>
            <h1>Erakomp Indonesia Inc.</h1>
            <p>
              If you've using kanban monitoring project, this what exactly i made with Erakomp Development Team
            </p>
          </div>
          <a href="https://projectmanager.yukevajkt.com" class="portfolio__item__img has-margin-left">
            <img src="assets/images/project-management.png" alt="Img not found" />
          </a>
        </div>
      </div>
    </section>
`);
});