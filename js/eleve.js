class Eleve {
    constructor(nom, prenom, classe) {
        this.name = nom;
        this.firstName = prenom;
        this.course = classe;
        this.notes = {
            maths: [],
            algorithmique: [],
            javascript: []
        };
    }

    // ---------------------------- etape 3-----------------------------

    //envoi une alert comprenant trois paramètres
    bonjour() {
        alert(`Bonjour, je suis ${this.firstName} ${this.name} en classe ${this.course} !`);
    }

    //ajoute des notes au tableau
    addNoteAlgo(n) {
        this.notes.algorithmique.push(n);
    }
}