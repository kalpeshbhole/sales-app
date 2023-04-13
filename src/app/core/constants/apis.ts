import {environment} from '@environment';

export const APIs = {
    User: `${environment.apiUrl}/UserAPI/api/v1/Users`,
    Lookup: `${environment.apiUrl}/LookupAPI/api/v1`,
    Store: `${environment.apiUrl}/StoreAPI/api/v1/Stores`,
    SalesPerson: `${environment.apiUrl}/SalesPersonAPI/api/v1/SalesPersons`
}