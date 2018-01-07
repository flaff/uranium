import React from 'react';
import Light from './Light';
import {Row, Col, Container} from '../Grid';

const LightList = props => {
    return (
        <Container>
            <Row>
                {props.sources && props.sources.map((source, i) => (
                    <Col sm={6} md={3} key={i}>
                        <Light {...source} onLightClick={props.onLightClick}
                               onOptionsClick={props.onLightOptionsClick}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default LightList;
