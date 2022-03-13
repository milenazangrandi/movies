const apiKey = '4759e14d';
import ApiGet from '../../utils/http'

export default function OmdbapiGet(path){

    path += `&apikey=${apiKey}`;
    return ApiGet({
        domain: 'https://www.omdbapi.com',
        path
    })

}