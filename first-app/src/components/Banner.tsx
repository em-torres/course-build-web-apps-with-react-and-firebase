function Banner() {
    const title: string = "Welcome to the Website"
    const subtitle: string = "This is a Website for learning REACT"

    // const handleClick = (e: object) => {
    //     console.log("You clicked me")
    //     console.log("The site title is: ", title)
    //     console.log(e)
    // }

    return (
        <>
            <div className={ 'banner' }>
                <h2>{ title.toUpperCase() }</h2>
                <p>{ subtitle }</p>
                <button onClick={ () => console.log("hello") }> Click Me</button>
            </div>
        </>
    )
}

export default Banner
