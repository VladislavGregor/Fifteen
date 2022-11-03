const containerNode = document.getElementById('fifteen');
const itemNodes = Array.from(containerNode.querySelectorAll('.item'));
const countItems = 16;



if (itemNodes.length != 16) {
    throw new Error(`Должно быть ровно  ${countItems} items in HTML`);
}


// output flat filled matrix in console

itemNodes[countItems-1].style.display = 'none';
let matrix = GetMatrix(
    itemNodes.map((item) => Number(item.dataset.matrixId))
);

setPositionItems(matrix);

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


// shuffle by clicking button

document.getElementById('shuffle').addEventListener('click', () => {
    const shuffledArray = shuffleArray(matrix.flat());
    matrix = GetMatrix(shuffledArray);
    setPositionItems(matrix);
})


function setPositionItems (matrix) {
    for ( let y = 0 ; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            const value = matrix [y][x];
            const node = itemNodes[value - 1];
            setNodeStyles(node, x, y)
        }
    }
}

function setNodeStyles (node, x ,y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y* shiftPs}%, 0) `
}

//change position by click 



function shuffleArray(arr){
    return arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map (({value}) => value)
}