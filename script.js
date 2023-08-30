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
  const enviarButton = document.getElementById("enviar");
  const quantityInputs = document.querySelectorAll(".quantity");
  
  enviarButton.addEventListener("click", function(event) {
    event.preventDefault();

    const detalles = [];
    let totalAmount = 0;

    quantityInputs.forEach(function(input) {
      const parentCard = input.closest(".color-item");
      const cardTitle = parentCard.querySelector(".card-title").textContent;
      const cardText = parentCard.querySelector(".card-text").textContent;
      const quantity = parseInt(input.value);
      const price = parseFloat(parentCard.getAttribute("data-price"));
      const subtotal = quantity * price;
    });

    //   if (quantity > 0) {
    //     detalles.push({
    //       nombre: cardTitle,
    //       cantidad: quantity,
    //       total: subtotal
    //     });

    //     totalAmount += subtotal;
    //   }
    // });

    const nombre = document.querySelector('input[name="Nombre"]').value;
    const apellido = document.querySelector('input[name="Apellido"]').value;
    const telefono = document.querySelector('input[name="Telefono"]').value;

    const plataformaCompra = document.querySelector('select[name="plataforma"]').value;

    const dataToSend = {
      nombre,
      apellido,
      telefono,
      plataformaCompra,
      detalles,
      totalAmount
    };

    console.log("Data a enviar:", dataToSend);
    fetch("https://formsubmit.co/stockinlavanda@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta del servidor:", data);
        // Puedes realizar acciones adicionales aquí en función de la respuesta del servidor
      })
      .catch(error => {
        console.error("Error al enviar los datos:", error);
      });
  });
});