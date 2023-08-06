

//url->
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat




const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price / 100); // price paise me given hai iss leye convert of rupees /100
  };
  
  export default FormatPrice;