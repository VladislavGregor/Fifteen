const containerNode = document.getElementById('fifteen');
const itemNodes = Array.from(containerNode.querySelectorAll('.item'));
const countItems = 16;



if (itemNodes.length != 16) {
    throw new Error(`Должно быть ровно  ${countItems} items in HTML`);
}


// output flat filled matrix in console

itemNodes[countItems-1].style.display = 'none';

//let matrix = GetMatrix(
 // itemNodes.map((item) => Number(item.dataset.matrixId))
//);

let arr = [];

for(var i=0 ; i<16; i++){
   arr[i] = i+1;
}
console.log(arr);

let matrix = GetMatrix(
    arr
);

console.log(matrix);

const l = matrix.length;

console.log(l);
	




setPositionItems(matrix);





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


// handle click on shuffle button , shuffling and rendering model

document.getElementById('shuffle').addEventListener('click', () => {
    const shuffledArray = shuffleArray(matrix.flat());
    console.log(shuffledArray);
    matrix = GetMatrix(shuffledArray);
    setPositionItems(matrix);
})


function setPositionItems (matrix) {
    len = matrix.length;
    for ( let y = 0 ; y < len; y++) {
        for (let x = 0; x < len; x++) {
            const value = matrix [y][x];
            console.log(value);
            const node = itemNodes[value - 1];
            console.log(node);
            setNodeStyles (node, x, y);
        }
    }
}

function setNodeStyles ( node , x ,y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y* shiftPs}%, 0) `
}

//shuffle array



function shuffleArray(a) {
	var x, t, r = new Uint32Array(1);
	for (var i = 0, c = a.length - 1, m = a.length; i < c; i++, m--) {
		crypto.getRandomValues(r);
		x = Math.floor(r / 65536 / 65536 * m) + i;
		t = a [i], a [i] = a [x], a [x] = t;
	}

	return a;
}