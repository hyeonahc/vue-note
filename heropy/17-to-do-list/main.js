import App from './App.js';
import TodoItem from './TodoItem.js';
import TheButton from './TheButton.js';

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.component('the-button', TheButton);
app.mount('#app');
