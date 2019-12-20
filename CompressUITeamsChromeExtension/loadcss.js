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

    // Add an on-click hide function to the image container.
    console.log("Here !!");
    var elements = document.getElementsByClassName('ts-image-container');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            alert("Hola!!");
            this.style.display = 'none !important';
        });
    }

    if (oldWindowOnload && typeof(oldWindowOnload) === 'function') {
        oldWindowOnload();
    }
};
