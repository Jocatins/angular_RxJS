import { Subject } from "rxjs";

const subject = new Subject();

subject.subscribe({
	next: (value) => console.log(`Observer A: ${value}`),
});

subject.next(1);

subject.subscribe({
	next: (value) => console.log(`Observer B ${value}`),
});

subject.next(2);
