import {
    Shop,
    AllProducts,
    Laptops,
    Smartphones,
    ProductPage,
    Cart
} from '../screens/index';

const routes = [
    {
        path: '*',
        element: Shop
    },
    {
        path: '/all',
        element: AllProducts
    },
    {
        path: '/laptops',
        element: Laptops
    },
    {
        path: '/smartphones',
        element: Smartphones
    },
    {
        path: '/product/:id',
        element: ProductPage
    },
    {
        path: '/carts',
        element: Cart
    }
]

export default routes;