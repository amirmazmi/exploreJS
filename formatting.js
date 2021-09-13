
// format value with decimal digits and thousands separator
function float2string(value) {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
