$(document).ready(function () {
    $('#LoginUsuario').on('click', function () {
      LoginUsuario();
    });
  
    $('#LoginProfesor').on('click', function () {
      LoginProfesor();
    });
  
    $('#LoginAlumno').on('click', function () {
      LoginAlumno();
    });
  
    // Agregar event listeners para los formularios
    document.getElementById("adminForm").addEventListener("submit", function (event) {
      event.preventDefault();
      if (validar()) {
        LoginUsuario();
      }
    });
  
    document.getElementById("profesorForm").addEventListener("submit", function (event) {
      event.preventDefault();
      if (validar()) {
        LoginProfesor();
      }
    });
  
    document.getElementById("alumnoForm").addEventListener("submit", function (event) {
      event.preventDefault();
      if (validar()) {
        LoginAlumno();
      }
    });
  });
  
  function LoginUsuario() {
    var login = $('#usuario').val();
    var pass = $('#pass').val();
  
    $.ajax({
      "url": './includes/LoginUsuario.php',
      "method": 'POST',
      "data": {
        login: login,
        pass: pass
      },
      success: function (data) {
        $('#messageUsuario').html(data);
  
        if (data.indexOf('Redirecting') >= 0) {
          window.location = 'administrador/';
        }
      }
    });
  }
  
  function LoginProfesor() {
    var loginProfesor = $('#usuarioProfesor').val();
    var passProfesor = $('#passProfesor').val();
  
    $.ajax({
      "url": './includes/LoginProfesor.php',
      "method": 'POST',
      "data": {
        loginProfesor: loginProfesor,
        passProfesor: passProfesor
      },
      success: function (data) {
        $('#messageProfesor').html(data);
  
        if (data.indexOf('Redirecting') >= 0) {
          window.location = 'profesor/';
        }
      }
    });
  }
  
  function LoginAlumno() {
    var loginAlumno = $('#usuarioAlumno').val();
    var passAlumno = $('#passAlumno').val();
  
    $.ajax({
      "url": './includes/LoginAlumno.php',
      "method": 'POST',
      "data": {
        loginAlumno: loginAlumno,
        passAlumno: passAlumno
      },
      success: function (data) {
        $('#messageAlumno').html(data);
  
        if (data.indexOf('Redirecting') >= 0) {
          window.location = 'Alumno/';
        }
      }
    });
  }
  
  // Asegúrate de que la función validar() esté definida
  function validar() {
    // Aquí iría la lógica de validación
    // Retorna true si la validación es exitosa y false si no lo es
  }