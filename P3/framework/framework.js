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
            loadComponents();

            document.dispatchEvent(new Event("DOMReady"));
        }
    }

    // Fetch and load components to main page
    function loadComponents() {
        var components = document.querySelectorAll("[data-component]");

        for(let i = 0; i < components.length; i++) {
            let id = components[i].dataset.component;
            
            fetch(`./sections/${id}/component.html`)
                .then(data => data.text())
                .then(html => {
                    let component = document.createElement('template');
                    component.innerHTML = html;
                    components[i].replaceWith(component.content.firstChild);
                })
        
            fetch(`./sections/${id}/style.css`)
                .then(data => data.text())
                .then(text => {
                    let style = document.createElement('style');
                    style.innerHTML = minify(text);
                    document.head.appendChild(style);    
                })
        }
    }


//public:
})(this);