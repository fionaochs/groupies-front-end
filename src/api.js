import request from "superagent";

export const getConcerts = () => request.get(`https://vast-ravine-67223.herokuapp.com/api/concerts`);

export const getConcert = (id) => request.get(`https://vast-ravine-67223.herokuapp.com/api/concerts/${id}`);