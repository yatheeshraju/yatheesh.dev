import React, { PureComponent } from 'react';
import './MainNav.scss';

export class MainNav extends PureComponent {
    render() {
        return (
           <nav>
               <li><a href='\#home'>YATHEE.SH</a></li>
               <li><a href='\#experience'>EXPERIENCE</a></li>
               <li><a href='\#projects'>PROJECTS</a></li>
          </nav>
        )
    }
}

export default MainNav;
