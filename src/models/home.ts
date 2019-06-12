import Action from "../utils/action";
import {
  getBooks,
  getNewBooks,
  getHotBooks,
  getRecommendBooks
} from "../services/index";
import Immutable from "seamless-immutable";
const initState = Immutable({
  books: [],
  newBooks: [],
  hotBooks: [],
  recommendBooks: []
});
export default {
  namespace: "home",
  state: initState,
  reducers: {
    resetState(state, { payload }) {
      return {
        ...initState
      };
    }
  },
  effects: {
    *getNewBooks({ payload }, { select, call, put }) {
      try {
        const { data: newBooks, code, message } = yield call(getNewBooks);
        if (code == 200) {
          yield put(
            Action("updateState", {
              newBooks
            })
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    *getBooks({ payload }, { select, call, put }) {
      try {
        const { data: books, code, message } = yield call(getBooks);
        if (code == 200) {
          yield put(
            Action("updateState", {
              books
            })
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    *getHotBooks({ payload }, { select, call, put }) {
      try {
        const { data: hotBooks, code, message } = yield call(getHotBooks);
        if (code == 200) {
          yield put(
            Action("updateState", {
              hotBooks
            })
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    *getRecommendBooks({ payload }, { select, call, put }) {
      try {
        const { data: recommendBooks, code, message } = yield call(
          getRecommendBooks
        );
        if (code == 200) {
          yield put(
            Action("updateState", {
              recommendBooks
            })
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};
