import React ,{ Component} from 'react';
import './app.css';

class Gif extends Component{
    
    gifResult(data){
        let arr = data.map(data => console.log('data', data));
    }
    
    render(){
        console.log('props',this.props.data);
        let arrData = [];
        if(this.props.data !== null){
            arrData = this.props.data; 
        }
        return(
        <div>
            <div>
                {
                    arrData.map((data, k)=>{
                        return(
                                <span key={k}><a href={data.url} target="_blank"><img className="gif" src={data.images.fixed_height.url} alt={data.username}/></a></span>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}
export default Gif;