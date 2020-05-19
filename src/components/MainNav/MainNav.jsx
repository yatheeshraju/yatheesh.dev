import React, { PureComponent } from 'react';
import './MainNav.scss';

export class MainNav extends PureComponent {

   render() {
        window.onscroll = function() {
        var navbar = document.getElementById("navbar");
        if (this.window.pageYOffset >= this.window.innerHeight-80) {
            navbar.classList.add("fixed");
           // navbar.classList.remove("relative");
        } else {
            navbar.classList.remove("fixed");
            //navbar.classList.add("relative");
        }
        };
        return (
           <nav id='navbar'>
               <li><a href='\#home'>HOME</a></li>
               <li><a href='\#skills'>SKILLS</a></li>
               <li><a href='\#experience'>EXPERIENCE</a></li>
               <li><a href='\#projects'>PROJECTS</a></li>
               <li><a href='\#blog'>BLOG</a></li>
          </nav>
        )
    }
}

export default MainNav;
