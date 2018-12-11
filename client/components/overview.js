import React, { Component } from "react";
import { Panel, ListGroup, ListGroupItem, Col } from 'react-bootstrap';

class OverviewPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="overview-container container">
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Overview</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroupItem>
                                    Status
                                    <span className="pull-right">{this.props.data.status}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Method
                                    <span className="pull-right">{this.props.data.method}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Capacity
                                    <span className="pull-right">{this.props.data.capacity}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Drayage
                                    <span className="pull-right">{this.props.data.drayage}</span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroupItem>
                                    Services
                                    <span className="pull-right">{this.props.data.services}</span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default OverviewPage;