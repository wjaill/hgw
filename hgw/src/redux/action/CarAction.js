import axios from "axios"

const CarAction = {
    addCar(id,num){
        ++num
        return (dispatch)=>{
            axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_detail&goods_id="+id+"&key=").then((res)=>{
                console.log(id,num)
                dispatch({
					type:'ADD_CAR',
					types:{id:id,name:res.data.datas.goods_info.goods_name,img:res.data.datas.spec_image[0],price:res.data.datas.goods_info.goods_price,num:num}
				})
            })
        }
    }

}
export default CarAction