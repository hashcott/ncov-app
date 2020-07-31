import * as React from "react";
import { StackActions, CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function pop(count) {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

export function reset() {
  navigationRef.current?.dispatch((state) => {
    const routes = state.routes.filter((r) => r.name !== "Home");
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}
