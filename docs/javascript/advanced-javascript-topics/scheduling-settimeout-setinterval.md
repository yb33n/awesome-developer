---
sidebar_position: 1
---

# Scheduling: setTimeout() and setInterval()

JavaScript provides two main functions for scheduling code execution: 
- `setTimeout()` allows us to run a function once after the interval of time. 
- `setInterval()` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

## setTimeout()

The `setTimeout()` function is used to execute a piece of code once after a specified delay.

### Syntax

```javascript
setTimeout(function, delay, param1, param2, ...)
```

- `function`: The function to be executed after the delay.
- `delay`: The time (in milliseconds) to wait before executing the function.
- `param1, param2, ...`: Optional parameters to pass to the function.

### Example

```javascript
setTimeout(() => {
  console.log("This message will appear after 2 seconds");
}, 2000);
```

### Canceling a setTimeout

A call to `setTimeout` returns a `timer identifier` **timerId** that we can use to cancel the execution.

You can cancel a scheduled `setTimeout()` using the `clearTimeout()` function:

```javascript
const timerId = setTimeout(() => {
  console.log("This message will never appear");
}, 2000);

clearTimeout(timerId);
```

## setInterval()

The `setInterval()` function is used to execute a piece of code repeatedly at fixed time intervals.

### Syntax

```javascript
setInterval(function, interval, param1, param2, ...)
```

- `function`: The function to be executed at each interval.
- `interval`: The time (in milliseconds) between each execution of the function.
- `param1, param2, ...`: Optional parameters to pass to the function.

### Example

```javascript
let count = 0;
const intervalId = setInterval(() => {
  console.log(`Count: ${++count}`);
  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 1000);
```

Same with canceling `setTimout()` You can stop a `setInterval()` from continuing to execute using the `clearInterval()` function:

## Actual Interval Execution

When using `setInterval()` or recursive `setTimeout()`, it's crucial to understand that the actual interval between function executions may not precisely match the specified interval. This discrepancy occurs due to several factors:

### 1. Function Execution Time

The time taken to execute the scheduled function is added to the interval. For example:

```javascript
setInterval(() => {
  console.log("Start");
  // Some time-consuming operation
  for (let i = 0; i < 1000000000; i++) {}
  console.log("End");
}, 1000);
```

In this case, the actual interval between the start of each execution will be longer than 1000ms due to the time taken by the loop.

### 2. Event Loop and Task Queuing

JavaScript's event loop and the way tasks are queued can affect the precise timing of interval executions, especially in busy applications.

### 3. Browser Throttling

Browsers may throttle timers in background tabs or inactive windows to conserve resources.

## Nested setTimeout

There is another way to run code repeatedly with a more precise interval: using `setTimeout()` recursively. This approach allows you to control the exact timing of each execution:

```javascript
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

The `setTimeout` above schedules the next call right at the end of the current one `(*)`.

The nested `setTimeout` is a more flexible method than `setInterval`. This way the next call may be scheduled differently, depending on the results of the current one.

For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

```javascript
let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);
```

## Zero Delay setTimeout

There’s a special use case: `setTimeout(func, 0)`, or just `setTimeout(func)`.

This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.

So the function is scheduled to run “right after” the current script.

For instance, this outputs “Hello”, then immediately “World”:

```javascript
setTimeout(() => alert("World"));

alert("Hello");
```
The first line “puts the call into calendar after 0ms”. But the scheduler will only “check the calendar” after the current script is complete, so "Hello" is first, and "World" – after it.

## Best Practices

1. Always store the return value of `setTimeout()` and `setInterval()` if you might need to cancel them later.
2. Be cautious when using `setInterval()` with short intervals, as it may lead to performance issues.
3. Consider using `setTimeout()` recursively instead of `setInterval()` for more precise timing control.
4. Be aware of the execution context (`this`) when using arrow functions with `setTimeout()` and `setInterval()`.
5. For time-sensitive operations, consider using more advanced timing APIs like `requestAnimationFrame()` for animations or the `Performance.now()` method for high-resolution timing measurements.

## Browser Limitations

Browsers may impose minimum delays on nested `setTimeout()` calls or throttle background tabs to improve performance. Keep this in mind when working with precise timing in web applications.

## Conclusion

`setTimeout()` and `setInterval()` are powerful tools for scheduling code execution in JavaScript. They are widely used for animations, polling, and implementing various timing-based features in web applications. Understanding how to use and manage these functions effectively, including the nuances of actual interval execution, is crucial for creating responsive and efficient JavaScript programs.

## References
- [JavaScriptInfo - Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)