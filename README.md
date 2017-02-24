## Welcome the world of Silent Salutations!

Invite your friends from afar or audience members to join your board and watch or participate in visual reactions.

[Visit silent-salutations.herokuapp.com](https://silent-salutations.herokuapp.com/)

A fun little "silent-clapper" I built during a 24 hour hackathon (and have since added to). Silent Salutations uses sockets to connect people who are watching your presentation remotely and allows them to participate in a visual-applaud (and more...depending on the icons available to them). 

![](/public/img/laptop-screen.png?raw=true)  ![](/public/img/phone-screen.png?raw=true)


### Prerequisites

Make sure you have the following:

[Node.js (>6.7) and npm](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/)


### Running Locally

```
npm install

```
This will install all runtime dependencies, as well as Webpack build and Mocha/Chai/Enzyme testing tools.

Also, make sure to populate the proper environment variables for your local setup!


## Running the app

There are two ways to run the app in development mode:

```
npm run build-watch
npm run dev

```
The first command will run Webpack in watch mode, rebuilding the client static files in '/public' every time a change is made to the source files. The second command will run the Node.js server in development mode.


### Testing
To run the test suite, execute the command **npm test**










