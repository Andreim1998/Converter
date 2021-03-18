const euro = document.getElementById('euro')
const gbp = document.getElementById('gbp')
const yen = document.getElementById('yen')
const usd = document.getElementById('usd')

euro.addEventListener('input', euroToGbpToYenToUsd);

function euroToGbpToYenToUsd() {

    let eu = parseInt(euro.value);
    let dollar = 1.19*eu;
    let pounds = 0.86*eu;
    let yeni = 130.19*eu;
    usd.value = dollar;
    gbp.value = pounds;
    yen.value = yeni;
}


usd.addEventListener('input', usdToEuroToGpbToYen);

function usdToEuroToGpbToYen() {
    let dollar = parseFloat(usd.value)
    let eu = dollar*0.84;
    let pounds =dollar*0.72;
    let yeni = dollar*109.13;
    euro.value = eu;
    gbp.value = pounds;
    yen.value = yeni;

}


gbp.addEventListener('input', gbpToEuroToUsdToYen);

function gbpToEuroToUsdToYen(){
    let pounds = parseFloat(gbp.value)
    let eu =pounds*0.86;
    let dollar = pounds*1.39;
    let yeni = pounds*151.77;
    euro.value= eu;
    usd.value= dollar;
    yen.value= yeni;

}


yen.addEventListener('input', yenToEuroToGbpToUsd);

function yenToEuroToGbpToUsd(){
    let yeni=parseFloat(yen.value);
    let eu = yeni*0.0077;
    let dollar=yeni*0.0092;
    let pounds=yeni*0.0066;
    euro.value=eu;
    usd.value=dollar;
    gbp.value=pounds;
};



function main() {
yenToEuroToGbpToUsd();
gbpToEuroToUsdToYen();
usdToEuroToGpbToYen();
euroToGbpToYenToUsd();
};

main();
