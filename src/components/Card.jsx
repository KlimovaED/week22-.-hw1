import './card.scss';

function Card(props){
    return(
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <img className='icon' src='https://www.pngplay.com/wp-content/uploads/13/Pop-Art-No-Background.png' alt='img' />
                <p className="title-text">Вселенная : <span className="text">{props.universe}</span></p>
                <p className="title-text">Альтер Эго : <span className="text">{props.alterego}</span></p>
                <p className="title-text">Род деятельности : <span className="text">{props.occupation}</span></p>
                <p className="title-text">Друзья : <span className="text">{props.friends}</span></p>
                <p className="title-text">Суперсилы: <span className="text">{props.superpowers}</span></p>
                </div>
                <img className='card-img'  src={props.url} alt="{props.name}" />
        </div>
    );
}
export default Card;