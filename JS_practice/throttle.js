const ptaNhi = (fn, delay) => {
    let myId = null;

    return (...args) => {
        if (myId === null) {
            fn(...args);
            myId = setTimeout(() => {
                myId = null;
            }, delay);
        }
    };
};

// A simple function to throttle
const sayHello = () => {
    console.log("Hello at", new Date().toLocaleTimeString());
};

// Create a throttled version of sayHello
const throttledHello = ptaNhi(sayHello, 2000);

// Try calling it rapidly
throttledHello(); // Will run
throttledHello(); // Ignored
throttledHello(); // Ignored

// Run again after 3 seconds
setTimeout(() => {
    throttledHello(); // Will run
}, 3000);
