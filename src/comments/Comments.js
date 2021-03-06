import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addCommet } from './duck'
import CommentsForm from './CommentsForm'

class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {}; 
  }

  render() {
    
     const CommentItems = this.props.comment.map((comment, idx) => {
       return <li key={idx}>{comment.name}: {comment.text}</li>
     })
    
     return( 
       <div> 
        <CommentsForm 
          addCommet={this.props.addCommet}/>
        <h2>Cart Items</h2>
        <ol>
          {CommentItems}
        </ol>
      </div>
     )
  }

}

const mapStateToProps = (state, prop) => {
  return {
    comment: state.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommet: bindActionCreators(addCommet, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

