const base_url = 'https://eat-fresh.onrender.com/'

export const APIS = {

    TABLE: {
        common: `${base_url}table`,
        all: `${base_url}alltable`,
        additem: `${base_url}addItemToTable/`,
        paybill: `${base_url}emptyTableItems/`
    },
    ITEM: {
        common: `${base_url}item`
    },
    PRODUCT: {
        common: `${base_url}product`,
        getByCategory: `${base_url}productByCategory`
    }
}