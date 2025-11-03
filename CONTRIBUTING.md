# Guide de contribution

Merci de votre intérêt pour contribuer à cLeclerc ! Ce document fournit des lignes directrices pour contribuer au projet.

## Code de conduite

En participant à ce projet, vous vous engagez à maintenir un environnement respectueux et accueillant pour tous.

## Comment contribuer

### Signaler des bugs

Si vous trouvez un bug, merci de créer une issue avec :

- **Titre clair et descriptif**
- **Description détaillée** du problème
- **Étapes pour reproduire** le bug
- **Comportement attendu** vs **comportement actuel**
- **Screenshots** si applicable
- **Informations système** :
  - Version de Chrome
  - Version de l'extension
  - Système d'exploitation

### Proposer des nouvelles fonctionnalités

Pour proposer une nouvelle fonctionnalité :

1. Vérifiez d'abord que la fonctionnalité n'a pas déjà été proposée dans les issues
2. Créez une nouvelle issue avec le label `enhancement`
3. Décrivez clairement la fonctionnalité et son utilité
4. Expliquez comment vous l'implémenteriez si possible

### Soumettre des Pull Requests

#### Avant de commencer

1. **Fork** le repository
2. **Clone** votre fork localement
3. Créez une **branche** pour votre travail :
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

#### Standards de code

- Utilisez **JavaScript ES6+** moderne
- Suivez les conventions de nommage existantes
- Utilisez **const** et **let** (pas de var)
- Utilisez les **arrow functions** quand c'est approprié
- Ajoutez des **commentaires JSDoc** pour les fonctions importantes
- Gardez les fonctions **courtes et focalisées**
- Utilisez des noms de variables **descriptifs**

Exemple de fonction bien documentée :

```javascript
/**
 * Remplace une image par une image de Leclerc
 * @param {HTMLImageElement} img - Élément image à remplacer
 * @returns {boolean} True si le remplacement a réussi
 */
function replaceImage(img) {
    // Implémentation...
}
```

#### Structure des commits

- Utilisez des messages de commit clairs et descriptifs
- Format recommandé :
  ```
  type: description courte

  Description détaillée si nécessaire
  ```

Types de commits :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Modifications de documentation
- `style`: Formatage, point-virgules manquants, etc.
- `refactor`: Refactoring du code
- `test`: Ajout ou modification de tests
- `chore`: Maintenance, mise à jour de dépendances

Exemples :
```bash
feat: ajouter support pour les images WebP
fix: corriger le remplacement des images sur YouTube
docs: améliorer le README avec des exemples
```

#### Processus de Pull Request

1. **Mettez à jour votre branche** avec la branche principale :
   ```bash
   git fetch upstream
   git rebase upstream/master
   ```

2. **Testez vos changements** :
   - Chargez l'extension dans Chrome
   - Testez sur plusieurs sites web différents
   - Vérifiez qu'il n'y a pas d'erreurs dans la console

3. **Committez vos changements** :
   ```bash
   git add .
   git commit -m "feat: description de votre changement"
   ```

4. **Poussez vers votre fork** :
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```

5. **Créez la Pull Request** sur GitHub :
   - Titre clair et descriptif
   - Description détaillée des changements
   - Référencez les issues liées (ex: "Fixes #123")
   - Ajoutez des screenshots si pertinent

#### Template de Pull Request

```markdown
## Description
[Description claire des changements]

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Tests effectués
- [ ] Testé sur Chrome
- [ ] Testé sur plusieurs sites
- [ ] Pas d'erreurs dans la console

## Checklist
- [ ] Mon code suit les conventions du projet
- [ ] J'ai commenté les parties complexes
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes changements ne génèrent pas de nouveaux warnings
```

## Structure du projet

```
cLeclerc/
├── cleclerc.js           # Script principal (seul fichier JavaScript)
├── manifest.json         # Configuration de l'extension
├── images/
│   ├── all/             # Images de Charles Leclerc
│   └── profil/          # Icônes de l'extension
├── README.md            # Documentation principale
├── CONTRIBUTING.md      # Ce fichier
├── LICENSE              # Licence MIT
└── .gitignore          # Fichiers à ignorer
```

## Développement local

### Installation pour le développement

```bash
# Cloner votre fork
git clone https://github.com/votre-username/cLeclerc.git
cd cLeclerc

# Ajouter le repository principal comme upstream
git remote add upstream https://github.com/original-username/cLeclerc.git
```

### Tester l'extension

1. Ouvrez Chrome et allez à `chrome://extensions/`
2. Activez le "Mode développeur"
3. Cliquez "Charger l'extension non empaquetée"
4. Sélectionnez le dossier du projet
5. Testez sur différents sites web

### Debug

- Utilisez `console.log()` pour déboguer
- Ouvrez la console développeur (F12) sur les pages web
- Rechargez l'extension après chaque modification

## Ajouter de nouvelles images

Si vous voulez ajouter de nouvelles images de Charles Leclerc :

1. Ajoutez les images dans `images/all/`
2. Nommez-les `leclercXX.jpg` (où XX est le prochain numéro)
3. Mettez à jour `LECLERC_IMAGES` dans `cleclerc.js`
4. Testez que les nouvelles images s'affichent correctement

## Questions ?

Si vous avez des questions :
- Ouvrez une issue avec le label `question`
- Consultez les issues existantes
- Contactez les mainteneurs

## Licence

En contribuant à cLeclerc, vous acceptez que vos contributions soient sous licence MIT.

---

Merci de contribuer à cLeclerc ! 🏎️ **Forza Ferrari!** 🔴
