import { Doctor } from './../userModels/doctor.model';
import { Patient } from './../userModels/patient.model';

interface Facture {
    price: number
}

interface Creaneau {
    date: Date,
    length: number
}
export class Appointment {

    patient: Patient;
    doctor: Doctor;
    date: Date;
    length: number;
    facture: Facture;


    changeCreaneau(creaneau: Creaneau){
        this.date = creaneau.date;
        this.length = creaneau.length;
    }

    cancelAppointment(){

    }

    saveAppointment(){
        
    }

}
