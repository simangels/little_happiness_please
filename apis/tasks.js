
// async function get_tasks() {
//     const url = 'https://0yj0wahspi.execute-api.us-east-1.amazonaws.com/default/little_happiness_please'
//     let response = await fetch(url, Headers = { "x-api-key": "knigizeFDa3nUtYphU2tH12Lrx6uSh9A9uBL9Mkm" });
//     let body = await response.json();
//     return body;
// }

import axios from 'axios';



export async function get_tasks(set_value) {
    try {

        const url = 'https://0yj0wahspi.execute-api.us-east-1.amazonaws.com/default/little_happiness_please'




        const resp = await axios.get(url, {
            headers: { "x-api-key": "knigizeFDa3nUtYphU2tH12Lrx6uSh9A9uBL9Mkm" }
        }
        );
        set_value(resp.data.body)

        return { "status": resp.status, "availability": resp.data.body };

    } catch (e) {
        console.log(e)
        if (e.response) {
            if (e.response.status === 400) {
                console.log(e.response);
                console.log(e.response.data.message);
                alert(e.response.data.message)
            }
            else if (e.response.status === 422) {
                alert('invaid inputs')
            }
        }
        else {
            console.log("88888888888")

            alert('Check your connection', 'No Internet connection',
                [{ text: 'okay' }])
            return
        }


        return { "status": 1234, "error": String(e) };

    }
}

