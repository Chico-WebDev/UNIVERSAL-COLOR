
// Déclenché quand le HTML est complètement chargé et analysé, sans attendre le chargement des images, feuilles CSS, scripts, iframes, etc.
// Utilisé pour exécuter du code dès que le DOM est prêt à être manipulé, même si les médias ne sont pas encore chargés.

document.addEventListener("DOMContentLoaded", () => {

    const boxColor = document.getElementById("color-box") // variable de la div qui change de couleur RGB
    const btnColor = document.getElementById("change-color-btn") // variable du bouton qui excécute la fonction qui change la couleur RGB
    const container = document.querySelector(".generator") // variable de la div qui contient toutes les boites de couleur en hexadecimale

    // on vide le contenu avant la fonction
    container.innerHTML = ""

    // la fonction qui change la couleur de facon aléatoire en RGB
    const getRandomColor = () => {

        let r = Math.floor(Math.random() * 255);  // variable r pour récupérer le premier indice de la couleur RGB de façon aléatoire
        let g = Math.floor(Math.random() * 255);  // variable g pour récupérer le deuxieme indice de la couleur RGB de façon aléatoire
        let b = 150;  // variable b pour récupérer le troisieme indice de la couleur RGB de façon aléatoire
        
        // ajout de la couleur aléatoire au background-color
        boxColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

        // affichage au milieu de la div du nom de la couleur en rgb et une icone pour copier
        boxColor.innerHTML = `<div class="colorText">rgb(${r}, ${g}, ${b})</div>
                              <div class="copier"><i id="copy-icon" class="fas fa-copy"></i>
                              </div>`
                            
                              // au click du bouton copier, on récupère le nom de la couleur RGB puis l'icone succès remplace l'icone pour 2s
                              document.getElementById("copy-icon").addEventListener("click", () => {

                                // Copier du texte (exemple)
                                navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`).then(() => {
                                  const icon = document.getElementById("copy-icon");
                                  icon.classList.remove("fa-copy");
                                  icon.classList.add("fa-check");
                              
                                  // Revenir à l’icône "copier" après 2 secondes
                                  setTimeout(() => {
                                    icon.classList.remove("fa-check");
                                    icon.classList.add("fa-copy");
                                  }, 2000);
                                });
                              });

          // Convertir en hexadécimal
        const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
        let hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
             // console.log(randomColors);
            //  creation d'une liste
             const color = document.createElement("li");
            //  ajoute de la classe box-choice a la liste
             color.classList.add('box-choice')
     
            // ajout de la couleur hexadeciamle et de l'icône copier
             color.innerHTML = `  
              <div class="color" style="background: ${hexColor}"></div>
             <span class="value">${hexColor}  <div class="copier" style="background: ${hexColor}; color: white" ><i id="copy-icon-hex" class="fas fa-copy"></i></span>
             `
            //  on affiche dans le container chaque élément li ajouté au click
             container.appendChild(color)


              // au click du bouton copier, on récupère le nom de la couleur hexadecimale puis l'icone succès remplace l'icone pour 2s
             document.getElementById("copy-icon-hex").addEventListener("click", () => {
              // Copier du texte (exemple)
              navigator.clipboard.writeText(`${hexColor}`).then(() => {
                const icon = document.getElementById("copy-icon-hex");
                icon.classList.remove("fa-copy");
                icon.classList.add("fa-check");

                // Revenir à l’icône "copier" après 2 secondes
                setTimeout(() => {
                  icon.classList.remove("fa-check");
                  icon.classList.add("fa-copy");
                }, 2000);
              });
            });
           
                               
    }

    // bouton du click qui permet de donner de facon aléatoire une couleur en RGB
    btnColor.addEventListener("click", getRandomColor)

    // Déclenché quand toute la page est complètement chargée, y compris les images, vidéos, CSS, scripts externes, etc.
    // Utilisé si tu veux attendre que tout soit complètement prêt, notamment pour certains effets ou animations.
    window.addEventListener("load", () => {

      // Excécution de la fonction lorsqu'on ouvre la page dans un navigateur ou qu'on actualise
      getRandomColor();

      // function pour changer la couleur de la baniere de façon aléatoire chaque une seconde
      function baniereColor() {
        const colorBaniere = document.querySelector(".baniere")
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = 150;
         colorBaniere.style.background = `rgb(${r}, ${g}, ${b})`
      }
    //  grâce a la fonction setInterval on appelle notre function baniereColor chaque une seconde
      setInterval(baniereColor, 1000);  

      // function pour changer la couleur de mon emojie dans le pied de page de façon aléatoire chaque une seconde
      function emojieColor() {
        const colorEmojie = document.querySelector(".emojie")
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = 150;
         colorEmojie.style.color = `rgb(${r}, ${g}, ${b})`
      }
     
      //  grâce a la fonction setInterval on appelle notre function emojieColor chaque une seconde
      setInterval(emojieColor, 1000); 

    })

})


