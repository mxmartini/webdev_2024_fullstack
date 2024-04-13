export default function Button(props) {

    return`
    <button onclick='(${eval(props.onclick)})()'>${props.value}</button>
    `
}
