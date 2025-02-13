
---

## 🛠️ Installation et Configuration

### 1️⃣ Cloner le dépôt
```sh
git clone https://github.com/BAMAS-Mathias/Projet-Symphony
cd Projet-Symphony
```

### 2️⃣ Installer les dépendances
#### 📦 Dépendances PHP et BDD
```sh
composer install
Symfony console doctrine:database:create
symfony console doctrine:migration:migrate
```

#### 📦 Dépendances JavaScript
```sh
npm install
```

---

## 🚀 Lancer le projet

### 1️⃣ Compiler les assets avec Webpack Encore
Avant de démarrer le serveur, il faut compiler les fichiers statiques :
```sh
npm run build
npm run watch
```

### 3️⃣ Lancer le serveur Symfony
Dans un **autre terminal**, démarrez le serveur :
```sh
symfony server:start -port=8000
```

Vous pour ajouter un utiliser sur la page
``` 
localhost:8000/register
```

La page d'accueil se trouve sur la page
``` 
localhost:8000/dahsboard
```

Votre projet est maintenant accessible à l'adresse suivante :
```
http://127.0.0.1:8000/dashboard
```

---
