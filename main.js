


// 1
var arr = [10, 20, 30, 50, 235, 3000]

var result = [];

for (var i = 0; i < arr.length; i++) {
    let firstDigit = String(arr[i])[0];
    if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
        result.push(arr[i]); 
    }
}

console.log(result);


// 2
for(var i = 20; i >= 0; i--){
    console.log(i)
}
// 3
var trafficLight = {
    red: "красный",
    yellow: "желтый",
    green: "зеленый"
}

var traffic = prompt("Выберите один из цветов светофора: ").toLocaleLowerCase().trim()

if(traffic === trafficLight.red){
    alert('Стоп')
}else if(traffic === trafficLight.yellow){
    alert('Подождите')
}else if(traffic === trafficLight.green){
    alert('Езжайте')
}else{
    alert('Выберите один из цветов светофора:')
}

