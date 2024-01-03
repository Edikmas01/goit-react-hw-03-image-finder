import { Component } from "react";
import './Button.css'

export class Button extends Component{
    render() {
        const {onClick} = this.props;
        return (
          <div className="LoadMoreContainer ">
            <button type="button" className="LoadMore " onClick={onClick}>
              Load more
            </button>
          </div>
        );
    }
}