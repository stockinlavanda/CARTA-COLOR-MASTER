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