import { Observable } from "rxjs";

const observable = new Observable((observer) => {
	observer.next(1);
	observer.next(2);
	observer.complete();
});

observable.subscribe({
	next: (value) => console.log(value),
	complete: () => console.log("Complete"),
});
