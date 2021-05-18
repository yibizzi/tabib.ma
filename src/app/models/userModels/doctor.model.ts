import { User } from './user.model';
import { Appointment } from './../Appointment/appointment.model';
import { Patient } from './patient.model';
import { Payment } from '../Payment/payment.model';

/**
 * Doctor public infos that are shown to patients
 */
interface PublicInfos {
    email: string,
    phone: string,
    address: string,
    mapsLocalisation: string,
    ConfirmationTax: number
}

/**
 * different types of standard properties of a doctor
 */
type DoctorAttribute = number | string | PublicInfos | Payment[] | Appointment[] | undefined | null | Function;

/**
 * Required params structure to create a new doctor
 */
interface DoctorParams {
    email?: string,
    userId?: string,
    firstName?: string,
    lastName?: string,
    age?: number,
    phoneNumber?: string,
    rating?: number,
    speciality?: string,
    description?: string,
    appointments?: Appointment[],
    appointmentsRequests?: Appointment[],
    publicContactInfos?: PublicInfos,
    payments?: Payment[],
    password?: string,

    /**
     * Added to set properties dynamically with Object.keys
     */
    [key: string]: DoctorAttribute;
}

export class Doctor extends User {


    rating: number;
    speciality: string;
    description: string;
    appointments: Appointment[];
    appointmentsRequests: Appointment[];
    publicContactInfos: PublicInfos;
    payments: Payment[];
    password: string;


    [key: string]: DoctorAttribute;

    /**
     * Custom constructor to create a new doctor.
     * Usually used for signup functions.
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param age 
     * @param phoneNumber 
     * @param speciality 
     * @param password 
     * @returns New instance containing the new doctor infos.
     */
    static newDoctor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        phoneNumber: string,
        speciality: string,
        password: string): Doctor {
        return new this({
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            phoneNumber: phoneNumber,
            speciality: speciality,
            password: password
        });
    }

    constructor(
        doctorParams: DoctorParams) {
        super(doctorParams.email, doctorParams.userId, doctorParams.firstName, doctorParams.lastName, doctorParams.age, doctorParams.phoneNumber);

        Object.keys(doctorParams).forEach(key => {
            this[key] = doctorParams[key];
        });
    }


    updateInfos(doctorParams: DoctorParams) {
        Object.keys(doctorParams).forEach(key => {
            this[key] = doctorParams[key];
        });
    }
}
