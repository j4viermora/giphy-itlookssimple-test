import './style.css'

export const Buttom = ({ onClick }) => {
    return (
        <div 
        onClick={ onClick }
        className="button">
            Get Gifs
        </div>
    )
};
