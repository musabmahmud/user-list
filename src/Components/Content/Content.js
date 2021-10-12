import React from 'react';
import "./Content.css";
const Content = (props) => {
    const {index,name,about,email,age,company,balance,address,phone} = props.user;
    return (
        <div className="content" id={index}>
            <div className="con-top">
                <img src={props.user.picture} alt="" />
            </div>
            <div className="con-bottom">
                <div className="cb-details">
                    <h3>{name}</h3>
                    <p><a href={'mailto:'+ email}>{email}</a></p>
                </div>
                <div className="cb-mid">
                    <p><b>Age : </b>{age}</p>
                    <p><b>Company : </b>{company}</p>
                    <p><b>Salary : </b>{balance}</p>
                    <p><b>Address : </b>{address}</p>
                    <p><b>Phone : </b><a href={'callto:'+ phone}>{phone}</a></p>
                </div>
                <div className="cb-descript">
                    <p>{about.slice(0,100)}</p>
                    <button onClick={() => props.totalCart(props.user)}>Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Content;