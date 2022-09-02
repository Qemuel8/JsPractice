function checkCashRegister(price, cash, cid) {
    let change = cash-price;
    console.log(change)
    let totalCid = 0.00;
    for(let i = 0; i<cid.length-1;i++)
    {
        console.log(cid[i][1])
         totalCid += cid[i][1];
    }
    console.log(totalCid);
    while(change != 0)
    {
       if(change>=100 && change%100>=0&&cid[9][1]>=100)
    {
      change -=100;
      cid[9][1] - 100;
    }
    }
   
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);