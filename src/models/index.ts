import main from "./main";
import { model } from "./defaultModel";
import extendModel from "./extendModel";
export default [main].map(m => extendModel(model, m));