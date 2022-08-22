import "./Outcoming.scss"

function Outcoming(props) {
    return (
        <div className={`${props.className} outcoming`}>
            <div className="outcoming__message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                dignissimos dolore doloremque modi porro quaerat reiciendis unde vitae voluptatibus voluptatum! Earum,
                facere maxime minus quo sit sunt tempore veritatis voluptatem! Asperiores debitis dolore eum, ipsam
                laborum nulla qui quisquam, repellat similique suscipit vel veritatis. Accusantium amet consequuntur
                cumque perferendis vero!
            </div>
            <div className="outcoming__date">{new Date().toLocaleString()}</div>
        </div>
    )
}

export default Outcoming