import React, { Component, useState, useEffect } from "react";
import superagent from "superagent";
import "./Blogview.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Blogview = () => {
  const getBlog = async () => {
    const DEV_TO_URL = `https://dev.to/api/articles/fredysomy/${window.location.pathname.slice(
      1
    )}`;

    try {
      const blog = superagent.get(DEV_TO_URL).then((res) => {
        return res.body;
      });

      return blog;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    getBlog().then((data) => {
      setBlog(data);
      document.title = data.title;

      document.getElementById(
        "blogcontents"
      ).innerHTML = data.body_html.replace(/[\r]+/gm, "");
      window.scrollTo(0, 0);
      window.location.href+="#googtrans(|bn)
      window.location.reload()
    });
  }, []);
  function ScrollToTopOnMount() {
    window.scrollTo(0, 0);
  }
  function gotop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  return (
    <div class="crayons-article__main">
      <div
        class="crayons-article__body text-styles spec__body"
        data-article-id="563642"
        id="article-body"
      >
        <div id="imgcontents">
          <img id="imgscrc" src={blog.cover_image}></img>

          <h1 style={{ color: "white", textAlign: "left" }}>
            <b>{blog.title}</b>
          </h1>
          <div
            id="scialshare"
            style={{ display: "flex", flexDirection: "colomn" }}
          >
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
            >
              <button
                style={{ marginLeft: "5px" }}
                className="btn btn-outline-primary btn-sm"
              >
                <i class="fab fa-twitter"></i>
              </button>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}&summary=${blog.description}&source=`}
            >
              <button
                style={{ marginLeft: "5px" }}
                className="btn btn-outline-primary btn-sm"
              >
                <i class="fab fa-linkedin-in"></i>
              </button>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${blog.title},${window.location.href}`}
            >
              <button
                style={{ marginLeft: "5px" }}
                className="btn btn-outline-primary btn-sm"
              >
                <i class="fab fa-whatsapp"></i>
              </button>
            </a>
          </div>
         
        </div>
<div id="google_translate_element"></div>
        <div id="blogcontents"></div>
      </div>
    </div>
  );
};

export default Blogview;
