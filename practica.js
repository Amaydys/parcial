const validUsername = 'admin';
const validPassword = 'password';

    function mostrarInformacion() {
      const username = document.getElementById('nombre').value;
      const password = document.getElementById('contrasena').value;
      const urlParams = new URLSearchParams(window.location.search);
      const course = urlParams.get('course');

      if (username === validUsername && password === validPassword) {
        alert(`${course} ha sido agregado.`);
        // En un caso real, aquí podrías enviar la información a un servidor o almacenamiento local
        // Ejemplo: localStorage.setItem('course', course);
        // Para el contador puedes usar el almacenamiento local como en el siguiente ejemplo:
        let count = parseInt(localStorage.getItem('courseCount') || '0', 10);
        count++;
        localStorage.setItem('courseCount', count);
        console.log(`Curso seleccionado: ${course}. Total de inscripciones: ${count}`);
        window.location.href = 'programa.html'; // Redirige al usuario de vuelta a la página principal
      } else {
        alert('Credenciales incorrectas');
      }
    }

    function showAlert(description) {  
      alert(description);  
  }  