function render(element, parentNode) {
    if (typeof element == 'string' || typeof element == 'number') {
        return parentNode.appendChild(document.createTextNode(element));
    }
    let type, props;
    type = element.type;//Welcome1
    props = element.props;
    if (type.isReactComponent) {
        let returnedElement = new type(props).render();
        type = returnedElement.type;//"h1"
        props = returnedElement.props;//{id:'welcome'}
    } else if (typeof type == 'function') {
        let returnedElement = type(props);
        type = returnedElement.type;//"h1"
        props = returnedElement.props;//{id:'welcome'}
    }
    let domElement = document.createElement(type);//span
    for (let propName in props) {
        if (propName == 'className') {
            domElement.className = props[propName];
        } else if (propName == 'style') {
            let styleObj = props[propName];// {color: 'red',fontSize: '50px'}
            //for(let attr in styleObj){
            //    domElement.style[attr] = styleObj[attr];
            // } fontSize=>font-size
            //['color','fontSize']=>['color:red','fontSize:50px']=>'color:red;fontSize:50px'
            let cssText = Object.keys(styleObj).map(attr => {
                return `${attr.replace(/([A-Z])/g, function () { return "-" + arguments[1].toLowerCase() })}:${styleObj[attr]}`;
            }).join(';');
            domElement.style.cssText = 'color:red;font-size:50px';
        } else if (propName == 'children') {
            //let children = Array.isArray(props.children)?props.children:[props.children];
            props.children.forEach(child => render(child, domElement));
        } else {
            domElement.setAttribute(propName, props[propName]);
        }
    }
    parentNode.appendChild(domElement);
    //componentDidMount
}
export default { render }