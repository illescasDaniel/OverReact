import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {

  _onForm1ButtonClick = (event) => {
    console.log(event.target.innerText)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>hello!</h1>
        <Button onClick={this._onForm1ButtonClick}>
          <FontAwesomeIcon icon={faCoffee} /> Form 1 button
        </Button>

      </div>
    )
  }
}