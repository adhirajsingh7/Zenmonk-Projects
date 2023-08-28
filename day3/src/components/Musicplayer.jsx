import { useState, useEffect, useRef } from "react";
import Details from "./Details";
import Control from "./Control";

const Musicplayer = ({
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
  songs,
}) => {
  const [IsPlaying, setIsPlaying] = useState(false);

  const audioEle = useRef(null);

//   useEffect(() => {
//     if (IsPlaying) {
//       return audioEle.current.pause();
//     } else {
//       return audioEle.current.play();
//     }
//   });

  const skipSong = (fowards = true)=> {
    if(fowards) {
        setCurrentSongIndex(()=>{
            let temp = currentSongIndex
            temp++;
            if ((temp > songs.length) -1){
                temp = 0
            }
            return temp;
        });
    } else {
        setCurrentSongIndex(()=>{
            let temp = currentSongIndex
            temp--;
            if(temp < 0){
                temp = songs.length -1
            }
            return temp;
        });
    }
  }

  return (
    <>
      <div className="musicContainer">
        <h1>Music player</h1>
        <h2>Playing now</h2>
        <Details song={songs[currentSongIndex]} />
        <Control
          IsPlaying={IsPlaying}
          setIsPlaying={setIsPlaying}
        //   skipSong={skipSong}
        />
        <audio  src={songs[currentSongIndex].src} ref={audioEle} controls></audio>
        <p>
          Next up : <span>{songs[nextSongIndex].title} by {" "} {songs[nextSongIndex].artist} </span>
        </p>
      </div>
    </>
  );
}

export default Musicplayer;
