import './Country.css'

interface Props {
    name: string,
    code: string,
    emoji: string,
    languages: string[]
}

const Country: React.FC<Props> = ({name, code, emoji, languages}) => {
    
    const sep: string = languages.length > 1 ? ", " : ""
    const language: string = languages.length > 1 ? "Języki" : "Język"

    return (
        <div className="country">
            <p className="country__item">Nazwa: {name}</p>
            <p className="country__item">Kod: {code}</p>
            <p className="country__item">Emoji: {emoji}</p>
            <p className="country__item">{language}: {languages.map((x: any) => {
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