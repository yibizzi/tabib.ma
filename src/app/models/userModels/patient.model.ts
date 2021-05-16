import { Payment } from './../Payment/payment.model';
import { MedicalRecord } from './../MedicalRecord/medical-record.model';
import { Appointment } from "../Appointment/appointment.model";
import { Doctor } from "./doctor.model";
import { User } from "./user.model";

export class Patient extends User {


    constructor(
        firstName?: string,
        lastName?: string,
        email?: string,
        age?: number,
        phoneNumber?: string,
        public appointments?: Appointment[],
        public doctors?: Doctor[],
        public medicalRecord?: MedicalRecord,
        public payments?: Payment[]) {

        super(firstName, lastName, email,  age, phoneNumber);


    }



}
