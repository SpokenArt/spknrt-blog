var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var SinglePostActions = require('../actions/SinglePostActions');

var PostPreview = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    loadPost : function(e){
        e.preventDefault();
        var self = this;
        self.context.router.transitionTo('/post/'+self.props.post.id+'/'+self.props.post.slug);
    },

    render : function() {
        return (
            <a href={'/post/' + this.props.post.id +'/'+this.props.post.slug} className="single-post" onClick={this.loadPost}>
                <div className="post-title">{this.props.post.title}</div>
                <div className="author-details"><img src={this.props.post.author.photo} className="author-photo"/>
                    <span className="author-name">{this.props.post.author.name}</span>
                </div>
            </a>
        )
    }
});

module.exports = PostPreview;