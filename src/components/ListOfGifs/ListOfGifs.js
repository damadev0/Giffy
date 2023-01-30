import Gif from '../Gif/Gif'
import './styles.css'

function ListOfGifs( { gifs } ) {

    return <div className='Results'>
        {
            gifs.map( ({id, title, url}) => 
                <Gif
                className="Results-gif"
                id={id}
                key={id}
                title={title}
                url={url} /> 
            )
        }
        </div>
}

export default ListOfGifs