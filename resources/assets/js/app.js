require('./bootstrap');

// Setup Router
Vue.use(VueRouter);

// Views.
import CV from './components/cv';
import CoverLetter from './components/cover-letter';

let router = new VueRouter({
    routes : [
        { path : '/', component : CoverLetter },
        { path : '/resume', component : CV },
        { path : '*', redirect : '/' }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

const app = new Vue({
    el    : '#app',
    data()
    {
        return {
            root     : true,
            showLeft : true,
        }
    },
    mounted()
    {
        var self = this;
        self.$set(self, 'root', (self.$route.path == '/'));
        AOS.init();
    },
    router,
    watch : {
        '$route'(to, from)
        {
            var self = this;
            self.$set(self, 'root', (to.path == '/'));
        }
    }
});
