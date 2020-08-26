let Cat = function (name, weight, speed) {
    //Khai báo thuộc tính
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    //Khai bao phuong thuc
    this.speak = function (mess) {
        return mess;
    }

    this.catch = function (rat) {
        return "Meo " + this.name + " bat dc chuot " + rat.getName();
    }

    this.eat = function (rat) {
        this.weight += rat.weight;
        rat.status = false;
    }
}
