import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ }}>
          <img
            style={{
              // height: 161.1,
              // width: 286.4,
            }}
            src={
              !imageURL
                ? "https://ak5.picdn.net/shutterstock/videos/1009444835/thumb/1.jpg"
                : imageURL
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <a href={newsURL} target="_akj" className="btn btn-sm btn-dark">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
