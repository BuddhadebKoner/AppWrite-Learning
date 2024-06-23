import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'

// Original Project ID
export const PROJECT_ID = '6675aad5003b83473035' 

// Domy Project ID for testing
// export const PROJECT_ID = '6675aad5003b83473031'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    


    // export the clint endpoint
export const account = new Account(client);

export default client;