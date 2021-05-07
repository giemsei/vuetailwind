// src/main.js

/** require si usa la parte server, import nella parte client. Sono equivalenti, ma i commandi sono leggermente difficili 
 * il modulo di vue importa dei componenti 
*/
import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'

createApp(App).mount('#app')
