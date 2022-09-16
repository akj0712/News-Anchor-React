import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const resp = await fetch(URL);
    const respData = await resp.json();
    // console.log(respData);
    this.setState({
      loading: false,
      articles: respData.articles,
      totalResults: respData.totalResults,
    });
  }

  async componentDidMount() {
    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    // const resp = await fetch(URL);
    // const respData = await resp.json();
    // // console.log(respData);
    // this.setState({
    //   loading: false,
    //   articles: respData.articles,
    //   totalResults: respData.totalResults,
    // });
    await this.updateNews();
  }

  handlePrevClick = async () => {
    // let URL = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // });
    // const resp = await fetch(URL);
    // const respData = await resp.json();
    // this.setState({
    //   loading: false,
    //   articles: respData.articles,
    //   page: this.state.page - 1,
    // });
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (
    // !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let URL = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   });
    //   const resp = await fetch(URL);
    //   const respData = await resp.json();
    //   this.setState({
    //     loading: false,
    //     articles: respData.articles,
    //     page: this.state.page + 1,
    //   });
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">News Anchor - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
