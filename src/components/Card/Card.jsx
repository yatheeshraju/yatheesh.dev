import React from "react";
import "./Card.scss";
import {} from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
function Card(props) {
  return (
    <a
      href={"https://yatheesh.hashnode.dev/" + props.article.slug}
      target="_window"
      className="card"
    >
      <img src={props.article.coverImage} alt={props.name}></img>
      <span className="posttitle">{props.article.title}</span>
      <span className="reactbox">
        <AiOutlineLike size="2em" />
        <span className="count">{props.article.totalReactions}</span>
      </span>
    </a>
  );
}

export default Card;
