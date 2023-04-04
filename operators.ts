import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
const squareEven = source.pipe(
	filter((num) => num % 2 === 0),
	map((num) => num * num)
);

squareEven.subscribe(console.log);

// In the above code block, we use the pipe method to chain the filter and map operators to the
// Observable. The filter operator filters out the the odd numbers, and the map operators
// squares the even nos.
