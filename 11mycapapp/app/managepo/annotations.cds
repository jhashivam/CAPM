using CatalogService as service from '../../srv/CatalogService';

annotate service.PurchaseOrderSet with @(

    //Add fields to the screen for filtering the data
    UI.SelectionFields: [
        PO_ID,
        PARTNER_GUID.COMPANY_NAME,
        PARTNER_GUID.ADDRESS_GUID.COUNTRY,
        GROSS_AMOUNT,
        OVERALL_STATUS
    ],
    //Add the columns to the table data
    UI.LineItem:[
        {
            $Type : 'UI.DataField',
            Value : PO_ID,
        },
        {
            $Type : 'UI.DataField',
            Value : PARTNER_GUID.COMPANY_NAME,
        },
        {
            $Type : 'UI.DataField',
            Value : PARTNER_GUID.ADDRESS_GUID.COUNTRY,
        },
        {
            $Type : 'UI.DataField',
            Value : GROSS_AMOUNT,
        },
        {
            $Type : 'UI.DataField',
            Value : OVERALL_STATUS,
            Criticality: Spiderman
        },
    ]


);

//annotate a field to get its meaningful text
annotate service.PurchaseOrderSet with {
    @Common.Text: OverallStatus
    OVERALL_STATUS;
    @Common.Text: NOTE
    PO_ID;
};

