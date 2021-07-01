const arr = [1, 2, 3, -1, -2, -3];

function getPositiveNumber() {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) newArray.push(arr[i]);        
    }
    if (newArray.length == 0) return null;
    console.log(newArray);
    return newArray;
}

getPositiveNumber(arr);