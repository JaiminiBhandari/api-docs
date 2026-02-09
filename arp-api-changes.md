# Deposit 

- create deposit : instead of referenceId add bankName.
- When creating a deposit request for USDT or USDC via Postman, even after adding the fields currency, amount, and bankName in the request body, the deposit request is still created for USDT/USDC instead of requiring the currency and network fields specific to USDT or USDC.
- When creating a deposit request, even if you add any bank name such as "bankName": "ABC", the deposit request is still created.


# Recipient 

- create recipient : remove senderId 
- get recipients : remove senderId
- Simulate transaction status : remove this api
- Delete Recipient : remove this api
- When requesting “Get recipient by ID”, it returns all recipients instead of returning the recipient for the specified ID.
- When creating a recipient for the Philippines, using the channel name with capitalization such as "channel": "bananaPay" or "channel": "BananaPay" results in an “Invalid option” error. However, when the channel is provided in lowercase as "bananapay", the recipient is created successfully. - PHL
- When creating a recipient for ARE and SAU, even if an incorrect bankCode is entered, the recipient is still created successfully. This should not happen. The system should validate the bankCode and return an appropriate error message when an invalid bankCode is provided.

# Transaction

- Get exchange rate quote : created without senderId, created with recipientId
- Simulate transaction status : remove this api
- Execute transaction : Used recipientId instead of senderId