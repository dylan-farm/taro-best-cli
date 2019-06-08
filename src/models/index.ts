import main from "./main";
import modelExtend from "dva-model-extend";
import { model } from "../utils/model";
export default [main].map(m => modelExtend(model, m));
