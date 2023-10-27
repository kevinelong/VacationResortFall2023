window.onload = ()=>{

    go.onclick = ()=>{

        calculate(
            new Date(checkIn.value), 
            Number(nights.value), 
            document.querySelector("input[name=roomType]:checked").value, 
            adults.value,
            children.value, 
            document.querySelector("input[name=discounts]:checked").value
        );

        output.innerText = `
            Results:
                Original Room Cost: ${originalRoomCost}
                Discount Amount: ${discountAmount}
                Discounted Room Cost: ${discountedRoomCost}
                Tax Amount: ${taxAmount}
                Total Cost: ${totalCost}
        `;
    }
};