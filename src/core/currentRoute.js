import { ROUTES } from './index.routing';
import { Route } from './Route';

/**
 * Finds and returns the route object with the specified path.
 *
 * @param {string} path - The path of the route to find.
 * @return {Route | undefined} - The route object with the specified path, or undefined if not found.
 */

export const currentRoute = (path) => {
    return ROUTES.find((route) => route.path === path || route.path === `**`);
};
