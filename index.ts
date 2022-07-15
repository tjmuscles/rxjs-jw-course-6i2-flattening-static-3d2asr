import { Observable, of } from "rxjs";
import { concatMap } from "rxjs/operators";


const source$ = new Observable(subscriber => {

  setTimeout(() => {
    subscriber.next('A')
  }, 2000);

  setTimeout(() => {
    subscriber.next('B')
  }, 5000);
});

console.log('App has started');
source$
.pipe(
  concatMap(value => of(value, 1, 2))
)
.subscribe(value => console.log(value));