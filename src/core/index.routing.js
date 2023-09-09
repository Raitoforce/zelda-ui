import Home from '../components/home';
import { RootComponent } from './component';
import { createRoute } from './createRoute';

export const ROUTES = [
    createRoute({
        path: '',
        component: RootComponent,
        children: [
            createRoute({
                path: '',
                component: Home,
            }),
        ],
    }),
];
