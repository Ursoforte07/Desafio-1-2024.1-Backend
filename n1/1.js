function palindrome(str) {
  let minusculo = str.toLowerCase();
  let textoLimpo = "";

  for (let i = 0; i < minusculo.length; i++) {
    let codigo = minusculo.charCodeAt(i);

    if ((codigo >= 48 && codigo <= 57) || (codigo >= 97 && codigo <= 122)) {
      textoLimpo += minusculo[i];
    }
  }

  for (let i = 0; i < textoLimpo.length / 2; i++) {
    if (textoLimpo[i] !== textoLimpo[textoLimpo.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

palindrome("eye");