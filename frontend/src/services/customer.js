import axios from 'axios'
import { createUrl, log } from '../utils/utils'




//GET:get customerById
export async function getCustomerById(customerId){
  // debugger
  const url =createUrl('/Customer/'+customerId)
  
  try{
    // get the current user's token from session storage
   //  const { token } = sessionStorage
   console.log("in GET of getCustomerById...."+ customerId)
   // create a header to send the token
    const header = {
      headers: {
        //token,
      },
    }
  //make api call using the token in the header
 const response = await axios.get(url, header) 
 console.log("response in get customerById.....")
  console.log(response)
  // debugger  
  return response;

  } catch (ex) {
    log(ex)
    return null
  }

}

// export async function getProfileDetails(id) {
//   const url = createUrl('/Customer/'+id)
//   try {
//     // make the api call using the token in the header
//     const response = await axios.get(url)
//     log(response)
//     return response
//   } catch (ex) {
//     log(ex)
//     return null
//   }
// }

export async function getAddress(id) {
  const url = createUrl('/address/'+id)
  try {
    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function updateCustomer(customerId,firstName,lastName,email,password,phone)
{
  const url =createUrl('/Customer/'+customerId)
  console.log("url ....."+ url)
  const body ={firstName,lastName,email,password,phone}

  console.log("body====")
  console.log(body)

  try {
     // wait till axios is making the api call and getting response from server
    const response = await axios.put(url, body)
    log(response.data)
    console.log( "in response of update User "+response)

    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
  
}


export async function registerCustomer(
  firstName,
  lastName,
  email,
  password,
  phone
) {
  const url = createUrl('/Customer')
  const body = {
    firstName,
    lastName,
    email,
    password,
    phone,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response)

    console.log("in user for register ...")
    console.log(response)    
    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}



export async function loginCustomer(email, password) {
  const url = createUrl('/auth/customer/signin')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    debugger
    const response = await axios.post(url, body)
    debugger
    log(response.data)
    console.log( "in response of loginUser "+response)
    console.log( response.data.email)
    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}





const API_BASE_URL = 'https://localhost:8080'; // Replace with your actual API URL


export const addAddress = async (address) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addresses`, {
     address
    });

    if (response.status === 201) {
   
      return response.data;
    } else {
    
      return null;
    }
  } catch (error) {
  
    console.error('Error adding address:', error);
    return null;
  }
};