var admin = require("firebase-admin");
var serviceAccount = require("./path/clave.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movilizat-20210909-default-rtdb.firebaseio.com"
});

const registerUser = (datos={}) => {
    const { correo, pass } = datos;
    try {
        admin.auth().createUser({
            email: correo,
            emailVerified: false,
            password: pass,
            disabled: false,
        }).then((userRecord) => {
            console.log('Successfully created new user:', userRecord.uid);
            
        })
            .catch((error) => {
                console.log('Error creating new user:', error.message);
                
            });
    } catch (err) {
        console.log('Error creating new user:', err.message);
    }
}

module.exports = {
    registerUser
}