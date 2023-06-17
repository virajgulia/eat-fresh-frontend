import { Home } from "./Dashboard/Home/Home";
import { Item } from "./Dashboard/Items/Item";
import { Product } from "./Dashboard/Products/Products";
import { Table } from "./Dashboard/Table/Table";
import { VisitTable } from "./Dashboard/Table/VisitTable";
import { Webhome } from "./Website/Webhome/Webhome";

export const AllRoutes = {
    dashboard: [
        { path: '/home', element: Home },
        { path: '/table', element: Table },
        { path: '/table/:id', element: VisitTable },
        { path: '/item', element: Item },
        { path: '/products', element: Product },
    ],
    website: [
        { path: '/webhome', element: Webhome }
    ]
}