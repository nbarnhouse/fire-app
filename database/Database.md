<br />
<div align="center">
  <a href="https://github.com/nbarnhouse/fire-app">
    <img src="../src/assets/firelogo.png" alt="BrandLogo" width="80" height="80">
  </a>

  <h3 align="center">F.I.R.E App DATABASE DOCUMENTATION</h3>

  <p align="center">
    <a href="../README.md">Return to README</a>
  </p>
</div>

The application's database is a relational [Postgres](https://www.postgresql.org/download/) database.

---

Entity Relationship Diagram (ERD)

<img src="./images/ERD.png" alt="Entity Relationship Diagram" width="250">

---

Tables

- **locations** - used to store location data. Work in Progress
- **about** - used to store narrative data about locations for detail page view
- **transport_bullets** - used to store transport bullet points for detail page view
- **system_bullets** - used to store system bullet points for detail page view
- **healthcare_bullets** - used to store healthcare bullet points for detail page view

---

Database Installation

1. Ensure [PostgreSQL](https://www.postgresql.org) is installed in your development or deployment environment.
2. Use [Postico](https://eggerapps.at/postico2/) or your choice of DB interfaces to run the database.sql file. Do not alter the order of sql instructions as the file is designed to build the dependencies in order.
3. Import the CSV data files as detailed in the database.sql file. Do not alter the order of imports as dependant tables must be populated first.
4. If you are installing to a deployed environment, you must set a DATABASE_URL environment variable (e.g. DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app) in your deployment environment so that the server APIs can interact with the database.

---

  <p align="center">
    <a href="../README.md">Return to README</a>
  </p>
