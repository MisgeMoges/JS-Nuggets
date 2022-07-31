//fetching data from the api built in the data base 

const getTours = async () =>{

    try {
        const response = await fetch(url);
        
        if(!response.ok){
            const msg = `There was an error ${response.status} ${response.statusText}`
            throw new Error(msg)
        }

        console.log(response);
    
    } catch (error) {
        console.log(error)
        
    }
}
const btn = document.querySelector(".btn");

btn.addEventListener("click", getTours)








console.log(getTours().then())







