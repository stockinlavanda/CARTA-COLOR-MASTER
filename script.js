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

// Función para exportar los tonos a CSV
function exportarCSV() {
  const data = [];
  
  colorItems.forEach(item => {
    const cantidad = parseInt(item.querySelector('.quantity').value);
    if (cantidad > 0) {
      const colorNombre = item.querySelector('.item-name').value;
      data.push([colorNombre, cantidad]);
    }
  });

  const csvContent = "Color,Cantidad\n" + data.map(e => e.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tonos.csv';
  a.click();

  URL.revokeObjectURL(url);
}

// Llamar a la función de exportación cuando sea necesario, por ejemplo, al hacer clic en un botón de exportación
document.getElementById('export-button').addEventListener('click', exportarCSV);

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  const nombre = formData.get('nombre');
  const apellido = formData.get('apellido');
  formData.set('nombre', nombre + ' ' + apellido);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Formulario enviado con éxito"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
