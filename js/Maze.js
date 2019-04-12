"use strict"

const maze = [
    '#########',
    '#.....#.#',
    '#.###..T#',
    '#..#..#.#',
    '#.#######',
    '#..#..P.#',
    '#.##.##.#',
    '#.....#.#',
    '#########',
];

const maze2 = [
    '#########',
    '#......T#',
    '#.###E###',
    '#.......#',
    '#######.#',
    '#.......#',
    '#.#######',
    '#......P#',
    '#########',
];
const easterEgg = [
    '#########',
    '#.......#',
    '#.#####.#',
    '#...#T..#',
    '###.#####',
    '#...#...#',
    '#.###.#.#',
    '#.....#P#',
    '#########',
]
const mazeBoard = document.createElement('div');

document.body.appendChild(mazeBoard);

maze.forEach(function(arrItem) {
    let row = document.createElement('div');
    row.classList.add('row');

    let cells = arrItem.split('');

    cells.forEach(function(cellItem) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        if (cellItem === '#') {
            cell.classList.add('wall');
        } else if (cellItem === '.') {
            cell.classList.add('path');
        } else if (cellItem === 'T') {
            cell.classList.add('treasure');
        } else if (cellItem === 'P') {
            cell.classList.add('player');
        } 
        row.appendChild(cell)
    });

    mazeBoard.appendChild(row);
});

function nextMaze() {
    mazeBoard.innerHTML = '';
    maze2.forEach(function(arrItem) {
        let row = document.createElement('div');
        row.classList.add('row');

        let cells = arrItem.split('');

        cells.forEach(function(cellItem) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            if (cellItem === '#') {
                cell.classList.add('wall');
            } else if (cellItem === '.') {
                cell.classList.add('path');
            } else if (cellItem === 'T') {
                cell.classList.add('treasure');
            } else if (cellItem === 'P') {
                cell.classList.add('player');
            } else if (cellItem === 'E') {
                cell.classList.add('easterEgg')
            }
            row.appendChild(cell)
        });

        mazeBoard.appendChild(row);
    });
}

function getIndex(target) {
    return Array.from(target.parentElement.children).indexOf(target);
};