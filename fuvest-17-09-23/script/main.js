function Resultado() {
	console.log("resultado")
    // Carrega o arquivo JSON
    fetch('https://williroger.github.io/cursinhoFFLCH/fuvest-17-09-23/data/fuvest170923.json')
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
			var motivoZero = JSON.stringify(data[`${idEstudante}`]['Acertos']);
			var comentario = JSON.stringify(data[`${idEstudante}`]['Porcentagem']);


			var dataContainer = document.getElementById('motivoZero');
            dataContainer.innerHTML = motivoZero;	

			var dataContainer = document.getElementById('comentario');
            dataContainer.innerHTML = comentario;				
			
			
        })
        .catch(function(error) {
            console.log('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
};


function SendInput(){
	Resultado()
}