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
            /** 编辑视图-采购申请 */
            export class PurchaseRequestEditView extends ibas.BOEditView implements app.IPurchaseRequestEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加采购申请-行事件 */
                addPurchaseRequestItemEvent: Function;
                /** 删除采购申请-行事件 */
                removePurchaseRequestItemEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_docentry") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "docEntry",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_docnum") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "docNum",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_period") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "period",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_canceled") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "canceled",
                type: new sap.extension.data.YesNo(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_status") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emBOStatus
            }).bindProperty("bindingValue", {
                path: "status",
                type: new sap.extension.data.BOStatus(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_approvalstatus") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emApprovalStatus
            }).bindProperty("bindingValue", {
                path: "approvalStatus",
                type: new sap.extension.data.ApprovalStatus(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_documentstatus") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emDocumentStatus
            }).bindProperty("bindingValue", {
                path: "documentStatus",
                type: new sap.extension.data.DocumentStatus(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_objectcode") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "objectCode",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 30
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_createdate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "createDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_createtime") }),
                            new sap.extension.m.TimePicker("", {
            }).bindProperty("bindingValue", {
                path: "createTime",
                type: new sap.extension.data.Time(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_updatedate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "updateDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_updatetime") }),
                            new sap.extension.m.TimePicker("", {
            }).bindProperty("bindingValue", {
                path: "updateTime",
                type: new sap.extension.data.Time(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_loginst") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "logInst",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_series") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "series",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_datasource") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "dataSource",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_createusersign") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "createUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_updateusersign") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "updateUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_createactionid") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "createActionId",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 36
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_updateactionid") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "updateActionId",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 36
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_dataowner") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "dataOwner",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_teammembers") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "teamMembers",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 100
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_organization") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "organization",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_postingdate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "postingDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_deliverydate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "deliveryDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_documentdate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "documentDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_reference1") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "reference1",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 100
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_reference2") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "reference2",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 200
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_remarks") }),
                            new sap.extension.m.TextArea("", {
                rows: 3,
            }).bindProperty("bindingValue", {
                path: "remarks",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_referenced") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "referenced",
                type: new sap.extension.data.YesNo(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_deleted") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "deleted",
                type: new sap.extension.data.YesNo(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_requester") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "requester",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 60
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_cause") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "cause",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 100
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_requestdate") }),
                            new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "requestDate",
                type: new sap.extension.data.Date(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_documentcurrency") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "documentCurrency",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_documentrate") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "documentRate",
                type: new sap.extension.data.Rate(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_documenttotal") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "documentTotal",
                type: new sap.extension.data.Sum(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_pricelist") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "priceList",
                type: new sap.extension.data.Numeric(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_rounding") }),
                            new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "rounding",
                type: new sap.extension.data.YesNo(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_diffamount") }),
                            new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "diffAmount",
                type: new sap.extension.data.Sum(),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_project") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "project",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaserequest_ordertype") }),
                            new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "orderType",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                        ]
                    });
                    let formPurchaseRequestItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchaserequestitem") }),
                            this.tablePurchaseRequestItem = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                                    name: bo.PurchaseRequestItem.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_add"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://add",
                                            press: function (): void {
                                                that.fireViewEvents(that.addPurchaseRequestItemEvent);
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press: function (): void {
                                                that.fireViewEvents(that.removePurchaseRequestItemEvent, that.tablePurchaseRequestItem.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_docentry"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "docEntry",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_lineid"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "lineId",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_visorder"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "visOrder",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_objectcode"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "objectCode",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 30
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_loginst"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "logInst",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_datasource"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "dataSource",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_canceled"),
                                        template: new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "canceled",
                type: new sap.extension.data.YesNo(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_status"),
                                        template: new sap.extension.m.EnumSelect("", {
                enumType: ibas.emBOStatus
            }).bindProperty("bindingValue", {
                path: "status",
                type: new sap.extension.data.BOStatus(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_linestatus"),
                                        template: new sap.extension.m.EnumSelect("", {
                enumType: ibas.emDocumentStatus
            }).bindProperty("bindingValue", {
                path: "lineStatus",
                type: new sap.extension.data.DocumentStatus(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_createdate"),
                                        template: new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "createDate",
                type: new sap.extension.data.Date(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_createtime"),
                                        template: new sap.extension.m.TimePicker("", {
            }).bindProperty("bindingValue", {
                path: "createTime",
                type: new sap.extension.data.Time(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_updatedate"),
                                        template: new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "updateDate",
                type: new sap.extension.data.Date(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_updatetime"),
                                        template: new sap.extension.m.TimePicker("", {
            }).bindProperty("bindingValue", {
                path: "updateTime",
                type: new sap.extension.data.Time(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_createusersign"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "createUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_updateusersign"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "updateUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_createactionid"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "createActionId",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 36
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_updateactionid"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "updateActionId",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 36
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_reference1"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "reference1",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 100
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_reference2"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "reference2",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 200
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_referenced"),
                                        template: new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "referenced",
                type: new sap.extension.data.YesNo(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_deleted"),
                                        template: new sap.extension.m.EnumSelect("", {
                enumType: ibas.emYesNo
            }).bindProperty("bindingValue", {
                path: "deleted",
                type: new sap.extension.data.YesNo(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_basedocumenttype"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "baseDocumentType",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 30
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_basedocumententry"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "baseDocumentEntry",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_basedocumentlineid"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "baseDocumentLineId",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_originaldocumenttype"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "originalDocumentType",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 30
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_originaldocumententry"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "originalDocumentEntry",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_originaldocumentlineid"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "originalDocumentLineId",
                type: new sap.extension.data.Numeric(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_itemcode"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "itemCode",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 20
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_itemsign"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "itemSign",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 60
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_itemdescription"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "itemDescription",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 100
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_quantity"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "quantity",
                type: new sap.extension.data.Quantity(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_uom"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "uom",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_supplier"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "supplier",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 20
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_price"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "price",
                type: new sap.extension.data.Price(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_currency"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "currency",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_rate"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "rate",
                type: new sap.extension.data.Rate(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_linetotal"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "lineTotal",
                type: new sap.extension.data.Sum(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_requestdate"),
                                        template: new sap.extension.m.DatePicker("", {
            }).bindProperty("bindingValue", {
                path: "requestDate",
                type: new sap.extension.data.Date(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_closedquantity"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "closedQuantity",
                type: new sap.extension.data.Quantity(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_tax"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "tax",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_taxrate"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "taxRate",
                type: new sap.extension.data.Rate(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_taxtotal"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "taxTotal",
                type: new sap.extension.data.Sum(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_pretaxprice"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "preTaxPrice",
                type: new sap.extension.data.Price(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_pretaxlinetotal"),
                                        template: new sap.extension.m.Input("", {
                type: sap.m.InputType.Number
            }).bindProperty("bindingValue", {
                path: "preTaxLineTotal",
                type: new sap.extension.data.Sum(),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_distributionrule1"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "distributionRule1",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_distributionrule2"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "distributionRule2",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_distributionrule3"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "distributionRule3",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_distributionrule4"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "distributionRule4",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaserequestitem_distributionrule5"),
                                        template: new sap.extension.m.Input("", {
            }).bindProperty("bindingValue", {
                path: "distributionRule5",
                type: new sap.extension.data.Alphanumeric({
                    maxLength: 8
                }),
            }),
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [
                            formTop,
                            formPurchaseRequestItem,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;
                private tablePurchaseRequestItem: sap.extension.table.Table;

                /** 显示数据 */
                showPurchaseRequest(data: bo.PurchaseRequest): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据-采购申请-行 */
                showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void {
                    this.tablePurchaseRequestItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
