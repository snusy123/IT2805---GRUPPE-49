// Pointless
function minify(content) {
    content = content.replace( /\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '' );
    content = content.replace( / {2,}/g, ' ' );
    content = content.replace( / ([{:}]) /g, '$1' );
    content = content.replace( /([;,]) /g, '$1' );
    content = content.replace( / !/g, '!' );
    return content;
}

//IIFE - Private functions
(function(global) {
//private:

    //OnDOMReady
    document.onreadystatechange = function() {
        if (document.readyState === "interactive") {
            loadComponents().then(() => document.dispatchEvent(new Event("DOMReady")));
        }
    }

    // Fetch and load components to main page
    function loadComponents() {
        const components = document.querySelectorAll("[data-component]");
        
        markup = []
        styles = []

        for(let i = 0; i < components.length; i++) {
            let id = components[i].dataset.component;
            
            markup[i] = fetch(`./components/${id}/component.html`)
                .then(data => data.text())
                .then(html => {
                    let component = document.createElement('template');
                    component.innerHTML = html;
                    components[i].replaceWith(component.content.firstChild);
                })
        
            styles[i] = fetch(`./components/${id}/style.css`)
                .then(data => data.text())
                .then(text => {
                    let style = document.createElement('style');
                    style.innerHTML = minify(text);
                    document.head.appendChild(style);    
                })
        }

        return Promise.all(markup, styles);
    }


//public:
})(this);