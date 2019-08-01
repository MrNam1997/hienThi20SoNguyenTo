function outputIsPrime() {
    let number = Number(prompt("nhap so nguyen to can in ra:"));
    let number1 = 2;
    let cout = 0;
    while (cout < number){
      if (isPrime(number1)){
          cout ++;
          document.write( "iprime: " + number1 + " <br>");
      }
      number1 ++;
    }
}
outputIsPrime();
function isPrime(number) {
    if (number < 2){
        return false;
    }else{
        for (let i = 2; i < number; i++ ){
            if (number % i == 0){
                return false;
            }
        }
        return true;
    }
}
