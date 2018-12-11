import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, Button, Panel, Tab, Tabs, Col, Row } from 'react-bootstrap';

class TabsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { activeTab: 1 };
    }

    handleSelect(tabId) {
        this.setState({ activeTab: tabId });
    }

    render() {
        return (
            <div className="tabs-container container">
                <Panel bsStyle="info">
                    <Panel.Body>
                        <Row className="clearfix">
                            <Col sm={4} className="pull-right">
                                <ButtonToolbar className="pull-right">
                                    <ButtonGroup>
                                        <Button onClick={() => this.handleSelect(1)}>Diagram</Button>
                                        <Button onClick={() => this.handleSelect(2)}>Map</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}
                                    id="tabs-container-placeholder">
                                    <Tab eventKey={1}>Diagram Placeholder</Tab>
                                    <Tab eventKey={2}>Map Placeholder</Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default TabsPage;