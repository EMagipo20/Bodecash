import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'cliente',
        icon: 'fal fa-home',
        label: 'CLIENTE',
        items: [
            {
                routeLink: 'cliente/cliente-crear',
                icon: 'fal fa-user',
                label: 'Nuevo Cliente',
            },
            {
                routeLink: 'cliente/cliente-listar',
                icon: 'fal fa-users',
                label: 'Lista de Clientes',
            },
        ]
    },
    {
        routeLink: 'producto',
        icon: 'fal fa-boxes',
        label: 'PRODUCTOS',
        items: [
            {
                routeLink: 'producto/producto-crear',
                icon: 'fal fa-box-open',
                label: 'Nuevo Producto',
            },
            {
                routeLink: 'producto/producto-listar',
                icon: 'fal fa-list-alt',
                label: 'Lista de Productos',
            },
        ]
    },
    {
        routeLink: 'tipo_de_producto',
        icon: 'fal fa-tags',
        label: 'TIPO DE PRODUCTO',
        items: [
            {
                routeLink: 'tipo_de_producto/tipo-producto-crear',
                icon: 'fal fa-tag',
                label: 'Nueva Categoría',
            },
            {
                routeLink: 'tipo_de_producto/tipo-producto-listar',
                icon: 'fal fa-list',
                label: 'Lista de Categorías',
            },
        ]
    },
    {
        routeLink: 'venta',
        icon: 'fal fa-credit-card',
        label: 'VENTA'
    },
    {
        routeLink: 'credito',
        icon: 'fal fa-history',
        label: 'CRÉDITO'

    },
    {
        routeLink: 'reportes',
        icon: 'fal fa-cog',
        label: 'REPORTES'

    }
];
