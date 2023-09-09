import { Route } from './Route';
import { renderComponent } from './router';

export class Component {
    /**
     *
     * @param {Object} props - The properties object.
     */
    constructor(props) {
        this.props = props;
    }

    /**
     * Returns the HTML.
     *
     * @return {string} The HTML representation of the object.
     */
    getHtml() {
        throw new Error('"getHtml" method must be implemented');
    }
}

export class RootComponent extends Component {
    static id = 1;

    /**
     * @param {Object} props - The properties object.
     * @param {Array<Route>} [props.routes=[]] - The routes.
     * */
    constructor({ routes = [] }) {
        super();
        this.id = `route_${RootComponent.id++}`;
        this.routes = routes;
    }

    getHtml() {
        return `<div id="${this.id}"></div>`;
    }

    getRootElement() {
        return document.getElementById(this.id);
    }

    navigateTo(path) {
        renderComponent(
            this.getRootElement(),
            this.routes.find((route) => route.path === path)
        );
    }
}

/**
 * Creates a new component instance.
 *
 * @param {Object} options - The options for creating the component.
 * @param {Function} options.component - The component constructor function.
 * @param {Object} [options.props={}] - The props to pass to the component.
 * @return {Component} The newly created component instance.
 */
export function createComponent({ component, props = {} }) {
    console.log({ component, props });
    return new component(props);
}

/**
 * Generates an array of components from an array of props and one component constructor.
 *
 * @param {Object} options - The options object.
 * @param {Component} options.component - The component constructor.
 * @param {Array<Object>} [options.propsArray=[]] - The array of props.
 * @return {Array<Component>} The array of created components.
 */
export function createManyComponents({ component, propsArray = [] }) {
    return propsArray.map((props) => createComponent({ component, props }));
}
