/*** Window in foreground/background ***/
// custom attribute
var isActive;
window.onfocus = function() {
    isActive = true;
};

window.onblur = function() {
    isActive = false;
};

setInterval(function() {
    console.log(window.isActive ? 'ACTIVE' : 'HIDDEN');
    // native attribute
    console.log(document.hidden ? 'HIDDEN' : 'ACTIVE');
}, 1000);


/*** Pre Render Detection ***/
if (typeof document.visibilityState != 'undefined') {
    if (document.visibilityState == 'prerender') {
        //set a flag to disable the page from firing here
    } else {
        //allow the page tag to fire
    }
}
