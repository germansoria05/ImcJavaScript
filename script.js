// Objeto para almacenar la lista de tareas
const listaDeTareas = {
        tareas: [],
        agregarTarea: function (tareaTexto) {
          this.tareas.push({
            texto: tareaTexto,
            completada: false
          });
        },
        marcarTareaComoCompletada: function (indice) {
          if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].completada = true;
          }
        },
        eliminarTarea: function (indice) {
          if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
          }
        },
        obtenerTareasCompletadas: function () {
          return this.tareas.filter(tarea => tarea.completada);
        }
      };
      
      // Función para mostrar la lista de tareas
      function mostrarListaDeTareas() {
        console.log('Lista de tareas:');
        listaDeTareas.tareas.forEach(function (tarea, indice) {
          const estado = tarea.completada ? 'Completada' : 'Pendiente';
          console.log(`${indice + 1}. [${estado}] ${tarea.texto}`);
        });
      }
      
      // Función principal para ejecutar la aplicación
      function ejecutarAppDeTareas() {
        while (true) {
          const opcion = prompt(
            'Opciones:\n1. Agregar tarea\n2. Marcar tarea como completada\n3. Eliminar tarea\n4. Salir'
          );
      
          switch (opcion) {
            case '1':
              const nuevaTarea = prompt('Ingrese la nueva tarea:');
              listaDeTareas.agregarTarea(nuevaTarea);
              break;
            case '2':
              mostrarListaDeTareas();
              const indiceCompletada = parseInt(prompt('Ingrese el número de la tarea completada:')) - 1;
              listaDeTareas.marcarTareaComoCompletada(indiceCompletada);
              break;
            case '3':
              mostrarListaDeTareas();
              const indiceEliminar = parseInt(prompt('Ingrese el número de la tarea a eliminar:')) - 1;
              listaDeTareas.eliminarTarea(indiceEliminar);
              break;
            case '4':
              return; 
              // Salir de la aplicación
            default:
              console.log('Opción no válida. Por favor, elija una opción válida.');
          }
          mostrarListaDeTareas();
        }
      }
      
      // Ejecutar la aplicación
      ejecutarAppDeTareas();