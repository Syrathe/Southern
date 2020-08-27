import React from 'react';
import az4 from '../assets/img/az4.jpeg';

function ReadMore(){
    return(
        <div >

        <div class="col-xs-1"></div>

        <div class="col-xs-8">
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            </head>
            <body>
            <div class="row">
            
                <br/>
                <div class = "column col-xs-0  col-md-1"></div>
                
                <div class = "column col-xs-6 col-md-5">
                    <img src= {az4}  width = {"100%"}/>
                </div>

                <div class = "column col-xs-6 col-md-5">
                    <h3>LoremIpsum</h3>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam odio, dapibus vulputate erat vel, pretium malesuada est. Aenean non felis at erat pretium posuere. Sed lacus nunc, malesuada in enim non, viverra euismod lectus. Sed a mattis eros, vel vehicula metus. Fusce ac vestibulum urna, ut tincidunt arcu. Cras purus nulla, viverra non ligula ut, semper ultricies est. Mauris a lorem ut arcu feugiat accumsan ut non ligula. Fusce ut dolor sed erat laoreet tincidunt nec vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat eros sit amet purus pretium, eu aliquet nisi tempus. Vivamus a sodales eros, vel dignissim diam. Integer aliquet euismod purus, vel facilisis velit eleifend a. Maecenas molestie ut tellus eget consectetur. Fusce purus tortor, tincidunt eget magna nec, condimentum blandit lectus.</p>
                    <h3>DolotSirAmet</h3>
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

export default ReadMore;