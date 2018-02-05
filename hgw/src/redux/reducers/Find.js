const defaultState = {
    FindData:''
}
const FindData = (state=defaultState,action)=>{
    let new_state = Object.assign({},defaultState)
    switch(action.type){
		
		case 'GET_FIND_DATA':
			new_state.FindData = action.types;			
			return new_state;break;
		
		
		default:return new_state;
	}
}

export default FindData