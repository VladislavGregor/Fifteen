const containerNode = document.getElementById('fifteen');
const itemNodes = Array.from(containerNode.querySelectorAll('.item'));
const countItems = 16;



if (itemNodes.length != 16) {
    throw new Error(`Должно быть ровно  ${countItems} items in HTML`);
}


// output flat filled matrix in console

let matrix = GetMatrix(
    itemNodes.map((item) => Number(item.dataset.matrixId))
);

console.log(matrix);

function GetMatrix(arr) {

    const matrix = [[], [], [], []];
    let y = 0;
    let x = 0;

    for (let i = 0; i < arr.length; i++) {

    if (x >= 4) {
        x = 0;
        y++;
    }
    
    matrix[y][x] = arr[i];
    x++;
}

    return matrix;
}







