export default (state = 1, action) => {
	switch(action.type) {
	case 'set':
		return action.payload;
	default:
		return state;
	}
}