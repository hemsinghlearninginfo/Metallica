import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import FieldGroup from '../../controls/controls'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class AddEditOrder extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            companyName: '',
            script: '',
            mode: '',
            side: '',
            entry: '',
            sl: '',
            size: '',
            riskPoint: '',
            capitalRisk: '',
            file1: '',
            file2: '',
            exitPrice: '',
            exitPoint: '',
            exitPL: ''
        };
    }

    getValidationState() {
        const companyNamelength = this.state.companyNameValue.length;
        if (companyNamelength >= 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
            <div>
                <AllPages.PageHeader name="Add/Edit Order" description="Form we get order information and save for action." />
                <div className="pageContent" id="frmOrder">
                    <form>
                        <div className="row">
                            <div className="col-sm-4 col-md-6 col-lg-6">
                                <FieldGroup
                                    id="companyName"
                                    type="text"
                                    label="Company Name:"
                                    required
                                    placeholder="Enter company name"
                                    help="type company name or script"
                                />
                            </div>
                            <div className="col-sm-4 col-md-6 col-lg-6">
                                <FieldGroup
                                    id="script"
                                    type="label"
                                    readOnly
                                    label="Script:"
                                    placeholder="Script"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-6">
                                <FormGroup controlId="mode">
                                    <ControlLabel>Select Mode</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" required>
                                        <option value="">Select</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Fut">Future</option>
                                    </FormControl>
                                    <HelpBlock>select a way to postin order</HelpBlock>
                                </FormGroup>
                            </div>
                            <div className="col col-6">
                                <FormGroup controlId="side">
                                    <ControlLabel>Select Side</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" required>
                                        <option value="">Select</option>
                                        <option value="Long">Long</option>
                                        <option value="Short">Short</option>
                                    </FormControl>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-4">
                                <FieldGroup
                                    id="entry"
                                    type="number"
                                    label="Entry:"
                                    placeholder="0.00"
                                    required
                                    help="enter entry price for selected stock"
                                />
                            </div>
                            <div className="col col-4">
                                <FieldGroup
                                    id="sl"
                                    type="number"
                                    label="Stop Loss:"
                                    placeholder="0.00"
                                    required
                                    help="enter stop loss price for selected stock"
                                />
                            </div>
                            <div className="col col-4">
                                <FieldGroup
                                    id="size"
                                    type="number"
                                    label="Size of order:"
                                    readOnly
                                    placeholder="0.00"
                                    help="Size of order based on mode in numbers or lot."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-6">
                                <FieldGroup
                                    id="riskPoint"
                                    type="number"
                                    label="Total Risk Points:"
                                    readOnly
                                    placeholder="0.00"
                                    help="Auto calculate risk points"
                                />
                            </div>
                            <div className="col col-6">
                                <FieldGroup
                                    id="capitalRisk"
                                    type="number"
                                    label="Total Capital Risk:"
                                    readOnly
                                    placeholder="0.00"
                                    help="Auto calculate total capital risk"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-6">
                                <FieldGroup
                                    id="file1"
                                    type="file"
                                    label="Reference File:&nbsp;"
                                    help="please upload reference file"
                                />
                            </div>
                            <div className="col col-6">
                                <FieldGroup
                                    id="file2"
                                    type="file"
                                    label="Reference File:&nbsp;"
                                    help="please upload reference file"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-4">
                                <FieldGroup
                                    id="exitPrice"
                                    type="number"
                                    label="Exit price:"
                                    placeholder="0.00"
                                    help="Order exit price"
                                />
                            </div>
                            <div className="col col-4">
                                <FieldGroup
                                    id="exitPoint"
                                    type="number"
                                    label="Exit point:"
                                    readOnly
                                    placeholder="0.00"
                                    help="auto calculate exit points based on exit price"
                                />
                            </div>
                            <div className="col col-4">
                                <FieldGroup
                                    id="exitPL"
                                    type="number"
                                    label="Exit P&amp;L:"
                                    placeholder="0.00"
                                    help="auto calculate capital from exit price, risk, mode of order"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                                <button className="btn btn-sm btn-btn-secondary marginLeft10" type="reset">Cancel</button>
                            </div></div>
                    </form>
                </div>
            </div>
        );
    }
}



export default AddEditOrder;
