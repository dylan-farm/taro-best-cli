import Action from "../utils/action";
// import { setCacheData, getGlobalData } from "../utils";
// import {
//   getSongInfo as fetchSongInfo,
//   getMusicUrl as fetchMusicUrl,
//   getLyric as fetchLyric
// } from "../services/index";
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
    *fetchSongById({ payload }, { select, call, put }) {
      try {
        const main = yield select(state => state.main);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
