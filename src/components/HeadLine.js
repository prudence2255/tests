

const Headline = ({header, desc}) => {
    if(!header) return null;
    return (
        <>
            <h1 className="headline-header">{header}</h1>
            <p className="headline-desc">
                {desc}
            </p>

        </>
    )
}


export default Headline;