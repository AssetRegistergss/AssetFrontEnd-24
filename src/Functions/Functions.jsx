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