# Context Général

> Créer une application de gestion de liste utilisateur

## Fonctionnalités

- Ecran d'Ajout d'un utilisateur
- Affichage de la liste des utilisateur
  - Suppression d'un utilisateur depuis la liste
- Ecran de modification d'un utilisateur
- Option de tris sur criteres
- Recherche rapide.

## Composant

### Views

> Ex.1 - créer et lier les page suivante

- UserCreationView
- UserModificationView

### Functional

- Gestion du Tri
- Recheche

### Presentation

---

Header :

Créer un composant de présentation "MapaHeader"

- 100% de largeur
- 110px de hauteur
- affichant le "logo-mapa.jpg"
- ayant une bordure inférieur de 10px d'épaisseur de couleur "--mapa-red".
- Affichant a coté de l'image le text "PAGE_TITLE" issu d'une "ref()" de couleur "--mapa-blue"

_Variable CSS_

```css
/* Definition */
:root {
  --mapa-blue: #22647e;
  --mapa-red: #e04210;
}
/* Utilisation */
selector {
  color: var(--mapa-blue);
}
```

---

Navigation :

Créer un composant de présentation "MapaNavigation"
Contenant les lien de navigation.

---

Layout (slot) :

Créer un composant de layout "TwoColumnLayout"
Utilisant le concept des slots nommés pour:

- Definir un titre pour le layout "title" (slot)
- Apporter une colonne "right" (slot)
- Apporter une colonne "left" (slot)

Chaque colonne doit avoir sont propre

- "title" (slot)
- "default" (slot)
