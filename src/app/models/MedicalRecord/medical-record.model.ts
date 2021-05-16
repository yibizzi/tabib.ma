interface Prescription {
}

interface Remarque {
}

interface ResultatLab {
}


export class MedicalRecord {

    prescriptions: Prescription[];
    remarques: Remarque[];
    resultatsLabs: ResultatLab[];

}
