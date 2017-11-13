/*
1. Создать объект vehicle у которого будут базовые свойства относящиеся ко всей группе.
2. В созданном объекте vehicle добавить базовые методы доступа к этим свойствам.
3. Создать объект vehicleCollection, который будет хранить в себе объекты vehicle
3.1 Свойство objects с типом array;
3.2 Метод addTo, который будет принимать на вход объект vehicle и добавлять в массив objects;
3.3 Метод get, который вернет содержимое this.objects объекта vehicle;
4. Создать два объекта bike & car от объекта vehicle
4.1 Установить соотвествующии название для каждого из объекта (на примере bike.setName('bike');
    car.setName('car'));
4.2 Вывести на экран название каждого из объектов для bike and car;
5. Добавить в объект vehicleCollection созданые объекты в пункте 4 bike and car;
5.1 Вывести в консоле цикл содержимого массива objects объекта vehicleCollection свойство name
    (на примере item.getName() => item это объект, который был создан в пункте 4);

Суть этих заданий показать, как можно создать один базовый объект от которого можно будет создавать однотипные осознаные объекты.

Дополнительно сделать 2 карусели слайдеров (Owl Carousel) на одной странице, но используя один конфигурационный плагин.
Одна карусель состоит из 4 (всего 10) видимых слайдов и без навигации, вторая состоит из 5 (10) слайдов и с навигацией.
*/

function task_1() {
//1
    var vehicle = function (types, brend, speed, distance, year) {
        this.types = types;
        this.brend = brend;
        this.speed = speed;
        this.distance = distance;
        this.year = year;
//2
        this.getTypes = function () {
            return this.types;
        };
        this.setTypes = function (z) {
                this.types = z;
        }
        this.getbrend = function () {
            return this.brend;
        };
        this.setbrend = function (b) {
            this.brend = b;
        };
        this.getspeed = function () {
            return this.speed;
        };
        this.setspeed = function (s) {
            this.speed = s;
        };
        this.getdistance = function () {
            return this.distance;
        };
        this.setdistance = function (d) {
            this.distance = d;
        };
        this.getyear = function () {
            return this.year;
        };
        this.setyear = function (y) {
            this.year = y;
        };
    };

    var car1 = new vehicle('Car', 'Reno', 160, 500, 2005);
    var car2 = new vehicle('Car', 'BMW', 200, 500, 2010);
    console.log(car1);
    console.log(car1.getTypes());
    car1.setbrend('Mersedes');
    console.log(car1.getTypes());
    console.log(car2.getTypes());

                /*    var vehicleCollection = function () {
                        this.object = [];
                        addTo = function (object) {
                            this.object.push(object);
                        };

                    };*/
                // как запустить, если метод описан в конструкторе?

//3
    var vehicleCollection ={
//3.1
        objects: [],
//3.2
        addTo: function (obj) {
            this.objects.push(obj);
        },
//3.3
        getObj: function () {
            return this.objects;
        }
    };
    vehicleCollection.addTo(car1);
    vehicleCollection.addTo(car2);
    console.log(vehicleCollection.getObj());
//4
    var bike = new vehicle('', 'Harley Davidson', 130, 300, 1987);
    var car = new  vehicle('', 'Volvo', 180, 600, 2012);
//4.1
    bike.setTypes('bike');
    car.setTypes('car');
//4.2
    console.log(bike.getbrend());
    console.log(car.getbrend());
//5
    vehicleCollection.addTo(bike);
    vehicleCollection.addTo(car);
    console.log(vehicleCollection.getObj());
//5.1
    for (var key in vehicleCollection.objects){
        console.log(vehicleCollection.objects[key]['brend']);
    }
}

