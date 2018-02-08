const defaultState = {
    CarData:''
}
const FindData = (state=defaultState,action)=>{
    let new_state = Object.assign({},defaultState)
    switch(action.type){
		
        case 'ADD_CAR':
			new_state.CarData = action.types;			
			return new_state;break;
		default:return new_state;
	}
}

export default FindData