import React, { Component, useEffect, useState } from "react";
import superagent from "superagent";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blog.css";
const Blog = () => {
  const getPosts = async () => {
    const DEV_TO_URL = "https://proxpiapi.herokuapp.com/proxpi/api/hb9m3bbqtoku";

    try {
      const result = superagent
        .get(DEV_TO_URL)

        .then((res) => {
          return res.body;
        })
        .then(setLoading(false));
      return result;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div id="main">
      {posts.map((data) => {
        return (
          <div className="maindiv">
            <img className="img-div" src={data.cover_image} />

            <div className="content-div">
              <h3>{data.title}</h3>

              <p>{data.description}</p>
              <Link to={`/${data.slug}`}>
                <button class="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
