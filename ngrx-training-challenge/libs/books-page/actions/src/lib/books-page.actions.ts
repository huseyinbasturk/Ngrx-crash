import { createAction, props } from '@ngrx/store';
import { BookRequiredProps } from '@book-co/shared-models';
/**
 *
 * Enter
 * SElect a book
 * Clear selected book
 * Create book
 * Update book
 * delete book
 */
export const enter = createAction('[Books Page] Enter');

export const selectBook = createAction(
  '[Books Page] Select a Book',
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
  '[Books Page] Clear Selected Book'
);

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
  '[Books Page] Update Book',
  props<{ bookId: string; changes: BookRequiredProps }>()
);

export const deleteBook = createAction(
  '[Books Page] Delete Book',
  props<{ bookId: string }>()
);
export function booksLoaded(booksLoaded: any, arg1: (state: import("libs/shared-state-books/src/lib/books.reducer").State, action: any) => { activeBookId: any; collection: import("@book-co/shared-models").BookModel[]; }): import("@ngrx/store").ReducerTypes<import("libs/shared-state-books/src/lib/books.reducer").State, import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
  throw new Error('Function not implemented.');
}

