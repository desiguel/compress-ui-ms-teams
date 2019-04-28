// Inject the css file into the head element
function appendStyleNode(id, href) {
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.id = id;
    cssNode.href = href;
    document.getElementsByTagName('head')[0].appendChild(cssNode);
}

// window onload override
var oldWindowOnload = window.onload;
window.onload = function() {

    var path = chrome.extension.getURL('teams-sa.css');
    appendStyleNode('sa_custom', path);

    if (oldWindowOnload && typeof(oldWindowOnload) === 'function') {
        oldWindowOnload();
    }
};
