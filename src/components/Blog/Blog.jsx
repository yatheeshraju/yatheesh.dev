import React, { Component } from 'react';
import './Blog.scss';
import Card from '../Card/Card';
import axios from 'axios';

export class Blog extends Component {
    state={
        articles:[]
    }
    componentDidMount(){
       axios.get('https://public-api.wordpress.com/rest/v1.1/sites/yatheesh5.wordpress.com/posts/').then(res=>res.data).then((data)=>{
        this.setState({
            articles:data.posts
        });
        // console.log(data.posts);
       });
       
    }
    render() {
        return (
            <div className='blog' id='blog'>
                <h1> <a href='\#blog'># BLOG</a></h1>
                <div className='cards'>
                {this.state.articles.map(article=><Card key={article.ID} article={article}/>)}
                </div>
            </div>
        )
    }
}

export default Blog
