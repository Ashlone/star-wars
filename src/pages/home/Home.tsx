import React,{useState,useEffect,useCallback} from 'react'
import FilmCard from '../../components/ui/cards/FilmCard'
import {useSelector,useDispatch} from 'react-redux'
import {RootState} from "../../store/store"
import {setSearchedFilm} from '../../store/slices/film'
import { api } from '../../services/api'
import { debounce } from 'lodash';
import {Form} from './Home.styles'
const Home = () => {

    const [loading, setLoading] = useState<boolean>(true);

     //dispatch to redux store
     const dispatch =useDispatch()

     //State
     const [searchFilm, setSearchFilm] = useState<string>('');
    
     //Handling the input search
         const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
             setSearchFilm(event.target.value);
             
         }
 
         //Fetching the searched data
           const getSearchedData = useCallback(async () => {
            try {
                const {data} = await api.get(`films/?search=${searchFilm}`);
                console.log(data.results)
                   dispatch(setSearchedFilm(data.results))
            } catch (err){
                console.log(err)
            } 
          }, [searchFilm]);
         
           useEffect(() => {
              getSearchedData()
           }, [getSearchedData])
 
   
           //Getting the film from redux store
      const film = useSelector((state:RootState) => state.film.currentFilm);

      const debouncedOnChange = debounce(handleInputChange, 500);
      
     
      
    return (
        <>
        <Form>
        <input type='text' placeholder='Search Films' onChange={(event) => debouncedOnChange(event)}/>
        </Form>
        { !loading? <p>No Search History</p> : (film.map((item)=>(
            <FilmCard id={item.episode_id} name={item.title} key={item.title}   release_date= {item.release_date}/>
        )))} 
        
        </>
    )
}

export default Home
