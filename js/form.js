document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const alerta = document.getElementById("alerta");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    let errores = [];

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    // Limpiar alertas anteriores
    hideAlert();

    // Validaciones
    if (nombre.value.trim() === "") {
      errores.push("❌ El nombre es obligatorio.");
      valid = false;
    } else if (nombre.value.trim().length < 5) {
      errores.push("❌ El nombre debe tener al menos 5 caracteres.");
      valid = false;
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value.trim())) {
      errores.push("❌ El nombre solo debe contener letras y espacios.");
      valid = false;
    }

    if (email.value.trim() === "") {
      errores.push("❌ El email es obligatorio.");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        errores.push("❌ El email no es válido.");
        valid = false;
      }
    }

    if (asunto.value.trim() === "") {
      errores.push("❌ El asunto es obligatorio.");
      valid = false;
    } else if (asunto.value.trim().length <= 5) {
      errores.push("❌ El asunto debe tener al menos 5 caracteres.");
      valid = false;
    }

    if (mensaje.value.trim() === "") {
      errores.push("❌ El mensaje es obligatorio.");
      valid = false;
    } else if (mensaje.value.trim().length <= 10) {
      errores.push("❌ El mensaje debe tener al menos 10 caracteres.");
      valid = false;
    }

    if (!valid) {
      showAlert(errores.join("<br>"), "error");
    } else {
      showAlert("✅ Tu consulta fue enviada con éxito.", "success");
      form.reset();
    }
  });

  function showAlert(mensaje, tipo) {
    alerta.innerHTML = mensaje;
    alerta.className = `alerta-centrada ${tipo}`;
    alerta.style.display = "block";

    setTimeout(() => {
      alerta.style.display = "none";
    }, 5000);
  }

  function hideAlert() {
    alerta.innerHTML = "";
    alerta.style.display = "none";
  }
});
