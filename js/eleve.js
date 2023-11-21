class Eleve {
    constructor(nom, prenom, classe) {
        this.name = nom;
        this.firstname = prenom;
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
        alert(`Bonjour, je suis ${this.firstname} ${this.name} en classe ${this.course} !`);
    }

    /* 
     * Ajoute une note pour une matière donnée
     * Parameters:
     * - matiere: matière impactée
     * - note: note ajoutée pour la matière concernée
     * Retours -
     */

    //ajoute des notes au tableau
    addNoteAlgo(n) {
        this.notes.algorithmique.push(n);
    }
}