import { Route } from './Route';
import { Component } from './component';

/**
 * Creates a route object with the given path, component, and props.
 *
 * @param {Object} options - The options for creating the route.
 * @param {string} options.path - The path for the route.
 * @param {Component} options.component - The component for the route.
 * @param {Object} [options.props={}] - The props for the route.
 * @param {Array<Route>} [options.children=[]] - The children for the route.
 * @param {Route} [options.parent=null] - The parent for the route.
 * @return {Route} The created route object.
 */
export function createRoute({
    path,
    component,
    props = {},
    children = [],
    parent = null,
}) {
    return new Route({
        path,
        component,
        props,
        children,
        parent,
    });
}
