import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from "../../store/store"
import {Wrapper ,Card,CardContainer} from './film.styles'




const Film =  ()  => {
    
           //Getting the film from redux store
           const film = useSelector((state:RootState) => state.film.currentFilm[0]);
           
    return (
        <Wrapper>
            <CardContainer>
            <Card>
            <h1>{film.title}</h1>
            
            </Card>
           
            <Card>
            <h4>Director: {film.director}</h4>
            <h4>Producer: {film.producer}</h4>
            </Card>
            <span>Release Date: {film.release_date}</span>
            
            </CardContainer>
            
            <p>
            {film.opening_crawl}
            </p>
        </Wrapper>
    )
}

export default Film


