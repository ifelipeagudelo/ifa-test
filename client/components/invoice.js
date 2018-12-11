import React, { Component } from "react";
import { Tooltip, OverlayTrigger, Label, Panel, ListGroup, ListGroupItem, Col } from 'react-bootstrap';

class InvoicePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <strong>Invoice Number</strong>
            </Tooltip>
        );

        return (
            <div className="invoice-container container">
                <h1>
                    Invoice <OverlayTrigger placement="top" overlay={tooltip}>
                        <Label>{this.props.data.invoice}</Label>
                    </OverlayTrigger>
                </h1>
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Invoice - Revision</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroupItem>
                                    Invoice #
                                    <span className="pull-right">{this.props.data.revision}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Date
                                    <span className="pull-right">{this.props.data.date}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Due Date
                                    <span className="pull-right">{this.props.data.dueDate}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Terms
                                    <span className="pull-right">{this.props.data.terms}</span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroupItem header="Bill To"></ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroupItem header="New Balance upon Re-booking">
                                    <span className="balance-value">${this.props.data.balance}</span>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default InvoicePage;