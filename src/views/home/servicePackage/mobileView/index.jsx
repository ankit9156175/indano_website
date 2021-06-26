import React, { Component } from 'react'
import '../../../../assets/scss/servicepack.scss'
import '../../../../assets/scss/_commonVariables.scss'
export default class index extends Component {
    render() {
        console.log(this.props.packageData, 'hello')
        return (
            <div className="mt-5 card-holder-m">
                <h1 className="serviceHeadText font-mobile-extra-bigger text-center mb-5">Services Packages</h1>
                {this.props.packageData.map((packages,index)=>(
                    <div className="card-box-m row" key={index}>
                    <h4 className="title-text mt-3 text-center w-100">{packages.title}</h4>
                    <ul className="font-weight-bold elements mt-4">
                        {packages.data.map((list,index)=>(
                            <li key={index}>{list}</li>
                        ))}
                    </ul>
                </div>
                ))}
                {/* <div className="card-box-m row">
                    <h4 className="title-text mt-3 text-center w-100">START-UP PACKAGE</h4>
                    <ul className="font-weight-bold elements mt-4">
                        <li>Account Registration</li>
                        <li>Upto 50 SKU (Stock Keeping Unit)</li>
                        <li>Product Listing</li>
                        <li>Campaign Management</li>
                        <li>Daily Updation</li>
                        <li>Amazon Boost Service</li>
                        <li>GTIN</li>
                        <li>Technical Error Support</li>
                        <li>Training</li>
                        <li>Seller Re-instatement</li>
                        <li>Manage Inventory With Inventory Planning.</li>
                        <li>Business Report</li>
                        <li>Return Reports</li>
                        <li>Tax Report</li>
                        <li>Account Health Management</li>
                        <li>Promotion & Marketing</li>
                        <li>Seller Performance Report(Every 30 Days)</li>
                        <li>24*7 Voice Support & Mail (voice support-Twice a week) (E-mail Support- 24*7)</li>
                    </ul>
                </div> */}
                {/* <div className="card-box-m row">
                    <h4 className="title-text mt-3 text-center w-100">BUILD-UP PACKAGE</h4>
                    <ul className="font-weight-bold elements mt-4">
                        <li>Account Registration</li>
                        <li>Upto 50 SKU (Stock Keeping Unit)</li>
                        <li>Product Listing</li>
                        <li>Campaign Management</li>
                        <li>Daily Updation</li>
                        <li>Amazon Boost Service</li>
                        <li>GTIN</li>
                        <li>FBA Registration</li>
                        <li>Promotion & Marketing</li>
                        <li>Account Manager</li>
                        <li>FBA Shipment Creation</li>
                        <li>Technical Error Support</li>
                        <li>Training</li>
                        <li> Domestic Shipping</li>
                        <li>Seller Re-instatement</li>
                        <li>Manage Inventory With Inventory Planning</li>
                        <li>Business Report</li>
                        <li>Return Reports</li>
                        <li>Tax Report</li>
                        <li>Feedback Review</li>
                        <li>Return & Claim</li>
                        <li>Account Health Management</li>
                        <li>24*7 Voice Support & Mail (Voice Support- Thrice A Week) (E-mail Support- 24*7)</li>
                    </ul>
                </div>
                <div className="card-box-m row">
                    <h4 className="title-text mt-3 text-center w-100">BRAND PACKAGE</h4>
                    <ul className="font-weight-bold elements mt-4">
                        <li>Account Registration</li>
                        <li>Product Listing</li>
                        <li>Campaign Management</li>
                        <li>Daily Updation</li>
                        <li>Amazon Boost Service</li>
                        <li>GTIN</li>
                        <li>FBA Registration</li>
                        <li>Promotion & Marketing</li>
                        <li>Account Manager</li>
                        <li>FBA Shipment Creation</li>
                        <li>Brand Store Registration</li>
                        <li>Brand Store Creation</li>
                        <li>A+ Content</li>
                        <li>Technical Error Support</li>
                        <li>Training</li>
                        <li>Domestic Shipping</li>
                        <li>Seller Re-instatement</li>
                        <li>Enhanced Brand Content</li>
                        <li>Manage Inventory With Inventory Planning.</li>
                        <li>Business Report</li>
                        <li>Return Reports</li>
                        <li>Tax Report</li>
                        <li>Feedback Review</li>
                        <li>Return & Claim</li>
                        <li>Account Health Management</li>
                        <li>Brand Packaging Support</li>
                        <li>24*7 Voice Support & Mail</li>
                        <li>Seller Performance Report</li>
                    </ul>
                </div>
                <div className="card-box-m row">
                    <h4 className="title-text mt-3 text-center w-100">ADD-ON PACKAGE</h4>
                    <ul className="font-weight-bold elements mt-4">
                        <li>Guaranteed Services</li>
                        <li>Domestic Shipping Services</li>
                        <li>International Shipping Services</li>
                        <li>Amazon Global Services</li>
                        <li>Trademark Registration</li>
                        <li>MSME Registration</li>
                        <li>GST Registration</li>
                        <li>GST Return Filing</li>
                        <li>Tax Consultancy</li>
                        <li>Income Tax Return Filing</li>
                        <li>Accounting Services</li>
                        <li>Book Keeping </li>
                    </ul>
                </div> */}
            </div>
        )
    }
}
