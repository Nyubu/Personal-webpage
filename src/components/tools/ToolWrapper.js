import React from 'react'


const ToolWrapper = (props) => {


    return (
        <div className="tool" data-tool-tip={props.tooltip}>
            <div className="tool__img-wrapper">
                <img className="tool__img" src={props.logo} alt={`${props.title} logo`} />
            </div>
            <p className="tool__name">{props.title}</p>
        </div>
    )
}

export default ToolWrapper;
