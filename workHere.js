var billionaires = require('./billionaires.json');
 
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = billionaires.filter(element => {
        if(element.demographics.age>=20&&element.demographics.age<=29){
            return element.name;
        };
    });

/*
create a new object with the billionairse year, name and worth rounded to the newarest integer
{
    year: 1996,
    name: Bernardo Garza Sada,
    worth: 2
}
*/


let roundedWorth = billionaires.map(x =>{
       return {
           name: x.name,
           year:x.year,
           worth: Math.round(x.wealth['worth in billions'])
       }      
    });
    
/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = billionaires.reduce((prev, curr)=>{
    return prev + Math.round(curr.wealth['worth in billions']);
    
},0);


// console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = billionaires.reduce((prev, curr)=>{
    if( Object.keys(prev).length===0 ){
       return curr;
    } 
     if (curr.rank < prev.rank){
        prev = curr;
    }   
    return prev;
},{});
richest = [richest];
console.log(richest);  
/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest =billionaires.reduce((prev, curr)=>{
    if( Object.keys(prev).length===0 ){
       return curr;
    } 
     if (curr.rank >= prev.rank){
        prev = curr;
    }  
    return prev;
},{});
poorest = [poorest];
console.log(poorest);  
/*

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor =  [
{richest:richest[0]},
{poorest: poorest[0]}
];

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}var billionaires = require('./billionaires.json');
 
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = null;

/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = null;

/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = null;
// console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = null

/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = null;

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = null;

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}