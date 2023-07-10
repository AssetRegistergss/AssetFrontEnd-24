import { EndPoint } from 'Data/Data'
import {FunRequest} from 'funuicss/js/Fun'

export const AddData = (routeName , data)=>{
    return new Promise((resolve, reject) => {
        FunRequest.post(EndPoint + '/api/' + routeName , data).then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve("Successfully submitted")
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetData = (routeName)=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + routeName).then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetPurposes = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'purposes').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetRegions = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'regions').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetDistricts = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'districts').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetProjects = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'project-details').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetDevices = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'machine-details').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}
export const GetUsers = ()=>{
    return new Promise((resolve, reject) => {
        FunRequest.get(EndPoint + '/api/' + 'users').then((doc)=>{
            if(doc){
               resolve(doc)
            }else{
                resolve(null)
            }
        })
          .catch(err=>reject(err))
    })
}