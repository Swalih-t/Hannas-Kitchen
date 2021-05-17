import React, { Component } from 'react'
import '../Styles/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-12">

                    </div>
                    <div className="col-md-4 col-lg-4 col-12 footer">
                        <h2>Follow and Support</h2>
                        <div className="horizontal-line"></div>
                        <div className="icons">
                            <i class="fab fa-instagram icon-i"></i>
                            <i class="fab fa-facebook-square icon-i"></i>
                            <i class="fab fa-youtube icon-i"></i>
                            <i class="fab fa-twitter icon-i"></i>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12">

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
