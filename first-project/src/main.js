// import relatif (./ ou ../) a la position du fichier courant
//import './assets/main.css' // PERMIS par la transformation des fichiers

// import NON relatif (trouvé dans les modules installés avec npm)
import { createApp } from 'vue'

// import relatif a la position du fichier courant
import App from './App.vue' // PERMIS par la transformation des fichiers

// VueJS crée l'application à partir du composant App.vue
// Et l'insère dans Le SEUL element HTML ayant pour id "app"
// debugger // Met en pause l'execution du script si les DevTools sont ouverts
createApp(App).mount('#app')
