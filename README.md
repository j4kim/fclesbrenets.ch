# Site internet du FC Les Brenets

## Administration du site

La console d'administration est à l'adresse [fclesbrenets.ch/wordpress/wp-admin](https://fclesbrenets.ch/wordpress/wp-admin).

### Prérequis

* Un accès à la console d'administration
* Un accès en lecture+écriture au dossier Google Drive FCB

### Articles

Depuis la console d'administration, le menu "Article" permet de modifier et ajouter des articels. Les articles apparaissent sous la section "News" sur le site.

### Pages

Les pages sont affichées sous la sections "Infos" sur le site. Leur gestion est semblable aux articles.

L'ordre des pages peut être modifiée par l'attribut "Ordre". Pour modifier cet attribut: dans la liste des pages -> Modification rapide -> Ordre.

### Sponsors

La liste des sponsors ([fclesbrenets.ch/sponsors](https://fclesbrenets.ch/sponsors)) provient d'un [classeur Google Sheets](https://docs.google.com/spreadsheets/d/1i94pLT9FZ4oqBYGKCiJMiBBsyq5CXaJtZ78XEWOSIM0/edit?usp=sharing), stocké sur le Drive du FC.

Une image peut être liée à un sponsor. Pour cela:
1. Ajouter l'image depuis l'onglet "Médias" sur la console d'adminstration;
2. Copier le titre du média depuis la console;
3. Coller le nom dans la colonne mediaTitle dans le classeur.

Dans le classeur, la colonne "classes" permet d'afficher la brique d'un sponsor plus grand ou avec les couleurs inversées (dans le cas où le logo est blanc). La classe `2x1` fera que la brique est deux fois plus large que les autres. `1x2` la fera deux fois plus haute et `2x2` quadruple la surface de la brique. La classe `inverted` applique un fond bleu foncé avec le texte en blanc.

## Documentation développeur

### Fonctionnement

Le site est entièrement construit en front-end. Il s'agit d'une application Vue.js qui fait des requêtes HTTP sur une installation de Wordpress.

L'[API REST de Wordpress](https://developer.wordpress.org/rest-api/) est utilisée pour récupérer la plupart des données (users, posts, pages et media). La liste des sponsors est récupérée directement depuis le tableur via la [Google Sheets API](https://developers.google.com/sheets/api).

En production, Wordpress est dans un sous-dossier `wordpress` à la racine du répertoire du site. Il n'est cependant pas inclus dans ce dépôt. C'est une instal Wordpress standard, sans personnalisation.

### Prérequis

* Environnement de développement PHP tout-en-un, exemple [XAMPP](https://www.apachefriends.org/fr/index.html)
* Une installation de [Wordpress](https://wordpress.org/download/)
* [npm](https://www.npmjs.com/get-npm)
* Un accès au serveur FTP pour le déploiement (voir avec moi)

### Récupérer les dépendances JavaScript

```
npm install
```

### Lancer sur un serveur Local

Installer Wordpress dans le dossier publique du serveur Apache local et lancer le serveur.

Il doit y avoir un fichier `.env` à la racine du dossier du projet qui contient la déclaration de la variable d'environnement `VUE_APP_API`. Cette variable doit cibler l'API REST de Wordpress, par exemple `http://localhost/fcb/wordpress/wp-json/wp/v2`.

Compiler l'application à la volée:
```
npm run serve
```

### Déploiement

```
npm run deploy
```

Cette commande constuit l'application dans le dossier `deployable`, en utilisant la configuration du fichier `.env.deploy`.

Le contenu de ce dossier peut être copié sur le serveur de production.

### Contribution

Une liste des idées et tâches existe sur le [projet kanban](https://github.com/j4kim/fcb/projects/1) sur GitHub.
