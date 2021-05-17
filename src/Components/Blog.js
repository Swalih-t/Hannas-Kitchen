import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/Blog.css'

export class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1607877742940-7017135d8ba4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Art of Cooking</Card.Title>
                                <Card.Text className="card-text">
                                    Cooking, cookery, or culinary arts is the art, science, and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely across the world, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting unique environmental, economic, and cultural traditions and trends.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Cooking Lovers</Card.Title>
                                <Card.Text className="card-text">
                                    Types of cooking also depend on the skill levels and training of the cooks. Cooking is done both by people in their own dwellings and by professional cooks and chefs in restaurants and other food establishments. Cooking can also occur through chemical reactions without the presence of heat, such as in ceviche, a traditional South American dish where fish is cooked with the acids in lemon, lime juice, or orange juice.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589985270958-af9812c8ddb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Lovly Culture</Card.Title>
                                <Card.Text className="card-text">
                                    The expansion of agriculture, commerce, trade, and transportation between civilizations in different regions offered cooks many new ingredients. New inventions and technologies, such as the invention of pottery for holding and boiling water, expanded cooking techniques. Some modern cooks apply advanced scientific techniques to food preparation to further enhance the flavor of the dish served
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/* Next Row - 1 */}
                <div className="row my-4">
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Do you love it?</Card.Title>
                                <Card.Text className="card-text">
                                    Home cooking has traditionally been a process carried out informally in a home or around a communal fire, and can be enjoyed by all members of the family, although in many cultures women bear primary responsibility.[45] Cooking is also often carried out outside of personal quarters, for example at restaurants, or schools. Bakeries were one of the earliest forms of cooking outside the home, and bakeries in the past often offered the cooking of pots of food provided by their customers as an additional service.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Traditional Cooking!</Card.Title>
                                <Card.Text className="card-text">
                                    In the present day, factory food preparation has become common, with many "ready-to-eat" foods being prepared and cooked in factories and home cooks using a mixture of scratch made, and factory made foods together to make a meal. The nutritional value of including more commercially prepared foods has been found to be inferior to home-made foods
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1501086975536-1220c4cf61f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Healthy Cooking?</Card.Title>
                                <Card.Text className="card-text">
                                    Home-cooked meals tend to be healthier with fewer calories, and less saturated fat, cholesterol and sodium on a per calorie basis while providing more fiber, calcium, and iron.[47] The ingredients are also directly sourced, so there is control over authenticity, taste, and nutritional value. The superior nutritional quality of home-cooking could therefore play a role in preventing chronic disease.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                {/* Next Row - 2 */}
                <div className="row my-4">
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1610649333217-31ea4ea0df1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Home Cooking Benfits</Card.Title>
                                <Card.Text className="card-text">
                                    Whether you live on your own or are a busy parent, finding the time and energy to prepare home-cooked meals can seem like a daunting task. At the end of a hectic day, eating out or ordering in might feel like the quickest, easiest option. But convenience and processed food can take a significant toll on your mood and health.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1592837613828-4b65deb44f15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Health @ Home</Card.Title>
                                <Card.Text className="card-text">
                                    Convenience food is typically high in chemical additives, hormones, sugar, salt, unhealthy fat, and calories, all of which can adversely affect your brain and outlook. It can leave you feeling tired, bloated, and irritable, and exacerbate symptoms of depression, stress, and anxiety.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1598259065881-8a65b97d50fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title className="card-title">Overcomings..!!</Card.Title>
                                <Card.Text className="card-text">
                                    Despite all the benefits, many of us still think of preparing meals as a chore, either something that we don’t have time for, or something that’s only suitable for experienced cooks. Maybe you’ve tried cooking before and didn’t like the end results, or maybe your kids just prefer takeout food?
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        )
    }
}

export default Blog
