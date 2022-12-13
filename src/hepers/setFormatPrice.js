export const setFormatPrice = (price) => new Intl.NumberFormat('ES-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
}).format(price);