import React from 'react'
import DocumentTitle from 'react-document-title'

const Home = ({ news=[] }) => {
    console.log(news)
    return(
        <DocumentTitle title="React News | Home">
            <div className="main">
                <div className="home">
                    {news.map((item, i) =>
                        <div key={i} className="item">
                            <img className="item-image" src={item.urlToImage} style={{width: 150, height: 100}}/>
                            <h3 className="item-head">{item.title}</h3>
                            <p className="item-desc">{(item.content) ? item.content.replace(/(\[\+[0-9]+\s(chars]))/gi,'') : null}
                                <a href={item.url}>Read more</a>
                            </p>
                            <p className="item-time">{item.publishedAt.replace(/[a-z]/gi,' ').replace(/-/g,'/')}</p>
                        </div>
                    )}
                </div>
            </div>
        </DocumentTitle>
    )
}

export default Home