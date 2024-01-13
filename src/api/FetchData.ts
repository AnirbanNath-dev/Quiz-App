export const FetchData = async  (url : string , ) =>{

    try {
        
        const response = await fetch(url);
        const data = response.json();
        return data;

    } catch (error) {
        console.log("error in fetching data")
        throw error
    }
    

}