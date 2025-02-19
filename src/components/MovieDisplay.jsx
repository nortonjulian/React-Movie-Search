export default function MovieDisplay({ movie }) {
    if (!movie) {
        return <h2>Search for a movie</h2>
    }

    return (
        <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title}/>
            <h2>{movie.Year}</h2>
        </>
    )
}