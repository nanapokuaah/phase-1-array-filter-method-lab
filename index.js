// Code your solution here
//const mydrivers = ['Bobby','Sally','Joe', 'bobby']

function findMatching(arrayofdrivernames, driverwearelookingfor){
    const result = arrayofdrivernames.filter(name => name.toLowerCase()=== driverwearelookingfor.toLowerCase())
    console.log (result);
return (result)
}

//findMatching(mydrivers, 'Bobby')

function fuzzyMatch(drivers, string){
    const result = drivers.filter(driversName => driversName.startsWith(string))
return result;
}


const myarrayofobjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(arrayofdriverobjects,string){
    const result = arrayofdriverobjects.filter(driver =>driver.name === string);
    console.log (result)
    return result;
}

matchName(myarrayofobjects,'Bobby')