export interface Book {
  book_id: string;
  title: string;
  author: string;
  genre: string;
  available_copies: number;
  total_copies: number;
}

export interface User {
  user_id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Transaction {
  transaction_id: string;
  book_id: string;
  user_id: string;
  issue_date: string;
  return_date: string | null;
  due_date: string;
  fine: number;
}

export function parseCSV<T>(csvText: string): T[] {
  if (!csvText || typeof csvText !== 'string') {
    console.warn('parseCSV: Invalid CSV text provided');
    return [];
  }

  try {
    const trimmedText = csvText.trim();
    if (!trimmedText) {
      console.warn('parseCSV: Empty CSV text');
      return [];
    }

    const lines = trimmedText.split('\n').filter(line => line.trim().length > 0);
    if (lines.length === 0) {
      console.warn('parseCSV: No lines found in CSV');
      return [];
    }

    const headers = lines[0].split(',').map(h => h.trim()).filter(h => h.length > 0);
    if (headers.length === 0) {
      console.warn('parseCSV: No headers found in CSV');
      return [];
    }
    
    return lines.slice(1)
      .filter(line => line.trim().length > 0) // Filter out empty lines
      .map((line, lineIndex) => {
        try {
          const values = line.split(',').map(v => v.trim());
          const obj: any = {};
          
          headers.forEach((header, index) => {
            const value = values[index];
            
            // Convert numeric fields
            if (['available_copies', 'total_copies', 'fine'].includes(header)) {
              obj[header] = value && value !== '' ? Number(value) || 0 : 0;
            } else if (value === '' || value === undefined || value === null) {
              obj[header] = null;
            } else {
              obj[header] = value;
            }
          });
          
          return obj as T;
        } catch (error) {
          console.warn(`parseCSV: Error parsing line ${lineIndex + 2}:`, error);
          return null;
        }
      })
      .filter((item): item is T => item !== null); // Remove null entries
  } catch (error) {
    console.error('parseCSV: Error parsing CSV:', error);
    return [];
  }
}

export function parseDateDDMMYYYY(dateStr: string): Date {
  if (!dateStr) return new Date();
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function isOverdue(dueDate: string, returnDate: string | null): boolean {
  if (returnDate) return false;
  const due = parseDateDDMMYYYY(dueDate);
  return due < new Date();
}
