let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
}

// Hinweis: https://www.w3schools.com/js/js_object_properties.asp


// Output 'Geheimnisse'
console.log(unserLager.schrank['Obere Schublade']['Ordner2'])

// Output 'Cola'
console.log(unserLager.schrank['Untere Schublade'])

// Output 'Hefter'
console.log(unserLager.schreibtisch['schublade'])