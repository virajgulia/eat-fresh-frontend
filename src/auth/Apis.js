const base_url = 'https://eat-fresh.onrender.com/'
// const base_url = 'http://localhost:8000/'

export const APIS = {
    SIGNUP: `${base_url}signup`,
    LOGIN: `${base_url}login`,
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
        getByCategory: `${base_url}getProductByCategory`,
        sortedProduct: `${base_url}getSortedProduct`
    },
    CATEGORY: {
        add: `${base_url}category`
    },
    menuCategory: {
        getAll: `${base_url}allMenuCategory`,
        add: `${base_url}menuCategory`
    },

}