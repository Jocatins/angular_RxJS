# RXJS

`RxJS` is a library for reactive programming using observables.
This programming paradigm allows developers to handle async requests in a more
elegant and manageable way.
observables are the basic building blocks of RxJS, and they are a way to represent a stream
of data over time.

# Basic Concepts

`Observables`.

An observable is a data stream that emits values over time.

import {Observable} from "rxjs";

const observable = new Observable(observer => {
observer.next(1);
observer.next(2);
observer.complete();
})

observable.subscribe({
next: value => console.log(value);
complete: () => console.log("Complete)
})

`Operators`

Operators are functions that allow us to transform, filter or combine Observables.
There are many in-built operators, and we can also create our own custom operators.

import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const source = from([1,2,3,4,5])
const squareEven = source.pipe(
filter(num => num % 2 === 0),
map(num => num \* num)
)

squareEven.subscribe(console.log)

In the above code block, we use the pipe method to chain the filter and map operators to the
Observable. The filter operator filters out the the odd numbers, and the map operators
squares the even nos.

`Subjects`

Subjects are a special type of Observables that allows us to both emit and observe values.
