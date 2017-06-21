import React, { Component} from 'react';
import './app.css';
import {FormGroup, FormControl, InputGroup, Glyphicon, Button, Grid, Row, Col} from 'react-bootstrap';
import Gif from './gif';
    
    class App extends Component{
        constructor(props){
            super(props);
            this.state = {
                query : '',
                data : null
            }
        }
        search(){
            console.log("this.state",this.state);
            const Base_url = "http://api.giphy.com/v1/gifs/trending?";
            const Fetch_url =`${Base_url}api_key=dc6zaTOxFJmzC`;
            console.log('fetch url', Fetch_url);
            fetch(Fetch_url,{
                method: 'GET'
            }).then(response => response.json())
            .then(json => {const data = json.data; this.setState({data})});
            
        }
        render(){
            return (
            <div className="app">
                <div className="appTitle">Gif App</div>
                    <div className="appFormat">Click on search button!</div>
                    
                    <Row>
                        <Col md={12}>
                            <Button onClick={()=> this.search()}>
                                Click Me  
                                <Glyphicon glyph="search" ></Glyphicon>
                            </Button>
                        </Col>
                    </Row>
    
            
                    <div className="gif">
                        <Gif data={this.state.data}/>
                    </div>
                </div>
            )
        }
    }
export default App;