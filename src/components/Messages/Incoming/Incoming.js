import "./Incoming.scss"
import Profile from "../../common/Profile/Profile";
import avatar from "../../Header/avatar.jpg";

function Incoming(props) {
    return (
        <div className={`${props.className} incoming`}>
            <div className="incoming__data">
                <Profile avatar={avatar} isOnline={false} className="incoming__profile"/>
                <div className="incoming__message">Hello
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi explicabo omnis quaerat.
                    Accusamus commodi dicta doloribus eius facere fuga, laboriosam mollitia odit quibusdam, quidem rem
                    sit, vero voluptates. Alias ducimus nesciunt perspiciatis soluta. Amet, animi consectetur, cumque
                    eos incidunt ipsum, labore molestiae nemo nobis officiis quisquam rerum saepe sapiente similique ut
                    voluptatibus voluptatum. A accusamus accusantium alias debitis, dignissimos earum eius enim eum ex
                    expedita fugit illum inventore iure, laborum laudantium minima nisi obcaecati odio optio placeat
                    provident quisquam reiciendis rem repellat velit veniam veritatis voluptas voluptatem voluptates,
                    voluptatum! Corporis, dolore ea facere ipsa magnam nobis provident qui rerum tempore?
                </div>
            </div>
            <div className="incoming__date">{new Date().toLocaleString()}</div>
        </div>
    )
}

export default Incoming