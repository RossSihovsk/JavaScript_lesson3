//1
console.log("Завдання 1")
var products = ["apples","oranges","tomatoes","lemons","bananas" ];
console.log(products)
console.log(products[products.length-1]);


//2
console.log("\nЗавдання 2");
var styles = ["Джаз","Блюз"];
styles.push("Рок-н-Ролл");
styles.splice(-2,1,"Класика");
console.log("Видалено елемент: "+ styles.shift());
styles.splice(0,0,"Реп","Реггі")
console.log(styles)


//3
console.log("\nЗавдання 3");
function find(array, value) {
    console.log(array.indexOf(value));
}

find(styles,"Метал");
find(styles,"Реп");


//4
console.log("\nЗавдання 4");
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20];
function filterRange(array, a, b){
    var newArray =[];
    for (var i=0; i<array.length;i++){
        if (array[i]>a & array[i]<b){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filterRange(numbers,4,15))