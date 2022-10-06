// var getCost = (l,b,rate) =>  l * b * rate;

// var getTotal=(eng,math,hindi,ss,sci)=> eng+math+hindi+ss+sci;

// var getPerce=(eng,math,hindi,ss,sci)=> (eng+math+hindi+ss+sci)/5;

// var getWallCost = (L,B,l,b,rate) => (L*B-l*b)*rate;

// var getTravlCost = (m,d,p) => (d/m)*p

// var getBusRevenue = (passQty,TicketFare,Mil,Dist,FuelCost,driverWages,misc)=> (passQty*TicketFare)-(getTravelCost(Mil,Dist,FuelCost)+driverWages+misc)

var getCropCost = (BagperCost,BagReqAcre,area)=> BagperCost * BagReqAcre * area;

var getPaL= (SellPrice,ProCost,ProQty,MiscExpe)=> (SellPrice-ProCost)*ProQty-MiscExpe;