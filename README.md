
OBJECTIF :

 

Checkpoint : Changeur de couleurs interactif

Voici une description générale de ce que vous allez créer:

Le fichier HTML crée une page web simple avec un titre, une boîte colorée et un bouton.
Le fichier CSS contient un style de base pour les éléments.
Le fichier JavaScript définit la fonctionnalité permettant de changer la couleur de la boîte lorsque l'on clique sur le bouton.
La fonction getRandomColor() génère un code de couleur hexadécimal aléatoire.
Lorsque le bouton est cliqué, la fonction getRandomColor() est appelée et la couleur d'arrière-plan de la boîte (colorBox) est remplacée par la couleur générée.
Maintenant, suivez les instructions ci-dessous:

 


Instructions

Configuration HTML:
Créer un nouveau fichier HTML.
Configurer la structure de base d'un document HTML avec la < !DOCTYPE html>, <html>, <head>, et <body>.
Ajouter un titre au document, tel que "Changeur de couleurs".
Créer l'interface:
Dans la balise body, créer un élément <div> avec un nom de classe "container".
A l'intérieur du conteneur, ajoutez un élément <h1> avec le texte "Color Changer".
Créez un autre élément <div> avec un id de "color-box". Cet élément représentera la boîte dont la couleur changera.
Ajoutez un élément <button> avec un id de "change-color-btn". Le bouton doit contenir le texte "Change Color".
Styling with CSS:
Créer un fichier CSS et le lier à votre document HTML à l'aide de la balise <link>.
Stylez la classe de conteneur pour centrer son contenu horizontalement et lui donner une marge supérieure pour l'espacement.
Stylez l'identifiant color-box avec une largeur et une hauteur fixes, et définissez une couleur d'arrière-plan par défaut.
Stylez l'identifiant change-color-btn pour le rendre visuellement attrayant et facilement cliquable.
JavaScript pour l'interactivité:
Créer un fichier JavaScript et le lier à votre document HTML à l'aide de la balise <script>.
Écrire un code JavaScript pour attendre que le contenu du DOM soit chargé à l'aide de l'événement DOMContentLoaded.
Dans le gestionnaire d'événement, sélectionnez les éléments color-box et change-color-btn en utilisant document.getElementById().
Implémentez une fonction, appelons-la getRandomColor(), qui génère une couleur aléatoire. Vous pouvez utiliser des valeurs hexadécimales ou RVB.
Ajoutez un écouteur d'événement à l'élément change-color-btn. Lorsqu'il est cliqué, l'écouteur d'événement doit déclencher une fonction qui change la couleur d'arrière-plan de la boîte de couleurs en une couleur aléatoire générée par la fonction getRandomColor().
Test:
Ouvrez votre fichier HTML dans un navigateur Web.
Cliquez sur le bouton "Changez la couleur" et observez la couleur de la boîte changer dynamiquement.