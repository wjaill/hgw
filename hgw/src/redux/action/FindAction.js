import axios from 'axios'

const FindAction = {
    getData(){
        
        return (dispatch)=>{
            
            axios.get("/hgw/mo_bile/index.php?act=index&op=special&special_id=1").then(({data})=>{
                console.log(data)
                dispatch({
					type:'GET_FIND_DATA',
					types:data.datas.list
				})
            })
        }
    }
}
export default FindAction