import React from 'react'

const Title = ({ isFetching }) =>
    <div className="title">
        {
            (isFetching) ? 
            <div className="loaders">
                <div className="linear-loader"></div>
                <div className="spin-loader"></div>
            </div> :
            null
        }
        <h2>React News</h2>
    </div>

export default Title