const dataFetch =async () =>{
    const URL = "https://rickandmortyapi.com/api/character"
    const response = await fetch(URL).then(response => response.json());
    return response;

}


export default dataFetch