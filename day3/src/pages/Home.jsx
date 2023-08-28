import { useEffect, useState } from "react";
import Musicplayer from "../components/Musicplayer";
import Playlist from "../components/Playlist";

const Home =()=>{

    const [songs] = useState([
        {
            title : "Bachalo",
            artist : "Akhil",
            img_src : "https://picsum.photos/seed/picsum/200/300",
            src : "Akhilsong.mp3"
        },
        {
            title : "Cheques",
            artist : "Shubh",
            img_src : "https://picsum.photos/seed/picsum/200/300",
            src : "Cheques.mp3"
        },
        {
            title : "Ice",
            artist : "Shubh",
            img_src : "https://picsum.photos/seed/picsum/200/300",
            src : "Ice.mp3"
        },
    ])

    const [currentSongIndex ,setCurrentSongIndex] = useState(0);
    const [nextSongIndex ,setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(()=>{
        if(currentSongIndex+1 > songs.length - 1){
            return 0;
          }
          else{
            return currentSongIndex+1;
          }
      } ) 
    }, [currentSongIndex , songs.length])
    


    return(
        <>
        <h1>Home</h1>
        <Musicplayer
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
        />
        <Playlist songs={songs}/>
        </>
    )
}

export default Home;