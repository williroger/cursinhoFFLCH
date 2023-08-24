function Resultado() {
	console.log("resultado")
    // Carrega o arquivo JSON
    fetch('https://williroger.github.io/cursinhoFFLCH/data/red.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
			
		
			
			//captura o idEstudante
			var inputIdEstudante = document.getElementById("inputIdEstudante").value
			
			// pega o valor do Id (se é object ou undefined)
			var teste = typeof(data[`${inputIdEstudante}`])		
	
			//valida se existe esse ID
			
			if (JSON.stringify(teste) != JSON.stringify("undefined")) {
				var idEstudante = inputIdEstudante;
			  } else {
				var idEstudante = "erro"; //usa o ID ZERO
			}

		
            // Manipula os dados JSON
			var zero = JSON.stringify(data[`${idEstudante}`]['zero']);
			var motivoZero = JSON.stringify(data[`${idEstudante}`]['motivo_zero']);
			var c1 = parseInt(JSON.stringify(data[`${idEstudante}`]['c1']));
			var c2 = parseInt(JSON.stringify(data[`${idEstudante}`]['c2']));
			var c3 = parseInt(JSON.stringify(data[`${idEstudante}`]['c3']));
			var c4 = parseInt(JSON.stringify(data[`${idEstudante}`]['c4']));
			var c5 = parseInt(JSON.stringify(data[`${idEstudante}`]['c5']));
			var comentario = JSON.stringify(data[`${idEstudante}`]['comentario']);

			let somRedacao = c1+c2+c3+c4+c5
			
            var dataContainer = document.getElementById('somRedacao');
            dataContainer.innerHTML = 'TOTAL: '+somRedacao;
			
			var dataContainer = document.getElementById('comentario');
            dataContainer.innerHTML = comentario;				
			
			var dataContainer = document.getElementById('c1');
            dataContainer.innerHTML = c1;
			
			var dataContainer = document.getElementById('c2');
            dataContainer.innerHTML = c2;
			
			var dataContainer = document.getElementById('c3');
            dataContainer.innerHTML = c3;
			
			var dataContainer = document.getElementById('c4');
            dataContainer.innerHTML = c4;
			
			var dataContainer = document.getElementById('c5');
            dataContainer.innerHTML = c5;
			
        })
        .catch(function(error) {
            console.log('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
};


function SendInput(){
	Resultado()
}