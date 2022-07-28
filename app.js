let data = ("cities.json")

fetch(data)
    // On obtient une réponse que l'on convertit au format .json 
    .then((response) =>
        response.json()
        // La méthode then() renvoie un objet Promise
        .then((data) => {

            let table = [];
            // Ce foreach sert à créer un nouveau tableau avec les pays sans doublon
            data.forEach(ville => {


                if (table.includes(ville.countrycode.name) == false) {

                    table.push(ville.countrycode.name);
                }
            });

            // Le .sort sert à trier le tableau des pays par ordre alphabétique
            table.sort();
            let select = document.querySelector("#pays");

            // Ce foreach reprend le tablau des pays triés par ordre alphabétique et créer les options du select
            table.forEach(country => {

                select.innerHTML += '<option>' + country + '</option>';
            });


            select.addEventListener('change', event => {
                let tableVille = []

                data.forEach(element => {
                    // console.log(tableVille);

                    if (element.countrycode.name == select.value) {

                        tableVille.push(element.name)

                    }
                });

                tableVille.sort()

                let listeVille = document.querySelector(".ville")

                listeVille.innerHTML = "";
                tableVille.forEach(ville => {


                    listeVille.innerHTML += '<p>' + ville + '</p>'
                });



            })
        })
    )