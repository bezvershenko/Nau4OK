import React, {Component} from 'react'

export default class PageNotFound extends Component {

    static getRandomArbitrary = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    render() {
        let s = '';
        for (let i = 0; i < 100; i++) {
            s += PageNotFound.getRandomArbitrary(100000, 1000000).toString();
        }

        const img = require('../static/images/404.png');

        return (
            <div className="login-bg">
                <div className="login-overlay" style={{'padding': '100px 0'}}>
                    <div className="floating-container notfound-container text-center" style={{'word-wrap': 'break-word'}}>
                        <img src={img} className="img-fluid image404"/>
                        <div className="upper-text">Наши мартышки-бэкендеры не смогли найти эту страницу. Если увидите их, передайте им эту строку:</div>
                        <br/>
                        {btoa(s)}
                    </div>
                </div>
            </div>
        );
    }

}

