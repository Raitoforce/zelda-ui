import { Component } from '../core/component';

/**
 * Represents a route in the application.
 */
export class Route {
    /**
     * Creates a new Route instance.
     * @param {Object} options - The route options.
     * @param {string} options.path - The route path.
     * @param {Component} options.component - The route component.
     * @param {Object} options.props - The route props.
     * @param {Route} options.parent - The route props.
     * @param {Array<Route>} options.children - The route children.
     */
    constructor({ path, component, props = {}, parent = null, children = [] }) {
        this.component = component;
        this.path = path;
        this.props = props;
        this.parent = this.parent;
        this.children = children;
        this.children.forEach((child) => (child.parent = this));
    }
}
