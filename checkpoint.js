// Decision Making 
function movieTicket() {
    var age=parseInt(prompt("enter your age"))
    if (age<=12) {console.log("ticket is $10")}
    else if (age<=17 && age>=13) {console.log("ticket is $15")}
    else if (age<=18) {console.log("ticket is $20")}
    
}
function ClothingAdvisor(temperature) {
    if (temperature >= 30) {
        console.log("sayeffi.");
    } else if (temperature >= 20 && temperature < 30) {
        console.log("spring.");
    } else if (temperature >= 10 && temperature < 20) {
        console.log("berda chwaya .");
    } else {
        console.log("denya glace ! .");
    }
    
}
// Recursivity 
function Fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }   
}
function pow(x,n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return x * pow(x, n - 1);
    }}

