/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace ui {
        export namespace c {
            /** 查看视图-采购申请 */
            export class PurchaseRequestViewView extends ibas.BOViewView implements app.IPurchaseRequestViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tablePurchaseRequestItem = new sap.extension.m.DataTable("", {
                        dataInfo: {
                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                            name: bo.PurchaseRequestItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_docentry"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_lineid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_visorder"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_objectcode"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_loginst"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_datasource"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_canceled"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_status"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_linestatus"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_createdate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_createtime"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_updatedate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_updatetime"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_createusersign"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_updateusersign"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_createactionid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_updateactionid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_reference2"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_referenced"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_deleted"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_basedocumenttype"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_basedocumententry"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_basedocumentlineid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_originaldocumenttype"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_originaldocumententry"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_originaldocumentlineid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_itemcode"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_itemsign"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_itemdescription"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_quantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_uom"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_supplier"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_price"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_currency"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_rate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_linetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_requestdate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_closedquantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_tax"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_taxrate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_taxtotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_pretaxprice"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_pretaxlinetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_distributionrule1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_distributionrule2"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_distributionrule3"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_distributionrule4"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchaserequestitem_distributionrule5"),
                            }),
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "docEntry",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "lineId",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "visOrder",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "objectCode",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "logInst",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "dataSource",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectYesNoStatus("", {
            text: {
                path: "canceled",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                    new sap.extension.m.ObjectBOStatus("", {
            text: {
                path: "status",
                type: new sap.extension.data.BOStatus(true),
            }
            }),
                                    new sap.extension.m.ObjectDocumentStatus("", {
            text: {
                path: "lineStatus",
                type: new sap.extension.data.DocumentStatus(true),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "createDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "createTime",
                type: new sap.extension.data.Time(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "updateDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "updateTime",
                type: new sap.extension.data.Time(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "createUserSign",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "updateUserSign",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "createActionId",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "updateActionId",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "reference1",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "reference2",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectYesNoStatus("", {
            text: {
                path: "referenced",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                    new sap.extension.m.ObjectYesNoStatus("", {
            text: {
                path: "deleted",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "baseDocumentType",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "baseDocumentEntry",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "baseDocumentLineId",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "originalDocumentType",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "originalDocumentEntry",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "originalDocumentLineId",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "itemCode",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "itemSign",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "itemDescription",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "quantity",
                type: new sap.extension.data.Quantity(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "uom",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "supplier",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "price",
                type: new sap.extension.data.Price(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "currency",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "rate",
                type: new sap.extension.data.Rate(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "lineTotal",
                type: new sap.extension.data.Sum(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "requestDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "closedQuantity",
                type: new sap.extension.data.Quantity(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "tax",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "taxRate",
                type: new sap.extension.data.Rate(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "taxTotal",
                type: new sap.extension.data.Sum(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "preTaxPrice",
                type: new sap.extension.data.Price(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "preTaxLineTotal",
                type: new sap.extension.data.Sum(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "distributionRule1",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "distributionRule2",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "distributionRule3",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "distributionRule4",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                    new sap.extension.m.ObjectAttribute("", {
            text: {
                path: "distributionRule5",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                            },
                            objectSubtitle: {
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                        press: function (): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://action",
                                        press: function (event: any): void {
                                            ibas.servicesManager.showServices({
                                                proxy: new ibas.BOServiceProxy({
                                                    data: that.page.getModel().getData(),
                                                    converter: new bo.DataConverter(),
                                                }),
                                                displayServices(services: ibas.IServiceAgent[]): void {
                                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                                        return;
                                                    }
                                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                                        showHeader: false,
                                                        placement: sap.m.PlacementType.Bottom,
                                                    });
                                                    for (let service of services) {
                                                        popover.addContent(new sap.m.Button("", {
                                                            text: ibas.i18n.prop(service.name),
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: service.icon,
                                                            press: function (): void {
                                                                service.run();
                                                                popover.close();
                                                            }
                                                        }));
                                                    }
                                                    popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                    popover.openBy(event.getSource(), true);
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                            ]
                        }),
                        headerContent: [
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_purchaserequest"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_docentry"),
            text: {
                path: "docEntry",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_docnum"),
            text: {
                path: "docNum",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_period"),
            text: {
                path: "period",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectYesNoStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_canceled"),
            text: {
                path: "canceled",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                            new sap.extension.m.ObjectBOStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_status"),
            text: {
                path: "status",
                type: new sap.extension.data.BOStatus(true),
            }
            }),
                                            new sap.extension.m.ObjectApprovalStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_approvalstatus"),
            text: {
                path: "approvalStatus",
                type: new sap.extension.data.ApprovalStatus(true),
            }
            }),
                                            new sap.extension.m.ObjectDocumentStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_documentstatus"),
            text: {
                path: "documentStatus",
                type: new sap.extension.data.DocumentStatus(true),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_objectcode"),
            text: {
                path: "objectCode",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_createdate"),
            text: {
                path: "createDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_createtime"),
            text: {
                path: "createTime",
                type: new sap.extension.data.Time(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_updatedate"),
            text: {
                path: "updateDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_updatetime"),
            text: {
                path: "updateTime",
                type: new sap.extension.data.Time(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_loginst"),
            text: {
                path: "logInst",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_series"),
            text: {
                path: "series",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_datasource"),
            text: {
                path: "dataSource",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_createusersign"),
            text: {
                path: "createUserSign",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_updateusersign"),
            text: {
                path: "updateUserSign",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_createactionid"),
            text: {
                path: "createActionId",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_updateactionid"),
            text: {
                path: "updateActionId",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_dataowner"),
            text: {
                path: "dataOwner",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_teammembers"),
            text: {
                path: "teamMembers",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_organization"),
            text: {
                path: "organization",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_postingdate"),
            text: {
                path: "postingDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_deliverydate"),
            text: {
                path: "deliveryDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_documentdate"),
            text: {
                path: "documentDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_reference1"),
            text: {
                path: "reference1",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_reference2"),
            text: {
                path: "reference2",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_remarks"),
            text: {
                path: "remarks",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectYesNoStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_referenced"),
            text: {
                path: "referenced",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                            new sap.extension.m.ObjectYesNoStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_deleted"),
            text: {
                path: "deleted",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_requester"),
            text: {
                path: "requester",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_cause"),
            text: {
                path: "cause",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_requestdate"),
            text: {
                path: "requestDate",
                type: new sap.extension.data.Date(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_documentcurrency"),
            text: {
                path: "documentCurrency",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_documentrate"),
            text: {
                path: "documentRate",
                type: new sap.extension.data.Rate(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_documenttotal"),
            text: {
                path: "documentTotal",
                type: new sap.extension.data.Sum(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_pricelist"),
            text: {
                path: "priceList",
                type: new sap.extension.data.Numeric(),
            }
            }),
                                            new sap.extension.m.ObjectYesNoStatus("", {
            title: ibas.i18n.prop("bo_purchaserequest_rounding"),
            text: {
                path: "rounding",
                type: new sap.extension.data.YesNo(true),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_diffamount"),
            text: {
                path: "diffAmount",
                type: new sap.extension.data.Sum(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_project"),
            text: {
                path: "project",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                            new sap.extension.m.ObjectAttribute("", {
            title: ibas.i18n.prop("bo_purchaserequest_ordertype"),
            text: {
                path: "orderType",
                type: new sap.extension.data.Alphanumeric(),
            }
            }),
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_purchaserequest_purchaserequestitems"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tablePurchaseRequestItem
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private tablePurchaseRequestItem: sap.extension.m.Table;

                /** 显示数据 */
                showPurchaseRequest(data: bo.PurchaseRequest): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-采购申请-行 */
                showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void {
                    this.tablePurchaseRequestItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
