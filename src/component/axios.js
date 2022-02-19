import axios from "axios";


const Axios = axios.create({
    baseURL: 'https://api-gate2.movieglu.com/',
    headers:  {
          "client": "TEST_73",
          "x-api-key":	"1mgXXAEnKalx8FxUzeOC50u4pyYFoc523hbVA4Ch",
          "authorization":	"Basic S0FCSDo0SFRhekphT2lqT0I=",
            "territory":	"IN",
          "api-version": "v200",
          "geolocation": "52.46;-1.93",
          "device-datetime": "2018-09-14T08:30:17.360Z",
          "Access-Control-Allow-Origin": "*",
        
      }
  });

  export default Axios;