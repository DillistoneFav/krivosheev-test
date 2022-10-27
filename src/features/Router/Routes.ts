import {NEWS_ROUTE, ADDRESSES_ROUTE} from '../../utils/consts'
import React from "react";
import Address from "../../pages/Address/Address";
import News from "../../pages/News/News";

interface IRoute {
    path: string;
    element: React.ComponentType;
}

export const appRoutes: IRoute[] = [
    {
        path: NEWS_ROUTE,
        element: News
    },
    {
        path: ADDRESSES_ROUTE,
        element: Address
    },
]
