let injection = "Hello, security vulnerabilities!";
eval(`console.log(\"${injection}\");`);
console.log("Hello")