import React, { Component } from 'react'
import '../Styles/About.css'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-6 col-lg-6 col-12 left-about-section">
                        <h1>Hanna Fathima</h1>
                        <div class="about-h1-line"></div>
                        <p><i><span>
                            Mexican model and blogger living in Mexico City. 26 years. Foodie and Glitter lover. Bachelor in communications and digital media. Positive thinker, big dreamer and fashion insider.</span></i>

                            <i>With www.luisaferss.com Luisa wants to show dreamy experiences. She wants to motivate her readers to know the world that it's outside the comfort zone and give them the opportunity to travel, taste, visit, dress and experiment trough the blogposts and tips in the webpage.</i>


                            <i>Modelo y blogger mexicana de 26 años viviendo en CDMX. Foodie & amante del glitter. Licenciada en comunicación y medios digitales. Positiva, soñadora, amante e insider de la moda.

 El objetivo de luisaferss.com es transmitir experiencias más allá de lo cotidiano. Motivar a los lectores a conocer ese mundo afuera de su zona de confort y darles la oportunidad de viajar, probar, visitar, vestirse y experimentar a través de las publicaciones y consejos publicados en el blog.</i>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 right-about-section">
                        <img src="https://images.unsplash.com/photo-1579938202767-771be803237b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
