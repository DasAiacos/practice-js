const coupons = [
    {
        name: "PokeMaster",
        discount: 15,
    },
    {
        name: "SaintSeiya",
        discount: 30,
    },
    {
        name: "RimuruTempest",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    console.log(priceValue);
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    console.log(couponValue);

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
};


