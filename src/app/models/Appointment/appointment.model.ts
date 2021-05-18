import { Doctor } from './../userModels/doctor.model';
import { Patient } from './../userModels/patient.model';

interface Creaneau {
    date: Date,
    length: number
}
export class Appointment {

    appointmentId: string;

    patientId: string;
    doctorId: string;
    date: Date;
    length: number;
    prescription: string;
    price: number;


    [key: string]: string | Date | number | undefined | null | Function;

    constructor(appointmentParams: {
        appointmentId?: string,
        patientId?: string,
        doctorId?: string,
        date?: Date,
        length?: number,
        prescription?: string,
        price?: number,

        [key: string]: string | Date | number | undefined | null | Function;
    }) {

        Object.keys(appointmentParams).forEach(key => {
            this[key] = appointmentParams[key];
        });

    }


    changeCreaneau(creaneau: Creaneau) {
        this.date = creaneau.date;
        this.length = creaneau.length;
    }

    cancelAppointment() {

    }

    saveAppointment() {

    }

}
