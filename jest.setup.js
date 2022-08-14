// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { getEnviroments } from './src/helpers/getEnviroments';


require('dotenv').config({
    path:'.env.test'
})

jest.mock('./src/helpers/getEnviroments',()=>({
getEnviroments:()=>({...process.env})
}))

