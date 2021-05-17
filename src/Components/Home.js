import React, { Component } from 'react'
import '../Styles/Home.css'

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            hoverContactImg: false
        }
    }
    hoverImage = () => {
        this.setState({
            hoverContactImg: true
        })
    }
    notHoverImage = () => {
        this.setState({
            hoverContactImg: false
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12 first-image col-sm-12">
                        <img src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Second Part */}
                        <div className="col-md-6 left-section my-3">
                            <div className="left-section-first-part">
                                <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="left-section-second-part">
                                <p>“Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.”
– Wolfgang Puck</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 right-section">
                            <h1 className="">Contact Us</h1>
                            <p style={this.state.hoverContactImg ? { display: 'grid' } : { display: 'none' }}>Contact Me for best backes</p>
                            <img onMouseOver={this.hoverImage} onMouseOut={this.notHoverImage} src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>

                        {/* Next 1*/}

                        <div className="col-md-6 left-section col-12 my-3">
                            <div className="left-section-first-part">
                                <img src="https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="left-section-second-part">
                                <p>“Cooking requires confident guesswork and improvisation—experimentation and substitution, dealing with failure and uncertainty in a creative way.”
– Paul Theroux</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-5 right-section-two">
                            <h1 className="second-contact-text">Support Us</h1>
                            <img className="second-contact-image" src="https://images.unsplash.com/photo-1607975218287-094017cb173c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>


                    </div>
                </div>
            </>
        )
    }
}

export default Home
