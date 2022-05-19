import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function signin(req, res) {
    const userEmail = req.body.email;
    const userPW = req.body.password;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPW).then(
        (userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });



    const request = req.body;
    res.json(request);


};