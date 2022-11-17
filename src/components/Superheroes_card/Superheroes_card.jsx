import './../../style/index.css';

function SuperHero(props) {
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <h2>{props.name}</h2>
                    <img src={props.img} alt="superhoroes_img" />
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <div><span className="pName">Вселенная:</span> {props.univers}</div>
                    <div><span className="pName">Альтер эго:</span> {props.alter_ego}</div>
                    <div><span className="pName">Род деятельности:</span> {props.career}</div>
                    <div><span className="pName">Друзья:</span> {props.friend}</div>
                    <div><span className="pName">Суперсилы:</span>{props.superpower}</div>
                </div>
            </div>
        </div>
    )
}

export default SuperHero;