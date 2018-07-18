import * as express from 'express';
const bodyParser = require('body-parser');
import {readFileSync} from 'fs';
const { find, includes, max, map, isString } = require('lodash');

const books = JSON.parse(readFileSync(__dirname + '/books.json', 'utf-8').toString());

function* idSequence(initial) {
  let i = initial;
  while (true) { yield i++; } // eslint-disable-line no-constant-condition, no-plusplus
}

const booksIdGen = idSequence(max(map(books, 'id')) + 1);
const util = require('util');

const isBook = (book) => !!book && !!book.title && isString(book.title)
  && !!book.author && isString(book.author)
  && !!book.isbn && isString(book.isbn);
const hasBook = (req, res, next) => {
    if (isBook(req.body)) {
        next();
    } else {
        res.status(404).json({ error: 'invalid payload structure' });
    }
};
const byId = (id) => (book) => book.id === +id;


 // ----------  EXPRESS ----------

const app = express();
app.use(bodyParser.json());

app.get('/api/book', (req, res) => {
    res.json(books);
  }
);

app.listen(9000, () => {
  console.log('Server listening on port 9000!');
});

app.post('/api/book', hasBook, (req, res) => {
    if (req.body.id) {
        const book = books.find(byId(req.body.id));
        if (book) {
            const updatedBook = req.body;
            Object.assign(book, updatedBook);
            res.json(book);
        } else {
            res.status(404).json({ error: 'book not found' });
        }
    } else {
        const newBook = req.body;
        newBook.id = booksIdGen.next().value;
        books.push(newBook);
        res.json(newBook);
    }
});



app.get('/api/book/:id', (req, res) => {
  const book = books.find(byId(req.params.id));
  book ? res.json(book) : res.status(404).json({ error: 'book not found' });
});



