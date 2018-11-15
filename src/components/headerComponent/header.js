import React, { Component } from 'react';
import {
Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>       
                <nav>
                    <div className="container">
                        <ul>
                            <li>
                             <Link to="/">home</Link>
                            </li>
                            <li>
                            <Link to="/portfolio">portfolio</Link>
                           
                            </li>
                            <li>
                             <Link to="/contact">contact</Link>
             
                            </li>
                        </ul>
                        </div>
                </nav>
            </header>
      );
    }
}

export default Header;
