---
title: Webservices 3.0 Integration

language_tabs:
  - json: JSON
  - shell: cURL
   
toc_footers:
    - <a href='/Guia-de-migracao-1.5x3.0/'>Guia de migração da API 1.5 para a 3.0</a>
    - <a href='/Checkout-Boleto-e-Debito/'>Manual de Boleto e débito online</a>
    - <a href='/Habilitacao-meios-de-pagamento/'>Manual de Boleto e débito online</a>
    - <a href='/Boas-praticas-de-eCommerce/'>Boas práticas de eCommerce</a>

search: true
---

# Webservices 3.0 Integration

The purpose of this documentation is to orientate the developer about how integrate with Cielo Webservice 3.0, describing its functionalities, the methods to be used, list information to be sent and received and Provide examples.

The integration mechanism with Cielo E-commerce is simple, it’s only necessary to have an intermediate knowledge in programming language for Web, HTTP / HTTP requisitions and handling JSON archive to implant Cielo E-commerce solution with success.

In this manual you will find the reference about all operations available on REST Web services API of 3.0. These operations must be Performed using a specific key in their environments:

Production environment:

* **Request of transaction**: https://api.cieloecommerce.cielo.com.br/
* **Query a transaction**: https://apiquery.cieloecommerce.cielo.com.br/

Sanbox environment:

* **Request of transaction**: https://apisandbox.cieloecommerce.cielo.com.br
* **Query a transaction**: https://apiquerysandbox.cieloecommerce.cielo.com.br

To perform this operation, combine the base URL of Sandbox environment with the URL of the requested operation and send it using the HTTP verb, as described in the operation.

## Cielo Support

After reading this documentation, if you still have questions (technical or not), you can check Cielo technical support 24 hours per day, 7 days of week, in Portuguese and English, in the following contacts:

* +55 4002-9700 - *Capitals and Metropolitan regions*
* +55 0800-570-1700 - *Others localities*
* +55 11 2860-1348 - *International*
    * Option 1: *Technical support*
    * Option 2: *E-commerce credential*
* Email: [cieloecommerce@cielo.com.br](mailto:cieloecommerce@cielo.com.br)

## Glossary

To facilitate the understanding, we listed below the small glossary with the main terms related to e-commerce, card acquiring market and services:

* **Authentication**: process to ensure que the buyer is really who says that he(she) is (authentic holder), generally it happens at the issuing bank using the digital token or security key card.
* **Authorization**: process to verify if the purchase can be realized or not with the card. In this moment several verification are done with the card and the holder (funds availability, blocked account, blockades, etc.), It's also at this moment that the card limit is cross-checked with the transaction value.
* **Cancellation**: process to cancel the purchase realized with card.
* **Capture**: process to confirm the authorization que realized previously. Only after the capture, the cardholder can check this in his bank statement or invoice.
* **Key access**: it's a specific secure code for each store, created by Cielo, and used to realized an authentication and communication in all messages exchanged with Cielo. It's also known as production and key data key.
* **Buyer**: who effectives purchase at the online store.
* **Emitter (or Issuing Bank)**: it's the financial institution which issues credit card, debt or voucher.
* **Commercial establishment or EC**: entity responsible for online store.
* **Payment gateway**: company responsible for technical integration and for processing transactions.
* **Credential number**: it's an identifier number that the retailer receives after registered at Cielo.
* **Holder**: It's the person who carries the card in the moment of purchase.
* **Security Code**: international program of MasterCard to allow the buyer authentication in the moment of purchase in e-commerce environment.
* **TID (Transaction identifier)**: a code composed by 20 characters that identifies only the Cielo e-commerce transactions.
* **Transaction**: it's the purchase order to cardholder at Cielo.
* **VBV (Verified by Visa)**: International Program at Visa that allows the buyer authentication at the moment of purchase in e-commerce environment.

# Extended Validation Certificate

## What is SSL Certificate?

The Extended Validation Certificate for web server offers authenticity and integrity of data from a web site, provides customers of virtual stores the guarantee that they are actually accessing the site they want, and not a fraudster site.

Specialized companies are responsible for making domain validation and depending on the type of certificate, also the owner of the domain entity.

## What is EV SSL Certificate?

The EV Certificate was released in the market recently and ensures a higher level of security for customers of online stores.

It is a certificate of greater confidence and when https is accessed, the address bar turns green, giving more reliability to site visitors.

### Internet Explorer:

![Certificado EV Internet Explorer](./images/certificado-ie.jpg)

### Firefox

![Certificado EV Firefox](./images/certificado-firefox.jpg)

### Google Chrome

![Certificado EV Google Chrome](./images/certificado-chrome.jpg)

## How to install the Extended Validation Certificate in the shop server?

You just need to install the three following files on the Trustedstore server. Cielo does not support the installation of the certificate. If you are unsure on how to perform install the EV Certificate, then you should contact your server vendor support.

* [Root Certificate](./attachment/Raiz.crt)
* [Intermediate Certificate](./attachment/Intermediaria.crt)
* [E-Commerce Cielo Certificate](./attachment/ecommerce.cielo.com.br.crt)

<aside class="notice">If your server is a Linux distribution and you have familiarity and ssh access, then <a href="./attachment/cielo.sh">the Linux Installer - cielo.sh</a> can help you with the installation. Only use the installer if you know what you're doing. When in doubt, contact your server vendor support.</aside>

## Step by Step Installation

### INSTALLATION ON THE SERVER OF ONLINE STORE

To install the EV Certificate you shall contact your server vendor support.

<aside class="warning">Cielo does not support the installation of the certificate.</aside>

### CUSTOMER ACCESS TO ONLINE STORE

Normally, the browser makes a Certificate update automatically, in  case of failure and client contacted you to inform it, follow the steps:

#### 1st STEP:

Save the three files below into a new folder, or recall easily to be used later:

* [Root Certificate](./attachment/Raiz.crt)
* [Intermediate Certificate](./attachment/Intermediaria.crt)
* [E-Commerce Cielo Certificate](./attachment/ecommerce.cielo.com.br.crt)

#### 2nd STEP:

In the "Internet Explorer", click on "Tools" menu and access the "Internet Options":

![Instalar IE](./images/certificado-instalar-ie-1.jpg)

In the "Firefox" browser, click on "Open Menu" and go to "Advanced" and "Options":

![Instalar FF](./images/certificado-instalar-ff-1.jpg)

In "Chrome", click on  "Customize and control Google Chrome" and go to "Settings" and "Show advanced settings ..." “Change Proxy Settings” and "Content" and Certificates:

![Instalar GC](./images/certificado-instalar-gc-1.jpg)

#### 3rd STEP:

In Internet Explorer, on "Certificates", click "Import".

![Instalar IE](./images/certificado-instalar-ie-2.jpg)

In Firefox click "View Certificates", click "Import"

![Instalar FF](./images/certificado-instalar-ff-2.jpg)

In Chrome click "Manage Certificates", click "Import"

![Instalar GC](./images/certificado-instalar-gc-2.jpg)

#### 4th STEP:

In Internet Explorer and in Chrome, "Certificate import wizard", click "Next"

![Instalar IE e GC](./images/certificado-instalar-ie-gc-3.jpg)

![Instalar IE e GC](./images/certificado-instalar-ie-gc-4.jpg)

In Firefox "Abba servers," click "Import"

![Instalar FF](./images/certificado-instalar-ff-3.jpg)

#### 5th STEP:

In Chrome and Internet Explorer "Certificate Import Assistent", click "Browse", find the folder where the files are and select the file "ecommerce.cielo.com.br.crt, click" Open "and then" Advance".

![Instalar IE e GC](./images/certificado-instalar-ie-gc-5.jpg)

![Instalar IE e GC](./images/certificado-instalar-ie-gc-6.jpg)

#### 6th STEP:

Select the desired option: add the certificate in a default folder or browse to the folder of your choice.

![Instalar IE e GC](./images/certificado-instalar-ie-gc-7.jpg)

#### 7th STEP:

Click "Finish".

![Instalar IE e GC](./images/certificado-instalar-ie-gc-8.jpg)

#### 8th STEP:

Click "Ok" to complete the import.

![Instalar IE e GC](./images/certificado-instalar-ie-gc-9.jpg)

<aside class="notice">At Firefox does not appear the message “Import Successfully”, it just completes the import.</aside>

The certificate can be viewed in the default tab "Others" or chosen by the customer.

#### 9th STEP:

Repeat the same procedure for the 3 uploaded files.

### Questions:

If you have questions at any stage or other technical information, contact the Support Web Cielo e-Commerce in the following channels:

* **Email:** [cieloecommerce@cielo.com.br](mailto:cieloecommerce@cielo.com.br)
* **Metropolitan region:** 4002-9700
* **Other Cities:** 0800 570 1700

Hours: 24 hours a day, 7 days a week.

# Overview

In this manual will be presented an overview of Cielo E-commerce and the technical mechanism on the integration REST format.

For all purchase orders, the goal is convert it in a sale. A sale using a card can be characterized in **an authorized and captured transaction**.

<aside class="warning">An authorized transaction only creates credit to the retailer if it can be captured (or confirmed).</aside>

## Solutions characteristics:

The Webservice 3.0 at Cielo E-commerce platform was developed based on REST technology, the market pattern and independent of technologies used by our customers. In this way, it's possible to integrate it by using the various programing languages, like: ASP, ASP.NEt, Java, PHP, Ruby, Python, etc.

Among others characteristics, the most highlighted attributes of Cielo e-commerce platform are:

* **No proprietary application**: it's not necessary to install application at online store environment in no case.
* **Simplicity**: the HTTP protocol is used purely.
* **Testing facility**: Cielo's platform offers a Sandbox environment with public access, which allows the developer to create a test account without credential, facilitating and speeding up the start of integration.
* **Credential**: the handling of client credentials (membership number and access key) travels in the message header of the HTTP request.
* **Security**: the information exchange always happens between the Store Server and Cielo, in other words, without the buyer's browser.
* **Multiplatform**: the integration is realized through the Web Service REST.

## Architecture

The integration is realized through the services available as Web Services. The model employed is quite simple: there are two URL (endpoint), one that specifies operations that causes side effects - such as authorization, capture and cancellation transactions and another URL specific to the operations that not cause side effects, such as transaction research .

These two URLs will receive the messages through the HTTP POST, GET or PUT methods. Each kind of message must be sent for an identified source through the path.

* **POST** - The HTTP POST method is used at creation of resource or sending information to be processed. For example, when creating the transaction.
* **PUT** - The HTTP PUT method is used for updating the resource already created. For example, to capture or cancel the transaction previously authorized.
* **GET** - The HTTP GET method is used for consult resources already created. For example, query transactions.

## Sandbox

During the tests to Facilitate integration, Cielo offers a Sandbox environment which is composed by two areas:

1. Registration account test
2. Endpoints to requisition

    * **Creation / Changes of transactions**: https://apisandbox.cieloeommerce.cielo.com.br 
    * **Transaction consult**: https://apiquerysandbox.cieloecommerce.cielo.com.br/

It's not necessary to be a member to use Cielo 'Sandbox. You only need to access [Sandbox Registry](https://cadastrosandbox.cieloecommerce.cielo.com.br/) and create a test account. At the end of registration, you will receive a 'MerchantID' and the 'MerchanKey', that should be used to authenticate all the requests done for the endpoint of API.

### Mock payment method 

The mock is a payment method that emulates the use of credit card payment. With this payment method is possible to simulate all the Authorization, Capture and Cancellation streams.
 
For better use of Mock Payment Method, we are providing test cards on the table below.
 
The status of the transaction will be as the use of each card.

|Transaction Status|Cards for performing the tests|Return Code|Return message|
|-------------------|----------------------------------|-----------------|-------------------|
|Authorized|0000.0000.0000.0001 / 0000.0000.0000.0004|4|Operation was successful|
|Not authorized|0000.0000.0000.0002|2|Not authorized|
|Authorization Random|0000.0000.0000.0009|4/99|Successful Operation/Time Out|
|Not authorized|0000.0000.0000.0007|77|Card Cancelled|
|Not authorized|0000.0000.0000.0008|70|Problems with Credit Card|
|Not authorized|0000.0000.0000.0005|78|card locked|
|Not authorized|0000.0000.0000.0003|57|Card Expired|
|Not authorized|0000.0000.0000.0006|99|Time Out|

The information Cód.Segurança (CVV) and validity can be random, keeping the format - CVV (3 digits) Expiration (MM/YYYY).

# Credit Card Payments

For the better use of all the features available in our API, first of all, it is important to know the concepts involved in processing a credit card transaction.

* **Authorization**: The authorization (or pre-authorization) is the main operation in e-commerce, because through it is the sale can be achieved. The pre-authorization only sensitizes the client threshold but still generates no charge to the consumer.
* **Capture**: When performing a pre-authorization, confirmation of this so that recovery is effected the cardholder is required. This operation become pre-authorization effective, which may be executed in usually within 5 days after the date of pre-authorization.
* **Cancellation**: The cancellation is necessary when, for any reason, someone doesn’t want effect a sale anymore. In the case of a pre-authorization, cancellation will release the limit of the card that was sensitized at the pre-authorization. When the transaction is already captured or for an Authorization, the cancellation will undo the sale, but must be executed until 23:59:59 from the authorization/capture date.
* **Authentication**: The authentication process allows making a sale which will pass for the card-issuing bank authentication process. This process brings more security to the sale and transfers the risk of fraud to the bank.
* **Protected card**: It is a platform that enables the secure storage of sensitive credit card data. These data are processed in an encrypted code called as "token," which may be stored in the database. With the platform, the store might offer features such as "Buy with one click" and "retry transaction sending", while preserving the integrity and confidentiality of information.
* **Anti-Fraud**: It is a platform for the prevention of fraud which provides a detailed risk analysis of online shopping. Each transaction is subjected to more than 260 rules, in addition to the specific rules of each segment, and generate a risk recommendation in about two seconds. This process is completely transparent to the cardholder. According to the established criteria, the application can be automatically accepted, refused or referred for manual analysis.
* **Recurrent**: The Recurrence Smart is an indispensable resource for establishments
that need to regularly charge for their products/services. It is widely used for magazine subscriptions, fees, software licenses, among others. Retailers will have different features to model their collection according to their business, because every parameter, such as frequency, start and end date, number of attempts, time between them, among others are configurable.

## Creating a simple transaction

To create a transaction that uses credit card, you must send a request using the POST method to the Payment feature, as shown. This sample includes a minimum courses required to be sent for authorization.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{
   "MerchantOrderId":"2014111703",
   "Customer":{
      "Name":"Comprador Crédito Simples"
   },
   "Payment":{
     "Type":"CreditCard",
     "Amount":15700,
     "Provider":"Simulado",
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "CreditCard":{
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"12/2021",
         "SecurityCode":"123",
         "Brand":"Visa"
     }
   }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "MerchantOrderId":"2014111703",
   "Customer":{  
      "Name":"Comprador crédito simples"
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":15700,
     "Installments":1,
     "SoftDescriptor":"123456789ABCD", 
     "CreditCard":{  
         "CardNumber":"4551870000000183",
         "Holder":"Teste Holder",
         "ExpirationDate":"12/2021",
         "SecurityCode":"123",
         "Brand":"Visa"
     }
   }
}
--verbose
```

|Property|Type|Size|Mandatory|Description|
|--------|----|----|---------|-----------|
|`MerchantId`|Guid|36|Yes|Store identifier in Cielo.|
|`MerchantKey`|Text|40|Yes|Public key for Double Authentication Cielo.|
|`RequestId`|Guid|36|No|Request identifier, used when the merchant uses different servers for each GET/POST/PUT.|
|`MerchantOrderId`|Text|50|Yes|The request identification number.|
|`Customer.Name`|Text|255|No|Buyer's name.|
|`Payment.Type`|Text|100|Yes|Payment Method type.|
|`Payment.Amount`|Number|15|Yes|Order value (to be sent in cents).|
|`Payment.Provider`|Text|15|---|Payment Method name/NOT MANDATORY FOR CREDIT|
|`Payment.Installments`|Number|2|Yes|Number of installments.|
|`CreditCard.CardNumber`|Text|16|Yes|Buyer's card number.|
|`CreditCard.Holder`|Text|25|Yes|Buyer's name printed on the card.|
|`CreditCard.ExpirationDate`|Text|7|Yes|Date of expiration printed on the card.|
|`CreditCard.SecurityCode`|Text|4|Yes|Security code printed on the back of the card.|
|`CreditCard.Brand`|Text|10|Yes|Card issuer (Visa / Master / Amex / link / Aura / JCB / Diners / Discover).|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador crédito simples"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "Tid": "0305023644309",
        "AuthorizationCode": "123456",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Operation Successful",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador crédito simples"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "Tid": "0305023644309",
        "AuthorizationCode": "123456",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Operation Successful",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```


|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the bank carrier invoice - Available only for VISA/MASTER - does not allow special characters|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ECI`|Electronic Commerce Indicator. It is how safe is a transaction.|Text|2|Examples: 7|
|`Status`|Transaction Status.|Byte|-|2|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Creating a complete transaction

To create a transaction using a credit card, you must send a request using the POST method to the Payment feature as shown. This example includes all possible fields that can be sent.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
   "MerchantOrderId":"2014111701",
   "Customer":{  
      "Name":"Comprador crédito completo",
      "Email":"compradorteste@teste.com",
      "Birthdate":"1991-01-02",
      "Address":{  
         "Street":"Rua Teste",
         "Number":"123",
         "Complement":"AP 123",
         "ZipCode":"12345987",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
        "DeliveryAddress": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":15700,
     "Currency":"BRL",
     "Country":"BRA",
     "Provider":"Simulado",
     "ServiceTaxAmount":0,
     "Installments":1,
     "Interest":"ByMerchant",
     "Capture":true,
     "Authenticate":false,
     "SoftDescriptor":"123456789ABCD",
     "CreditCard":{  
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"12/2021",
         "SecurityCode":"123",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "MerchantOrderId":"2014111701",
   "Customer":{  
      "Name":"Comprador crédito completo",
      "Identity":"11225468954",
      "IdentityType":"CPF",
      "Email":"compradorteste@teste.com",
      "Birthdate":"1991-01-02",
      "Address":{  
         "Street":"Rua Teste",
         "Number":"123",
         "Complement":"AP 123",
         "ZipCode":"12345987",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
        "DeliveryAddress": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":15700,
     "ServiceTaxAmount":0,
     "Installments":1,
     "Interest":"ByMerchant",
     "Capture":true,
     "Authenticate":false,
     "SoftDescriptor":"123456789ABCD",
     "CreditCard":{  
         "CardNumber":"4551870000000183",
         "Holder":"Teste Holder",
         "ExpirationDate":"12/2021",
         "SecurityCode":"123",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
--verbose
```

|Property|Type|Size|Mandatory|Description|
|--------|----|----|---------|-----------|
|`MerchantId`|Guid|36|Yes|Store identifier in Cielo.|
|`MerchantKey`|Text|40|Yes|Public key for Double Authentication Cielo.|
|`RequestId`|Guid|36|No|Request identifier, used when the merchant uses different servers for each GET/POST/PUT.|
|`MerchantOrderId`|Text|50|Yes|The request identification number.|
|`Customer.Name`|Text|255|No|Buyer's name.|
|`Customer.Identity`|Text|14|No|Identification number (RG, CPF or CNPJ).| 
|`Customer.IdentityType`|Text|255|No|Type of document identification of buyer (CFP/CNPJ).|
|`Customer.Email`|Text|255|No|Email Buyer.|
|`Customer.Birthdate`|Date|10|No|Date of birth of the Purchaser.|
|`Customer.Address.Street`|Text|255|No|Purchaser's address.|
|`Customer.Address.Number`|Text|15|No|Buyer's address number.|
|`Customer.Address.Complement`|Text|50|No|Complement address Comprador.br|
|`Customer.Address.ZIP code`|Text|9|No|Purchaser’s Zip code address|
|`Customer.Address.City`|Text|50|No|Purchaser’s city address|
|`Customer.Address.State`|Text|2|No|Purchaser’ state  address|
|`Customer.Address.Country`|Text|35|No|Country address of the Purchaser.|
|`Customer.Deliveryaddress.Street`|Text|255|No|Purchaser's address.|
|`Customer.Address.Number`|Text|15|No|Buyer's address number.|
|`Customer.Deliveryaddress.Complement`|Text|50|No|Complement address of the Purchaser.|
|`Customer.Deliveryaddress.ZIP code`|Text|9|No|Purchaser’s Zip code address|
|`Customer.Deliveryaddress.City`|Text|50|No|Purchaser’s City address.|
|`Customer.Deliveryaddress.State`|Text|2|No|Purchaser’ State address|
|`Customer.Deliveryaddress.Country`|Text|35|No|Address Country of the Purchaser.|
|`Payment.Type`|Text|100|Yes|Payment Method type.|
|`Payment.Amount`|Number|15|Yes|Order value (to be sent in cents).|
|`Payment.Currency`|Text|3|No|Currency in which the payment will be made (BRL / USD / MXN / COP / CLP / ARS / PEN / EUR / PYN / UYU / VEB / VEF / GBP).|
|`Payment.Country`|Text|3|No|Parents in which payment will be made.|
|`Payment.Provider`|Text|15|---|Payment Method name/NOT REQUIRED FOR CREDIT.|
|`Payment.ServiceTaxAmount`|Number|15|Yes|Value”s amount of the authorization should be for the service charge. Obs .: This value is not added to the authorization amount.|
|`Payment.Installments`|Number|2|Yes|Number of installments.|
|`Payment.Interest`|Text|10|No|Installment type - Shop (ByMerchant) or card (ByIssuer).|
|`Payment.Capture`|Boolean|-|No (Default false)|Boolean that identifies the authorization shall be made using automatic capture.|
|`Payment.Authenticate`|Boolean|---|No (Default false)|Defines if the buyer will be directed to the issuing bank for card authentication|
|`CreditCard.CardNumber`|Text|16|Yes|Buyer's card number.|
|`CreditCard.Holder`|Text|25|Yes|Buyer's name printed on the card.|
|`CreditCard.ExpirationDate`|Text|7|Yes|Date of expiration printed on the card.|
|`CreditCard.SecurityCode`|Text|4|Yes|Security code printed on the back of the card.|
|`CreditCard.SaveCard`|Boolean|-|No (Default false)|Boolean that identifies whether the card will be saved to generate the CardToken.|
|`CreditCard.Brand`|Text|10|Yes|Card issuer (Visa/Master/Amex/Elo/Aura/JCB/Diners/Discover).|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador crédito completo",
        "Identity":"11225468954",
        "IdentityType":"CPF",
        "Email": "compradorteste@teste.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        },
        "DeliveryAddress": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": true,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "Tid": "0305020554239",
        "AuthorizationCode": "123456",
        "SoftDescriptor":"123456789ABCD",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "CapturedAmount": 15700,
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 2,
        "ReturnCode": "6",
        "ReturnMessage": "Operation Successful",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador crédito completo",
        "Identity":"11225468954",
        "IdentityType":"CPF",
        "Email": "compradorteste@teste.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        },
        "DeliveryAddress": {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": true,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "Tid": "0305020554239",
        "AuthorizationCode": "123456",
        "SoftDescriptor":"123456789ABCD",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "CapturedAmount": 15700,
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 2,
        "ReturnCode": "6",
        "ReturnMessage": "Operation Successful",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the bank carrier invoice - Available only for VISA/MASTER - does not allow special characters|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ECI`|Electronic Commerce Indicator. It is how safe is a transaction.|Text|2|Examples: 7|
|`Status`|Transaction Status.|Byte|-|2|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Creating a sale with Authentication

To create a transaction with authentication that uses credit card, you must send a request using the 'POST' method to the Payment feature as shown.

<aside class="notice"><strong>Authentication:</strong> In this mode the cardholder is directed to the bank's authentication environment card issuer where the inclusion of the password of the card will be requested.</aside>

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{
	"MerchantOrderId":"2014111903",
	"Customer":
	{
		"Name":"Comprador crédito autenticação"
	},
	"Payment":
	{
	    "Type":"CreditCard",
	    "Amount":15700,
	    "Provider":"Cielo",
	    "Installments":1,
	    "Authenticate":true,
	    "SoftDescriptor":"123456789ABCD",
	    "CreditCard":
	    {
		    "CardNumber":"1234123412341231",
		    "Holder":"Teste Holder",
		    "ExpirationDate":"12/2015",
		    "SecurityCode":"123",
		    "Brand":"Visa"
	    }
	}
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "MerchantOrderId":"2014111903",
   "Customer":{  
      "Name":"Comprador crédito autenticação"
   },
   "Payment":{  
      "Type":"CreditCard",
      "Amount":15700,
      "Installments":1,
      "Authenticate":true,
      "ReturnUrl":"http://www.cielo.com.br",
      "SoftDescriptor":"123456789ABCD",
      "CreditCard":{  
         "CardNumber":"4551870000000183",
         "Holder":"Teste Holder",
         "ExpirationDate":"12/2015",
         "SecurityCode":"123",
         "Brand":"Visa"
      }
   }
}
--verbose
```

|Property|Type|Size|Mandatory|Description|
|--------|----|----|---------|-----------|
|`MerchantId`|Guid|36|Yes|Store identifier in Cielo.|
|`MerchantKey`|Text|40|Yes|Public key for Cielo Double Authentication.|
|`RequestId`|Guid|36|No|Request identifier used when the merchant uses different servers for each GET/POST/PUT.|
|`MerchantOrderId`|Text|50|Yes|The request identification number.|
|`Customer.Name`|Text|255|No|Buyer's name.|
|`Payment.Type`|Text|100|Yes|Payment Method type.|
|`Payment.Amount`|Number|15|Yes|Order value (to be sent in cents).|
|`Payment.Provider`|Text|15|---|Payment Method name/NOT REQUIRED FOR CREDIT.|
|`Payment.Installments`|Number|2|Yup|Number of installments.|
|`Payment.Authenticate`|Boolean|-|No (Default false)|Defines if the buyer will be directed to the issuing bank for card authentication|
|`CreditCard.CardNumber.`|Text|16|Yes|Buyer's Card Number|
|`CreditCard.Holder`|Text|25|Yes|Buyer's name printed on the card.|
|`CreditCard.ExpirationDate`|Text|7|Yes|Date of expiration printed on the card.|
|`CreditCard.SecurityCode`|Text|4|Yes|Security code printed on the back of the card.|
|`CreditCard.Brand`|Text|10|Yes|Card issuer (Visa/Master/Amex/Elo/Aura/JCB/Diners/Discover).|

### Response

```json
{
	"MerchantOrderId":"2014111903",
	"Customer":
	{
		"Name":"Comprador crédito autenticação"
	},
	"Payment":
	{
		"ServiceTaxAmount":0,
		"Installments":1,
		"Interest":"ByMerchant",
		"Capture":false,
		"Authenticate":true,
		"CreditCard":
		{
			"CardNumber":"123412******1112",
			"Holder":"Teste Holder",
			"ExpirationDate":"12/2015",
			"SaveCard":false,
			"Brand":"Visa"
		},
		"AuthenticationUrl":"https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?id=c5158c1c7b475fdb91a7ad7cc094e7fe",
        "Tid": "1006993069257E521001",
        "SoftDescriptor":"123456789ABCD",
		"PaymentId":"f2dbd5df-c2ee-482f-ab1b-7fee039108c0",
		"Type":"CreditCard",
		"Amount":15700,
		"Currency":"BRL",
		"Country":"BRA",
		"ExtraDataCollection":[],
		"ReasonCode":9,
		"ReasonMessage":"Waiting",
		"Status":0,
        "ProviderReturnCode": "0",
		"Links":
		[
			{
				"Method":"GET",
				"Rel":"self",
				"Href":"https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{Paymentid}"
			}
		]
	}
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
	"MerchantOrderId":"2014111903",
	"Customer":
	{
		"Name":"Comprador crédito autenticação"
	},
	"Payment":
	{
		"ServiceTaxAmount":0,
		"Installments":1,
		"Interest":"ByMerchant",
		"Capture":false,
		"Authenticate":true,
		"CreditCard":
		{
			"CardNumber":"123412******1112",
			"Holder":"Teste Holder",
			"ExpirationDate":"12/2015",
			"SaveCard":false,
			"Brand":"Visa"
		},
		"AuthenticationUrl":"https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?id=c5158c1c7b475fdb91a7ad7cc094e7fe",
        "AcquirerTransactionId": "1006993069257E521001",
        "SoftDescriptor":"123456789ABCD",
		"PaymentId":"f2dbd5df-c2ee-482f-ab1b-7fee039108c0",
		"Type":"CreditCard",
		"Amount":15700,
		"Currency":"BRL",
		"Country":"BRA",
		"ExtraDataCollection":[],
		"ReasonCode":9,
		"ReasonMessage":"Waiting",
		"Status":0,
        "ProviderReturnCode": "0",
		"Links":
		[
			{
				"Method":"GET",
				"Rel":"self",
				"Href":"https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{Paymentid}"
			}
		]
	}
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`AcquirerTransactionId`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the bank carrier's invoice - Available only for VISA/MASTER - does not allow special characters|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ECI`|Electronic Commerce Indicator. It is how safe is a transaction.|Text|2|Examples: 7|
|`ReasonCode`|Reason code of operation.|Byte|-|Number from 1 to 99|
|`ReasonMessage`|Message reason the Transaction.|Text|32|Successful|
|`Status`|Transaction Status.|Byte|-|2|
|`ProviderReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ProviderReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Creating a sale with Fraud Analysis

To create a sale with credit card and fraud analysis, it must send a request using the POST method to the Payment feature as shown.

### Request

### Requisição

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
   "MerchantOrderId":"201411173454307",
   "Customer":{  
      "Name":"Comprador crédito AF",
      "Email":"compradorteste@live.com",
      "Birthdate":"1991-01-02",
      "Address":{  
         "Street":"Rua Júpter",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
      "DeliveryAddress":{  
         "Street":"Rua Júpter",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      }
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":100,
     "Currency":"BRL",
     "Country":"BRA",
     "Provider":"Simulado",
     "ServiceTaxAmount":0,
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "Interest":"ByMerchant",
     "Capture":false,
     "Authenticate":false,
     "CreditCard":{  
         "CardNumber":"4024007197692931",
         "Holder":"Teste accept",
         "ExpirationDate":"12/2015",
         "SecurityCode":"023",
         "Brand":"Visa"
     },
     "FraudAnalysis":{
       "Sequence":"AnalyseFirst",
       "SequenceCriteria":"Always",
	   "FingerPrintId":"074c1ee676ed4998ab66491013c565e2",
	   "Browser":{
		 "CookiesAccepted":false,
		 "Email":"compradorteste@live.com",
		 "HostName":"Teste",
		 "IpAddress":"200.190.150.350",
		 "Type":"Chrome"
		},
       "Cart":{
         "IsGift":false,
         "ReturnsAccepted":true,
         "Items":[{
           "GiftCategory":"Undefined",
           "HostHedge":"Off",
           "NonSensicalHedge":"Off",
           "ObscenitiesHedge":"Off",
           "PhoneHedge":"Off",
           "Name":"ItemTeste",
           "Quantity":1,
           "Sku":"201411170235134521346",
           "UnitPrice":123,
		   "Risk":"High",
		   "TimeHedge":"Normal",
		   "Type":"AdultContent",
		   "VelocityHedge":"High",
		   "Passenger":{
			 "Email":"compradorteste@live.com",
			 "Identity":"1234567890",
			 "Name":"Comprador accept",
			 "Rating":"Adult",
			 "Phone":"999994444",
			 "Status":"Accepted"
			}
           }]
       },
	   "MerchantDefinedFields":[{
			"Id":95,
			"Value":"Eu defini isso"
		}],
		"Shipping":{
			"Addressee":"Sr Comprador Teste",
			"Method":"LowCost",
			"Phone":"21114740"
		},
		"Travel":{
			"DepartureTime":"2010-01-02",
			"JourneyType":"Ida",
			"Route":"MAO-RJO",
          "Legs":[{
				"Destination":"GYN",
				"Origin":"VCP"
          }]
		}
     }
  }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "MerchantOrderId":"201411173454307",
   "Customer":{  
      "Name":"Comprador crédito AF",
      "Email":"compradorteste@live.com",
      "Birthdate":"1991-01-02",
      "Address":{  
         "Street":"Rua Júpter",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
      "DeliveryAddress":{  
         "Street":"Rua Júpter",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      }
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":100,
     "Country":"BRA",
     "ServiceTaxAmount":0,
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "Interest":"ByMerchant",
     "Capture":false,
     "Authenticate":false,
     "SoftDescriptor":"123456789ABCD",
     "CreditCard":{  
         "CardNumber":"4024007197692931",
         "Holder":"Teste accept",
         "ExpirationDate":"12/2015",
         "SecurityCode":"023",
         "Brand":"Visa"
     },
     "FraudAnalysis":{
       "Sequence":"AnalyseFirst",
       "SequenceCriteria":"Always",
	   "FingerPrintId":"074c1ee676ed4998ab66491013c565e2",
	   "Browser":{
		 "CookiesAccepted":false,
		 "Email":"compradorteste@live.com",
		 "HostName":"Teste",
		 "IpAddress":"200.190.150.350",
		 "Type":"Chrome"
		},
       "Cart":{
         "IsGift":false,
         "ReturnsAccepted":true,
         "Items":[{
           "GiftCategory":"Undefined",
           "HostHedge":"Off",
           "NonSensicalHedge":"Off",
           "ObscenitiesHedge":"Off",
           "PhoneHedge":"Off",
           "Name":"ItemTeste",
           "Quantity":1,
           "Sku":"201411170235134521346",
           "UnitPrice":123,
		   "Risk":"High",
		   "TimeHedge":"Normal",
		   "Type":"AdultContent",
		   "VelocityHedge":"High",
		   "Passenger":{
			 "Email":"compradorteste@live.com",
			 "Identity":"1234567890",
			 "Name":"Comprador accept",
			 "Rating":"Adult",
			 "Phone":"999994444",
			 "Status":"Accepted"
			}
           }]
       },
	   "MerchantDefinedFields":[{
			"Id":95,
			"Value":"Eu defini isso"
		}],
		"Shipping":{
			"Addressee":"Sr Comprador Teste",
			"Method":"LowCost",
			"Phone":"21114740"
		},
		"Travel":{
			"DepartureTime":"2010-01-02",
			"JourneyType":"Ida",
			"Route":"MAO-RJO",
          "Legs":[{
				"Destination":"GYN",
				"Origin":"VCP"
          }]
		}
     }
  }
}
--verbose
```

|Property|Type|Size|Mandatory|Description|
|--------|----|----|---------|-----------|
|`MerchantId`|Guid|36|Yes|Store identifier in Cielo.|
|`MerchantKey`|Text|40|Yes|Public key for Cielo Double Authentication.|
|`RequestId`|Guid|36|No|Request the identifier used when the merchant uses different servers for each GET/POST/PUT.|
|`MerchantOrderId`|Text|50|Yes|The request identification number.|
|`Customer.Name`|Text|255|No|Buyer's name.|
|`Customer.Email`|Text|255|No|Email Buyer.|
|`Customer.Birthdate`|Date|10|No|Purchaser’s date of birth.|
|`Customer.Address.Street`|Text|255|No|Purchaser's address.|
|`Customer.Address.Number`|Text|15|No|Buyer's address number.|
|`Customer.Address.Complement`|Text|50|No|Purchaser Complement address.|
|`Customer.Address.ZIP code`|Text|9|No|Purchase’s Zip code address.|
|`Customer.Address.City`|Text|50|No|Purchase’s City address.|
|`Customer.Address.State`|Text|2|No|Purchase’ State address.|
|`Customer.Address.Country`|Text|35|No|Address Country of the Purchaser.|
|`Customer.Deliveryaddress.Street`|Text|255|No|Purchaser's address.|
|`Customer.Address.Number`|Text|15|No|Buyer's address number.|
|`Customer.Deliveryaddress.Complement`|Text|50|No|Purchaser Complement address.|
|`Customer.Deliveryaddress.ZIP code`|Text|9|No|Purchaser’s Zip code address.|
|`Customer.Deliveryaddress.City`|Text|50|No|Purchaser City address.|
|`Customer.Deliveryaddress.State`|Text|2|No|Purchaser State the address.|
|`Customer.Deliveryaddress.Country`|Text|35|No|Address Country of the Purchaser.|
|`Payments.Type`|Text|100|Yes|Payment Method type.|
|`Payments.Amount`|Number|15|Yes|Order value (to be sent in cents).|
|`Payments.Currency`|Text|3|No|Currency in which the payment will be made (BRL / USD / MXN / COP / CLP / ARS / PEN / EUR / PYN / UYU / VEB / VEF / GBP).|
|`Payment.Country`|Text|3|No|Country where payment will be made.|
|`Payment.Provider`|Text|15|---|Payment Method name/NOT REQUIRED FOR CREDIT.|
|`Payment.SeviceTaxAmount`|Number|15|Yes|Value amount of the authorization that should be destined to the service charge. Obs .: This value is not added to the authorization amount.|
|`Payment.Installments`|Number|2|Yes|Number of installments.|
|`Payment.Interest`|Text|10|No|Installment type - Shop (ByMerchant) or Card (ByIssuer).|
|`Payment.Capture`|Boolean|-|No (Default false)|Boolean that identifies the authorization that must be destined to automatic capture.|
|`Payments.Authenticate`|Boolean|-|No (Default false)|The buyer will be directed to the issuing bank for card authentication|
|`CreditCard.CardNumber`|Text|16|Yes|Buyer's card number.|
|`CreditCard.Holder`|Text|25|Yes|Buyer's name as printed on the card.|
|`CreditCard.ExpirationDate`|Text|7|Yes|Expiration date printed on the card.|
|`CreditCard.SecurityCode`|Text|4|Yes|Security code printed on the back of the card.|
|`CreditCard.SaveCard`|Boolean|-|No (Default false)|Boolean that identifies if the card will be saved to generate the CardToken.|
|`CreditCard.Brand`|Text|10|Yes|Card issuer (Visa/Master/Amex/Elo/Aura/JCB/Diners/Discover).|
|`FraudAnalysis.Sequence`|Text|14|No|Type flow for carrying out the fraud analysis. First Analysis (AnalyseFirst) or the first authorization (AuthorizeFirst)|
|`FraudAnalysis.SequenceCriteria`|Text|9|No|Criterion flow. OnSuccess - Only performs analysis when transaction is successful. Always - always performs analysis|
|`FraudAnalysis.FingerPrintId`|Text|50|No|Identifier used to cross information obtained by the internet browser with data sent for analysis. This same value must be passed in SESSIONID variable DeviceFingerPrint the script.|
|`FraudAnalysis.Browser.CookiesAccepted`|Boolean|-|No|Boolean to determine if the client's browser accepts cookies.|
|`FraudAnalysis.Browser.Email`|Text|100|No|E-mail address registered in the buyer's browser.|
|`FraudAnalysis.Browser.HostName`|Text|60|No|Hostname where the buyer was before entering the store site.|
|`FraudAnalysis.Browser.IpAddress`|Text|15|No|Buyer’s IP Address. It is strongly recommended to send this field.|
|`FraudAnalysis.Browser.Type`|Text|40|No|Browser’s name used by the buyer.|
|`FraudAnalysis.Cart.IsGift`|Boolean|-|No|Boolean indicates if the order is a gift or not|
|`FraudAnalysis.Cart.ReturnsAccepted`|Boolean|-|No|Boolean that defines if returns are accepted for the request.|
|`FraudAnalysis.Items.GiftCategory`|Text|9|No|Field that will evaluate the billing address and delivery to different cities, states or countries.|
|`FraudAnalysis.Items.HostHedge`|Text||No|Importance level of the e-mail and customer IP addresses in scoring risk.|
|`FraudAnalysis.Items.NonSensicalHedge`|Text|6|No|Level of tests performed on the buyer's data with applications received meaningless.|
|`FraudAnalysis.Items.ObscenitiesHedge`|Text|6|No|Obscenity level of requests received.|
|`FraudAnalysis.Items.PhoneHedge`|Text|6|No|Level of testing carried out with phone numbers.|
|`FraudAnalysis.Items.Name`|Text|255|No|Product Name.|
|`FraudAnalysis.Items.Quantity`|Number|15|No|Product quantity to be purchased.|
|`FraudAnalysis.Items.Sku`|Text|255|No|Product identifier merchant code.|
|`FraudAnalysis.Items.UnitPrice`|Number|15|No|Unit price of the product.|
|`FraudAnalysis.Items.Risk`|Text|6|No|Product risk level.|
|`FraudAnalysis.Items.TimeHedge`|Text||No|Importance level of customer order per time of day.|
|`FraudAnalysis.Items.Type`|Text||No|Product type.|
|`FraudAnalysis.Items.VelocityHedge`|Text|6|No|Importance level  of customer purchase frequency.|
|`FraudAnalysis.Items.Passenger.Email`|Text|255|No|Email Passenger.|
|`FraudAnalysis.Items.Passenger.Identity`|Text|32|No|Passenger Id to whom the ticket was issued.|
|`FraudAnalysis.Items.Passenger.Name`|Text|120|No|Passenger name.|
|`FraudAnalysis.Items.Passenger.Rating`|Text||No|Passenger classification.|
|`FraudAnalysis.Items.Passenger.Phone`|Text|15|No|Passenger phone number. For applications outside the US, CyberSource recommends to include the country code.|
|`FraudAnalysis.Items.Passenger.Status`|Text|32|No|Airline ranking. One can use values ​​such as Gold or Platinum.|
|`FraudAnalysis.MerchantDefinedFields.Id`|Text|-|No|Id of the additional information to be sent.|
|`FraudAnalysis.MerchantDefinedFields.Value`|Text|255|No|Value of the additional information to be sent.|
|`FraudAnalysis.Shipping.Addressee`|Text|255|No|Delivery recipient's name.|
|`FraudAnalysis.Shipping.Method`|Text||No|Product delivery service type.|
|`FraudAnalysis.Shipping.Phone`|Text|15|No|Delivery recipient's phone.|
|`FraudAnalysis.Travel.DepartureTime`|DateTime|23|No|Date, hour and minute of flight departure.|
|`FraudAnalysis.Travel.JourneyType`|Text|32|No|Trip type.|
|`FraudAnalysis.Travel.Route`|Text|255|No|Route trip. Concatenation of flight connections in ORIG1- DEST1 format.|
|`FraudAnalysis.Travel.Legs.Destination`|Text|3|No|Airport code of the travel destination.|
|`FraudAnalysis.Travel.Legs.Origin`|Text|3|No|Airport code of the origin point trip.|

### Response

```json
{
    "MerchantOrderId": "201411173454307",
    "Customer": {
        "Name": "Comprador crédito AF",
        "Email": "compradorteste@live.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        },
        "DeliveryAddress": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "402400******2931",
            "Holder": "Teste accept",
            "ExpirationDate": "12/2015",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "492115",
        "AcquirerTransactionId": "10069930692606D31001",
        "AuthorizationCode": "123456",
        "SoftDescriptor":"123456789ABCD",
        "FraudAnalysis": {
            "Sequence": "AnalyseFirst",
            "SequenceCriteria": "Always",
            "FingerPrintId": "074c1ee676ed4998ab66491013c565e2",
            "MerchantDefinedFields": [
                {
                    "Id": 95,
                    "Value": "Eu defini isso"
                }
            ],
            "Cart": {
                "IsGift": false,
                "ReturnsAccepted": true,
                "Items": [
                    {
                        "Type": "AdultContent",
                        "Name": "ItemTeste",
                        "Risk": "High",
                        "Sku": "201411170235134521346",
                        "UnitPrice": 123,
                        "Quantity": 1,
                        "HostHedge": "Off",
                        "NonSensicalHedge": "Off",
                        "ObscenitiesHedge": "Off",
                        "PhoneHedge": "Off",
                        "TimeHedge": "Normal",
                        "VelocityHedge": "High",
                        "GiftCategory": "Undefined",
                        "Passenger": {
                            "Name": "Comprador accept",
                            "Identity": "1234567890",
                            "Status": "Accepted",
                            "Rating": "Adult",
                            "Email": "compradorteste@live.com",
                            "Phone": "999994444"
                        }
                    }
                ]
            },
            "Travel": {
                "Route": "MAO-RJO",
                "DepartureTime": "2010-01-02T00:00:00",
                "JourneyType": "Ida",
                "Legs": [
                    {
                        "Destination": "GYN",
                        "Origin": "VCP"
                    }
                ]
            },
            "Browser": {
                "HostName": "Teste",
                "CookiesAccepted": false,
                "Email": "compradorteste@live.com",
                "Type": "Chrome",
                "IpAddress": "200.190.150.350"
            },
            "Shipping": {
                "Addressee": "Sr Comprador Teste",
                "Phone": "21114740",
                "Method": "LowCost"
            },
            "Id": "0e4d0a3c-e424-4fa5-a573-4eabbd44da42",
            "Status": 1,
            "ReasonCode": 100,
            "ReplyData": {
                "AddressInfoCode": "COR-BA^MM-BIN",
                "FactorCode": "B^D^R^Z",
                "Score": 42,
                "BinCountry": "us",
                "CardIssuer": "FIA CARD SERVICES, N.A.",
                "CardScheme": "VisaCredit",
                "HostSeverity": 1,
                "InternetInfoCode": "FREE-EM^RISK-EM",
                "IpRoutingMethod": "Undefined",
                "ScoreModelUsed": "default_lac",
                "CasePriority": 3
            }
        },
        "PaymentId": "04096cfb-3f0a-4ece-946c-3b7dc5d38f19",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "ReasonCode": 0,
        "ReasonMessage": "Successful",
        "Status": 1,
        "ProviderReturnCode": "4",
        "ProviderReturnMessage": "Transação autorizada",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://sandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
    {
    "MerchantOrderId": "201411173454307",
    "Customer": {
        "Name": "Comprador accept",
        "Email": "compradorteste@live.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        },
        "DeliveryAddress": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "402400******2931",
            "Holder": "Teste accept",
            "ExpirationDate": "12/2015",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "492115",
        "AcquirerTransactionId": "10069930692606D31001",
        "AuthorizationCode": "123456",
        "SoftDescriptor":"tst",
        "FraudAnalysis": {
            "Sequence": "AnalyseFirst",
            "SequenceCriteria": "Always",
            "FingerPrintId": "074c1ee676ed4998ab66491013c565e2",
            "MerchantDefinedFields": [
                {
                    "Id": 95,
                    "Value": "Eu defini isso"
                }
            ],
            "Cart": {
                "IsGift": false,
                "ReturnsAccepted": true,
                "Items": [
                    {
                        "Type": "AdultContent",
                        "Name": "ItemTeste",
                        "Risk": "High",
                        "Sku": "201411170235134521346",
                        "UnitPrice": 123,
                        "Quantity": 1,
                        "HostHedge": "Off",
                        "NonSensicalHedge": "Off",
                        "ObscenitiesHedge": "Off",
                        "PhoneHedge": "Off",
                        "TimeHedge": "Normal",
                        "VelocityHedge": "High",
                        "GiftCategory": "Undefined",
                        "Passenger": {
                            "Name": "Comprador accept",
                            "Identity": "1234567890",
                            "Status": "Accepted",
                            "Rating": "Adult",
                            "Email": "compradorteste@live.com",
                            "Phone": "999994444"
                        }
                    }
                ]
            },
            "Travel": {
                "Route": "MAO-RJO",
                "DepartureTime": "2010-01-02T00:00:00",
                "JourneyType": "Ida",
                "Legs": [
                    {
                        "Destination": "GYN",
                        "Origin": "VCP"
                    }
                ]
            },
            "Browser": {
                "HostName": "Teste",
                "CookiesAccepted": false,
                "Email": "compradorteste@live.com",
                "Type": "Chrome",
                "IpAddress": "200.190.150.350"
            },
            "Shipping": {
                "Addressee": "Sr Comprador Teste",
                "Phone": "21114740",
                "Method": "LowCost"
            },
            "Id": "0e4d0a3c-e424-4fa5-a573-4eabbd44da42",
            "Status": 1,
                "ReplyData": {
                "AddressInfoCode": "COR-BA^MM-BIN",
                "FactorCode": "B^D^R^Z",
                "Score": 42,
                "BinCountry": "us",
                "CardIssuer": "FIA CARD SERVICES, N.A.",
                "CardScheme": "VisaCredit",
                "HostSeverity": 1,
                "InternetInfoCode": "FREE-EM^RISK-EM",
                "IpRoutingMethod": "Undefined",
                "ScoreModelUsed": "default_lac",
                "CasePriority": 3
            }
        },
        "PaymentId": "04096cfb-3f0a-4ece-946c-3b7dc5d38f19",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Transação autorizada",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the bank carrier's invoice - Available only for VISA / MASTER - does not allow special characters|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`Id`|IDENTIFICATION Transaction in Antifraud.|Text|300|Alphanumeric text|
|`Status`|Transaction Status.|Byte|-|2|
|`FraudAnalisysReasonCode`|Analysis of the results.|Byte|-|Number:<ul><li>100 - Successful operation.</li><li>101 - There are one or more missed requests fields. Possible action: See the fields that are missing in AntiFraudResponse list.MissingFieldCollection. Resend the request with complete information.</li><li>102 - One or more request fields contain invalid data. Possible action: See the invalid fields in AntiFraudResponse list.InvalidFieldCollection. Resubmit the request with the correct information.</li><li>150 - Failure in the general system. Possible action: wait a few minutes and try resending the request.</li><li>151 - The request was received, but time-out occurred on the server.This error does not include time-out between the client and the server. Possible action: wait a few minutes and try resending the request.</li><li>152 The request was received, but was time-out. Possible action: wait a few minutes and resubmit the request.</li><li>202 - Fraud Prevention refused the request because the card has expired. You can also receive this code if the expiration date does not coincide with the date on issuing bank file. If payment processor allows emission credits for expired cards, CyberSource does not limit this functionality. Possible action: Request a card or other method of payment.</li><li>231 The account number is invalid. Possible action: Request a card or other method of payment.</li><li>234 - There is a problem with the merchant setup. Possible action: Do not click. Please contact customer support to correct the configuration problem.</li><li>400 A fraud score exceeds its limit. Possible action: Review the customer's request.</li><li>480 The request was scheduled for review by Decision Manager.</li><li>481 - The request was rejected by Manager decision</li></ul>|
|`AddressInfoCode`|Combination of codes that indicate error in the billing address and / or delivery. The codes are concatenated using the ^.|Text|255|Ex: COR-BA ^ MM-BIN<ul><li>COR-BA - The billing address can be normalized.</li><li>COR-SA - The delivery address can be normalized.</li><li>INTL-BA - The billing country is outside the US</li><li>INTL-SA - Delivery country is outside the US</li><li>MIL-USA - This is a military address in the US</li><li>MM-A - billing and shipping addresses use different street names.</li><li>MM-BIN - The BIN card (the first six digits number) does not match the country.</li><li>MM-C - The billing and delivery addresses use different cities.</li><li>MM-CO - The billing and delivery addresses use different countries.</li><li>MM-ST - The billing and delivery addresses use different states.</li><li>MM-Z - The billing and delivery addresses use different zip codes.</li><li>UNV-ADDR - The address is unverifiable.</li></ul>|
|`FactorCode`|Combination of codes that indicate the score of the application. The codes are concatenated using the ^.|Text|100|Eg B ^ D ^ R ^ Z<ul><li>A - Excessive Change of Address.The customer has changed the billing address two or more times in the last six months.</li><li>B - BIN card or risk authorization. Risk factors are related to credit card and BIN / or card authorization checks.</li><li>C - High numbers of credit cards.The customer has used more than six numbers of credit cards in the past six months.</li><li>D - Impact of the e-mail address.The customer uses a free email provider or e-mail address is risky.</li><li>E - Positive list. The customer is in its positive list.</li><li>F - Negative list. The account number, address, email address or IP address for this purpose appears in its negative list.</li><li>G - geolocation inconsistencies.The email client domain, phone number, billing address, shipping address or IP address is suspect.</li><li>H - excessive name changes.The customer changed its name twice or more in the past six months.</li><li>I - Internet inconsistencies.The IP address and e-mail domain are not consistent with the billing address.</li><li>N - Entrance meaningless.The customer name and address fields contain meaningless words or language.</li><li>The - obscenities.Customer data contains obscene words.</li><li>P - morphing identity. Various amounts of an identity element are attached to a different value of an identity element. For example, various telephone numbers are connected to a single account number.</li><li>Q - Inconsistencies phone. The customer's phone number is suspect.</li><li>R - risky Order.The transaction, the customer and the merchant show information correlated high risk.</li><li>T - Time Coverage. The client is attempting a purchase outside the expected time.</li><li>U - unverifiable address. The billing address or delivery can not be verified.</li><li>V - Velocity.The account number was used many times in the last 15 minutes.</li><li>W - marked as suspect. The billing address and delivery is similar to an address previously marked suspect.</li><li>Y - The address, city, state or country of billing and shipping addresses do not correlate.</li><li>Z - Invalid value. As the request it contains an unexpected value, a default value has been replaced. Although the transaction can still be processed, examine the application carefully to detect abnormalities.</li></ul>|
|`Score`|Total score calculated for the application.|Number|-|Number|
|`BinCountry`|Symbol of the country of origin of purchase.|Text|2|us|
|`CardIssuer`|Name of the bank or issuer of the card body.|Text|128|Bradesco|
|`CardScheme`|Banner type|Text|20|<ul><li>MaestroUkDomestic - Maestro UK Domestic</li><li>MastercardCredit - MasterCard Credit</li><li>MastercardDebit - MasterCard Debit</li><li>VisaCredit - Visa Credit</li><li>VisaDebit - Visa Debit</li><li>Visa Electron - Visa Electron</li></ul>|
|`HostSeverity`|Risk level of the buyer’s e-mail domain, 0-5, where 0 is unlimited risk and 5 is the highest risk.|Number|-|5|
|`InternetInfoCode`|Sequence of codes that indicate that there is an excessive change in the buyer's identity. The codes are concatenated using the ^.|Text|255|Ex:<ul><li>MORPH-B - The same billing address has been used several times with multiple client identities.</li><li>MORPH-C - The same account number has been used several times with multiple client identities.</li><li>MORPH-E - The same e-mail address has been used several times with multiple client identities. MORPH I The same IP address has been used multiple times with multiple clients identities.</li><li>MORPH-P - The same phone number has been used several times with multiple client identities.</li><li>MORPH-S - The same delivery address has been used multiple times with multiple clients identities.</li></ul>|
|`IpRoutingMethod`|IP routing type used by the computer.|Text|-|<ul><li>AolBased</li><li>CacheProxy</li><li>Fixed</li><li>InternationalProxy</li><li>MobileGateway</li><li>Pop</li><li>RegionalProxy</li><li>Satellite</li><li>Superpop</li></ul>|
|`ScoreModelUsed`|Name score of model used.|Text|20|Eg default_lac|
|`CasePriority`|If the merchant is subscriber Enhanced Case Management, you receive this value with the level of priority, with 1 being the highest and 5 the lowest.|Number|-|3|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Creating a sale with Card Token

To create a credit card sale with the secure token card, you must do a POST to the Payment feature as shown.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
 {  
    "MerchantOrderId":"2014111706",
    "Customer":{  
       "Name":"Comprador CardToken"
    },
    "Payment":{  
      "Type":"CreditCard",
      "Amount":100,
      "Installments":1,
      "SoftDescriptor":"123456789ABCD",
      "CreditCard":{  
          "CardToken":"6e1bf77a-b28b-4660-b14f-455e2a1c95e9",
          "SecurityCode":"262",
          "Brand":"Visa"
      }
    }
 }
 ```
 
 ```shell
 curl
 --request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
 --header "Content-Type: application/json"
 --header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 --header "MerchantKey: 0123456789012345678901234567890123456789"
 --header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 --data-binary
 {  
    "MerchantOrderId":"2014111706",
    "Customer":{  
       "Name":"Comprador CardToken"
    },
    "Payment":{  
      "Type":"CreditCard",
      "Amount":100,
      "Installments":1,
      "SoftDescriptor":"123456789ABCD",
      "CreditCard":{  
          "CardToken":"6e1bf77a-b28b-4660-b14f-455e2a1c95e9",
          "SecurityCode":"262",
          "Brand":"Visa"
      }
    }
 }
 --verbose
 ```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.Installments`|Number of installments.|Number|2|Yes|
|`Payment.SoftDescriptor`|Text to be printed on the bank carrier's invoice - Available only for VISA / MASTER - does not allow special characters|Text|13|No|
|`Payment.ReturnUrl`|URL where the user is redirected after the end of payment|Text|1024|Yes when Authenticate = true|
|`CreditCard.CardToken`|Card identification token.|Guid|36|Yes|
|`CreditCard.SecurityCode`|Security code printed on the back of the card.|Text|4|Yes|
|`CreditCard.Brand`|Card issuer.|Text|10|Yes|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador CardToken"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "SaveCard": false,
            "CardToken": "6e1bf77a-b28b-4660-b14f-455e2a1c95e9",
            "Brand": "Visa"
        },
        "ProofOfSale": "5036294",
        "Tid": "0310025036294",
        "AuthorizationCode": "319285",
        "SoftDescriptor":"123456789ABCD",
        "PaymentId": "c3ec8ec4-1ed5-4f8d-afc3-19b18e5962a8",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
        {
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador CardToken"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "SaveCard": false,
            "CardToken": "6e1bf77a-b28b-4660-b14f-455e2a1c95e9",
            "Brand": "Visa"
        },
        "ProofOfSale": "5036294",
        "Tid": "0310025036294",
        "AuthorizationCode": "319285",
        "SoftDescriptor":"123456789ABCD",
        "PaymentId": "c3ec8ec4-1ed5-4f8d-afc3-19b18e5962a8",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the bank carrier's invoice - Available only for VISA/MASTER - does not allow special characters|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ECI`|Electronic Commerce Indicator. It is how safe is a transaction.|Text|2|Examples: 7|
|`Status`|Transaction Status.|Byte|-|2|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Capturing a sale

To capture credit card sale, you must do a PUT to the Payment feature as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/sales/{PaymentId}/capture</span></aside>

```json
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture?amount=xxx&serviceTaxAmount=xxx"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request identifier, used when the merchant uses different servers for each GET/POST/PUT|guid|36|No|
|`PaymentId`|Field Application Identifier.|Guid|36|Yes|
|`Amount`|Order value (to be sent in cents).|Number|15|No|
|`ServiceTaxAmount`|Value amount of the authorization should be destined for the service charge. Obs .: This value is not added to the authorization amount.|Number|15|No|

### Response

```json
{
    "Status": 2,
    "ReturnCode": "6",
    "ReturnMessage": "Operation Successful",
    "Links": [
        {
            "Method": "GET",
            "Rel": "self",
            "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
        },
        {
            "Method": "PUT",
            "Rel": "void",
            "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
        }
    ]
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "Status": 2,
    "ReturnCode": "6",
    "ReturnMessage": "Operation Successful",
    "Links": [
        {
            "Method": "GET",
            "Rel": "self",
            "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
        },
        {
            "Method": "PUT",
            "Rel": "void",
            "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
        }
    ]
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`Status`|Transaction Status.|Byte|-|2|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Cancelling a sale

To cancel a sale credit card sale, you must do a PUT to the Payment feature as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/sales/{PaymentId}/void?amount=xxx</span></aside>

```json
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void?amount=xxx"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`PaymentId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|guid|36|No|
|`Amount`|Order value (to be sent in cents).|Number|15|No|

### Response

```json
{
    "Status": 10,
    "ReturnCode": "9",
    "ReturnMessage": "Operation Successful",
    "Links": [
        {
            "Method": "GET",
            "Rel": "self",
            "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
        }
    ]
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "Status": 10,
    "ReturnCode": "9",
    "ReturnMessage": "Operation Successful",
    "Links": [
        {
            "Method": "GET",
            "Rel": "self",
            "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
        }
    ]
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`Status`|Transaction Status.|Byte|-|10|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

# Payments with Debit Card

## Creating a simplified sale

To create debit card sale, you must do a POST to the Payment feature as shown. This sample includes a minimum courses required to be sent for authorization.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
 {
     "MerchantOrderId": "2014121201",
     "Customer": {
         "Name":"Comprador Cartão de débito"
     },
     "Payment": {
         "DebitCard": {
             "CardNumber": "453211******3703",
             "Holder": "Teste Holder",
             "ExpirationDate": "12/2015",
             "SaveCard": false,
              "Brand": "Visa"
          },
          "AuthenticationUrl": "https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?{PaymentId}",
         "Tid": "1006993069207A31A001",
          "PaymentId": "0309f44f-fe5a-4de1-ba39-984f456130bd",
          "Type": "DebitCard",
          "Amount": 15700,
          "Currency": "BRL",
          "Country": "BRA",
          "ExtraDataCollection": [],
          "Status": 0,
          "ReturnCode": "0",
          "Links": [
              {
                  "Method": "GET",
                 "Rel": "self",
                 "Href": "https://apiquerysandbox.cieloeCommerce.cielo.com.br/1/sales/{PaymentId}"
             }
         ]
     }
 }
 ```
 ```shell
 --header "Content-Type: application/json"
 --header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 --data-binary
 {
     "MerchantOrderId": "2014121201",
     "Customer": {
         Comprador Cartão de débito
     },
     "Payment": {
         "DebitCard": {
             "CardNumber": "453211******3703",
             "Holder": "Teste Holder",
             "ExpirationDate": "12/2015",
             "SaveCard": false,
              "Brand": "Visa"
          },
          "AuthenticationUrl": "https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?{PaymentId}",
 -        "AcquirerTransactionId": "1006993069207A31A001",
 +        "Tid": "1006993069207A31A001",
          "PaymentId": "0309f44f-fe5a-4de1-ba39-984f456130bd",
          "Type": "DebitCard",
          "Amount": 15700,
          "Currency": "BRL",
          "Country": "BRA",
          "ExtraDataCollection": [],
 -        "ReasonCode": 9,
 -        "ReasonMessage": "Waiting",
          "Status": 0,
 -        "ProviderReturnCode": "0",
 +        "ReturnCode": "0",
          "Links": [
              {
                  "Method": "GET",
                 "Rel": "self",
                 "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
             }
         ]
     }
 }
 ```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.ReturnUrl`|URL retailer's return.|Text|1024|Yes|
|`Payment.ReturnUrl`|URL where the user is redirected after the end of payment|Text|1024|Yes|
|`CreditCard.CardNumber`|Buyer's card number.|Text|16|Yes|
|`CreditCard.Holder`|Buyer's name printed on the card.|Text|25|Yes|
|`CreditCard.ExpirationDate`|Date of expiration printed on the card.|Text|7|Yes|
|`CreditCard.SecurityCode`|Security code printed on the back of the card.|Text|4|Yes|
|`CreditCard.Brand`|Card issuer.|Text|10|Yes|

### Response

 ```json
 {
     "MerchantOrderId": "2014121201",
     "Customer": {
         "Name": "Comprador Cartão de débito"
     },
     "Payment": {
         "DebitCard": {
             "CardNumber": "453211******3703",
             "Holder": "Teste Holder",
             "ExpirationDate": "12/2015",
             "SaveCard": false,
              "Brand": "Visa"
          },
          "AuthenticationUrl": "https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?{PaymentId}",
          "Tid": "1006993069207A31A001",
          "PaymentId": "0309f44f-fe5a-4de1-ba39-984f456130bd",
          "Type": "DebitCard",
          "Amount": 15700,
          "Currency": "BRL",
          "Country": "BRA",
          "ExtraDataCollection": [],
          "Status": 0,
          "ReturnCode": "0",
          "Links": [
              {
                  "Method": "GET",
                 "Rel": "self",
                 "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
             }
         ]
     }
 }
 ```
 
 ```shell
 --header "Content-Type: application/json"
 --header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 --data-binary
 {
     "MerchantOrderId": "2014121201",
     "Customer": {
         "Name": "Comprador Cartão de débito"
     },
     "Payment": {
         "DebitCard": {
             "CardNumber": "453211******3703",
             "Holder": "Teste Holder",
             "ExpirationDate": "12/2015",
             "SaveCard": false,
              "Brand": "Visa"
          },
          "AuthenticationUrl": "https://xxxxxxxxxxxx.xxxxx.xxx.xx/xxx/xxxxx.xxxx?{PaymentId}",
          "Tid": "1006993069207A31A001",
          "PaymentId": "0309f44f-fe5a-4de1-ba39-984f456130bd",
          "Type": "DebitCard",
          "Amount": 15700,
          "Currency": "BRL",
          "Country": "BRA",
          "ExtraDataCollection": [],
          "Status": 0,
          "ReturnCode": "0",
          "Links": [
              {
                  "Method": "GET",
                 "Rel": "self",
                 "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
             }
         ]
     }
 }
 ```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`AuthenticationUrl`|URL to redirect the client to the debit flow.|Text|56|Authentication URL|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ReturnUrl`|Url retailer's return. URL where the shopkeeper will be redirected at the end of the flow.|Text|1024|http://www.urllogista.com.br|
|`Status`|Transaction Status.|Byte|-|0|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|

# Payments with Electronic Transfer

## Creating a simplified sale

To create an electronic transfer in a sale, it must do a POST to the Payment feature as shown. This sample includes a minimum courses required to be sent for authorization.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Transferência Eletronica""
    },
    "Payment":
    {  
        "Type":"EletronicTransfer",
        "Amount":15700,
        "Provider":"Bradesco",
        "ReturnUrl":"http://www.cielo.com.br"
    }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Transferência Eletronica""
    },
    "Payment":
    {  
        "Type":"EletronicTransfer",
        "Amount":15700,
        "Provider":"Bradesco",
        "ReturnUrl":"http://www.cielo.com.br"
    }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in  Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.Provider`|Payment Method name/NOT REQUIRED FOR CREDIT|Text|15|---|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador Transferência Eletronica",
    },
    "Payment": {
        "Url": "https://xxx.xxxxxxx.xxx.xx/post/EletronicTransfer/Redirect/{PaymentId}",
        "PaymentId": "765548b6-c4b8-4e2c-b9b9-6458dbd5da0a",
        "Type": "EletronicTransfer",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 0,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador Transferência Eletronica",
    },
    "Payment": {
        "Url": "https://xxx.xxxxxxx.xxx.xx/post/EletronicTransfer/Redirect/{PaymentId}",
        "PaymentId": "765548b6-c4b8-4e2c-b9b9-6458dbd5da0a",
        "Type": "EletronicTransfer",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 0,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`Url`|URL to redirect the client to the flow of Electronic Transfer.|Text|256|Authentication Url|
|`Status`|Transaction Status.|Byte|-|0|

# “Boleto” Payment

## Creating a simplified sale

To create a sale with “boleto” payment method, you just need to make a POST as shown.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Boleto"
    },
    "Payment":
    {  
        "Type":"Boleto",
        "Amount":15700,
        "Provider":"Bradesco"
    }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Boleto"
    },
    "Payment":
    {  
        "Type":"Boleto",
        "Amount":15700,
        "Provider":"Bradesco"
    }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.Provider`|Payment Method name/NOT REQUIRED FOR CREDIT|Text|15|---|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer":
    {
        "Name": "Boleto Completo",
        "Address": {}
    },
    "Payment":
    {
        "ExpirationDate": "2014-12-25",
        "Url": "https://apisandbox.cieloecommerce.cielo.com.br/post/pagador/reenvia.asp/8464a692-b4bd-41e7-8003-1611a2b8ef2d",
        "Number": "1000000012-8",
        "BarCodeNumber": "00091628800000157000494250100000001200656560",
        "DigitableLine": "00090.49420 50100.000004 12006.565605 1 62880000015700",
        "Address": "Av. Marechal Câmara, 160",
        "PaymentId": "8464a692-b4bd-41e7-8003-1611a2b8ef2d",
        "Type": "Boleto",
        "Amount": 15700,
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer":
    {
        "Name": "Comprador Boleto Completo",
        "Address": {}
    },
    "Payment":
    {
        "ExpirationDate": "2014-12-25",
        "Url": "https://apisandbox.cieloecommerce.cielo.com.br/post/pagador/reenvia.asp/8464a692-b4bd-41e7-8003-1611a2b8ef2d",
        "Number": "1000000012-8",
        "BarCodeNumber": "00091628800000157000494250100000001200656560",
        "DigitableLine": "00090.49420 50100.000004 12006.565605 1 62880000015700",
        "Address": "Av. Marechal Câmara, 160",
        "PaymentId": "8464a692-b4bd-41e7-8003-1611a2b8ef2d",
        "Type": "Boleto",
        "Amount": 15700,
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ExpirationDate`|Expiration date.|Text|10|12.25.2014|
|`Url`|“Boleto” Url generated.|string|256|https: //.../pagador/reenvia.asp/8464a692-b4bd-41e7-8003-1611a2b8ef2d|
|`Number`|"OurNumber" generated.|Text|50|1000000012-8|
|`BarCodeNumber`|Numerical representation of barcode.|Text|44|00091628800000157000494250100000001200656560|
|`DigitableLine`|Typeful line.|Text|256|00090.49420 50100.000004 12006.565605 1 62880000015700|
|`Address`|Address shop.|Text|256|Av. Test 160|
|`Status`|Transaction Status.|Byte|-|1|

## Creating a “Boleto” complete sale

To create a sale with “boleto” payment method, you just need to make a POST as shown.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Boleto Completo"
    },
    "Payment":
    {  
        "Type":"Boleto",
        "Amount":15700,
        "Provider":"Bradesco",
        "Address": "Rua Teste",
        "BoletoNumber": "123",
        "Assignor": "Empresa Teste",
        "Demonstrative": "Desmonstrative Teste",
        "ExpirationDate": "2015-01-05",
        "Identification": "11884926754",
        "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia."
    }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
    "MerchantOrderId":"2014111706",
    "Customer":
    {  
        "Name":"Comprador Boleto Completo"
    },
    "Payment":
    {  
        "Type":"Boleto",
        "Amount":15700,
        "Provider":"Bradesco",
        "Address": "Rua Teste",
        "BoletoNumber": "123",
        "Assignor": "Empresa Teste",
        "Demonstrative": "Desmonstrative Teste",
        "ExpirationDate": "2015-01-05",
        "Identification": "11884926754",
        "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia."
    }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.Provider`|Payment Method’s name.|Text|15|Yes|
|`Payment.Adress`|Address of the Assignor.|Text|255|No|
|`Payment.BoletoNumber`|Boleto number ("OurNumber").|Text|50|No|
|`Payment.Assignor`|Seller's name.|Text|200|No|
|`Payment.Demonstrative`|Statement text.|Text|450|No|
|`Payment.ExpirationDate`|Boleto Expiration date.|Date|10|No|
|`Payment.Identification`|Seller's ID.|Text|14|No|
|`Payment.Instructions`|Boleto Instructions.|Text|450|No|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer":
    {
        "Name": "Comprador rec programada",
        "Address": {}
    },
    "Payment":
    {
        "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia.",
        "ExpirationDate": "2015-01-05",
        "Url": "https://apisandbox.cieloecommerce.cielo.com.br/post/pagador/reenvia.asp/a5f3181d-c2e2-4df9-a5b4-d8f6edf6bd51",
        "Number": "123-2",
        "BarCodeNumber": "00096629900000157000494250000000012300656560",
        "DigitableLine": "00090.49420 50000.000013 23006.565602 6 62990000015700",
        "Assignor": "Empresa Teste",
        "Address": "Rua Teste",
        "Identification": "11884926754",
        "PaymentId": "a5f3181d-c2e2-4df9-a5b4-d8f6edf6bd51",
        "Type": "Boleto",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer":
    {
        "Name": "Comprador rec programada",
        "Address": {}
    },
    "Payment":
    {
        "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia.",
        "ExpirationDate": "2015-01-05",
        "Url": "https://apisandbox.cieloecommerce.cielo.com.br/post/pagador/reenvia.asp/a5f3181d-c2e2-4df9-a5b4-d8f6edf6bd51",
        "Number": "123-2",
        "BarCodeNumber": "00096629900000157000494250000000012300656560",
        "DigitableLine": "00090.49420 50000.000013 23006.565602 6 62990000015700",
        "Assignor": "Empresa Teste",
        "Address": "Rua Teste",
        "Identification": "11884926754",
        "PaymentId": "a5f3181d-c2e2-4df9-a5b4-d8f6edf6bd51",
        "Type": "Boleto",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Bradesco",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`Instructions`|Boleto Instructions.|Text|450|Ex: Accepted only until the expiration date, after this date, you should charge an interest fee of 1% day.|
|`ExpirationDate`|Expiration date.|Text|10|12.25.2014|
|`Url`|Boleto Url generated.|string|256|Ex: https: //.../pagador/reenvia.asp/8464a692-b4bd-41e7-8003-1611a2b8ef2d|
|`Number`|"OurNumber" generated.|Text|50|Ex: 1000000012-8|
|`BarCodeNumber`|Numerical representation of barcode.|Text|44|Eg 00091628800000157000494250100000001200656560|
|`DigitableLine`|Typeful line.|Text|256|Eg 00090.49420 50100.000004 12006.565605 1 62880000015700|
|`Assignor`|Seller's name.|Text|256|Ex: Store Test|
|`Address`|Address of the Assignor.|Text|256|Ex: Av Test, 160.|
|`Identification`|Seller's ID.|Text|14|CPF or CNPJ Assignor without special characters (, /, -.)|
|`Status`|Transaction Status.|Byte|-|1|

# Recurring payments

## Authorizing the first recurrence

To create a recurring sale whose first recurrence is authorized in the form of credit card payment, you just need to make a POST as shown.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
   "MerchantOrderId":"2014113245231706",
   "Customer":{  
      "Name":"Comprador accept"
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":1500,
     "Provider":"Simulado",
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "RecurrentPayment":{
       "AuthorizeNow":"true",
       "EndDate":"2019-12-01",
       "Interval":"SemiAnnual"
     },
     "CreditCard":{  
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"03/2019",
         "SecurityCode":"262",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
    {
   "MerchantOrderId":"2014113245231706",
   "Customer":{  
      "Name":"Comprador accept"
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":1500,
     "Provider":"Simulado",
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "RecurrentPayment":{
       "AuthorizeNow":"true",
       "EndDate":"2019-12-01",
       "Interval":"SemiAnnual"
     },
     "CreditCard":{  
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"03/2019",
         "SecurityCode":"262",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|6|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|The request identification number.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Payment.Type`|Payment Method type.|Text|100|Yes|
|`Payment.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payment.Installments`|Number of installments.|Number|2|Yes|
|`Payment.SoftDescriptor`|Text to be printed on the carrier's invoice|Text|13|No|
|`Payment.RecurrentPayment.EndDate`|Date to end the recurrence.|Text|10|No|
|`Payment.RecurrentPayment.Interval`|Recurrence interval.<ul><li>Monthly (Default)</li><li>Bimonthly</li><li>Quarterly</li><li>Semiannual</li><li>Annual</li></ul>|Text|10|No|
|`Payment.RecurrentPayment.AuthorizeNow`|Boolean to know if the first recurrence will be authorized or not.|Boolean|-|Yes|
|`CreditCard.CardNumber`|Buyer's card number.|Text|16|Yes|
|`CreditCard.Holder`|Buyer's name printed on the card.|Text|25|Yes|
|`CreditCard.ExpirationDate`|Date of expiration printed on the card.|Text|7|Yes|
|`CreditCard.SecurityCode`|Security code printed on the back of the card.|Text|4|Yes|
|`CreditCard.Brand`|Card issuer.|Text|10|Yes|

### Response

```json
{
    "MerchantOrderId": "2014113245231706",
    "Customer": {
        "Name": "Comprador accept"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "Recurrent": false,
        "CreditCard": {
            "CardNumber": "123412******1231",
            "Holder": "Teste Holder",
            "ExpirationDate": "03/2019",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "3827556",
        "Tid": "0504043827555",
        "AuthorizationCode": "149867",
        "SoftDescriptor":"123456789ABCD",
        "PaymentId": "737a8d9a-88fe-4f74-931f-acf81149f4a0",
        "Type": "CreditCard",
        "Amount": 1500,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Simulado",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Operation Successful",
        "RecurrentPayment": {
            "RecurrentPaymentId": "61e5bd30-ec11-44b3-ba0a-56fbbc8274c5",
            "NextRecurrency": "2015-11-04",
            "EndDate": "2019-12-01",
            "Interval": "SemiAnnual",
            "Link": {
                "Method": "GET",
                "Rel": "recurrentPayment",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}"
            },
            "AuthorizeNow": true
        },
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014113245231706",
    "Customer": {
        "Name": "Comprador accept"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "Recurrent": false,
        "CreditCard": {
            "CardNumber": "123412******1231",
            "Holder": "Teste Holder",
            "ExpirationDate": "03/2019",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "3827556",
        "Tid": "0504043827555",
        "AuthorizationCode": "149867",
        "SoftDescriptor":"tst",
        "PaymentId": "737a8d9a-88fe-4f74-931f-acf81149f4a0",
        "Type": "CreditCard",
        "Amount": 1500,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Simulado",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Operation Successful",
        "RecurrentPayment": {
            "RecurrentPaymentId": "61e5bd30-ec11-44b3-ba0a-56fbbc8274c5",
            "NextRecurrency": "2015-11-04",
            "EndDate": "2019-12-01",
            "Interval": "SemiAnnual",
            "Link": {
                "Method": "GET",
                "Rel": "recurrentPayment",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}"
            },
            "AuthorizeNow": true
        },
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`RecurrentPaymentId`|Field identifier next recurrence.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`NextRecurrency`|Date of next recurrence.|Text|7|05/2019 (MM / YYYY)|
|`EndDate`|Date of the end of recurrence.|Text|7|05/2019 (MM / YYYY)|
|`Interval`|Break between recurrence.|Text|10|<ul><li>Bimonthly</li><li>Quarterly</li><li>Semiannual</li><li>Annual</li></ul>|
|`AuthorizeNow`|Boolean to know if the first recurrence will be authorized or not.|Boolean|-|true or false|

## Scheduling a credit recurrence

To create a recurring sale whose first recurrence will not be allowed on the same date in for credit card payment, just make a POST as shown.

### Request

<aside class="request"><span class="method post">POST</span> <span class="endpoint">/1/sales/</span></aside>

```json
{  
   "MerchantOrderId":"2014113245231706",
   "Customer":{  
      "Name":"Comprador accept"
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":1500,
     "Provider":"Simulado",
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "RecurrentPayment":{
       "AuthorizeNow":"false",
       "EndDate":"2019-12-01",
       "Interval":"SemiAnnual",
       "StartDate":"2015-06-01"
     },
     "CreditCard":{  
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"03/2019",
         "SecurityCode":"262",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
```

```shell
curl
--request POST "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "MerchantOrderId":"2014113245231706",
   "Customer":{  
      "Name":"Comprador accept"
   },
   "Payment":{  
     "Type":"CreditCard",
     "Amount":1500,
     "Provider":"Simulado",
     "Installments":1,
     "SoftDescriptor":"123456789ABCD",
     "RecurrentPayment":{
       "AuthorizeNow":"false",
       "EndDate":"2019-12-01",
       "Interval":"SemiAnnual",
       "StartDate":"2015-06-01"
     },
     "CreditCard":{  
         "CardNumber":"1234123412341231",
         "Holder":"Teste Holder",
         "ExpirationDate":"03/2019",
         "SecurityCode":"262",
         "SaveCard":"false",
         "Brand":"Visa"
     }
   }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|Nos|
|`Customer.Email`|Email Buyer.|Text|255|No|
|`Customer.Birthdate`|Date of purchaser birth.|Date|10|No|
|`Customer.Identity`|RG number, CPF or CNPJ Client.|Text|14|No|
|`Customer.Address.Street`|Purchaser's address.|Text|255|No|
|`Customer.Address.Number`|Buyer's address number.|Text|15|No|
|`Customer.Address.Complement`|Complement address of the Purchaser.|Text|50|No|
|`Customer.Address.ZIP code`|Purchaser’s Zip code address.|Text|9|No|
|`Customer.Address.City`|Purchaser’s City address.|Text|50|No|
|`Customer.Address.State`|Purchaser’ State address.|Text|2|No|
|`Customer.Address.Country`|Country of Purchaser’s address.|Text|35|No|
|`Customer.Address.District`|Buyer's neighborhood.|Text|50|No|
|`Customer.Deliveryaddress.Street`|Purchaser's address.|Text|255|No|
|`Customer.Deliveryaddress.Number`|Buyer's address number.|Text|15|No|
|`Customer.Deliveryaddress.Complement`|Purchase Complement  address.|Text|50|No|
|`Customer.Deliveryaddress.ZIP code`|Purchaser’s zip code address.|Text|9|No|
|`Customer.Deliveryaddress.City`|Purchaser’s City address.|Text|50|No|
|`Customer.Deliveryaddress.State`|State the address of the Purchaser.|Text|2|No|
|`Customer.Deliveryaddress.Country`|Parents of the address of the Purchaser.|Text|35|No|
|`Customer.Deliveryaddress.District`|Buyer's neighborhood.|Text|50|No|

### Response

```json
{
    "MerchantOrderId": "2014113245231706",
    "Customer": {
        "Name": "Comprador rec programada"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "Recurrent": false,
        "CreditCard": {
            "CardNumber": "123412******1231",
            "Holder": "Teste Holder",
            "ExpirationDate": "03/2019",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "SoftDescriptor": "123456789ABCD",
        "Type": "CreditCard",
        "Amount": 1500,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Simulado",
        "ExtraDataCollection": [],
        "Status": 20,
        "RecurrentPayment": {
            "RecurrentPaymentId": "0d2ff85e-594c-47b9-ad27-bb645a103db4",
            "NextRecurrency": "2015-06-01",
            "StartDate": "2015-06-01",
            "EndDate": "2019-12-01",
            "Interval": "SemiAnnual",
            "Link": {
                "Method": "GET",
                "Rel": "recurrentPayment",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{PaymentId}"
            },
            "AuthorizeNow": false
        }
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014113245231706",
    "Customer": {
        "Name": "Comprador rec propria"
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "Recurrent": false,
        "CreditCard": {
            "CardNumber": "123412******1231",
            "Holder": "Teste Holder",
            "ExpirationDate": "03/2019",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "SoftDescriptor": "123456789ABCD",
        "Type": "CreditCard",
        "Amount": 1500,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Simulado",
        "ExtraDataCollection": [],
        "Status": 20,
        "RecurrentPayment": {
            "RecurrentPaymentId": "0d2ff85e-594c-47b9-ad27-bb645a103db4",
            "NextRecurrency": "2015-06-01",
            "StartDate": "2015-06-01",
            "EndDate": "2019-12-01",
            "Interval": "SemiAnnual",
            "Link": {
                "Method": "GET",
                "Rel": "recurrentPayment",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{PaymentId}"
            },
            "AuthorizeNow": false
        }
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`RecurrentPaymentId`|Field identifier next recurrence.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`NextRecurrency`|Date of next recurrence.|Text|7|05/2019 (MM / YYYY)|
|`StartDate`|Date of onset of recurrence.|Text|7|05/2019 (MM / YYYY)|
|`EndDate`|Date of the end of recurrence.|Text|7|05/2019 (MM / YYYY)|
|`Interval`|Interval between recurrence.|Text|10|<ul><li>Bimonthly</li><li>Quarterly</li><li>Semiannual</li><li>Annual</li></ul>|
|`AuthorizeNow`|Boolean to know if the first recurrence will be authorized or not.|Boolean|-|true or false|

## Modifying buyer information

To change the Recurrence buyer's data, you just need to make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Customer</span></aside>

```json
{  
      "Name":"Customer",
      "Email":"customer@teste.com",
      "Birthdate":"1999-12-12",
      "Identity":"22658954236",
      "IdentityType":"CPF",
      "Address":{  
         "Street":"Rua Teste",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
      "DeliveryAddress":{  
         "Street":"Outra Rua Teste",
         "Number":"123",
         "Complement":"AP 111",
         "ZipCode":"21241111",
         "City":"Qualquer Lugar",
         "State":"QL",
         "Country":"BRA",
        "District":"Teste"
      }
}
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Customer"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
      "Name":"Customer",
      "Email":"customer@teste.com",
      "Birthdate":"1999-12-12",
      "Identity":"22658954236",
      "IdentityType":"CPF",
      "Address":{  
         "Street":"Rua Teste",
         "Number":"174",
         "Complement":"AP 201",
         "ZipCode":"21241140",
         "City":"Rio de Janeiro",
         "State":"RJ",
         "Country":"BRA"
      },
      "DeliveryAddress":{  
         "Street":"Outra Rua Teste",
         "Number":"123",
         "Complement":"AP 111",
         "ZipCode":"21241111",
         "City":"Qualquer Lugar",
         "State":"QL",
         "Country":"BRA",
        "District":"Teste"
      }
   }
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`Customer.Name`|Buyer's name.|Text|255|No|
|`Customer.Email`|Email Buyer.|Text|255|No|
|`Customer.Birthdate`|Date of purchase birth.|Date|10|No|
|`Customer.Identity`|RG number, CPF or CNPJ Client.|Text|14|No|
|`Customer.Address.Street`|Purchaser's address.|Text|255|No|
|`Customer.Address.Number`|Buyer's address number.|Text|15|No|
|`Customer.Address.Complement`|Complement address of the purchaser.|Text|50|No|
|`Customer.Address.ZIP code`|Zip code address of purchaser.|Text|9|No|
|`Customer.Address.City`|City address of purchaser.|Text|50|No|
|`Customer.Address.State`|Address State of the purchaser|Text|2|No|
|`Customer.Address.Country`|Country address of purchaser.|Text|35|No|
|`Customer.Address.District`|Buyer's neighborhood.|Text|50|No|
|`Customer.Deliveryaddress.Street`|Purchaser's address.|Text|255|No|
|`Customer.Deliveryaddress.Number`|Buyer's address number.|Text|15|No|
|`Customer.Deliveryaddress.Complement`|Complement address of purchaser.|Text|50|No|
|`Customer.Deliveryaddress.ZIP code`|Zip code address of purchaser.|Text|9|No|
|`Customer.Deliveryaddress.City`|City address of purchaser.|Text|50|No|
|`Customer.Deliveryaddress.State`|State address of purchaser.|Text|2|No|
|`Customer.Deliveryaddress.Country`|Country address of purchaser.|Text|35|No|
|`Customer.Deliveryaddress.District`|Buyer's neighborhood.|Text|50|No|

### Response

```shell
HTTP Status 200
```
See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Modifying end date of Recurrence

To change the end date of recurrence, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/EndDate</span></aside>

```json
"2021-01-09"
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/EndDate"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
"2021-01-09"
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Field Application Request identifier.|Guid|36|Yes|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`EndDate`|Date to end the recurrence.|Text|10|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Changing number of Recurrence plots

To change the number of recurrence plots, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Installments</span></aside>

```json
3
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Installments"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
3
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Field Application Request identifier.|Guid|36|Yes|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`Installments`|Number of installments.|Number|2|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Modifying Interval of Recurrence

To change the range of recurrence, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Interval</span></aside>

```json
6
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Interval"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
6
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`Interval`|Recurrence interval.<ul><li>Monthly</li><li>Bimonthly</li><li>Quarterly</li><li>Semiannual</li><li>Annual</li></ul>|Number|2|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Modify the date of Recurrence

To change the day of recurrence, just make a Put as shown.

<aside class="notice"><strong>Rule:</strong> If the new day is informed after the present day, we will update the day of recurrence in effect at the next recurrence. Ex .: Today is 5, and the next day recurrence is 25/05. When I upgrade to 10th, the date of the next recurrence will be day 10 / 05. If the new day is informed before the present day, we will update the day of recurrence, but this is not be implemented until the next recurrence is successfully be executed. Ex .: Today is 5, and the next day recurrence is 25/05. When I upgrade to day 3, the date of the next recurrence remain day 25/05, and after it is executed, the next one is scheduled for 03/06. If the new day is informed before the actual day, but the next recurrence is in another month, we will update the day of recurrence in effect at the next recurrence. Ex .: Today is 5, and the next day recurrence is 25/09. When I upgrade to day 3, the date of the next recurrence will be 03/09.</aside>

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/RecurrencyDay</span></aside>

```json
16
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/RecurrencyDay"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
16
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`RecurrencyDay`|Day Recurrence.|Number|2|Yes|

### Response

```shell
HTTP Status 200
```
## Modify the value of recurrency 

To modify the value of recurrency, you only need to do a Put, as the example.

**Request**

|PUT|1/RecurrentPayment/{RecurrentPaymentId}/Amount

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`RecurrencyDay`|Value of the order in cents: 156 equals to R$ 1,56|Numeric|15|Yes|

<aside class="warning">This adjustment only affect the payment date of the next recurrence.</aside>

### Response

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Modifying the date of the next payment

To change the date of the next payment, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/NextPaymentDate</span></aside>

```json
"2016-06-15"
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/NextPaymentDate"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
"2016-06-15"
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`NextPaymentDate`|Payment date of the next recurrence.|Text|10|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Modifying the Payment data Recurrence

To change the data of Recurrence payment, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Payment</span></aside>

```json
{  
   "Type":"CreditCard",
   "Amount":"123",
   "Installments":3,
   "Country":"USA",
   "Currency":"USD",
   "SoftDescriptor":"test",
   "Provider":"Simulado",
   "CreditCard":{  
      "Brand":"Master",
      "Holder":"Teset card",
      "CardNumber":"1234123412341232",
      "ExpirationDate":"05/2019"
   }
}
```

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Payment"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{  
   "Type":"CreditCard",
   "Amount":"123",
   "Installments":3,
   "Country":"USA",
   "Currency":"USD",
   "SoftDescriptor":"test",
   "Provider":"Simulado",
   "CreditCard":{  
      "Brand":"Master",
      "Holder":"Teset card",
      "CardNumber":"1234123412341232",
      "ExpirationDate":"05/2019"
   }
}
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|
|`Payments.Type`|Payment Method type.|Text|100|Yes|
|`Payments.Amount`|Order value (to be sent in cents).|Number|15|Yes|
|`Payments.Installments`|Number of installments.|Number|2|Yes|
|`Payments.SoftDescriptor`|Text to be printed on the carrier's invoice|Text|13|No|
|`CreditCard.CardNumber`|Buyer's card number.|Text|16|Yes|
|`CreditCard.Holder`|Buyer's name printed on the card.|Text|25|Yes|
|`CreditCard.ExpirationDate`|Date of expiration printed on the card.|Text|7|Yes|
|`CreditCard.SecurityCode`|Security code printed on the back of the card.|Text|4|Yes|
|`CreditCard.Brand`|Card issuer.|Text|10|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Disabling a request Recurring

To disable a recurring request, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Deactivate</span></aside>

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Deactivate"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

## Rehabilitating a Recurring request

To rehabilitate a recurring request, just make a Put as shown.

### Request

<aside class="request"><span class="method put">PUT</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}/Reactivate</span></aside>

```shell
curl
--request PUT "https://apisandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}/Reactivate"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Identification number of Recurrence.|Text|50|Yes|

### Response

```shell
HTTP Status 200
```

See Appendix [HTTP Status Code](#http-status-code) to the list of all the HTTP status codes possibly returned by the API.

# Consulting Sales

## Referring to a sale

For a sale with credit card, you must do a GET for Payment feature as shown.

### Request

<aside class="request"><span class="method get">GET</span> <span class="endpoint">/1/sales/{PaymentId}</span></aside>

```shell
curl
--request GET "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`PaymentId`|Payment identification number.|Text|36|Yes|

### Response

```json
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador Teste",
        "Address": {}
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "AuthorizationCode": "123456",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "MerchantOrderId": "2014111706",
    "Customer": {
        "Name": "Comprador Teste",
        "Address": {}
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "455187******0183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2021",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "674532",
        "AuthorizationCode": "123456",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Type": "CreditCard",
        "Amount": 15700,
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`Status`|Transaction Status.|Byte|-|2|
|`Customer.Name`|Text|255|Yes|Buyer's name.|
|`Payment.Type`|Text|100|Yes|Payment Method type.|
|`Payment.Amount`|Number|15|Yes|Order value (to be sent in cents).|
|`Payment.Provider`|Text|15|Yes|Payment Method name.|
|`Payment.Installments`|Number|2|Yes|Number of installments.|
|`CreditCard.CardNumber`|Text|16|Yes|Buyer's card number.|
|`CreditCard.Holder`|Text|25|Yes|Buyer's name printed on the card.|
|`CreditCard.ExpirationDate`|Text|7|Yes|Date of expiration printed on the card.|
|`CreditCard.SecurityCode`|Text|4|Yes|Security code printed on the back of the card.|
|`CreditCard.Brand`|Text|10|Yes|Card issuer (Visa/Master/Amex/Elo/Aura/JCB/Diners/Discover).|

## Referring to a sale by the store identifier

It’s not possible to consult directly a payment by the identifier sent from the store (MerchantOrderId), but you can get all the PaymentIds associated with the identifier.

For consult a sale using the store identifier, you must do a GET to refuse sales as shown.

### Request

<aside class="request"><span class="method get">GET</span> <span class="endpoint">/1/sales?merchantOrderId={merchantOrderId}</span></aside>

```shell
curls
--request GET " https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales?merchantOrderId={merchantOrderId}"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`MerchantOrderId`|Field Application Identifier in our Shop.|Text|36|Yes|


### Response

```json
{
    "Payments": [
        {
            "PaymentId": "5fb4d606-bb63-4423-a683-c966e15399e8",
            "ReceveidDate": "2015-04-06T10:13:39.42"
        },
        {
            "PaymentId": "6c1d45c3-a95f-49c1-a626-1e9373feecc2",
            "ReceveidDate": "2014-12-19T20:23:28.847"
        }
    ]
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
     "Payments": [
        {
            "PaymentId": "5fb4d606-bb63-4423-a683-c966e15399e8",
            "ReceveidDate": "2015-04-06T10:13:39.42"
        },
        {
            "PaymentId": "6c1d45c3-a95f-49c1-a626-1e9373feecc2",
            "ReceveidDate": "2014-12-19T20:23:28.847"
        }
    ]
}
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|

## Referring a sale with Fraud Analysis

For a sale of credit card with antifraud, you must do a GET for Payment feature as shown.

### Request

<aside class="request"><span class="method get">GET</span> <span class="endpoint">/1/sales/{PaymentId}</span></aside>

```shell
curl
--request GET "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`PaymentId`|Payment identification number.|Text|36|Yes|

### Response

```json
{
    "OrderId": "f381c0c4-2bf9-4de1-91e1-e9e1f11d0854",
    "MerchantOrderId": "201411173454307",
    "Customer": {
        "Name": "Comprador Teste",
        "Email": "compradorteste@live.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "402400******2931",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2015",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "500000",
        "Tid": "10069930692625A01001",
        "AuthorizationCode": "123456",
        "FraudAnalisys": {
            "ReasonCode": 100,
            "Score": 42,
            "Status": "Accept",
            "FactorCode": "B^D^R"
        },
        "PaymentId": "77df250a-93ce-46a3-a224-a894b78ecd80",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Cielo",
        "Credentials": {},
        "ExtraDataCollection": [],
        "ReasonCode": 0,
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "OrderId": "f381c0c4-2bf9-4de1-91e1-e9e1f11d0854",
    "MerchantOrderId": "201411173454307",
    "Customer": {
        "Name": "Comprador Teste",
        "Email": "compradorteste@live.com",
        "Birthdate": "1991-01-02",
        "Address": {
            "Street": "Rua Júpter",
            "Number": "174",
            "Complement": "AP 201",
            "ZipCode": "21241140",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA"
        }
    },
    "Payment": {
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": false,
        "Authenticate": false,
        "CreditCard": {
            "CardNumber": "402400******2931",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2015",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "ProofOfSale": "500000",
         "Tid": "10069930692625A01001",
        "AuthorizationCode": "123456",
        "FraudAnalisys": {
            "ReasonCode": 100,
            "Score": 42,
            "Status": "Accept",
            "FactorCode": "B^D^R"
        },
        "PaymentId": "77df250a-93ce-46a3-a224-a894b78ecd80",
        "Type": "CreditCard",
        "Amount": 100,
        "Currency": "BRL",
        "Country": "BRA",
        "Provider": "Cielo",
        "Credentials": {},
        "ExtraDataCollection": [],
        "ReasonCode": 0,
        "Status": 1,
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`ProofOfSale`|Sales Receipt number.|Text|20|Alphanumeric text|
|`Tid`|Transaction id in the acquirer.|Text|40|Alphanumeric text|
|`AuthorizationCode`|Authorization Code.|Text|300|Alphanumeric text|
|`SoftDescriptor`|Text to be printed on the carrier's invoice|Text|13|Alphanumeric text|
|`PaymentId`|Field Application Identifier.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`Id`|IDENTIFICATION Transaction in Antifraud.|Text|300|Alphanumeric text|
|`Status`|Transaction Status.|Byte|-|2|
|`FraudAnalisys.ReasonCode`|Analysis of the results.|Byte|-|Number:<ul><li>100 - Successful operation.</li><li>101 - There are one or more missed requests fields. Possible action: See the fields that are missing in AntiFraudResponse list.MissingFieldCollection. Resend the request with complete information.</li><li>102 - One or more request fields contain invalid data. Possible action: See the invalid fields in AntiFraudResponse list.InvalidFieldCollection. Resubmit the request with the correct information.</li><li>150 Failure in the general system. Possible action: wait a few minutes and try resending the request.</li><li>151 - The request was received, but time-out occurred on the server.This error does not include time-out between the client and the server. Possible action: Wait a few minutes and try resending the request.</li><li>152 The request was received, but was time-out. Possible action: Wait a few minutes and resubmit the request.</li><li>202 - Fraud Prevention refused the request because the card has expired. You can also receive this code if the expiration date does not coincide with the date on issuing bank file. If payment processor allows emission credits for expired cards, CyberSource does not limit this functionality. Possible action: Request a card or other payment method.</li><li>231 The account number is invalid. Possible action: Request a card or other payment method.</li><li>234 - There is a problem with the merchant setup. Possible action: Do not click. Please contact customer support to correct the configuration problem.</li><li>400 A fraud score exceeds its limit. Possible action: Review the customer's request.</li><li>480 The request was scheduled for review by Manager decision.</li><li>481 - The request was rejected by Manager decision</li></ul>|
|`FraudAnalisys.FactorCode`|Combination codes that indicate the score of the application. The codes are concatenated using the ^.|Text|100|Eg B ^ D ^ R ^ Z<ul><li>A - Excessive Change of Address.The customer has changed the billing address two or more times in the last six months.</li><li>B - BIN card or risk authorization. Risk factors are related to credit card and BIN / or card authorization checks.</li><li>C - High numbers of credit cards.The customer has used more than six numbers of credit cards in the past six months.</li><li>D - Impact of the e-mail address.The customer uses a free email provider or e-mail address is risky.</li><li>E - Positive list.The customer is in its positive list.</li><li>F - Negative list.The account number, address, email address or IP address for this purpose appears its negative list.</li><li>G - geolocation inconsistencies.The email client domain, phone number, billing address, shipping address or IP address is suspect.</li><li>H - excessive name changes.The customer changed its name twice or more in the past six months.</li><li>I - Internet inconsistencies.The IP address and e-mail domain are not consistent with the billing address.</li><li>N - Entrance meaningless. The customer name and address fields contain meaningless words or language.</li><li>The - obscenities. Customer data contains obscene words.</li><li>P - morphing identity.Various amounts of an identity element are attached to a different value of an identity element. For example, various telephone numbers are connected to a single account number.</li><li>Q - Inconsistencies phone.The customer's phone number is suspect.</li><li>R - risky Order.The transaction, the customer and the merchant show information correlated high risk.</li><li>T - Time Coverage.The client is attempting a purchase outside the expected time.</li><li>U - unverifiable address.The billing address or delivery can not be verified.</li><li>V - Velocity.The account number was used many times in the last 15 minutes.</li><li>W - marked as suspect.The billing address and delivery is similar to an address previously marked suspect.</li><li>Y - The address, city, state or country of billing and shipping addresses do not correlate.</li><li>Z - Invalid value. As the request contains an unexpected value, a default value has been replaced. Although the transaction can still be processed, examine the application carefully to detect abnormalities.</li></ul>|
|`FraudAnalisys.Score`|Total score calculated for the application.|Number|-|Number|
|`ReturnCode`|Acquiring the return code.|Text|32|Alphanumeric text|
|`ReturnMessage`|Acquiring the return message.|Text|512|Alphanumeric text|

## Referring a sale Recurrent

For a Recurrence credit card, you must do a GET as shown.

### Request

<aside class="request"><span class="method get">GET</span> <span class="endpoint">/1/RecurrentPayment/{RecurrentPaymentId}</span></aside>

```shell
curl
--request GET "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}"
--header "Content-Type: application/json"
--header "MerchantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--header "MerchantKey: 0123456789012345678901234567890123456789"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
--verbose
```

|Property|Description|Type|Size|Mandatory|
|--------|-----------|----|----|---------|
|`MerchantId`|Store identifier in Webservice 3.0.|Guid|36|Yes|
|`MerchantKey`|Public key for Double Authentication in Webservice 3.0.|Text|40|Yes|
|`RequestId`|Request Identifier, used when the merchant uses different servers for each GET/POST/PUT|Guid|36|No|
|`RecurrentPaymentId`|Recurrence field identifier.|Text|36|Yes|

### Response

```json
{
    "Customer":
    {
        "Name": "Comprador accept"
    },
    "RecurrentPayment": {
        "RecurrentPaymentId": "6716406f-1cba-4c7a-8054-7e8988032b17",
        "NextRecurrency": "2015-11-05",
        "StartDate": "2015-05-05",
        "EndDate": "2019-12-01",
        "Interval": "SemiAnnual",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}"
            }
        ]
    }
}
```

```shell
--header "Content-Type: application/json"
--header "RequestId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
--data-binary
{
    "Customer":
    {
        "Name": "Comprador accept"
    },
    "RecurrentPayment": {
        "RecurrentPaymentId": "6716406f-1cba-4c7a-8054-7e8988032b17",
        "NextRecurrency": "2015-11-05",
        "StartDate": "2015-05-05",
        "EndDate": "2019-12-01",
        "Interval": "SemiAnnual",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/RecurrentPayment/{RecurrentPaymentId}"
            }
        ]
    }
}
```

|Property|Description|Type|Size|Format|
|--------|-----------|----|----|------|
|`RecurrentPaymentId`|Field identifier next recurrence.|Guid|36|xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx|
|`ReasonCode`|Code of operation reason.|Byte|-|Number from 1 to 99|
|`ReasonMessage`|Message of Operation reason.|Text|32|Successful|
|`NextRecurrency`|Date of next recurrence.|Text|7|05/2019 (MM / YYYY)|
|`StartDate`|Date of onset of recurrence.|Text|7|05/2019 (MM / YYYY)|
|`EndDate`|Date of the end of recurrence.|Text|7|05/2019 (MM / YYYY)|
|`Interval`|Interval between recurrence.|Text|10|<ul><li>Bimonthly</li><li>Quarterly</li><li>Semiannual</li><li>Annual</li></ul>|

# Attachments

## List of Providers

### Providers for invoice

* Bradesco
* Banco do Brasil

### Providers for electronic transfer

* Bradesco
* Banco do Brasil

## Status

Status returned by the API

|Code|Payment Status|Payment Method|Description|
|----|--------------|--------------|-----------|
|0|NotFinished|All|Failed to process the payment|
|1|Authorized|All|Suitable payment method to be captured or paid (Boleto)|
|2|PaymentConfirmed|All|Payment Confirmed and concluded|
|3|Denied|Credit Card and Debt/Eletronic transfer|
|10|Voided|All|Canceled Payment|
|11|Refunded|Credit Card and Debit|Payment Cancelled/Reversed|
|12|Pending|Credit Card and Debit/Eletronicll|Payment canceled for failure processing|Transfer|Waiting return of financial institution|
|13|Aborted|All|Payment canceled for failure processing|
|20|Scheduled|Credit card|Scheduled Recurrence|

## Merchant Defined Data

The table below lists all possible codes to be sent in MerchantDefinedData parameter and its type of information that must be filled.

| Id | Given | Description | Type |
|----|-------|-------------|------|
| 1 |Customer made Log In | If the end user has logged on the site to buy, send: login it. Purchase was made as a visitor, send: "Guest". If the sale was made directly by a third party, an agent for example, do not send the field | String |
| 2 |Customer is established there: #dias | Number of days | Number |
| 3 |Purchase Performed in (plots) | Number of installments | Number |
| 4 |Sale channel| Values: "Call Center" = carrier buying the phone "Web" = carrier buying the Web "portal" = an agent making the purchase for the customer "Kiosk" = Shopping in “mobile” kiosks = Purchases made on smartphone or tablet | String |
| 5 |Coupon Code/Discount|If the buyer is using coupon, send the coupon code | String |
| 6 |Last effected purchase | MM / DD / YYYY | Date |
| 7 |Affiliation| Name or dealer code or broker | String |
| 8 |Purchase attempts| Nr of times tried to make the payment request. Attempted different credit cards and / or other payments methods attempted. For the same application. | Number |
| 9 |Customer will withdraw the product in a store | Values: "Yes", "NOT" In the case of agency, you will remove any voucher and / or physically ticket | String |
| 10 |Payment made by 3rd | Values "YES", "NO" If the payer is present or not on the trip / package | String |
| 11 |Hotel Category | Values: 1, 2, 3, 4, 5 How many stars has the hotel | Number |
| 12 |Hotel Check-in date | MM / DD / YYYY | Date |
| 13 |Hotel check-out date | MM / DD / YYYY | Date |
| 14 |Travel / Package | Values: "National", "International", "National / International" | String |
| 15 |Cia name. Air / Rental Car / Hotel | Send the name of each company, separated by "/" | String |
| 16 |PNR | Send the PNR number of the reservation. When there is a change of booking for this PNR in advance of the flight date, it is important to make a new analysis of fraud by sending this PNR again. | String |
| 17 |There was anticipation of reservation? | Values "YES", "NO" Indicate if there was rebooking the flight to an earlier date to the original. It is essential also to send the PNR field | String |
| 18 |(reserved)| | |
| 19 |(reserved) | | |
| 20 |(reserved) | | |
| 21 |(reserved) | | |
| 22 |(reserved) | | |
| 23 |(reserved) | | |
| 24 |(reserved) | | |
| 25 |(reserved) | | |
| 26 |Bin Credit Card | Send the bin - 6/1 digits of the card | String |
| 27 |(reserved) | | |
| 28 | (reserved) | | |
| 29 | (reserved) | | |
| 30 | (reserved) | | |
| 31 | Nr credit cards exchanges | Nr of times the buyer changed the credit card to make the payment request | Number |
| 32 | Email pasted or typed | Values: "Entered," "Stuck" State whether the e-mail address is typed or pasted in the field | String |
| 33 | Nr pasted or typed Card | Values: "Entered," "Stuck" State whether the nr credit card was typed or pasted in the field | String |
| 34 | Email confirmed | If there is routine e-mail confirmation for account activation. Values: "Yes". If not, do not send the MDD | String |
| 35 | Customer type (local / tourist) | Values: "Local", "Tourist". Do not send the MDD in the case of not having this information | String |
| 36 | Use this card on purchases ($) | Inform whether it was used Card Present (Gift Card) in the purchase. Values: "Yes". If not, do not send the MDD | String |
| 37 | Shipping Method | Values: "Sedex", "Sedex 10", "Day 1", "2 Days", "Motoboy", "Same Day", etc. If you have not sent, do not send the MDD | String |
| 38 | Number of Bina | Inform the nr of identification telephone with DDD | String |
| 39 | (reserved) | | |
| 40 | (reserved) | | |
| 41 the 95 | Free field | The fields are reserved for sending shopkeeper data as the business rule. | String |
| 96 | (reserved) | | |
| 97 | (reserved) | | |
| 98 | (reserved) | | |
| 99 | (reserved) | | |
| 100 | Document | Document (CPG, RG, etc.) | String |

## HTTP Status Code

|HTTP Status Code|Description|
|----------------|-----------|
|200|OK|
|400|Bad Request|
|404|Resource Not Found|
|500|Internal Server Error|

## Error Codes

|Code|Message|Description|
|----|-------|-----------|
|0|Internal error|Data sent exceeds the field size|
|100|RequestId is required|Field sent is blank or invalid |
|101|MerchantId is required|Field sent is blank or invalid |
|102|Payment Type is required|Field sent is blank or invalid |
|103|Payment Type can only contain letters|Special characters not allowed|
|104|Customer Identity is required|Field sent is blank or invalid |
|105|Customer Name is required|Field sent is blank or invalid |
|106|Transaction ID is required|Field sent is blank or invalid |
|107|You must Provide CreditCard Number, Token or Alias|Data sent exceeds the field size|
|108|Amount must be greater or equal to zero|transaction value must be greater than "0" |
|109|Payment Currency is required|Field sent is blank or invalid |Field sent is blank or invalid |
|110|Invalid Payment Currency|Field sent is blank or invalid |
|111|Payment is required Country|Field sent is blank or invalid |
|112|Invalid Payment Country|Field sent is blank or invalid |
|113|Invalid Payment Code|Field sent is blank or invalid |
|114|The provided MerchantId is not in correct format|The merchantId sent is not a GUID |
|115|The provided MerchantId was not found|Merchant ID does not exist or belongs to another environment (Eg: Sandbox) |
|116|The provided MerchantId is blocked|locked store, contact the Cielo support|
|117|Credit Card Holder is required|Field sent is blank or invalid |
|118|Credit Card Number is required|Field sent is blank or invalid |
|119|At least one Payment is required|Node "Payment" unsent |
|120|Request IP not allowed. Check your IP White List|IP blocked for security reasons|
|121|Customer is required|Node "Customer" unsent|
|122|MerchantOrderId is required|Field sent is blank or invalid |
|123|Installments must be greater or equal to one|Number of installments should be greater than 1 |
|124|Credit Card is Required|Sent field is empty or invalid |
|125|Credit Card Expiration Date is required|Sent field is empty or invalid |
|126|Credit Card Expiration Date is invalid|Sent field is empty or invalid |
|127|You must Provide CreditCard Number, Token or Alias|Credit card number is required |
|128|Card Number length exceeded|Number of card is greater than 16 digits |
|129|Affiliation not found|payment method not tied to store or invalid Provider |
|130|Could not get Credit Card|---|
|131|MerchantKey is required|Field sent is blank or invalid |
|132|MerchantKey is invalid|Merchantkey sent is not a valid |
|133|Provider is not supported for this Payment Type|Provider sent does not exist |
|134|FingerPrint length exceeded|Data sent exceeds the field size |
|135|MerchantDefinedFieldValue length exceeded|Data sent exceeds the field size |
|136|ItemDataName length exceeded|Data sent exceeds the field size |
|137|ItemDataSKU length exceeded|Data sent exceeds the field size |
|138|PassengerDataName length exceeded|Data sent exceeds the field size |
|139|PassengerDataStatus length exceeded|Data sent exceeds the field size |
|140|PassengerDataEmail length exceeded|Data sent exceeds the field size |
|141|PassengerDataPhone length exceeded|Data sent exceeds the field size |
|142|TravelDataRoute length exceeded|Data sent exceeds the field size |
|143|TravelDataJourneyType length exceeded|Data sent exceeds the field size |
|144|TravelLegDataDestination length exceeded|Data sent exceeds the field size |
|145|TravelLegDataOrigin length exceeded|Data sent exceeds the field size |
|146|SecurityCode length exceeded|Data sent exceeds the field size |
|147|Street address length exceeded|Data sent exceeds the field size |
|148|Address Number length exceeded|Data sent exceeds the field size |
|149|Address Complement length exceeded|Data sent exceeds the field size |
|150|Address ZipCode length exceeded|Data sent exceeds the field size |
|151|Address City length exceeded|Data sent exceeds the field size |
|152|Address State length exceeded|Data sent exceeds the field size |
|153|Address Country length exceeded|Data sent exceeds the field size |
|154|District Address length exceeded|Data sent exceeds the field size |
|155|Customer Name length exceeded|Data sent exceeds the field size |
|156|Customer Identity length exceeded|Data sent exceeds the field size |
|157|Customer IdentityType length exceeded|Data sent exceeds the field size |
|158|Customer Email length exceeded|Data sent exceeds the field size |
|159|ExtraData Name length exceeded|Data sent exceeds the field size |
|160|ExtraData Value length exceeded|Data sent exceeds the field size |
|161|Instructions billet length exceeded|Data sent exceeds the field size |
|162|Demostrative billet length exceeded|Data sent exceeds the field size |
|163|Return Url is required|return URL is not valid - not accepted paging or extensions (Eg .php) in the return URL |
#REF!
|166|AuthorizeNow is required|---|
|167|Antifraud not configured|Antifraud not linked to the Merchant's registration |
|168|Recurrent Payment not found|Recurrence not found |
|169|Recurrent Payment is not active|Recurrence is not active. Execution paralyzed |
|170|Cartão Protegido not configured|protected card not linked to the Merchant's registration|
|171|Affiliation data not sent|Failure in processing the request - Please contact the Cielo support|
|172|Credential Code is required|Failed validation of sent accredited|
|173|Payment method is not enabled|Payment method not linked to the Merchant's registration|
|174|Card Number is required|Sent field is empty or invalid|
|175|EAN is required|Sent field is empty or invalid|
|176|Payment Currency is not supported|Sent field is empty or invalid|
|177|Card Number is invalid|Sent field is empty or invalid|
|178|EAN is invalid|Sent field is empty or invalid|
|179|The max number of installments allowed for recurring payment is 1|Sent field is empty or invalid|
|180|The provided Card PaymentToken was not found|Token do Cartão protegido não encontrado|
|181|The MerchantIdJustClick is not configured|Token blocked protected Card|
|182|Brand is required|Card Issuer unsent|
|183|Invalid customer bithdate|Date of birth or invalidates future|
|184|Request could not be empty|Failure in the request format. Check code sent|
|185|Brand is not supported by selected provider|Card issuer not supported by Cielo API|
|186|The selected provider does not support the options provided (Capture, Authenticate, Recurrent or Installments)|Payment method does not support the command sent|
|187|ExtraData Collection contains one or more duplicated names|---|
|188|Avs with CPF invalid|---|
|189|Avs with length of street exceeded|Data sent exceeds the field size|
|190|Avs with length of number exceeded|Data sent exceeds the field size|
|190|Avs with length of complement exceeded|Data sent exceeds the field size|
|191|Avs with length of district exceeded|Data sent exceeds the field size|
|192|Avs with zip code invalid|ZipCod sent is invalid|
|193|Split Amount must be greater than zero|Value for performing split should be greater than 0|
|194|Split Establishment is Required|SPLIT not enabled to register store|
|195|The PlataformId is required|Platform Validated not sent|
|196|DeliveryAddress is required|Required field not sent|
|197|Street is required|Required field not sent|
|198|Number is required|Required field not sent|
|199|ZipCode is required|Required field not sent|
|200|City is required|Required field not sent|
|201|State is required|Required field not sent|
|202|District is required|Required field not sent|
|203|Cart item Name is required|Required field not sent|
|204|Cart item Quantity is required|Required field not sent|
|205|Cart item type is required|Required field not sent|
|206|Cart item name length exceeded |Data sent exceeds the field size|
|207|Cart item description length exceeded |Data sent exceeds the field size|
|208|Cart item sku length exceeded |Data sent exceeds the field size|
|209|Shipping addressee sku length exceeded |Data sent exceeds the field size|
|210|Shipping data cannot be null|Required field not sent|
|211|WalletKey is invalid|Visa Checkout data invalid|
|212|Merchant Wallet Configuration not found|Visa Checkout not tied to merchant account|
|213|Credit Card Number is invalid|Credit card sent is invalid|
|214|Credit Card Holder Must Have Only Letters|Cardholder must not contain special characters|
|215|Agency is required in Boleto Credential|Required field not sent|
|216|Customer IP address is invalid|IP blocked for security reasons|
|300|MerchantId was not found|---|
|301|Request IP is not allowed|---|
|302|Sent MerchantOrderId is duplicated|---|
|303|Sent OrderId does not exist|---|
|304|Customer Identity is required|---|
|306|Merchant is blocked|---|
|307|Transaction not found|Transaction not found or does not exist in the environment. |
|308|Transaction not available to capture|Transaction can not be captured - Contact Cielo support |
|309|Transaction not available to void|Transaction can not be canceled - Contact Cielo support |
|310|Payment method doest not support this operation|Command sent not supported by the means of payment |
|311|Refund is not enabled for this merchant|Cancellation after 24 hours not released to the merchant |
|312|Transaction not available to refund|Recurring transaction not found or not available in the environment |
|313|Recurrent Payment not found|---|
|314|Invalid Integration|---|
|315|Can not change NextRecurrency with pending payment|---|
|316|Cannot set NextRecurrency to past date|Não é permitido alterada dada da recorrencia para uma data passada|
|317|Invalid Recurrency Day|---|
|318|No transaction found|---|
|319|Smart recurrency is not enabled|Recurrence not linked to the Merchant's registration |
|320|Can not Update Affiliation Because this Recurrency not Affiliation saved|---|
|321|Can not set EndDate to before next recurrency.|---|
|322|Zero Dollar Auth is not enabled|Zero Dollar not linked to the Merchant's registration |
|323|Bin Query is not enabled|Bins consultation not linked to the Merchant's registration |

## Return Codes

|Return Codes|Definition|Meaning|Action|Allows retry|
|------------|----------|-------|------|------------|
|00|Authorized transaction|Authorization approved|Authorization approved|no|
|000|Authorized transaction|Authorization approved|Authorization approved|no|
|01|Unauthorized transaction - Referred by the issuing bank.|Unauthorized transaction - Referred by the issuing bank.|Unauthorized transaction. Contact your issuing bank.|no|
|02|Consultation Cielo.Transação said.|Unauthorized transaction. Referred to by some rule of the bank.|Unauthorized transaction. Contact your issuing bank.|no|
|03|Error in registering the property code in the TEF configuration file|Denied transaction. Invalid establishment.|Unable to process the transaction.|no|
|04|Unauthorized transaction. Card blocked by the issuing bank.|Unauthorized transaction. Card blocked by the issuing bank.|Unauthorized transaction. Contact your issuing bank.|no|
|05|Unauthorized transaction. Defaulter card (Do not honor).|Unauthorized transaction. Unable to process the transaction. Issues related to security, default or carrier limit.|Unauthorized transaction. Contact your issuing bank.|Yes; Cielo recommends only 4 times in 16 days.|
|06|Unauthorized transaction. Canceled card.|Unauthorized transaction. Unable to process the transaction. Card permanently canceled by the issuing bank.|Unable to process the transaction. Contact your issuing bank.|no|
|07|Denied transaction. Hold card special condition|Transaction not authorized by the rules of the issuing bank.|Unauthorized transaction. Contact your issuing bank|no|
|08|Unauthorized transaction. CVV2 Invalid| Unauthorised Transaction|Unauthorised Transaction.|no|
|11|Transaction authorized for cards issued overseas|Approved authorization|Authorization Approved|no|
|12|Invalid transaction, card error.|Unable to process the transaction. Ask the carrier to check the card data and try again.|Unable to process the transaction. Review the data and try again. If the error persists, please contact your issuing bank.|no|
|13|Invalid transaction amount|Unauthorised Transaction. Invalid value. Ask the carrier to review the value and try again. If the error persists, contact Cielo|Transaction not authorized. Invalid value. Do the transaction again confirming the data reported. If the error persists, contact the merchant.|no|
|14|Invalid Card|Unauthorised Transaction. Invalid card. Try using the Lhum Algorithm (Mod 10) to prevent unauthorized transactions for that reason.| Unauthorised Transaction. Invalid card. Do the transaction again confirming the data reported.|no|
|15|Bank issuer unavailable or nonexistent.|Unauthorized transaction. Issuing bank not available|Unable to process the transaction. Contact your issuing bank.|no|
|19|Do the transaction again or try again later.| We could not process the transaction. Do the transaction again or try again later. If the error persists, contact Cielo|We could not process the transaction. Do the transaction again or try again later. If the error persists contact the merchant| Yes; Cielo recommends only 4 times in 16 days.|
|21|Cancellation not made. Transaction not found.| We could not process the cancellation. If the error persists, contact Cielo|We could not process the cancellation. Try again later. If the error persists, contact the merchant.|no|
|22|Invalid installment. Number of invalid installments.| Could not process the transaction. Number of invalid installments. If the error persists, contact Cielo|We could not process the transaction. Invalid value. Do the transaction again confirming the reported data. If the error persists, contact the merchant.|no|
|23|Value of the invalid provision.| Unable to process the transaction. Value of the invalid provision. If the error persists, contact Cielo|We could not process the transaction. Value of the invalid provision. Do the transaction again confirming the data reported. If the error persists, contact the merchant.|no|
|24|Number of invalid installments|. Unable to process the transaction. Number of invalid installments. If the error persists, contact Cielo|We could not process the transaction. Number of invalid installments. Do the transaction again confirming the reported data. If the error persists, contact the merchant.|no|
|25|Authorization application did not send the card number| Unable to process the transaction. Authorization request did not send the card number. If the error persists, contact Cielo |We could not process the transaction. Do the transaction again confirming the data reported. If the error persists, contact the merchant|Yes.; Cielo recommends only 4 times in 16 days.|
|28|Archive temporarily unavailable.| We could not process the transaction. File unavailable. If the error persists, contact Cielo|We could not process the transaction.Please try again later|Yes; Cielo recommends only 4 times in 16 days.|
|39|Error issuing bank| Unauthorised Transaction. Error in issuing bank.|Unauthorised Transaction. Contact your issuing bank.|No|
|43|Unauthorised Transaction. Blocked because of theft|Unauthorised Transaction. Blocked because of theft|Unauthorised Transaction. Contact your issuing bank.|No|
|51|Limit Exceeded/without balance.|Unauthorised Transaction. Exceeded limit/no balance.|Unauthorised Transaction. Contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|52|Card with invalid digit control.|We could not process the transaction. Card digit invalid control|Unauthorised Transaction. Do the transaction again confirming data.|No|
|53|Transaction not allowed. Invalid savings card|Transaction not allowed. Invalid card savings.|Could not process the transaction. Contact your issuing bank.|No|
|54|Expired Card|Unauthorised Transaction. Expired card|Unauthorised Transaction. Do the transaction again confirming data.|No|
|55|Unauthorized transaction. Invalid password|Unauthorised Transaction. Invalid password.|Unauthorised Transaction. Contact your issuing bank.|No| 
|57|Transaction not allowed for the card|Unauthorized transaction. Transaction not allowed for the card.|Unauthorized transaction. Contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days; Visa recommends aims recommends not retry.|
|58|Transaction not allowed. Invalid payment option|Transaction not allowed. Invalid payment option. Review if the chosen payment option is enabled in the register|Unauthorised Transaction. Contact merchant.|No|
|59|Unauthorised Transaction. Suspected fraud|Transaction not authorized. Suspected fraud|Transaction not authorized. Contact your issuing bank.|No|
|60|Unauthorised Transaction|Unauthorised Transaction. Try again. If the error persists, the holder should contact the issuing bank.|We could not process the transaction. Try again later. If the error persists, please contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|61|Visa issuing bank available|Unauthorised Transaction. Visa issuing bank available|Unauthorised Transaction. Try again. If the error persists, please contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|62|Unauthorised Transaction. Restricted card to domestic use| Unauthorized transaction. Restricted card to domestic use| Unauthorised Transaction.Contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|63|Unauthorised Transaction. Security breach| Transaction unauthorized. Security breach.|Unauthorised Transaction. Contact your issuing bank.|No|
|64|Unauthorised Transaction. Value below the minimum required by the issuing bank.|Unauthorised Transaction. Contact your issuing bank.|Unauthorised Transaction. Value below the minimum required by the issuing bank.|No|
|65|Unauthorised Transaction. Exceeded the number of transactions for the card.|Transaction not authorized. Exceeded the number of transactions for the card.|Transaction not authorized.Contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|70|Unauthorised Transaction. Limit Exceeded|Unauthorised Transaction. Exceeded limit/no balance.|Unauthorised Transaction. Contact your issuing bank.|No|
|75|Password locked. Exceeded card attempts.|Transaction not authorized|Your transaction may not be processed. Contact the Issuer of your card.|No|
|76|Cancellation not made. Issuing bank did not locate the original transaction|Cancellation not made. Issuing bank did not locate the original transaction|Cancellation not made. Contact the merchant.|No|
|77|Cancellation not made. It was located the original transaction|Cancellation not made. It was located the original transaction|Cancellation not made. Contact the merchant|No|
|78|Unauthorised Transaction. Blocked card, first use|Unauthorised Transaction. Card locked first use. Ask your carrier to unlock the card directly with your issuing bank.|Unauthorised Transaction. Contact your issuing bank and request the unlock card.|No|
|80|Unauthorised Transaction. Divergence on the date of transaction/payment|Unauthorised Transaction. Transaction date or date of the first invalid payment|Unauthorised Transaction. Do the transaction again confirming data.|No|
|82|Unauthorised Transaction. Invalid Card|Unauthorised Transaction. Invalid Card. Ask the carrier to review the data and try again.|Unauthorised Transaction. Do the transaction again confirming the data. If the error persists, please contact your issuing bank.|No|
|83|Unauthorised Transaction. Error in control passwords|Unauthorized transaction. Error in control passwords|Unauthorized transaction. Do the transaction again confirming the data. If the error persists, please contact your issuing bank.|No|
|97|Not amount allowed for this transaction.|Unauthorised Transaction. Not allowed value for this transaction.|Unauthorised Transaction. Not allowed value for this transaction.|no|
|89|Error in the transaction.|Transaction not authorized. Error in the transaction. The carrier must try again and if the error persists, contact the issuing bank.|Unauthorised Transaction. Error in the transaction. Please try again and if the error persists, please contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|91|Unauthorised Transaction. Issuing bank temporarily unavailable.|Unauthorised Transaction. Issuing bank temporarily unavailable.|Unauthorised Transaction. Issuing bank temporarily unavailable.Contact your issuing bank|Yes; Cielo recommends only 4 times in 16 days.|
|92|Unauthorised Transaction. Exceeded communication time|Unauthorised Transaction. Exceeded communication time|Unauthorised Transaction. Temporarily unavailable communication. Contact the merchant|Yes; Cielo recommends only 4 times in 16 days.|
|93|Unauthorised Transaction. Rule violation - Possible error in the register|Unauthorised Transaction.Rule violation - Possible error in the record|Your transaction can not be processed. Contact the merchant.|No|
|96|Processing failed.|Unable to process the transaction. Failure Cielo system. If the error persists, contact Cielo|Your transaction may not be processed, please try again later. If the error persists, contact the merchant|Yes; Cielo recommends only 4 times in 16 days.|
|98| System/unavailable communication|Unauthorised Transaction. Without communication system transmitter. If general, check SITEF, GATEWAY and/or connectivity|Your Transaction can not be processed, please try again later. If the error persists, contact the merchant|Yes; Cielo recommends only 4 times in 16 days.|
|99|System/unavailable communication|Unauthorised Transaction. Without communication system transmitter. Try later. Can be error in SITEF, please check|Your transaction may not be processed, please try again later. If the error persists, contact the merchant|Yes; Cielo recommends only 4 times in 16 days.|
|999|System/unavailable communication|Unauthorised Transaction. Without communication system transmitter. Try later. Can be error in SITEF, please check| Your transaction may not be processed, please try again later. If the error persists, contact the merchant|Yes; Cielo recommends only 4 times in 16 days.|
|AA|Timeout|Timeout in communication with the issuing bank. East carrier to try again, if the error persists is necessary that the carrier contact your issuing bank.|Time Exceeded in its communication with the issuing bank, try again later. If the error persists, contact your bank|Yes; Cielo recommends only 4 times in 16 days.|
|AE|Try Later|Timeout in communication with the issuing bank. Guide the carrier to try again, if the error persists is necessary that the carrier contact your issuing bank.|Time Exceeded in its communication with the issuing bank, please try again later. If the error persists, contact your bank|Yes; Cielo recommends only 4 times in 16 days.|
|BM|Invalid Card|Unauthorised Transaction. Invalid card. Try using the Lhum Algorithm (Mod 10) to prevent unauthorized transactions for that reason.|Unauthorised Transaction. Invalid card. Do the transaction again confirming the reported data.|No|
|BV|Expired Card|Unauthorised Transaction. Overdue card|Unauthorised Transaction. Check the data and try again.|No|
|DA|Establishment Invalid 03|Unauthorised Transaction. Failure to communicate with the issuing bank. Guide the carrier to contact the issuing bank.| Unauthorised Transaction. Contact the issuing bank.|No|
|FA|Denied|Unauthorised Transaction Amex|Unauthorised Transaction. Contact your issuing bank.|No|
|FC|Call Amex|Unauthorized transaction. Guide the carrier to contact the issuing bank.|Unauthorised Transaction. Contact your issuing bank.|No|
|FD|Transaction denied. Retain special status card|Transaction not authorized by the rules of the issuing bank.|Unauthorised Transaction. Contact your issuing bank|no|
|FE|Unauthorised Transaction. Divergence on the date of transaction / payment |. Unauthorised Transaction. Transaction date or date of the first invalid payment |. Unauthorised Transaction. Redo the transaction confirming data. |No|
|FF|Cancellation OK|Cancellation Transaction authorized successfully| Cancellation Transaction authorized successfully|no |
|FG|CALL AMEX|Unauthorised Transaction. Orient the carrier to contact AmEx Call Center|Unauthorised Transaction. Contact AmEx Call Center.|No|
|FG|Call 08007285090|Unauthorised Transaction. Guide the carrier to contact AmEx Call Center AmEx|Unauthorised Transaction. Contact AmEx Call Center|No|
|JB|Transaction value Invalid|Unauthorised Transaction. Invalid value. Ask the carrier to review the value and try again. If the error persists, contact Cielo|Transaction not authorized. Invalid value. Redo the transaction confirming the reported data. If the error persists, contact the merchant.|No|
|KA|Transaction not allowed. Failure to validate the data.|Transaction not allowed. There was a failure to validate the data. Ask the carrier to review the data and try again. If the error persists, check the communication between virtual and Cielo shop |Transaction not allowed. There was a failure to validate the data. review the reported data and try again. If the error persists contact the Online Shop.|No|
|KB|Transaction not allowed. Selected incorrente option|Transaction not allowed. Selected the wrong option. Ask the carrier to review the data and try again. If the error persists must be verified communication between shop and Cielo|Transaction not allowed. Selected the wrong option. Try again. If the error persists contact the Online Shop.|No|
|KE|Unauthorised Transaction. Failure to validate the data.|Transaction unauthorized. Failure to validate the data. selected option is not enabled. Check the options available to the carrier.|Unauthorized transaction. Failure to validate the data. selected option is not enabled. Contact the shop.|No|
|N7|Unauthorised Transaction. Invalid security code.|Unauthorised Transaction. Security code is invalid. Orient the carrier correct the data and try again.|Unauthorised Transaction. Review the data and enter again.|No|
|R1| Unauthorised Transaction. defaulter card (Do not honor)|Unauthorised Transaction. Unable to process the transaction. Issues related to security, default or carrier limit|Unauthorised Transaction. Contact your issuing bank.| Only 4 times in 16 days.|
|U3|Transaction not allowed. Failure to validate the data.|Transaction not allowed. There was a failure to validate the data. Ask the carrier to review the data and try again. If the error persists, check the communication between virtual and Cielo shop |Transaction not allowed. There was a failure to validate the data. review the reported data and try again. If the error persists contact the Online Shop.|No|
