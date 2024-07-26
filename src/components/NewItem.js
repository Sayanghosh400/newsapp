import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card my-3">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-success" style={{ left: '90%', zIndex: '1' }}>{source}</span>
          </div>
          <img src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewItem
