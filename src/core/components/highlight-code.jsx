import React, { Component, PropTypes } from "react"
import { highlight } from "core/utils"

export default class HighlightCode extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string
  }
  
  convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
    var charcode = parseInt(b,16);
    return String.fromCharCode(charcode);
  });
  }
  componentDidMount() {
    console.log(this.refs.el)
    const oldHTML = this.refs.el.innerHTML
    let newHTML = this.convertUnicode(oldHTML) 
    this.refs.el.innerHTML = newHTML
    console.log(this.refs.el)
  }

  componentDidUpdate() {
    //highlight(this.refs.el)
    console.log(this.refs.el)
    const oldHTML = this.refs.el.innerHTML
    let newHTML = this.convertUnicode(oldHTML) 
    this.refs.el.innerHTML = newHTML
    console.log(this.refs.el)
  }

  render () {
    let { value, className } = this.props
    className = className || ""

    return <pre ref="el" className={className + " microlight"}>{ value }</pre>
  }
}
