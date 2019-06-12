import center from "./center";
import home from "./home";
import { model } from "./defaultModel";
import extendModel from "./extendModel";
export default [center,home].map(m => extendModel(model, m));