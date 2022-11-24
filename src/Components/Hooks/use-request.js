import { useCallback, useState } from "react";

const useRequest = () => {
    const [isListLoading, changeLoadingState] = useState(false);
    const [requestEncounteredError, changerequestErrorState] = useState(false);
    const fetchData = useCallback(async (dataRef = 'meals', processData = null, requestOptions = null) => {
        changeLoadingState(true);
        changerequestErrorState(false);
        let url = 'https://testproject-2803f-default-rtdb.firebaseio.com/' + dataRef + '.json';
        try{
            const response =  await fetch(url, requestOptions);
            if(!response.ok)
            {
                throw new Error("Error "+response.status);
            }
            const data =  await response.json();
            if(!requestOptions)
            {
                processData(data);
            }
        }
        catch(error)
        {
            changerequestErrorState(true)
        }
        changeLoadingState(false);
    }, []);
    return [isListLoading, requestEncounteredError ,fetchData];
}

export default useRequest;