import "./Outcoming.scss"

function Outcoming(props) {
    return (
        <div className={`outcoming`}>
            <div className="outcoming__message">{props.message}</div>
            <div className="outcoming__date">{props.date}</div>
        </div>
    )
}

export default Outcoming