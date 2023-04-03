
export default function Uncontrolled(){

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.title.value)
        console.log(event.target.description.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" />
            <br/>
            <input name="description" type="text" />
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}