function telephoneCheck(str) {
  let numeros = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      numeros += str[i];
    }
  }
  if (numeros.length !== 10 && numeros.length !== 11) {
    return false;
  }
  if (numeros.length === 11 && numeros[0] !== "1") {
    return false;
  }
  if (str[0] === "-") {
    return false;
  }
  let temParenteseAberto = str.includes("(");
  let temParenteseFechado = str.includes(")");
  if (temParenteseAberto !== temParenteseFechado) {
    return false;
  }
  if (temParenteseAberto && temParenteseFechado) {
    let posAbre = str.indexOf("(");
    let posFecha = str.indexOf(")");

    if (posFecha - posAbre !== 4) {
      return false;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let ehNumero = char >= "0" && char <= "9";
    let ehPermitido = ehNumero || char === " " || char === "-" || char === "(" || char === ")";
    
    if (!ehPermitido) {
      return false;
    }
  }
  let textoSemParenteses = str.replace("(", "").replace(")", "");
  let blocos = textoSemParenteses.split(/[\s\-]+/);
  for (let i = 0; i < blocos.length; i++) {
    if (blocos[i].length < 3 && blocos[i] !== "1") {
      return false;
    }
  }

  return true;
}
telephoneCheck("555-555-5555");