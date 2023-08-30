console.log("Hola desde JavaScript");
const colorItems = document.querySelectorAll('.color-item');
const totalAmount = document.getElementById('total-amount');

colorItems.forEach(item => {
  const quantityInput = item.querySelector('.quantity');
  const price = parseFloat(item.getAttribute('data-price'));

  quantityInput.addEventListener('input', updateTotal);

  function updateTotal() {
    let total = 0;
    colorItems.forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').value);
      total += quantity * price;
    });
    totalAmount.textContent = total;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const colorItems = document.querySelectorAll('.color-item');
  const totalAmountField = document.getElementById('total-amount');
  const detallesArticulosField = document.getElementById('detalles-articulos');
  
  colorItems.forEach(item => {
    const quantityInput = item.querySelector('.quantity');
    const price = parseFloat(item.getAttribute('data-price'));
    
    quantityInput.addEventListener('input', updateTotal);
    
    function updateTotal() {
      let total = 0;
      const detalles = [];
      colorItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').value);
        if (quantity > 0) {
          const cardTitle = item.querySelector(".card-title").textContent;
          const cardText = item.querySelector(".card-text").textContent;
          const subtotal = quantity * price;
          detalles.push(`${quantity} x ${cardTitle} (${subtotal})`);
          total += subtotal;
        }
      });
      totalAmountField.value = total;
      detallesArticulosField.value = detalles.join(', ');
    }
  });
});
