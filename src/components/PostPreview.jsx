var React = require('react/addons');
var SinglePostActions = require('../actions/SinglePostActions');
var AuthorMixin = require('../mixins/AuthorMixin.jsx');

var PostPreview = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    mixins: [AuthorMixin],

    loadPost : function(e){
        e.preventDefault();
        var self = this;
        self.context.router.transitionTo('/post/'+self.props.post.id+'/'+self.props.post.slug);
    },

    render : function() {
        return (
            <a href={'/post/' + this.props.post.id +'/'+this.props.post.slug} className="single-post" onClick={this.loadPost}>
                <div className="post-title">{this.props.post.title} </div>
                <div className="author-details">
                    {this.getAuthorDetails(this.props.post)}
                </div>
                <img className="post-image" src={this.props.post.author.photo}/>
                {/* source this image from post's included images  */}
            </a>
        )
    }
});

module.exports = PostPreview;
