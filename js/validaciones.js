function validacionContacto()
            {
                nom= document.getElementById('nombre').value;
                ape= document.getElementById('apellido').value;
                ed = document.getElementById('edad').value; 
                tipo = document.getElementById('opcion').selectedIndex;
                fono = document.getElementById('telefono').value;

                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }

                if(ape == null || ape.length==0 || /^\s+$/.test(ape))
                {
                    alert('Error.. debe ingresar un apellido');
                    document.getElementById('apellido').value="";
                    document.datos.ape.focus();
                    return false;
                }
                
                if(isNaN(ed) || ed.length == 0)
                 {
                    alert('Error...debe ingresar una edad válida');
                    document.getElementById('edad').value="";
                    document.datos.ed.focus();
                    return false;
                }

                if (tipo == null || tipo == 0)
                {
                    alert('Seleccione un tipo de consulta');
                    document.datos.opcion.focus();
                    return false;
                }

                if(!(/^\d{9}$/.test(fono)) )
                {
                    alert('Error...debe ingresar un teléfono válido');
                    document.getElementById('telefono').value="";
                    document.datos.fono.focus();
                    return false;
                }    
                return true;      

                
            }

            
            $(function() 
            {
              $("#mi-formulario").validate({
                   rules: {
                          email: {
                              required: true,
                              email: true
                          },
                          password: "required",
                          fono: "required",
                          fecha: "required",
                          password2: {
                              required: true,
                              equalTo: "#password"
                          },
                          opcion: "required",
                          comentarios: "required"    
                          
                      }, //rules
                  messages: {
                      email: {
                          required: 'Ingresa tu correo electrónico',
                          email: 'Formato de correo no válido'
                      },
                      password: {
                          required: 'Ingresa una contraseña',
                          minlength: 'Caracteres insuficientes'
                      },
                      fono:{
                          required: 'Ingrese un número de celular',
                          minlength: 'Cantidad de digitos insuficiente'
                      },
                      fecha:{
                          required: 'Seleccione una fecha válida',
                          min: 'Fecha no corresponde'
                      },
                      password2: {
                          required: 'Reingresa la contraseña',
                          equalTo: 'Las contraseñas ingresadas no coinciden',
                          minlength: 'Caracteres insuficientes'
      
                      },
                      opcion:{
                        required: 'No puede dejar este espacio vacío'
                      },
                      comentarios:{
                          required: 'No puede dejar este espacio vacío'
                      }
                  }//messages
              }); //$('#mi-formulario').validate
          }); //function


          function CambiarMayusculasNombre()
        {
            var a = document.getElementById("nombre");
            a.value = a.value.charAt(0).toUpperCase()+a.value.substr (1);
        }
        function CambiarMayusculasApellido()
        {
            var a = document.getElementById("apellido");
            a.value = a.value.charAt(0).toUpperCase()+a.value.substr (1);
        }

        function dialogBox(){
            alert('Se han limpiado correctamente los cuadros.');
          }


        $(document).ready(function()
        {
            $("#solicitar").click(function(){

                $.get("https://mindicador.cl/api",
                    function(data){
                        
                        $.each(data,function(i,item){
                            $("#monedas").append("<tr><td>"+item.codigo+"</td><td>"+item.nombre +
                            "</td><td>"+'$' +item.valor+ "</td><td>");
                            

                        });

                    });
            });
        })