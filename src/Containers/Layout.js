import React from 'react';
import {Layout} from 'antd';
import Robotlist from '../Components/robotList'
import SearchBar from '../Components/SearchBar'
import { Row} from 'antd';
import { robots } from '../Components/robotsObj';
import Scroll from '../Components/Scroll';

const {Header, Content, Footer} = Layout;

//state always needs a constructor
//states are objects

class Leiaoute extends React.Component {
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchField : ""
        }
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots: users}))
    // }
    onSearchChange = (event) => this.setState({searchField : event.target.value})

    render(){
    const {robots, searchField} = this.state;

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return !robots.length ? 
            <h1>Loading</h1> :
            (
                <Layout 
                    className="layout" 
                    style={{background: "linear-gradient(90deg, rgba(128,180,158,1) 1%, rgba(88,190,188,1) 29%)"}}>
                    <Header 
                        style={{minHeight:'150px', 
                        background: "linear-gradient(90deg, rgba(128,180,158,1) 1%, rgba(88,190,188,1) 29%)"}}>
                        <SearchBar onSearchChange={this.onSearchChange}  />
                    </Header>
                    <Scroll>
                        <Content>
                            <Row type="flex" justify="center" gutter={16, 48}>
                                <Robotlist robots={filteredRobots} />
                            </Row>
                        </Content>
                    </Scroll>
                    <Footer></Footer>
                </Layout>
            )
        }

     
    s}
   
    



export default Leiaoute;

// class Leiaoute extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             robots : [],
//             searchField : ""
//         }
//     }

//     // componentDidMount() {
//     //     fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(response => response.json())
//     //         .then(users => this.setState({robots: users}))
//     // }

//     onSearchChange = (event) => this.setState({searchField : event.target.value})

//     render(){
//         const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
//         if(this.state.robots.length === 0) {
//             return <h1>Loading</h1>
//         } else {
//             return (
//                 <Layout className="layout" style={{background: "linear-gradient(90deg, rgba(128,180,158,1) 1%, rgba(88,190,188,1) 29%)"}}>
//                     <Header style={{minHeight:'150px', background: "linear-gradient(90deg, rgba(128,180,158,1) 1%, rgba(88,190,188,1) 29%)"}}>
//                         <SearchBar onSearchChange={this.onSearchChange} />
//                     </Header>
//                     <Content>
//                         <Row type="flex" justify="center" gutter={16, 48}>
//                             <Robotlist robots={filteredRobots} />
//                         </Row>
//                     </Content>
//                     <Footer></Footer>
//                 </Layout>
//             )
//         }
   
//     }

// }

