var products = [
    {name: "samsung",price:3,quantity:5},
    {name: "samsung",price:3,quantity:2},
    {name:"samsung",price:3,quantity:1},
    {name:"samsung",price:3,quantity:4},
];

function totalprice(productadetails){
    var sumamount = 0;
    for(i=0;i<products.length;i++){
    var show = products[i];
    var totalamount = show.price*show.quantity;
    var sumamount = totalamount + sumamount;
    }
    return sumamount;

}

var sum = totalprice(products);
console.log(sum)