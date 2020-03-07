import React, { Component } from 'react';
import './Blog.scss';
import Card from '../Card/Card';


export class Blog extends Component {
    state={
        articles:[]
    }
    componentDidMount(){
       
    }
    render() {
        return (
            <div className='blog' id='blog'>
                <h1> <a href='\#blog'># BLOG</a></h1>
                <div className='cards'>
                {this.state.articles.map(article=><Card key={article.id} article={article}/>)}
                </div>
            </div>
        )
    }
}

export default Blog
