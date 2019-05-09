import React from "react";

const Event = ({title, content, createMarkup}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div
                className="content"
                dangerouslySetInnerHTML={createMarkup(content)}
            />
        </div>
    );
};

export default Event;
