function checkCashRegister(price, cash, cid) {
    // price - of item
    // cash - cash given
    // cid - cash in drawer 
    const currencyDict = {
      "PENNY":0.01,
      "NICKEL":0.05,
      "DIME":0.1,
      "QUARTER":0.25,
      "ONE":1,
      "FIVE":5,
      "TEN":10,
      "TWENTY":20,
      "ONE HUNDRED":100
    }
    //we use JSON.parse/JSON.stringify to copy multi-dimensional arrayy
    let cashRegister = JSON.parse(JSON.stringify(cid));

    // cid status object - default "OPEN"
    let cidStatus = {
      "status": "OPEN",
      "change": cashRegister
    }
    // calculate one for least numberofcoins
    let changeDue = cash - price;
    let changeBreakdown = changeDue;
    cidStatus["status"] = "OPEN";
    cidStatus["change"] = [];
    let requiredCash;
    let cashCounter = [];
    for(let i = Object.values(currencyDict).length-1; i >= 0; i--) { 
     // the amount of cash that can be theoretically taken   
      requiredCash = Object.values(currencyDict)[i] * (Math.floor(changeBreakdown/Object.values(currencyDict)[i]))
    // if currency dict asks for more than whats available in cashregister, 
    // we take the maximum value in cash register 
    if(cashRegister[i][1] >= requiredCash) {
      cashRegister[i][1] = cashRegister[i][1] - requiredCash;
    } else {
      requiredCash = cashRegister[i][1];
      cashRegister[i][1] -= cashRegister[i][1]; 
    }

    // console.log(" cash register " + cashRegister[i][1] + " required cash "+ requiredCash + " multiplier for " + " " + Object.keys(currencyDict)[i] + " * "+ (Math.floor(changeBreakdown/Object.values(currencyDict)[i])) + " change breakdown "+ changeBreakdown)

    // we push the amount taken from the cash register into the cidStatus["change"] array
    if(requiredCash > 0) {
        cidStatus["change"].push([Object.keys(currencyDict)[i],requiredCash])
        cashCounter.push(requiredCash)
      }
    changeBreakdown = Math.round(100 * (changeBreakdown - requiredCash))/100
  }
  // total cash in drawer after transaction 
  let totalCid = cashRegister.reduce(((a,b) => 
      a + b[1]
    ),0)
    if(totalCid == 0) {
      cidStatus["status"] = "CLOSED";
      cidStatus["change"] = cid;
    }
  cashCounter = cashCounter.reduce(((a,b) => a + b),0)  
  // console.log(cashCounter)
  // if cash given from drawer matches change due 
    if(Math.round(100*cashCounter)/100 !=  changeDue) {
      cidStatus["status"] = "INSUFFICIENT_FUNDS";
      cidStatus["change"] = [];
    }
    return cidStatus;
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));