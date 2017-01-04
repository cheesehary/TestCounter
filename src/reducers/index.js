import { combineReducers } from 'redux';
import Num from './num-reducer';
import SetNum from './set-reducer'

const rootReducer = combineReducers ({
	num: Num,
	setNum: SetNum
});

export default rootReducer;