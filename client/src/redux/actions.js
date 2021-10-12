export const ALL_COUNTRIES = "ALL_COUNTRIES";

export function AllCountries(){
    return function(dispatch) {
        fetch("http://localhost:3001/countries")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: ALL_COUNTRIES, payload: data})
            })
    }
}