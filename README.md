# W-JSC-501-REN-1-1-puissance4-kj

    Règles

Pour ceux qui ignorent les règles de ce jeu, elles sont simples et reprennent en partie celles du morpion :
• Il s’agit d’un jeu à deux joueurs (traditionnellement les rouges et les jaunes)
• La surface du jeu est une grille de dimensions variables
• Tour à tour les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors à la
position la plus basse possible dans la-dite colonne. C’est ensuite à l’adversaire de jouer
• Une pièce ne peut pas se poser en dehors des dimensions de la grille
• Quand un joueur aligne à la suite au moins 4 de ses pièces horizontalement, verticalement, ou en
diagonale, il remporte la partie
• Une victoire de l’un des joueurs met fin à la partie
• S’il n’y a plus de case de la grille disponible ou de possibilités de victoire pour aucuns des joueurs, la
partie est déclarée nulle

    Contrainte Techniques

Votre projet devra se présenter obligatoirement sous la forme d’un plugin jQuery.
Il sera alors modulable et donc possible de lui passer au minimum les options suivantes:
• Le nombre de cases que comportera votre grille (en x et en y)
• Les couleurs des joueurs (bien sûr, il ne doit pas être possible que les deux joueurs aient la même
couleur !)

    ETAPE 1 - L’INITIALISATION

• Pour chaque joueur :
• La couleur associée au joueur
• L’id du joueur
• Un indicateur d’état du tour avec :
• L’id du joueur courant
• Un plateau de jeu contenant des cellules
• Pour chaque cellule :
• Une coordonnée X
• Une coordonnée Y
• Un état de la cellule pouvant être :
• VIDE
• OU l’id du joueur

    ETAPE 2 - L’AFFICHAGE

Affichez votre plateau de jeu en manipulant le DOM en JavaScript.

ETAPE 3 - LE GAMEPLAY
Vous devez maintenant permettre aux joueurs de jouer leurs pions : le joueur doit pouvoir sélectionner une
colonne de votre DOM pour faire tomber un pion sur la position la plus basse vide possible de cette colonne.
Après avoir joué c’est au joueur suivant de sélectionner une colonne, et ainsi de suite.

    ETAPE 4 - LA VICTOIRE

A chaque pion joué, vous devez vérifier que ce pion ne déclenche pas une victoire du joueur.
Pour cela :
• Commencez par vérifier que ce pion n’est pas le dernier d’un série de 4 pions en vertical
• Puis assurez-vous qu’il ne fait pas partie d’une série de 4 pions en horizontal
• Enfin vérifiez qu’il ne fait pas partie d’une série de 4 pions en diagonale :
• Vers la gauche
• Puis vers la droite
