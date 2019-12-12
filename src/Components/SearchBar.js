import React from 'react';
import {Row, Col, Input, Typography} from 'antd';

const {Title} = Typography;

const SearchBar = (props) => {
    return (
        <Row type="flex" justify="center">
             <Col style={{textAlign:"center", }}>
                <Title 
                    style={{ color:'#073069', 
                    margin:"10%", }} 
                    level={2}>
                        MROBOT
                </Title>
                <Input 
                    size="large" 
                    style=
                        {{ background:'#87e8de', 
                        width:"100%" }}  
                        placeholder="Robot Search"
                        onChange={props.onSearchChange}
                />
            </Col>
        </Row>
       
    )
}

export default SearchBar;















