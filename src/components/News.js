import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsAnchor - ${this.capitaliseFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let resp = await fetch(URL);
    this.props.setProgress(30);
    let respData = await resp.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: respData.articles,
      totalResults: respData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    await this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const URL = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=56711cb1a8d94ef7910e89c29bef25d8&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    let resp = await fetch(URL);
    let respData = await resp.json();
    this.setState({
      articles: this.state.articles.concat(respData.articles),
      totalResults: respData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center mt-5 pt-4">
          News Anchor - Top {this.capitaliseFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
