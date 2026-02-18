//consume reference of my DB tables
using { anubhav.db.master, anubhav.db.transaction } from '../db/datamodel';

service CatalogService @(path: 'CatalogService') {

    //Entity  - representation of an end point of data to perform CRUDQ tasks
    entity EmployeeSet as projection on master.employee;
    entity ProductSet as projection on master.product;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity AddressSet as projection on master.address;
    entity PurchaseOrderSet as projection on transaction.purchaseorder
    actions{
        //the system will pass the PO primary key - NODE_KEY automatically to input 
        action boost() returns PurchaseOrderSet
    };
    entity PurchaseItemsSet as projection on transaction.poitems;

    //non instance bound because they are not connected to any entity
    function getLargestOrder() returns array of PurchaseOrderSet;
    

}