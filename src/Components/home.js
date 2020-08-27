import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import az1 from '../assets/img/az1.jpg';
import az2 from '../assets/img/az2.jpg';
import az3 from '../assets/img/az3.jpg';


function Home(){
    return(
        <div>
            <div class="col-xs-1"></div>
            <div class="col-xs-8">
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                </head>
            <body>
                
                    <h1>Southwestern Vacations</h1>
                

                <div class="row" >
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
                        </ol>
                        <div class="carousel-inner" height = {50} px>
                            <div class="carousel-item active" height = {230} px >
                                <img class="d-block w-100 fill" src={az1} height = {230} px/>
                                <div class="carousel-caption text-right">
                                    <Link to = "/ReadMore">
                                        <button type="button" class="btn btn-light text-center" >Read More</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="carousel-item" height = {230} px>
                                <img class="d-block w-100 fill" src={az2} height = {230} px/>
                                <div class="carousel-caption">
                                    <h3>American Natural Beauty</h3>
                                    <div class="text-right">
                                        <Link to = "/ReadMore">
                                            <button type="button" class="btn btn-light text-center" >Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item" height = {230} px>
                                <img class="d-block w-100 fill" src={az3} height = {230} px/>
                                <div class="carousel-caption">
                                    <h3>Arizona Package</h3>
                                    <div class="text-right">
                                        <Link to = "/ReadMore">
                                            <button type="button" class="btn btn-light text-center" >Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CAROUSEL ENDS HERE*/}
                </div>
                <div class = "column col-xs-1"></div>
            
                <br/>

                <div class="row">
                    <div class = "column col-xs-0  col-md-1"></div>
                    <div class = "column col-xs-8 col-md-7">
                        <h3>Sarem Ipsum</h3>
                        <p>Radum et malesuada fames ac ante ipsum primis in faucibus. Donec diam odio, dapibus vulputate erat vel, pretium malesuada est. Aenean non felis at erat pretium posuere. Sed lacus nunc, malesuada in enim non, viverra euismod lectus. Sed a mattis eros, vel vehicula metus. Fusce ac vestibulum urna, ut tincidunt arcu. Cras purus nulla, viverra non ligula ut, semper ultricies est. Mauris a lorem ut arcu feugiat accumsan ut non ligula. Fusce ut dolor sed erat laoreet tincidunt nec vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat eros sit amet purus pretium, eu aliquet nisi tempus. Vivamus a sodales eros, vel dignissim diam. Integer aliquet euismod purus, vel facilisis velit eleifend a. Maecenas molestie ut tellus eget consectetur. Fusce purus tortor, tincidunt eget magna nec, condimentum blandit lectus.</p>
                    </div>
                    <div  class="text-center  column col-xs-1 col-md-3 container " display = "flex">
                        <button type="button" class="btn btn-info text-center" data-toggle="modal" data-target="#myModal">Contact Us</button>
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Comments</label>
                                                <input type="content" class="form-control" placeholder="Comments"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Discard</button>
                                        <button type="button" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column col-xs-1  col-md-1"></div>
                </div>

                <div class="row">
                    <div class = "column col-xs-1  col-md-1"></div>
                    <div class = "column col-xs-10 col-md-10">
                        <h3>Sit Amet</h3>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam odio, dapibus vulputate erat vel, pretium malesuada est. Aenean non felis at erat pretium posuere. Sed lacus nunc, malesuada in enim non, viverra euismod lectus. Sed a mattis eros, vel vehicula metus. Fusce ac vestibulum urna, ut tincidunt arcu. Cras purus nulla, viverra non ligula ut, semper ultricies est. Mauris a lorem ut arcu feugiat accumsan ut non ligula. Fusce ut dolor sed erat laoreet tincidunt nec vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat eros sit amet purus pretium, eu aliquet nisi tempus. Vivamus a sodales eros, vel dignissim diam. Integer aliquet euismod purus, vel facilisis velit eleifend a. Maecenas molestie ut tellus eget consectetur. Fusce purus tortor, tincidunt eget magna nec, condimentum blandit lectus.</p>
                    </div>
                    <div class = "column col-xs-1  col-md-1"></div>
                </div>
            </body>
        </div>

        <div class="col-xs-1"></div>
        </div>
    )
}
export default Home;