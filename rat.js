function Rat(name, weight, speed) {
    //Khai báo thuộc tính
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    //Khai báo phương thức
    this.speak = function () {
        return "chit chit";
    }

    this.getName = function () {
        return this.name;
    }

    this.setName = function (newName) {
        this.name = newName;
    }
}
