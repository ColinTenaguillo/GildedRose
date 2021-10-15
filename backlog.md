# GildedRose

## Etat de l'art
- updateQuality actuelle vérifie en fonction du nom (solution non pérenne)
- updateQuality modifie quality et sellIn
- Test ne passe pas
- L'ajout de type d'item n'est pas pratique

## Backlog
- Faire le refacto en tdd
- Créer des classes intermédiaire pour chaque type d'items
- Ajouter une méthode abstraite updateQuality dans item
- Ecrire les méthodes updateQuality
- Faire marcher les tests avec les nouvelles classes