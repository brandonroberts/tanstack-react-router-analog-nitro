import {
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router'

import { Index } from './routes/index';
import { About } from './routes/about';
import { Root } from './routes/root';

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router using your route tree
export function createRouter() {
  return new Router({ routeTree });
}

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}