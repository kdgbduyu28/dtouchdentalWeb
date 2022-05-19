import axios from 'axios';

export default function emailPWSignIn(userCredential) {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/api/signin',
        data: userCredential
    }).then((response) => console.log(response) )

}