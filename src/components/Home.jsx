import React, { Component } from 'react';
import quotes from './../data/quotes'
import RecentVideos from './RecentVideos';
import RecentProject from './RecentProject';
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
                <section>
                    <div className='mainphoto'>
                    <div className='quote'>{this.state.quote}</div>
                    </div>
                    <RecentVideos/>
                    <RecentProject/>
                </section>
                
            </div>
        )
    }
}
