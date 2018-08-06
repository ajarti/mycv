require('./bootstrap');

// Setup Router
Vue.use(VueRouter);

// Views.
import CV from './components/cv';
import CoverLetter from './components/cover-letter';

let router = new VueRouter({
    routes : [
        { path : '/', component : CoverLetter },
        { path : '/cv', component : CV },
    ]
});

const app = new Vue({
    el : '#app',
    data()
    {
        return {
            showLeft : true,
        }
    },
    router,
});
