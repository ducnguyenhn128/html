
// Function check prime number
// if return 1-> prime number
// if return 0 -> not prime

function isPrime(num) {
    var squareroot = Math.floor(Math.sqrt(num));
      var prime = 1
      for (let i = 2; i<squareroot + 1; i++) {
          if(num % i == 0) {
              prime = 0;
              break;
          }
      }
      return prime ;
  }


// function return sum of prime number
function sum_prime_between_2number(a,b) {
    var sum1 = 0;
    for (let j = a; j <= b ; j++) {
        var prime_status = isPrime(j);
        sum1 += j * prime_status;
    }
    return sum1;
}

// console.log(" Test output")
// console.log(sum_prime_between_2number(20 , 50))

var a = prompt("Nhập số thứ nhất")
var b = prompt("Nhập số thứ hai (lớn hơn số thứ nhất)")

if (a >= b) {
    alert("Nhap lai")
} 

else {
    document.getElementById('num1').innerHTML += a.toString();
    document.getElementById('num2').innerHTML += b.toString();
    
    console.log(sum_prime_between_2number(a , b));
    
    document.getElementById('result').innerHTML += sum_prime_between_2number(a , b);
}

