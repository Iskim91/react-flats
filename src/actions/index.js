import flats from '../data/flats';

export default function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  };
}
