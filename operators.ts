import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
const squareEven = source.pipe(
	filter((num) => num % 2 === 0),
	map((num) => num * num)
);

squareEven.subscribe(console.log);
