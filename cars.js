// const car1 = {
//     let company: 'Toyota',
//         model:2020,
//         colour:'red',
//         image:"", 
//         registrationNumber:,
//         price:;
// }

// document.getElementById('main').innerHTML(car3);

function Car(company, model, colour, image, regNum, price) {
    this.company = company;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.regNum = regNum;
    this.price = price;

    let arr = [company,model,colour,regNum,price];

    this.showMore = function(){
        return arr;
    }
}

const car1 = new Car('Toyota', 2020,'red','./image/charger.webp', 1234, 50000);
const car2 = new Car('Dodge', 2016,'black',' ', 1354, 100000);
const car3 = new Car('GMC', 2010,'blue',' ', 4534, 80000);

let elements = [car1,car1,car1];



console.log(car1);
console.log(car2);
console.log(car3.showMore());


let camry = document.getElementById('camry');
camry.addEventListener('click',function(){
    document.getElementById("carlabel1").innerHTML =  car1.showMore();
});

let charger = document.getElementById('charger');
charger.addEventListener('click',function(){
    document.getElementById("carlabel2").innerHTML =  car2.showMore();
});

let gmc = document.getElementById('gmc');
gmc.addEventListener('click',function(){
    document.getElementById("carlabel3").innerHTML =  car3.showMore();
});



function cheap(){
    let c = elements[0];
    for(let i=1 ; i<elements.length; i++){
        if(elements[i].price < c){
            c = elements[i];
        }
    }
    window.alert("Cheapest car is " + c.company + ": " + c.price +"$");
}
