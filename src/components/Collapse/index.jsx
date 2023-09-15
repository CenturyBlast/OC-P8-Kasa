import './../../styles/collapse.scss'

export default function Collapse(props) {
    const title = props.title;
    const content = props.content;
    return (
        <div className="Frame">
            title = {title},
            content = {content}
        </div>
    )
}