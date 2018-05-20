import React, {Component} from 'react';
import {connect} from "react-redux";

class NewsDetail extends Component {



    changeImageSize(imagePath) {
        return (imagePath.replace("thumbnails/116x90", "thumbnails/300x219"));
    }
    render() {
    
        if(!this.props.user){
            return (    <div className="right"> <h4>Select a news...</h4> </div>);
        }


        return (
            <div className="right">
            <div>
              <h2>{this.props.user.title} </h2>
              <h4 className="grey">{this.props.user.slug_intro}</h4>
              <h6>Updated {this.props.user.pubdate}</h6>
              
              <img src={this.changeImageSize(this.props.user.image)} />
              <p>{this.props.user.firstParagraph}</p>
            </div>
            </div>
        );
        
    }
}



function mapStateToProps(state) {
    return {
        user: state.activeNews
    }
}


export default connect(mapStateToProps)(NewsDetail);