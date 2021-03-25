import React, { useEffect, useState } from "react";
import "./Blog.scss";
import Card from "../Card/Card";

function Blog() {
  const [articles, setarticles] = useState({ posts: [] });

  useEffect(() => {
    const query = `
    {
      user(username: "yatheesh") {
        publication {
          posts{
            _id
            slug
            title
            brief
            coverImage
            totalReactions
          }
        }
      }
    }
  `;
    const fetchPosts = async () => {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const ApiResponse = await response.json();
      setarticles({
        posts: ApiResponse.data.user.publication.posts,
        loading: false,
      });
    };
    fetchPosts();
  }, []);
  console.log(articles);
  return (
    <div className="blog" id="blog">
      <h1>
        <a href="\#blog"># BLOG</a>
      </h1>
      <div className="cards">
        {articles &&
          articles.posts.map((article) => (
            <Card key={article.slug} article={article} />
          ))}
      </div>
    </div>
  );
}

export default Blog;
