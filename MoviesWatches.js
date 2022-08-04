import axios from "axios"
import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import SubNewMovie from "./SubNewMovie"

function MoviesWatches(props) {

    const [movies, setMovies] = useState()
    const [isSub, setIsSub] = useState(false)


    useEffect(() => {
        getAllMembersSubs()
    }, [movies])


    async function getAllMembersSubs() {
        let { data } = await axios.get(`http://localhost:3050/members/${props.id}`)
        setMovies(data)
        console.log(` movies ${movies} `)
        console.log(` props.id ${props.id}`)
       
    }

    return <div style={{ border: "3px solid green ", width: "300px", marginBottom: "default" }}>

        <h4>Movies Watched</h4>
        <button onClick={() => setIsSub(true)}>Subscribe To A New Movie</button>
        {
            movies && movies.map((movie, index) => {
                if (movie != null) {
                    return <ul key={index}><li> <Link className="link2222" to='/home/movies/movie' state={{ oneMovie: movie }} >{movie.Name}</Link>,
                        {movie.YearPremiered}</li></ul>
                }
            })
        }
        {
            isSub && <SubNewMovie id={props.id} />
        }


    </div>

}

export default MoviesWatches

