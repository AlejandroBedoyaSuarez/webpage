function validarFormulario() {
    // Obtener los valores de los campos
    const email = document.getElementById('email').value;
    const apodo = document.getElementById('apodo').value;

    // Verificar si los campos están vacíos
    if (email === '' || apodo === '') {
        alert('Por favor, completa todos los campos para poder entrar.');
        return false; // Evita que el formulario se envíe
    }
    
    return true; // Permite que el formulario se envíe
}