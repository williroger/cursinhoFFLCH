window.onload = function() {
    // Carrega o arquivo JSON
    fetch('./data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Manipula os dados JSON
            var dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = JSON.stringify(data);
        })
        .catch(function(error) {
            console.log('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
};
