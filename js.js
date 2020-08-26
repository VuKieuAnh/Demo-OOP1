//Khai báo lớp Chuột


//khoi tao doi tuong
let kieuanh = new Rat("Kiều Anh", 38, 30);
let son = new Rat("Sơn", 63, 40);


let khoi = new Cat("Khoi", 70, 45);
let dung = new Cat("Công", 70, 45);

let listRat = [kieuanh, son];

function creatNewRat() {
    let name = document.getElementById("name").value;
    let weight = document.getElementById("weight").value;
    let speed = document.getElementById("speed").value;
    let newRat = new Rat(name, weight, speed);
    listRat.push(newRat);
}


