document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const calcularButton = document.getElementById('calcular');
    const borrarButton = document.getElementById('borrar');
    const resultadoDiv = document.getElementById('resultado');
    const historialDiv = document.getElementById('historial');
    const historialResultados = [];

    calcularButton.addEventListener('click', calcularIMC);
    borrarButton.addEventListener('click', borrarResultados);

    function calcularIMC() {
        const nombre = nombreInput.value;
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);

        if (isNaN(altura) || isNaN(peso)) {
            alert('Por favor, ingrese valores válidos para altura y peso.');
            return;
        }

        const imc = peso / (altura * altura);
        const categoria = determinarCategoriaIMC(imc);
        const dietaRecomendada = obtenerDietaRecomendada(categoria);

        const resultado = {
            nombre: nombre,
            altura: altura,
            peso: peso,
            imc: imc.toFixed(2),
            categoria: categoria,
            dieta: dietaRecomendada
        };

        historialResultados.push(resultado);
        mostrarResultado(resultado);
        mostrarHistorial(historialResultados);
    }

    function determinarCategoriaIMC(imc) {
        if (imc < 18.5) return 'Bajo peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        return 'Obesidad';
    }

    function obtenerDietaRecomendada(categoria) {
        switch (categoria) {
            case 'Bajo peso':
                return 'Se recomienda iniciar consulta con el médico.';
            case 'Sobrepeso':
                return 'Dieta para reducir el sobrepeso: Reduzca la ingesta de calorías y aumente la actividad física.';
            case 'Peso normal':
                return 'Dieta equilibrada: Mantenga una dieta equilibrada y haga ejercicio regularmente.';
            case 'Obesidad':
                return 'Dieta alta en proteínas: Reduzca la ingesta de carbohidratos y aumente la ingesta de proteínas magras.';
            default:
                return 'No se ha definido una dieta específica para esta categoría.';
        }
    }

    function mostrarResultado(resultado) {
        resultadoDiv.innerHTML = `
            <p>Nombre: ${resultado.nombre}</p>
            <p>Altura: ${resultado.altura} m</p>
            <p>Peso: ${resultado.peso} kg</p>
            <p>IMC: ${resultado.imc}</p>
            <p>Categoría: ${resultado.categoria}</p>
            <p>Dieta Recomendada: ${resultado.dieta}</p>
        `;
    }

    function mostrarHistorial(resultados) {
        historialDiv.innerHTML = '<h2>Historial de Resultados</h2>';
        resultados.forEach((resultado, index) => {
            historialDiv.innerHTML += `
                <div>
                    <h3>Resultado ${index + 1}</h3>
                    <p>Nombre: ${resultado.nombre}</p>
                    <p>IMC: ${resultado.imc}</p>
                    <button onclick="mostrarDetalle(${index})">Ver Detalles</button>
                </div>
            `;
        });
    }

    function mostrarDetalle(index) {
        const detalleResultado = historialResultados[index];
        resultadoDiv.innerHTML = `
            <p>Nombre: ${detalleResultado.nombre}</p>
            <p>Altura: ${detalleResultado.altura} m</p>
            <p>Peso: ${detalleResultado.peso} kg</p>
            <p>IMC: ${detalleResultado.imc}</p>
            <p>Categoría: ${detalleResultado.categoria}</p>
            <p>Dieta Recomendada: ${detalleResultado.dieta}</p>
        `;
    }

    function borrarResultados() {
        nombreInput.value = '';
        alturaInput.value = '';
        pesoInput.value = '';
        resultadoDiv.innerHTML = '';
        historialDiv.innerHTML = '';
        historialResultados.length = 0;
    }
});