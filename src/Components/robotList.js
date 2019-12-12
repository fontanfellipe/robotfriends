import React from 'react';
import {Row, Col, Card, Typography} from 'antd';

const {Title} = Typography;

const RobotList = (props) => {
    return (
        props.robots.map((robot) => {
            return (
                <Col >
                    <Card style={{
                        background: "#5cdbd3", 
                        padding:0, 
                        borderRadius:"10%",
                        width:"240px",
                        height:"320px",
                        margin: "8%"
                    }}>
                        <img src={`https://robohash.org/${robot.id}?size=200x200`}/>
                        <Title level={4} style={{textAlign:"center", margin:"10%"}}>{robot.name}</Title>
                    </Card>
                </Col>
            )
        })
    )
}

export default RobotList;