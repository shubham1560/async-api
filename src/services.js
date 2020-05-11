export function fetchWithTimeout(delay) {
    console.log("fetch called");
    return new Promise(resolve => setTimeout(resolve, delay));
};