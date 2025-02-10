class Vehicle{
    constructor(Name,price){
        this.Name = Name;
        this.price = price;
    }
} 

class Car extends Vehicle{

    constructor(Name,Price,weight){
        super(Name,Price);
        this.weight = weight;
    }

}

class Bike extends Car{
    constructor(Name,price,weight,cc){
       super(Name,price,weight);
        
       this.power = cc;
    }
}

let normlVehicle = new Vehicle("Toyota",5000);
let Bmw = new Car("BMW",60000,1100);
let Yamaha = new Bike("Yamaha",25000,300,450);
console.log(normlVehicle,Bmw,Yamaha);