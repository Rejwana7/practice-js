// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
//console.log(inchToFeet(75));  //6.25
function inchToFeet2(inch){
    const feetfraction = inch/12;
    const feetNumber=parseInt(feetfraction);
    const inchRemaining= inch % 12;
    const result= feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2)


function mileToKilometer (mile){
    const kilo = mile*1.60934;
    return kilo;

}   

function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371;
    return mile;
  }