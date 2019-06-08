import Action from "../utils/action";
// import { setCacheData, getGlobalData } from "../utils";
import { getRecommendList } from "../services/index";
import eventEmitter from "../utils/eventEmitter";
import * as Events from "../constants/event-types";
import Immutable from "seamless-immutable";
const initState = Immutable({
  data: {}
});
export default {
  namespace: "main",
  state: initState,
  reducers: {
    resetState(state, { payload }) {
      return {
        ...initState
      };
    }
  },
  effects: {
    *getRecommendList({ payload }, { select, call, put }) {
      try {
        const res = yield call(getRecommendList)
        console.log(res)
        const main = yield select(state => state.main);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
