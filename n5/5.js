function checkCashRegister(price, cash, cid) {
  let moedas = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];

  let trocoDevido = (cash - price) * 100;
  let totalNaGaveta = 0;

  for (let i = 0; i < cid.length; i++) {
    totalNaGaveta += cid[i][1] * 100;
  }

  if (totalNaGaveta < trocoDevido) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalNaGaveta === trocoDevido) {
    return { status: "CLOSED", change: cid };
  }

  let trocoArray = [];

  let gavetaInvertida = cid.slice().reverse();

  for (let i = 0; i < moedas.length; i++) {
    let nomeMoeda = moedas[i][0];
    let valorMoeda = moedas[i][1];
    let totalDisponivel = gavetaInvertida[i][1] * 100;

    let valorRetirado = 0;

    while (trocoDevido >= valorMoeda && totalDisponivel > 0) {
      trocoDevido -= valorMoeda;
      totalDisponivel -= valorMoeda;
      valorRetirado += valorMoeda;
    }

    if (valorRetirado > 0) {
      trocoArray.push([nomeMoeda, valorRetirado / 100]);
    }
  }
  if (trocoDevido > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: trocoArray };
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);