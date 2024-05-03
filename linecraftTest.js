const data = [
    {
        org_id: 1,
        org_name: 'ford',
        plants: [
            {
                plant_id: 9,
                plant_name: 'chakan',
                lines: [
                    {
                        line_id: 1,
                        line_name: 'assembly 1',
                        jph: 10,
                    },
                    {
                        line_id: 2,
                        line_name: 'assembly 2',
                        jph: 20,
                    },
                    {
                        line_id: 3,
                        line_name: 'assembly 3',
                        jph: 30,
                    },
                ],
            },
        ],
    },
]

const plantMap = {};
const lineMap = {};
const orgMap = {};
const orgPlantNames = {};
const orgLineNames = {};
data.forEach(el => {
    let orgSum = 0;
    let plantNames = []
    let lineNames = [];
    el.plants.forEach(pl => {
        let sum = 0;
        plantNames.push(pl.plant_name);
        pl.lines.forEach(li => {
            sum += li.jph;
            lineMap[li.line_id] = li.jph;
            lineNames.push(li.line_name)
        })
        plantMap[pl.plant_id] = sum;
        orgSum += sum;
    })

    orgMap[el.org_id] = orgSum;
    orgPlantNames[el['org_id']] = plantNames;
    orgLineNames[el['org_id']] = lineNames
})


console.log(lineMap['1'])
console.log(plantMap['3'])
console.log(orgMap['2'])

console.log(orgPlantNames['1'])
console.log(orgLineNames['1'])





// 1. to get net jph of a line by line id in O(1)
//  2. to get net jph of a plant by plant id in O(1)
//  3. to get net jph of a organization by org id in O(1)
//  4. get plants of organization by orgid
//  5. get lines of organization by orgid
//  6. get lines of organization by plantid

// const processData =
// {
//     orgId: 1,
// }



// const data2 = [

// ]






// const mPlantData = data.map(el => {
//     return el.plants
// })

// console.log(mPlantData);
// // TO get line data on the basis of planId
// function lineData(plantId) {
//     const lineData = mPlantData.filter(el => {
//         return el.plant_id === plantId;
//     })
//     return lineData;
// }

// console.log(lineData(1))





