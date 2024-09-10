
        function cambiarContenido(){

            document.getElementById("contenido").innerText = "Este es el nuevo texto.";
        }

            function cambiarcolor() {
                document.body.style.backgroundColor = 'lightblue';
                document.body.style.color = 'red';
            }
        
            function mostrarInformacion() {
                var usuario = document.getElementById("nombre").value;
                var contrasena = document.getElementById("contrasena").value;
                console.log("Usuario: " + usuario + ", Contraseña: " + contrasena);
              }
              
              function validarTelefono() {
                var telefono = document.getElementById('telefono').value;
                // Expresión regular para un número de teléfono de 10 dígitos (opcional: con formato (123) 456-7890)
                var patronTelefono = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
                if (!patronTelefono.test(telefono)) {
                    alert('Por favor, introduce un número de teléfono válido.');
                    return false;
                }
                return true;
            }

            function mostrarEstrato() {
                var estrato = document.getElementById("estrato").value;
                document.getElementById("resultado1").innerHTML = "El estrato seleccionado es: " + estrato;
            }
            function calcularEdad() {
                var fechaNacimiento = document.getElementById("fechaNacimiento").value;
                var fechaActual = new Date();
                var fechaNacimiento = new Date(fechaNacimiento);
                var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        
                if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
                    edad--;
                }
            }
            function mostrarGrupo() {
                var grupo = document.getElementById("grupo").value;
                document.getElementById("resultado3").innerHTML = "El grupo sanguíneo seleccionado es: " + grupo;
            }
            var radios = document.querySelectorAll('input[type="radio"]');

            radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            console.log('Género seleccionado:', this.value);
        });
    });
    
    function validarDatos() {
        var nombres = document.querySelector('input[name="nombres"]').value;
        var apellido = document.querySelector('input[name="apellido"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var telefono = document.querySelector('input[name="telefono"]').value;
        var estrato = document.getElementById("estrato").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var grupoSanguineo = document.getElementById("grupo").value;
        var genero = document.querySelector('input[name="flexRadioDefault"]:checked').value;

        // Expresiones regulares para validar los campos
        var nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var telefonoRegex = /^\d{7,}$/;

        if (!nombreRegex.test(nombres)) {
            alert("Ingrese un nombre válido.");
            return;
        }

        if (!nombreRegex.test(apellido)) {
            alert("Ingrese un apellido válido.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Ingrese un email válido.");
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("Ingrese un teléfono válido (mínimo 7 dígitos).");
            return;
        }

        // Mostrar la información ingresada en un alert
        var mensaje = "Nombres: " + nombres + "\n";
        mensaje += "Apellido: " + apellido + "\n";
        mensaje += "Email: " + email + "\n";
        mensaje += "Teléfono: " + telefono + "\n";
        mensaje += "Estrato: " + estrato + "\n";
        mensaje += "Fecha de Nacimiento: " + fechaNacimiento + "\n";
        mensaje += "Grupo Sanguíneo: " + grupoSanguineo + "\n";
        mensaje += "Género: " + genero + "\n";

        alert(mensaje);
    }
    

    
    function cancelar() {  
        window.location.href = "exam.html"; 
    }