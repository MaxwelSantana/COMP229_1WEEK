import { halfOf, multiply } from './lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';

// MODULES
console.log(halfOf(84));
console.log(multiply(21, 2));

// DEFAULT EXPORT
doSomething();

// MODULE EXPORTS BINDINGS NOT VALUES
console.log(flag);
touch();
console.log(flag);
