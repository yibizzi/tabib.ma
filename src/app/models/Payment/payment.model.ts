interface Receiver {

}

interface Sender {

}


export class Payment {
    
    constructor(    
        public receiver: Receiver,
        public sender: Sender,
        public date: Date,
        public amount: String,
        public description: String){

    }

    makePayment() : boolean {
        return true;
    }

    


    
}
