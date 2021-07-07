import React, { lazy } from 'react'
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom'

import { createBrowserHistory } from 'history'

const Products = lazy(() => import('./components/products/Products'))
const Carts = lazy(() => import('./components/carts/Carts'))
export const history = createBrowserHistory()

export interface RouteConfig {
	path: string
	component: React.ComponentType<any>
	exact?: boolean
	private?: boolean
	routes?: Record<string, RouteConfig>
}

export interface RouteProps
	extends RouteComponentProps,
		Pick<RouteConfig, 'routes'> {}

const DefaultRouteComponent: React.FC = () => (
	<Redirect to={Routes.products.path} />
)

export const Routes = {
	products: {
		path: '/products',
		exact: true,
		component: Products,
	},
	carts: {
		path: '/carts',
		exact: true,
		component: Carts,
	},
	default: {
		path: '/',
		component: DefaultRouteComponent,
	},
}

export function renderRouteConfigs(routes: Record<string, RouteConfig>) {
	return (
		<Switch>
			{Object.values(routes).map((route, index) => (
				<Route
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					path={route.path}
					exact={route.exact}
					render={props => <route.component routes={route.routes} {...props} />}
				/>
			))}
		</Switch>
	)
}
