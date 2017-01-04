export default (state = 0, action) => {
	switch(action.type) {
	case 'calc':
		return state+action.payload;
	default:
		return state;
	}
}