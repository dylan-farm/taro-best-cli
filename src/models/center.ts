// import Action from "../utils/action";
import { getBooks } from "../services/index";
import Immutable from "seamless-immutable";
const initState = Immutable({
  data: {}
});
export default {
  namespace: "center",
  state: initState,
  reducers: {
    resetState(state, { payload }) {
      return {
        ...initState
      };
    }
  },
  effects: {
    *getBooks({ payload }, { select, call, put }) {
      try {
        const res = yield call(getBooks)
        const center = yield select(state => state.center);
        console.log(res,center)
      } catch (e) {
        console.error(e);
      }
    }
  }
};
