import { Payment } from './../Payment/payment.model';
import { MedicalRecord } from './../MedicalRecord/medical-record.model';
import { Appointment } from "../Appointment/appointment.model";
import { Doctor } from "./doctor.model";
import { User } from "./user.model";


/**
 * different types of standard properties of a patient
 */
type PatientAttributeType = number | string | Payment[] | Appointment[] | Doctor[] | MedicalRecord | undefined | null | Function;

/**
 * Required params structure to create a new patient
 */
interface PatientParams {
    email: string,
    userId?: string,
    firstName?: string,
    lastName?: string,
    age?: number,
    phoneNumber?: string,
    appointments?: Appointment[],
    doctors?: Doctor[],
    medicalRecord?: MedicalRecord,
    payments?: Payment[]
    password?: string,

    /**
     * Added to set properties dynamically with Object.keys
     */
    [key: string]: PatientAttributeType;
}


export class Patient extends User {


    appointments: Appointment[];
    doctors: Doctor[];
    medicalRecord: MedicalRecord;
    payments: Payment[]
    password: string;
    [key: string]: PatientAttributeType;

    /**
     * Custom constructor to create a new patient.
     * Usually used for signup functions.
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param age 
     * @param phoneNumber 
     * @param speciality 
     * @param password 
     * @returns 
     */
    static newPatient(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        phoneNumber: string,
        password: string): Patient {
        return new this({
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            phoneNumber: phoneNumber,
            password: password
        });
    }


    constructor(PatientParams: PatientParams) {

        super( PatientParams.email, PatientParams.userId, PatientParams.firstName, PatientParams.lastName, PatientParams.age, PatientParams.phoneNumber);
        Object.keys(PatientParams).forEach(key => {
            this[key] = PatientParams[key];
        });

    }


    updateInfos(doctorParams: PatientParams) {
        Object.keys(doctorParams).forEach(key => {
            this[key] = doctorParams[key];
        });
    }



}
