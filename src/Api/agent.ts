import axios, { AxiosError, AxiosResponse ,AxiosRequestConfig} from "axios";
import { getItem } from "../hooks/useCookies";
import { IAccessLogin } from "../Model/Dto/accessLogin";
import { GenericPostList, IPostSingle } from "../Model/Dto/genericlist";




axios.defaults.baseURL = "https://demoblog.afeagroup.com";

axios.interceptors.request.use((config:AxiosRequestConfig) => {
    const token = "Bearer "+getItem('agent');
    
    if (token ) config.headers = {...config.headers,Authorization:token,
      ['X-Auth-Key']:'659863952851d5e511af541e55627c18', 
       ['Content-Type']:'application/x-www-form-urlencoded'};
     

    return config;
  });
  


  axios.interceptors.response.use(
    async (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { data, status, statusText } = error.response!;
    
      switch (status) {
        case 400:
          console.log(data);
          if (typeof data === "string") {
            console.log(statusText);
          }
  
          break;
  
        case 404:
          console.log(data);
  
          break;
          case 409 :
            
            break;
        case 500:
          console.log(data);
  
          break;
      }
      return Promise.reject(error);
    }
  );
  const responseBody = <T>(response: AxiosResponse<T>) => response.data;

  const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) =>
      axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
  };
  


    interface Login {
      username: string;
      password: string;
    }
  interface IRegister extends Login{
    passconf:string
  }
    const Auth = {
      login: (body: Login) =>
      requests.post<IAccessLogin>("/user/login", body),
      register: (body: IRegister) =>
      requests.post<IAccessLogin>("/user/login", body),
    }

    const Post = {
      list: (limit=10, start=0, search="")=> requests.get<GenericPostList<{id:number,title:string, image:string|null, tags:string,created_at:Date}[]>>(`/post?limit=${limit}&start=${start}&search=${search}`),
      single: (post_id:number)=> requests.get<GenericPostList<IPostSingle>>(`/post/detail?post_id=${post_id}`),


    }

    
  
  const agent = {
    Auth,
    Post
  }

  export default agent;