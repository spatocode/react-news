import React from 'react'
import { connect } from 'react-redux'

const Error = ({ category }) =>
    <div className="error">
        <div className="error-msg">
            Sorry we're unable to fetch data for "{ category }".
            Please make sure you have internet access and try again later.
        </div>
    </div>

const mapStateToProps = (state) => ({
    category: state.selectNews.category
  })

export default connect(mapStateToProps)(Error)