import React, { Component } from 'react';
import './Skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills' id='skills'>
                 <h1> <a href='\#skills'># SKILLS</a></h1>

                 <br/>
                 <br/>

                <table>
                    <tbody>
                <tr>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>JavaScript</td>
                </tr>
                <tr>
                    <td>React.JS</td>
                    <td>Node.JS</td>
                    <td>Express.JS</td>
                </tr>
                <tr>
                    <td>Figma</td>
                    <td>MongoDB</td>
                    <td>Redux</td>
                </tr>
                <tr>
                    <td>Twitter Bootstrap</td>
                    <td>Material UI</td>
                    <td>Semantic UI</td>
                </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
