//OUTPUT
let originalRoomCost = 0;
let discountAmount = 0; //discount, if any
let discountedRoomCost = 0;
let taxAmount = 0;
let totalCost = 0;
const TAX_RATE = 0.12;

//INPUTS PARAMETERS
function isPeak(checkInDate){
    const JUNE = 5
    const AUGUST = 7
    const m = checkInDate.getMonth() //0-11
    return m >= JUNE && m <= AUGUST;
}
function getRate(roomType, checkInDate){
    let rate = 150; //set default for non-peak non-suite
    const peak = isPeak(checkInDate)
    
    if(peak){
        rate = 250;
    }
    
    if(roomType != "suite"){
        return rate; //WE ARE DONE
    }

    //DEFINITALY A SUITE FROM HERE ON OUT
    if(peak){
        rate = 350;
    } else {
        rate = 210
    }
    return rate;
}
function getDiscountRate(discountType){
    let discountPercent = 0.0; //default for none
    return discountPercent;
}
function calculate(checkInDate, nights, roomType, childrenQuantity, discountType){
    let baseRate = getRate(roomType, checkInDate);
    originalRoomCost = baseRate * nights;
    let discountPercent = getDiscountRate(discountType)
    discountAmount = originalRoomCost * discountPercent;
    discountedRoomCost = originalRoomCost - discountAmount;
    taxAmount = discountedRoomCost * TAX_RATE;
    totalCost = discountedRoomCost + taxAmount;
}
calculate(new Date(), 1, "queen", 1, "senior")
console.log(originalRoomCost, discountAmount, discountedRoomCost, taxAmount, totalCost)

calculate(new Date(), 1, "suite", 1, "senior")
console.log(originalRoomCost, discountAmount, discountedRoomCost, taxAmount, totalCost)
