import './Country.css'

const Country = props => {
    
    const {name, code, emoji, languages} = props;
    const sep = languages.length > 1 ? ", " : ""
    const language = languages.length > 1 ? "Języki" : "Język"

    return (
        <div className="country">
            <p className="country__item">Nazwa: {name}</p>
            <p className="country__item">Kod: {code}</p>
            <p className="country__item">Emoji: {emoji}</p>
            <p className="country__item">{language}: {props.languages.map(x => {
                if(languages.indexOf(x) === languages.length -1) {
                    return x.name
                } else {
                   return `${x.name}${sep}`
                }
            })} </p>
        </div>
    );
}
 
export default Country;