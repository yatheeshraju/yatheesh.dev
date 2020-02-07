import React, { Component } from 'react';
import quotes from './../data/quotes'

export default class Home extends Component {
     constructor(props){
         super(props);
         this.state={
             'quote':''
         }
     }

     getRandomInt= (max)=> {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    componentDidMount(){
        const randomQuote=quotes[this.getRandomInt(quotes.length)].quote;
        console.log(randomQuote);
        this.setState({
            'quote':randomQuote
        });
    }

   

    render() {

        return (
            <div>
                <section className='maincontent'>
                    <div className='mainphoto'>
                    <div id='quote'>{this.state.quote}</div>
                    </div>
                   
                </section>
            </div>
        )
    }
}
