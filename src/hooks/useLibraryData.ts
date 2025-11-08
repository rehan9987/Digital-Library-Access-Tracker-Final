import { useState, useEffect } from 'react';
import { Book, User, Transaction, parseCSV } from '@/lib/csvParser';
import booksCSV from '@/assets/books.csv?raw';
import usersCSV from '@/assets/users.csv?raw';
import transactionsCSV from '@/assets/transactions.csv?raw';

export function useLibraryData() {
  const [books, setBooks] = useState<Book[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Parse CSV data
        const parsedBooks = parseCSV<Book>(booksCSV);
        const parsedUsers = parseCSV<User>(usersCSV);
        const parsedTransactions = parseCSV<Transaction>(transactionsCSV);

        // Validate that we got data
        if (!parsedBooks || parsedBooks.length === 0) {
          console.warn('No books data found');
        }
        if (!parsedUsers || parsedUsers.length === 0) {
          console.warn('No users data found');
        }
        if (!parsedTransactions || parsedTransactions.length === 0) {
          console.warn('No transactions data found');
        }

        setBooks(parsedBooks || []);
        setUsers(parsedUsers || []);
        setTransactions(parsedTransactions || []);
        setLoading(false);
      } catch (error) {
        console.error('Error parsing CSV data:', error);
        // Set empty arrays on error so the app can still render
        setBooks([]);
        setUsers([]);
        setTransactions([]);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addBook = (book: Omit<Book, 'book_id'>) => {
    // Generate new book ID
    const existingIds = books.map(b => parseInt(b.book_id.replace('B', ''))).filter(id => !isNaN(id));
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const newBookId = `B${String(maxId + 1).padStart(3, '0')}`;
    
    const newBook: Book = {
      ...book,
      book_id: newBookId,
    };
    
    setBooks(prev => [...prev, newBook]);
    return newBook;
  };

  const addTransaction = (transaction: Omit<Transaction, 'transaction_id'>) => {
    // Generate new transaction ID
    const existingIds = transactions.map(t => parseInt(t.transaction_id.replace('T', ''))).filter(id => !isNaN(id));
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const newTransactionId = `T${String(maxId + 1).padStart(3, '0')}`;
    
    const newTransaction: Transaction = {
      ...transaction,
      transaction_id: newTransactionId,
    };
    
    // Update available copies when a book is issued
    if (!transaction.return_date) {
      setBooks(prev => prev.map(book => 
        book.book_id === transaction.book_id 
          ? { ...book, available_copies: Math.max(0, book.available_copies - 1) }
          : book
      ));
    }
    
    // If transaction is being returned, update available copies
    if (transaction.return_date) {
      setBooks(prev => prev.map(book => 
        book.book_id === transaction.book_id 
          ? { ...book, available_copies: Math.min(book.total_copies, book.available_copies + 1) }
          : book
      ));
    }
    
    setTransactions(prev => [...prev, newTransaction]);
    return newTransaction;
  };

  const returnBook = (transactionId: string, returnDate: string) => {
    setTransactions(prev => prev.map(transaction => {
      if (transaction.transaction_id === transactionId && !transaction.return_date) {
        // Update available copies
        setBooks(prevBooks => prevBooks.map(book => 
          book.book_id === transaction.book_id 
            ? { ...book, available_copies: Math.min(book.total_copies, book.available_copies + 1) }
            : book
        ));
        
        return { ...transaction, return_date: returnDate };
      }
      return transaction;
    }));
  };

  return { books, users, transactions, loading, addBook, addTransaction, returnBook };
}
