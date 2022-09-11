import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{}}>
          <img
            style={
              {
                // height: 161.1,
                // width: 286.4,
              }
            }
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
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{
              zIndex: 10,
            }}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>

            <p className="card-text">{description} ...</p>
            <a href={newsURL} target="_akj" className="btn btn-sm btn-dark">
              Read More...
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} 3 mins on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
