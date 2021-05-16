import { User } from './user.model';
import { Appointment } from './../Appointment/appointment.model';
import { Patient } from './patient.model';
import { Payment } from '../Payment/payment.model';

interface PublicInfos {
    email: string,
    phone: string,
    address: string,
    mapsLocalisation: string,
    ConfirmationTax: number
}
export class Doctor extends User{

    constructor(
        firstName?: string,
        lastName?: string,
        email?: string,
        age?: number,
        phoneNumber?: string,
        public rating?: number,
        public speciality?: string,
        public description?: string,
        public appointments?: Appointment[],
        public appointmentsRequests?: Appointment[],
        public publicContactInfos?: PublicInfos,
        public payments?: Payment[]){
            super(firstName, lastName, email, age, phoneNumber);
    }


    updateInfos(){

    }
}
