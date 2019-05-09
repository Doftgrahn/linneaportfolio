import React from "react";

const Container = ({title, picture}) => {
    return (
        <article className="general_container">
            <div>
                <div className="info_wrapper">
                    <h3>{title}</h3>
                </div>
                <div className="picture__wrapper">
                    <img src={picture} alt={title} />
                </div>
            </div>
        </article>
    );
};
export default Container;
