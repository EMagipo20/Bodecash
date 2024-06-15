import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'gestiones',
        icon: 'fal fa-users-cog',
        label: 'Gestión de registro',
        items: [
            {
                routeLink: 'gestiones/nuevo',
                icon: 'fal fa-user-plus',
                label: 'Nuevo registro'
            },
            {
                routeLink: 'gestiones/actualizar',
                icon: 'fal fa-user-edit',
                label: 'Actualizar registro'
            },
            {
                routeLink: 'gestiones/listar',
                icon: 'fal fa-user-plus',
                label: 'Historial de clientes'
            }
        ]
    },
    {
        routeLink: 'bodega',
        icon: 'fal fa-warehouse',
        label: 'Bodega',
        items: [
            {
                routeLink: 'bodega/productos',
                label: 'Productos'
            }
        ]
    },
    {
        routeLink: 'creditos',
        icon: 'fal fa-credit-card',
        label: 'Créditos',
        items: [
            {
                routeLink: 'creditos/nueva-compra',
                label: 'Nueva compra'
            },
            {
                routeLink: 'creditos/asignar-credito',
                label: 'Asignar crédito'
            }
        ]
    },
    {
        routeLink: 'historial',
        icon: 'fal fa-history',
        label: 'Historial',
        items: [
            {
                routeLink: 'historial/mis-compras',
                label: 'Mis compras'
            },
            {
                routeLink: 'historial/mis-creditos',
                label: 'Mis créditos'
            }
        ]
    },
    {
        routeLink: 'configuracion',
        icon: 'fal fa-cog',
        label: 'Configuración',
        items: [
            {
                routeLink: 'configuracion/mi-perfil',
                label: 'Mi perfil'
            }
        ]
    }
];
