import React from 'react';
import Rating from 'react-rating';

const Comments = React.createClass({

  getInitialState: function() {
    return {
      isEmptyAuthor: null,
      isEmptyComment: null,
      author: null,
      comment: null,
      rating: null
    };
  },

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.opinion}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  },

  handleSubmit(e, value) {
    const { cake, cakeId } = this.props; 
    
    if(e !== undefined) { 
      e.preventDefault();

      const target = e.target;
      
        if ( target.name === "authorInput" ) {
          if (target.value !== null && target.value != "") {
            this.state.author =  target.value;
            this.setState({
              isEmptyAuthor: false,
            })
          } else {
            this.setState({
              isEmptyAuthor: true,
            })
          }
        } 
        if ( target.name === "commentInput") {
            if (target.value !== null && target.value != "") {
            this.state.comment =  target.value;
            this.setState({
              isEmptyComment: false,
            })
          } else { 
            this.setState({
              isEmptyComment: true,
            })
          }
        }
    } 
     if(value !== null && value !== cake.yumFactor) {
        this.state.rating = value;

        if (this.state.isEmptyComment === false && this.state.isEmptyAuthor === false & this.state.rating !== null) {
          cake.name = this.state.author,
          cake.comment = this.state.comment,
          cake.yumFactor = value,
        this.props.addCakeData(cakeId, cake);
          this.setState({
            isEmptyAuthor: false,
            isEmptyComment: false,
            author: null,
            comment: null
          })
          alert('Data added succesfully');
        } else {
            if (this.state.isEmptyAuthor || this.state.isEmptyAuthor === null) {
              this.setState({
               isEmptyAuthor: true,
               author: null,
             })
            }
            if (this.state.isEmptyComment || this.state.isEmptyComment === null) {
              this.setState({
                isEmptyComment: true,
                comment: null,             
             })
            }           
          }
        }
    },

  render() {
    const { cake } = this.props; 
  
    return (
    <div className="comments">
        {typeof (this.props.cakeComments) === Object ?
          this.props.cakeComments.map(this.renderComment) :   null }
        <form ref="commentForm" className="comment-form"  onSubmit={e => this.handleSubmit(e, null)}>
          <input type="text" ref="author" autoComplete="off" name="authorInput"  placeholder="Cake name" onChange={(e)=>{this.handleSubmit(e, null)} }/> <br></br>
          {this.state.isEmptyAuthor === true ? <span style={{color: "red"}}>Please enter a name</span> : ''}
          <br></br>
          <input type="text" ref="comment" name="commentInput" autoComplete="off" placeholder="comment" onChange={(e)=>{this.handleSubmit(e, null)} }/><br></br>
          {this.state.isEmptyComment  === true ? <span style={{color: "red"}}>Please enter a comment</span> : ''} <br></br>
          <input type="submit" hidden />
            <h2> Yum Rating : </h2>       
            <Rating {...this.props} initialRating={cake.yumFactor} onChange={(value, e) => this.handleSubmit(e, value)} />                
        </form>       
    </div>
    )
  }
});

export default Comments;
