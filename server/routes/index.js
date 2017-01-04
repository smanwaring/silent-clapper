// init router
const router = require('express').Router();
const Board = require('../../db/models/board');


router.post('/', (req, res, next) => {
    Board.create({
        path: req.body.path,
        buttons: req.body.buttons
    })
    .then(createdBoard => {
        console.log("CREATED BOARD", createdBoard)
        res.send(createdBoard)
    })
    .catch(next);
});


router.get('/:boardId', (req, res, next) => {
    Board.findOne({
        where: {
            path: req.params.boardId
        }
    })
    .then(foundBoard => {
        let data = {message: 'not found'};
        if (!foundBoard){
            res.send(data);
        } else {
            res.send(foundBoard.path);
        }
    })
    .catch(next);
});

router.get('/enter/:boardId', (req, res, next) => {
    Board.findOne({
        where: {
            path: req.params.boardId
        }
    })
    .then(foundBoard => {
        if (!foundBoard){
             res.status(404).end();
        } else {
            console.log(foundBoard.buttons)
            res.send(foundBoard.buttons);
        }
    })
    .catch(next);
});


// No API routes matched? 404.
router.use((req, res) => res.status(404).end())

module.exports = router;