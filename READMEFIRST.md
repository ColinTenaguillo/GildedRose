Appliquer les principes de Clean Code sur le Gilded Rose ou le Trivia (au choix)
○ https://github.com/ChrisHeral/GildedRose-Refactoring-Kata
○ https://github.com/ChrisHeral/trivia
Choisir un binôme différent de la semaine dernière
Choisir un des 2 katas
Appréhender ce code pour la 1e fois
Quelle stratégie adopter pour le refactorer sans douleur ?
Lister les améliorations possibles (fichier texte ou autre)
Les prioriser par ordre de facilité
Les traiter dans l’ordre en faisant des micro-commits pour chaque avancée
Pusher sur un repo Git au plus tard dimanche soir

## Choix du Legacy
Nous avons choisi le repo Gilded Rose, et d'utiliser du JavaScript.

Repo Gilded Rose : [https://github.com/ChrisHeral/GildedRose-Refactoring-Kata](https://github.com/ChrisHeral/GildedRose-Refactoring-Kata "Repo Gilded Rose")

## L'équipe
Colin TENAGUILLO

Nicolas ROCHE

Ossama BEN JEMAA

## Phase d'appréhension du code (état de l'art)
_______
### Suite à la première lecture
Le code actuel n'est pas scalable, pas adapté pour l'intégration continue. Il n'est pas SOLID. Peu lisible.

### Suite à la seconde lecture :
- **updateQuality** actuelle vérifie en fonction du nom (solution non pérenne)
- **updateQuality** modifie quality et sellIn
- Test ne passe pas
- L'ajout de type d'item n'est pas pratique
- Smell code :
    - _array of objects --> for loop --> foreach 
    - Les conditions sur des verifications booléen --> pour eviter ca on doit normalement extraire en variable au nom significatif (principe https://refactoring.guru/extract-variable) 
if (name == "nom") --> isNom 
    - Les soustractions, additions --> good practice : i = i + 1 --> i++ / i--

## Stratégie à adopter
- Faire le refacto en tdd
- Créer des classes intermédiaire pour chaque type d'items
- Ajouter une méthode abstraite updateQuality dans item
- Ecrire les méthodes updateQuality
- Faire marcher les tests avec les nouvelles classes

## Backlog
Accès au backlog, listing et priorisation des améliorations :
https://github.com/ColinTenaguillo/GildedRose/projects/1








