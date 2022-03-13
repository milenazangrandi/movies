import Axios from 'axios';
import qs from 'qs';

export default function ApiGet({ domain, path, method, params, data }) {
	domain = !domain ? 'http://localhost:3001' : domain;

	if (!method) method = 'GET';
	if(params){
        path += `?${qs.stringify(params,{ arrayFormat: 'comma' })}`;
    }
	const AxiosConfig = {
		method,
		url: `${domain}${path}`,
	};
  
    if(data){
        Axios.data= data;
    }
	return Axios(AxiosConfig);
}
