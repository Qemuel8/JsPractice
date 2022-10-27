import store from "./store";
import { bugAdded } from "./actions";
import { bugRemoved } from "./actions";
import { bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1 "));

store.dispatch(bugResolved(1));
