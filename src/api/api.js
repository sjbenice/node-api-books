const express = require('express');
const router = express.Router();
const bookService = require('./../service/bookService');
const userService = require('./../service/userService');
const { authenticateJWT, checkAdmin } = require('./../middleware/auth');

// Book routes
router.post('/books', authenticateJWT, checkAdmin, bookService.addBook);
router.get('/books', bookService.getBooks);
router.get('/books/:id', bookService.getBookById);
router.put('/books/:id', authenticateJWT, checkAdmin, bookService.updateBook);
router.delete('/books/:id', authenticateJWT, checkAdmin, bookService.deleteBook);

// User routes
router.post('/users/register', userService.register);
router.post('/users/login', userService.login);
router.get('/users/me', authenticateJWT, userService.getCurrentUser);
router.put('/users/:id/role', authenticateJWT, checkAdmin, userService.updateUserRole);

module.exports = router;
