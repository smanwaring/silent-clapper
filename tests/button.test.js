const db = require('../server/db');
const Board = require('../server/db/models').Board;
const Button = require('../server/db/models').Button;
// Unit testing libraries
const chai = require('chai');
const expect = chai.expect;
const chalk = require('chalk');
// Route testing for routes
const app = require('../server/app');
const supertest = require('supertest');
const agent = supertest.agent(app);

describe('Board', () => {
  before('wait for the db', function(done) {
    db.sync()
      .then(() => {
        console.log(chalk.yellow('Sync success'));
        done();
      })
      .catch(done);
  });

  after('clear db', () => db.didSync);

  const validBoard = {
    path: 58257,
    buttons: [
      { icon: 'fa fa-money fa-spin', color: 'green' }
    ]
    };

  const invalidBoardA = {
    path: '58257'
  };

  describe('Models: ', () => {

    describe('Board Validations: ', () => {

      it('successfully creates a valid board', () => {
        return Board.create(validBoard)
          .then(createdBoard => {
            expect(createdBoard.dataValues).to.include.keys('path');
          })
          .catch(err => console.error(err));
      });

      it('reports a validation error for invalid board entries', () => {
        return Board.create(invalidBoardA)
          .then(error => {
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.contain('invalid input');
          })
          .catch(err => console.log(chalk.green('You got a validation error')));
      });

    });
  });




  describe('Routes: ', () => {

    before('create a fake board', () => {
      return Board.create({
        path: 58225,
        id: 100123
      })
      .then(ok => console.log(chalk.yellow('fake board created')))
      .catch(err => console.error(err));
    });

    before('ensures a fake button association exists', () => {
      return Button.create({
        icon: 'fa fa-money fa-spin',
        color: 'green',
        boardId: 100123,
        id: 2222
      })
      .then(ok => console.log(chalk.yellow('fake button with association created')))
      .catch(err => console.error(err));
    });

    after('delete that fake board', () => {
      return Board.findById(100123)
        .then(board => board.destroy())
        .then(ok => console.log(chalk.green('board deleted')))
        .catch(err => console.error(err));
    });

    after('delete that fake button', () => {
      return Button.findById(2222)
      .then(button => button.destroy())
      .then(ok => console.log(chalk.green('button deleted')))
      .catch(err => console.error(err));
    });

    const validBoardC = {
      path: 13070,
      buttons: [
        { icon: 'fa fa-money fa-spin', color: 'green' },
        { icon: 'fa fa-smile-o', color: 'pink' } ],
      id: 44444
      };

      it('POST /api/ >> creates a board and buttons and returns that created board with associated buttons', (done) => {
        agent.post('/api/')
          .set('Content-type', 'application/json')
          .send(validBoardC)
          .expect(201)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body).to.include({ path: '13070' });
            expect(res.body.buttons).to.be.a('array');
            expect(res.body.buttons).to.have.length(2);
            expect(res.body.buttons[0]).to.include({ color: 'green' });
            done();
          });
      });

      it('GET /api/enter/:boardPath >> returns all the buttons associated with a specific board', (done) => {
        agent.get('/api/enter/13070')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            expect(res.body.buttons[0]).to.include({ icon: 'fa fa-money fa-spin' });
            expect(res.body.buttons).to.have.length(2);
            done();
          });
      });

  });

});
