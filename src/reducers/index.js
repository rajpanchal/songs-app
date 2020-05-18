import { combineReducers } from "redux";
//REDUCER = DATA of State
const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4.05" },
    { title: "rarara", duration: "2.15" },
    { title: "ssssssf", duration: "3.45" },
    { title: "Nodgggg", duration: "4.44" }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectSongReducer
});
