import React from "react";
import {Provider} from "react-redux";
import {store} from "../store";

export const AppWithRedaxDecorator = (storeFn: any) => {
    return <Provider store={store}>{}</Provider>
}