Create recipient for IND INDIVIDUAL

{
    "type": "INDIVIDUAL",
    "country": "IND",
    "verificationInfo": {
        "firstName": "Alice",
        "lastName": "Luis",
        "email": "haidiso294@gmail.com",
        "phone": "7894561230"
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "5000044048",
                "ifscCode": "HDFC0001234",
                "bankName": "AXIS BANK",
                "accountHolderName": "Alice Luis",
                "branch": "Thaltej"
            }
        }
    ]
}

Create recipient for IND BUSINESS

{
    "type": "BUSINESS",
    "country": "IND",
    "verificationInfo": {
        "businessName": "Alice",
        "email": "hariso294@gmail.com",
        "phone": "123561230"
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "5000044048",
                "ifscCode": "HDFC0001234",
                "bankName": "AXIS BANK",
                "accountHolderName": "Alice Luis",
                "branch": "Motera"
            }
        }
    ]
}


Create recipient for PHL INDIVIDUAL 

{
    "type": "INDIVIDUAL",
    "country": "PHL",
    "verificationInfo": {
        "firstName": "John",
        "lastName": "Dhon"
    },
    "paymentMethods": [
        {
             "type": "PESONET",
            "metadata": {
                "channel":"bdo",
                "name": "Queen Smith",
                "accountNumber": "78945678923455"
            }
        }
    ]
}

Create recipient for PHL BUSINESS

{
    "type": "BUSINESS",
    "country": "PHL",
    "verificationInfo": {
        "businessName":"PHL Enterprises"
    },
    "paymentMethods": [
        {
             "type": "PESONET",
            "metadata": {
                "channel":"bdo",
                "name": "Queen Smith",
                "accountNumber": "123456789123456"
            }
        }
    ]
}


Create recipient for HKG INDIVIDUAL 


{
    "type": "INDIVIDUAL",
    "country": "HKG",
    "verificationInfo": {
        "firstName": "Alice",
        "lastName": "Luis",
        "middleName": "Smith",
        "legalFullName": "Alice Smith Luis"
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "10298884756",
                "bankName": "Emirates NBD",
                "city":"Alabasta",
                "clearingCode": "007",
                "country":"HK",
                "postalCode":"999557",
                "state": "WestBlue",
                "street":"Queens Road Central"
            }
        }
    ]
}


Create recipient for UAE INDIVIDUAL

{
    "type": "INDIVIDUAL",
    "country": "ARE",
    "verificationInfo": {
       "fullName": "Ahmed Ai" 
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "AE070331234567890123456",
                "bankName": "Arab Bank",
                "fullName":"Ahmed Ai Saud",
                "bankCode": "EBILAEADXXX"
            }
        }
    ]
}


Create recipient for UAE BUSINESS


{
    "type": "BUSINESS",
    "country": "ARE",
    "verificationInfo": {
       "businessName": "UAE Business Corp" 
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "AE070331234567890123456",
                "bankName": "Arab Bank",
                "fullName":"Ahmed Ai Saud",
                "bankCode": "EBILAEADXXX"
            }
        }
    ]
}


Create recipient for SAU INDIVIDUAL


{
    "type": "INDIVIDUAL",
    "country": "SAU",
    "verificationInfo": {
       "fullName": "Fatima Hussain" 
    },
    "paymentMethods": [
        {
             "type": "BANK_ACCOUNT",
            "metadata": {
                "accountNumber": "SA0380000000608010167519",
                "bankName": "STCJ",
                "fullName":"Ahmed Ai Mansoori",
                "bankCode": "STCJ"
            }
        }
    ]
}
