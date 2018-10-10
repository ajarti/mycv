// Setup Debugging.
window.debugLS = true;
/* usage: log('inside coolFunc',this,arguments); http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/ */
window.log = function(){
    if ( !window.debugLS ) return;
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if ( this.console ) {
        console.log(Array.prototype.slice.call(arguments));
    }
    // console.trace('callers ..'); // (if backtrace is needed.)
};

// Setup Namespace
let cv = cv || {};

// Setup CSRF with Axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');
if ( token ) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

