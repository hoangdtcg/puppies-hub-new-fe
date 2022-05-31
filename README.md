# puppies-hub-new-fe

##Công thức tính PNL realtime

- Tham số:
    - Entry
    - Coin Amount
    - Current price
    if (hit tp1)
      
    let fluct = isBuy ? ((currentPrice * coinAmount)-(entry * currentAmount)) : ((entry * coinAmount)-(currentPrice * currentAmount))
    pnl = (fluct/(entry * currentAmount))*100.
      
      
