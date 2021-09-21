import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import MutantReducer from "./MutantReducer";



export default combineReducers({
  general: GeneralReducer,
  mutant: MutantReducer,
});
