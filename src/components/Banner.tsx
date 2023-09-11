function Banner() {
    const title: string = "Welcome to the Website"
    const subtitle: string = "This is a Website for learning REACT"
    const address: string = "https://www.netninja.dev"

    return (
        <>
            <div className={ 'banner' }>
                <h2>{ title.toUpperCase() }</h2>
                <p>{ subtitle }</p>
                <p>Today's date is: { new Date().toDateString() }</p>
                <p>Random Number: { Math.random() * 100 }</p>
                <a href={ address }>Visit the Net Ninja Site</a>
            </div>
        </>
    )
}

export default Banner
