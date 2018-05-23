import React from 'react'

export default class Landing extends React.Component {
  render() {

    let { params } = this.props.match

    return (
      <div className="landing-container">
        <AuthForm buttonText={params.auth} onComplete={handleComplete} />
      </div>
    )
  }
}
