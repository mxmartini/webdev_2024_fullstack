self.$ = function(selector){
    const e = Array.from( document.querySelectorAll(selector) );
    return e.length == 1 ? e[0] : e;
}

self.$$ = function(element, content){
    const e = document.createElement(element);
    if(content) e.innerHTML = content;
    return e;
}

String.prototype.dom = function() {
    var d=document
        ,i
        ,a=d.createElement("div")
        ,b=d.createDocumentFragment();
        a.innerHTML=this;
        while(i=a.firstChild)b.appendChild(i);
        return b;
}

Object.prototype.clear = function(){
    if(!(this instanceof HTMLElement)) throw Error("Not an HTML Element!") 
    this.innerHTML = "";
}

Object.prototype.isClass = function(){
    return typeof this === 'function' && /^\s*class\s+/.test(this.toString());
}

export class DOM {
    static createRoot(rootElement){
        return new ReactiveRootComponent(rootElement)
    }
}

export class ReactiveRootComponent {
    constructor(rootComponent){
        this.rootComponent = rootComponent
    }
    
    render(element){ 
        this.rootComponent.appendChild(element.isClass() 
            ? element.render().dom() 
            : element().dom())
    }
}