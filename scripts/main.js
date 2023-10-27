//OUTPUT
let originalRoomCost = 0;
let discountAmount = 0; //discount, if any
let discountedRoomCost = 0;
let taxAmount = 0;
let totalCost = 0;
const TAX_RATE = 0.12;

//INPUTS PARAMETERS
function getRate(roomType, checkInDate){
    let rate = 150; //set default for non-peak non-suite
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
calculate(new Date(), 2, "suite", 2, "senior")
calculate(new Date(), 20, "suite", 2, "senior")
console.log(originalRoomCost, discountAmount, discountedRoomCost, taxAmount, totalCost)
