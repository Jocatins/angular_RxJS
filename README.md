# RXJS

A brief note on RxJS

`RxJS` is a library for reactive programming using observables.
This programming paradigm allows developers to handle async requests in a more
elegant and manageable way.
observables are the basic building blocks of RxJS, and they are a way to represent a stream
of data over time.

# Basic Concepts

`Observables`.

-   They are the core building blocks of RxJS.
-   An observable is a data stream that emits multiple values over time, such as user input, API responses, or events.
-   An observable can emit three types of events, `next`, `error` and `complete`

`Operators`

-   Operators are functions that allow us to transform, filter or combine Observables.
    There are many in-built operators, and we can also create our own custom operators.
-   Some of the most commonly used operators include `map`, `filter`, `mergeMap`, `scan` and `combineLatest`.
-   operators can be chained together using the pipe function

`Subjects`

-   Subjects are a special type of Observables that allows us to both emit and observe values.
-   They allow us to manually emit values to all observers that are subscribed to them.
-   Subjects are also used to bridge the gap between reactive and non-reactive codes.
-   `RxJS ` provides several types od subject, `Subject`, `BehaviorSubject`, `ReplaySubject` and `AsyncSubject`.

`Observers`

-   Observers are the objects that subscribe to Observables to receive the emitted values.
-   It is an object that emits three methods, `next`, `error` and `complete`
-   The `next` method is called every time the observable emits a new value, the `error` method is called if the observable encounters an error, and the `complete` method is called when the observable completes.
-   you can subscribe to an observable by calling the `subscribe` method on it and passing in an observer object or a set of callback functions.
