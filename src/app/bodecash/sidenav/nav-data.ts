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
                label: 'Nuveo Cliente',
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
        icon: 'fal fa-users-cog',
        label: 'PRODUCTO'

    },
    {
        routeLink: 'tipo_de_producto',
        icon: 'fal fa-warehouse',
        label: 'TIPO DE PRODUCTO'

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
