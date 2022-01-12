interface Mountain {
    name: string;
    height: number;
}

const mountains:Mountain[] = [{
    name: 'Kilimanjaro',
    height: 19341,
}, {
    name: 'Everest',
    height: 29029,
}, {
    name: 'Denali',
    height: 20310,
}]

function findNameOfTallestMountain(mountains:Mountain[]):string {
    //this function is requesting a mountain array and will return a string
    let tallestMountain:Mountain = mountains[0]
    //line 18 is setting the first mountain as the tallest at the start
    mountains.forEach((mountain) => {
        // forEach is looping through comparing which one is the tallest
        if (mountain.height > tallestMountain.height){
            tallestMountain= mountain
        }
    })
    return tallestMountain.name;
}

console.log(findNameOfTallestMountain(mountains))

