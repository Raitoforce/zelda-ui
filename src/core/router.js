import { Route } from './Route';
import { createComponent } from './component';
import { currentRoute } from './currentRoute';

/**
 * Starts listening to route changes and renders the corresponding component.
 *
 */
export function startToListenRoutes() {
    const app = document.getElementById('app');

    changeComponent(app);

    window.addEventListener('hashchange', () => {
        changeComponent(app);
    });
}

function changeComponent(root) {
    const path = hashPath();
    const routeItem = currentRoute(path);
    renderComponent(root, routeItem);
}

export function clearRootHtml(root) {
    while (root.firstChild) {
        root.firstChild.remove();
    }
}

/**
 * Renders the component on the webpage.
 *
 * @param {Route} routeItem - The route item object.
 * @param {HTMLElement} root - The root element.
 * @return {void} Returns nothing.
 */
export function renderComponent(root, routeItem) {
    clearRootHtml(root);
    console.log(routeItem);
    const { component, props, children } = routeItem;
    const componentInstance = createComponent({ component, props });
    root.innerHTML = componentInstance.getHtml();
    if (children) {
        console.log({ children });
        const routes = routeTree(routeItem.path);
        componentInstance.navigateTo('');
    }
}

export function navigateTo(path) {
    window.location.hash = path;
}

function hashPath() {
    return window.location.hash.substring(1) ?? '/';
}

/**
 * Generate a route tree based on the given path.
 *
 * @param {string} path - The path to be split into individual route objects.
 * @return {Array} An array of route objects containing the path and its parent.
 */
export function routeTree(path) {
    return path.split('/').map((currentPath, index, arrayPath) => ({
        path: currentPath,
        rootPath: arrayPath[index - 1] ?? null,
    }));
}
