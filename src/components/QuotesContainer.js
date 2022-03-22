import React from 'react';

const QuotesContainer = (props) => {

    return (
        <div id='form-container'>
            {
                props.quotesData.map((element, i) => {
                    return <div
                        key={i}
                        className='quote-card'>
                        <img src={element.imgSrc} />
                        <h1>{element.title}</h1>

                        <ul>
                            {
                                element.benefits.map((elm, i) => {
                                    return <li key={i}>{elm}</li>
                                })
                            }
                        </ul>

                    </div>
                })
            }
        </div>
    );
};

export default QuotesContainer;