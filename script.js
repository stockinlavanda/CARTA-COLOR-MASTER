function limpiarFormulario() {
  // Obtén todos los elementos de cantidad y restáuralos a 0
  const quantityInputs = document.querySelectorAll('.quantity');
  quantityInputs.forEach(input => {
    input.value = 0;
  });

  // Restablece el valor total a 0
  const totalAmount = document.getElementById('total-amount');
  totalAmount.textContent = 0;

  // Restablece el campo oculto "TotalAmount" a 0
  const totalAmountHidden = document.getElementById('total-amount-hidden');
  totalAmountHidden.value = 0;
}

console.log("Hola desde JavaScript");
const colorItems = document.querySelectorAll('.color-item');
const totalAmount = document.getElementById('total-amount');
const totalAmountHidden = document.getElementById('total-amount-hidden'); 

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
    totalAmount.textContent = Math.round(total);
    totalAmountHidden.value = Math.round(total);
  }
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
