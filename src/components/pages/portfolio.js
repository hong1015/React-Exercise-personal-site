import React, { Component } from 'react';

import image1 from '../../assets/images/smalls/apiary.jpg';

class Portfolio extends Component {
    render() {
        return (
             <div className="portfolioBody">
                <div className="container">

                    <h1>Portfolio</h1>
              <div className="block">
               <img src={image1} />
              </div>
                </div>
            </div>       
      );
    }
}

export default Portfolio;