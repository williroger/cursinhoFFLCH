window.onload = function() {
    // Carrega o arquivo JSON
    fetch('https://williroger.github.io/cursinhoFFLCH/data/red.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Manipula os dados JSON
			var zero = JSON.stringify(data['10']['zero']);
			var motivoZero = JSON.stringify(data['10']['motivo_zero']);
			var c1 = parseInt(JSON.stringify(data['10']['c1']));
			var c2 = parseInt(JSON.stringify(data['10']['c2']));
			var c3 = parseInt(JSON.stringify(data['10']['c3']));
			var c4 = parseInt(JSON.stringify(data['10']['c4']));
			var c5 = parseInt(JSON.stringify(data['10']['c5']));
			var comentario = JSON.stringify(data['10']['comentario']);

			let somRedacao = c1+c2+c3+c4+c5
			
            var dataContainer = document.getElementById('somRedacao');
            dataContainer.innerHTML = 'TOTAL: '+somRedacao;
			
			var dataContainer = document.getElementById('comentario');
            dataContainer.innerHTML = comentario;
        })
        .catch(function(error) {
            console.log('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
};
