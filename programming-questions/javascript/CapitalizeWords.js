const sentence = "hello world from javascript";

const result = sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);
