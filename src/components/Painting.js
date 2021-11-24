import PropTypes from 'prop-types';
import defaultImage from './default.jpg'

console.log(defaultImage);
export default function Painting(props) {
    const {
        url = defaultImage,
        title,
        price,
        profileUrl,
        authorName,
        quantity } = props

    return (<div>
        <img src={url} alt={title} width='480' />
        <h2>{title}</h2>
        <p>Автор:<a href={profileUrl}>{authorName}</a></p>
        <p>Цена:{price} кредитов</p>
        <p>Доступность: {quantity < 11 ? 'заканчивается' : 'есть в наличии'}</p>
        <button type='button'>Добавить в корзину</button>
    </div>);
};

Painting.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    profileUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}