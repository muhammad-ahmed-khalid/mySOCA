import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(route: string, params?: object) {
  navigationRef.current!.navigate(route, params);
}

export function goBack(count = 1) {
  if (typeof count === 'number' && count > 1) {
    return navigationRef.current!.dispatch(state => {
      const routes = state.routes.slice(0, -count);
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }
  navigationRef.current!.goBack();
}

export function pop(count = 1) {
  const popAction = StackActions.pop(count);
  navigationRef.current!.dispatch(popAction);
}
export function push(route: string, params: object) {
  navigationRef.current.dispatch(StackActions.push(route, params));
}
export function popToTop() {
  const popToTopAction = StackActions.popToTop();
  navigationRef.current!.dispatch(popToTopAction);
}

export function reset(route: string, params: object) {
  navigationRef.current!.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: route, params}],
    }),
  );
}
export const currentRouteName = () => {
  let states = navigationRef?.current.getState();
  return states?.routes[states?.index]?.name;
};
export function resetToRoutes(routes = []) {
  navigationRef.current!.dispatch(
    CommonActions.reset({
      index: routes.length - 1,
      routes: routes,
    }),
  );
}
