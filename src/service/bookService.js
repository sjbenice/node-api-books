const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { title, author, publicationDate, genres } = req.body;
    const book = new Book({ title, author, publicationDate, genres });
    await book.save();
    res.json(book);
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
};

exports.updateBook = async (req, res) => {
    const { title, author, publicationDate, genres } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publicationDate, genres }, { new: true });
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
};

exports.deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
};
