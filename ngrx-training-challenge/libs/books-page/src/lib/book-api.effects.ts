import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { BooksService } from '@book-co/shared-services';
import { BooksPageActions, BooksApiActions } from '@book-co/books-page/actions';

@Injectable()
export class BooksApiEffects {
  constructor(private booksService: BooksService, private actions$: Actions) {}

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksPageActions.enter),
      exhaustMap(()=> {
        return this.booksService.all().pipe(
          map((books) => BooksApiActions.booksLoaded({books })));
        
      })
    )
  })

  createdBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksPageActions.createBook),
      concatMap(()=> {
        return this.booksService.create(action.book).pipe(
          map((book) => BooksApiActions.bookCreated({book })));
        
      })
    )
  })
}
