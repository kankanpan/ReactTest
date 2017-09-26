import React from 'react'
import ReactDOM from 'react-dom'

class fucTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sw: false,
    }
  }
  clickHere(e) {
    this.setState({
      sw: !this.state.sw
    })
  }
  render() {
    return(
      <div onClick={this.clickHere}>
        Click Here!!
        {sw}
      </div>
    )
  }
}

export default fucTest
