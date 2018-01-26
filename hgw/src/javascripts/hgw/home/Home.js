import React,{ Component } from 'react';
import axios from "axios"
import Headerhome from "./Headerhome";
import HomeHead from "./header";
import HomeCon from "./content/HomeCon"

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
        data:{
           
        }
      }
  }
  componentWillMount(){
    let that = this
    axios.get("/hgw/mo_bile/index.php",{act:'index'}).then(({data})=>{
      that.setState({data:data.datas.list})
      console.log(data)
    })
  }
  render() {
    let {data} = this.state
    console.log(data)
    return (
      <div className="home">
            <Headerhome/>
            <HomeHead data={data}/>
            <HomeCon data={data}/>     
      </div>
    );
  }
}

export default Home;
