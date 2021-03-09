import React from "react";
import './Blog.css';
import ReactPaginate from 'react-paginate';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            avatar: "", 
            profileLink: "",
            posts: [],
            offset: 0,
            data: [],
            perPage: 4, // How many to display per page
            currentPage: 0
        };  
        this.handlePageClick = this
          .handlePageClick
          .bind(this);                  
    }
    
    mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@s-huynh";

    

    async receivedData() {
        await axios
            .get(this.mediumURL)
            .then(async (res) => await res.data)
            .then((data) => {

                // Shorten text of content or title of post
                function shortenText(text, startingPoint, maxLength) {
                    return text.length > maxLength
                    ? text.slice(startingPoint, maxLength)
                    : text;
                }

                // Create html element of node
                function toText(node) {
                    let tag = document.createElement("div");
                    tag.innerHTML = node;
                    node = tag.innerText;
                    return node;
                }

                const avatar = data.feed.image;
                const profileLink = data.feed.link;

                console.log(profileLink);

                const posts = data.items; // Array of posts

               
                const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map( (post, index) => 
                    <div key={index} className="blog-post__wrapper">
                        <a className="blog-post__link" href={post.link} target="_blank" >
                            <div className="blog-post" >
                                <h3 className="blog-post__title">{post.title}</h3>
                                <div className="blog-post__header">
                                    <div className="blog-post__thumbnail-container">
                                        <img className="blog-post__thumbnail"src={post.thumbnail} alt="post thumbnail"/>
                                    </div>
                                    <p className="blog-post__content">&emsp;{shortenText(toText(post.content), 0, 200)}...</p>
                                </div>
                                <span className="blog-post__date"><FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />{shortenText(post.pubDate,0 ,10)}</span>
                            </div>
                        </a>
                    </div>
                )                

                this.setState({ 
                    avatar: avatar, 
                    profileLink: profileLink, 
                    posts: posts,
                    pageCount: Math.ceil(posts.length / this.state.perPage),
                    postData
                });
            });
    }

    

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
  
    };

    componentDidMount() {
        this.receivedData();
    }

    render() {

        return (
            <section className="blog" id="blog">

                <h2 className="section__title--blog">My Blog</h2>
                
                <div className="blog__profile-link-container">
                    <a className="blog__profile-link" href={this.state.profileLink} target="_blank">
                        <img className="blog__profile-avatar" src={this.state.avatar} alt="blog avatar"/>                    
                    </a>
                    <p className="section__subtitle section__subtitle--blog">
                        <a className="blog__profile-author-link" href={this.state.profileLink} target="_blank">
                            @s-huynh.medium
                        </a>
                    </p>  
                </div>
                

                <div className="blog-posts">
                    {this.state.postData}
                </div>
                <ReactPaginate

                    previousLabel={"<"}
                    previousLinkClassName={"blog-pagination__prev"}

                    activeClassName={"active"}
                    pageClassName={"blog-pagination__page-link"}

                    nextLabel={">"}
                    nextLinkClassName={"blog-pagination__next"}

                    breakLabel={"..."}
                    breakClassName={"break-me"}

                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}

                    containerClassName={"blog-pagination"}
                    subContainerClassName={"pages pagination"}
                    
                />
                
            </section>                        
        );
  }
}
export default Blog;