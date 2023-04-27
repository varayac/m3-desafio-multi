const insertNumber = (num) => {
  if (num > 20) {
    console.log(
      `ingrese un número entre 1 a 20, su número ingresado es: ${num}`
    );
  } else {
    //For que multiplica
    let i;
    let j;
    let multi;
    for (i = 1; i <= num; i++) {
      for (j = 1; j <= num; j++) {
        multi = i * j;
      }
      console.log(`${j - 1} * ${i} = ${multi}`);
    }

    // For que obtiene el factorial
    for (let i = 1; i <= num; i++) {
      let factorial = 1;
      for (let j = 1; j <= i; j++) {
        factorial = factorial * j;
      }
      console.log(`El factorial de ${i} es: ${factorial}`);
    }
  }
};

insertNumber(5);
