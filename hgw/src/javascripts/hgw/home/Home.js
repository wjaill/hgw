import React,{ Component } from 'react'
import axios from "axios"
import Headerhome from "./Headerhome"
import HomeHead from "./header"
import HomeCon from "./content/HomeCon"
import Footer from '../footer/Footer'

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
        data:{
           gotop:'',
        }
      }
      this.heig = this.heig.bind(this)
  }
  componentWillMount(){
    let that = this
    //请求数据
    axios.get("/hgw/mo_bile/index.php",{act:'index'}).then(({data})=>{
      that.setState({data:data.datas.list})
    })
  }
  heig(){
    //顶部定位以及顶部回弹
    this.state.gotop = document.getElementById("gotop")
      if(document.getElementById("home").scrollTop >= 300){
        this.state.gotop.style.display="block"
        document.getElementsByClassName("headerhome")[0].style.position = "fixed"
        document.getElementsByClassName("headerhome")[0].style.top = 0        
      }else{
        this.state.gotop.style.display="none"
        document.getElementsByClassName("headerhome")[0].style.position = ''
        
      }
  }
  render() {
    let {data} = this.state
    return (
      <div id="home" onScroll={this.heig}>
        <Headerhome/>
        <HomeHead data={data}/>
        <HomeCon data={data}/>     
        <Footer/>
      </div>
    );
  }
}

export default Home;
