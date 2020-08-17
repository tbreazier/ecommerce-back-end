 ![The-Unlicense(None) license badge](https://img.shields.io/static/v1?label=license&message=The-Unlicense(None)&color=blue)

# E-commerce Back End

  ### Description
  This project is a backend for an Ecommerce site built using Node and Sequelize.
  
  Link to sample video - https://youtu.be/z0e9N1HiMiI

  ### Table of Contents
  + [Installation](#installation)
  + [Usage](#usage)
  + [Credits](#credits)
  + [License](#license)
  + [Tests](#tests)
  + [Questions?](#questions?)

  ### Installation
  To install the project, several steps need to be followed. 
  1. Ensure MySQL is installed on your local machine.
  2. Clone the Github repository to your machine.
  3. Create a .env file with the following field:
    DB_NAME='ecommerce_db'
    DB_USER='(MySQL username)'
    DB_PW='(MySQL Password)'
  4. Type 'npm install' in the terminal to install the dependencies. 
  5. Create and populate the data base by typing 'mysql -u root -p' into the terminal and entering your MySQL password.
  6. Type source ./db/schema.sql and then source ./db/seeds.sql into the terminal. To return to the main terminal type 'exit'.
  7. Seed the tables by typing 'npm run seed' into the terminal. 


  ### Usage
  Once the above steps are complete, type 'npm start' into the terminal to launch the application. You can now view/interact with the database objects through a browser, Insomina, or Postman.

  ### Credits
  Node.js, Sequelize, Express.js, MySQL2, Insomnia

  ### License
  The-Unlicense(None)

  ### Tests
  Each API route was tested several times. 

  ### Questions?
  Github: [Profile](https://github.com/tbreazier)  
  Email: tbreaz5015@aol.com