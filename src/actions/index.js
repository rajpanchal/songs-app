//NAMED EXPORT
export const selectSong = song => {
  //Return An Action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
