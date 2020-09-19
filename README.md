# Site internet du FC Les Brenets

## Administration du site

La console d'administration est à l'adresse [fclesbrenets.ch/wordpress/wp-admin](https://fclesbrenets.ch/wordpress/wp-admin).

### Prérequis

* Un accès à la console d'administration
* Un accès en lecture+écriture au dossier Google Drive FCB

### Articles

Depuis la console d'administration, le menu "Article" permet de modifier et ajouter des articles. Les articles apparaissent sous la section "Actu" sur le site.

### Pages

Les pages sont affichées sous la section "Infos" sur le site. Leur gestion est semblable aux articles.

L'ordre des pages peut être modifiée par l'attribut "Ordre". Pour modifier cet attribut: dans la liste des pages -> Modification rapide -> Ordre.

### Sponsors

La liste des sponsors ([fclesbrenets.ch/sponsors](https://fclesbrenets.ch/sponsors)) provient d'un [classeur Google Sheets](https://docs.google.com/spreadsheets/d/1i94pLT9FZ4oqBYGKCiJMiBBsyq5CXaJtZ78XEWOSIM0/edit?usp=sharing), stocké sur le Drive du FC.

Une image peut être liée à un sponsor. Pour cela:
1. Ajouter l'image depuis l'onglet "Médias" sur la console d'adminstration;
2. Copier le titre du média depuis la console d'adminstration;
3. Coller le nom dans la colonne mediaTitle dans le classeur.

Dans le classeur, la colonne "classes" permet d'afficher la brique d'un sponsor plus grand ou avec les couleurs inversées (dans le cas où le logo est blanc). La classe `double` fait que la brique est deux fois plus large que les autres, `quad` quadruple la surface de la brique. La classe `inverted` applique un fond bleu foncé avec le texte en blanc.

## Documentation développeur

### Fonctionnement

Le site est entièrement construit en front-end. Il s'agit d'une application Vue.js qui fait des requêtes HTTP sur une installation de Wordpress.

L'[API REST de Wordpress](https://developer.wordpress.org/rest-api/) est utilisée pour récupérer la plupart des données (users, posts, pages et media). La liste des sponsors est récupérée directement depuis le tableur via la [Google Sheets API](https://developers.google.com/sheets/api).

En production, Wordpress est dans un sous-dossier `wordpress` à la racine du répertoire du site. Il n'est cependant pas inclus dans ce dépôt. C'est une instal Wordpress standard, sans personnalisation.

### Prérequis

Pour construire l'application:
* [npm](https://www.npmjs.com/get-npm)

Pour se connecter à la Google Sheets API:
* [Une clé d'API](https://developers.google.com/sheets/api/guides/authorizing#APIKey)

Pour le déploiement:
* Un accès au serveur FTP (voir avec Joaquim)

Pour avoir le back-end en local:
* Environnement de développement PHP tout-en-un, exemple [XAMPP](https://www.apachefriends.org/fr/index.html)
* Une installation de [Wordpress](https://wordpress.org/download/)

### Récupérer les dépendances JavaScript

```
npm install
```

### Lancer sur un serveur Local

Le fichier `.env` à la racine du dossier du projet doit contenir la déclaration de la variable d'environnement `VUE_APP_API`. Cette variable doit cibler l'API REST de Wordpress, soit en local, exemple:
```
VUE_APP_API=http://localhost:8080/fcb/wordpress/wp-json/wp/v2/
```
(Dans ce cas, il faut avoir un serveur PHP local qui fait tourner Wordpress.)

Soit directement sur la production:
```
VUE_APP_API=https://fclesbrenets.ch/wordpress/wp-json/wp/v2/
```
Ce n'est pas dangereux vu qu'on ne fait que des requêtes de lecture.

Pour pouvoir récupérer la liste de sponsors, il faut aussi définir la variable `VUE_APP_GOOGLE_API_KEY` avec une clé d'API Google.

Puis, compiler l'application à la volée:
```
npm run serve
```
Cette commande lance un serveur local avec *hot-reload*.

### Déploiement

```
npm run deploy
```

Cette commande constuit l'application dans le dossier `deployable`, en utilisant la configuration du fichier `.env.deploy`.

Le contenu de ce dossier peut être copié sur le serveur de production.

### Contribution

Une liste des idées et tâches existe sur le [projet kanban](https://github.com/j4kim/fcb/projects/1) sur GitHub.
