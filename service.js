var admin = require("firebase-admin");
var serviceAccount = require("./path/clave.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movilizat-20210909-default-rtdb.firebaseio.com"
});

const registerUser = async (request, response) => {
    const { email, password } = request.body;
    try {
        admin.auth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            disabled: false,
        }).then((userRecord) => {
            console.log('Successfully created new user:', userRecord.uid);
            response.status(200).json({ error: userRecord.uid });
        })
            .catch((error) => {
                console.log('Error creating new user:', error.message);
                response.status(201).json({ error: error.message });
            });
    } catch (err) {
        response.status(401).json({ error: err.message });
    }
}

module.exports = {
    registerUser
}