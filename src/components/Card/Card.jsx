
export const Card = ({data: {title, datatime, creator, descriptrion, type, priority}}) => {
    <div className="card">
        <div className="close">x</div>
        <h3>{title}</h3>
        <h6>{datatime}</h6>
        <h5>{creator}</h5>
        <button type="button">{type}</button>
        <button type="button">{priority}</button>
        <p>{descriptrion}</p>
    </div>
}