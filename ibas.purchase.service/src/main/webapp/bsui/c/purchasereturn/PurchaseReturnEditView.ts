/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IPurchaseReturnEditView } from "../../../bsapp/purchasereturn/index";

/**
 * 编辑视图-采购退货
 */
export class PurchaseReturnEditView extends ibas.BOEditView implements IPurchaseReturnEditView {
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购退货-行事件 */
    addPurchaseReturnItemEvent: Function;
    /** 删除采购退货-行事件 */
    removePurchaseReturnItemEvent: Function;
    /** 选择供应商 */
    choosePurchaseReturnSupplierEvent: Function;
    /** 选择物料 */
    choosePurchaseReturnItemMaterialEvent: Function;
    /** 选择仓库 */
    choosePurchaseReturnItemWarehouseEvent: Function;
    /** 选择采购退货-行 物料序列事件 */
    choosePurchaseReturnItemMaterialSerialEvent: Function;
    /** 选择采购退货-行 物料批次事件 */
    choosePurchaseReturnItemMaterialBatchEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_general") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseReturnSupplierEvent);
                    }
                }).bindProperty("value", {
                    path: "supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliername") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "supplierName"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_contactperson") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "contactPerson"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_reference1") }),
                new sap.m.Input("", {}).bindProperty("value", {
                    path: "reference1"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_reference2") }),
                new sap.m.Input("", {}).bindProperty("value", {
                    path: "reference2"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_status") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_docnum") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "docNum",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documentstatus") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                }).bindProperty("selectedKey", {
                    path: "documentStatus",
                    type: "sap.ui.model.type.Integer",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_canceled") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                }).bindProperty("selectedKey", {
                    path: "canceled",
                    type: "sap.ui.model.type.Integer",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documentdate") }),
                new sap.m.DatePicker("", {
                }).bindProperty("dateValue", {
                    path: "documentDate",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_dataowner") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                }).bindProperty("value", {
                    path: "dataOwner",
                }),
            ]
        });
        this.tablePurchaseReturnItem = new sap.ui.table.Table("", {
            toolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        press: function (): void {
                            that.fireViewEvents(that.addPurchaseReturnItemEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_remove"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://less",
                        press: function (): void {
                            that.fireViewEvents(that.removePurchaseReturnItemEvent,
                                // 获取表格选中的对象
                                openui5.utils.getSelecteds<bo.PurchaseReturnItem>(that.tablePurchaseReturnItem)
                            );
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.strings.format("{0}/{1}",
                            ibas.i18n.prop("purchase_material_batch"), ibas.i18n.prop("purchase_material_serial")),
                        menu: [
                            new sap.m.Menu("", {
                                items: [
                                    new sap.m.MenuItem("", {
                                        text: ibas.i18n.prop("purchase_material_batch"),
                                        press: function (): void {
                                            that.fireViewEvents(that.choosePurchaseReturnItemMaterialBatchEvent);
                                        }
                                    }),
                                    new sap.m.MenuItem("", {
                                        text: ibas.i18n.prop("purchase_material_serial"),
                                        press: function (): void {
                                            that.fireViewEvents(that.choosePurchaseReturnItemMaterialSerialEvent);
                                        }
                                    }),
                                ]
                            })
                        ]
                    })
                ]
            }),
            enableSelectAll: false,
            selectionBehavior: sap.ui.table.SelectionBehavior.Row,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
            rows: "{/rows}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_lineid"),
                    template: new sap.m.Text("", {
                        wrapping: false,
                    }).bindProperty("text", {
                        path: "lineId",
                    }),
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_linestatus"),
                    template: new sap.m.Select("", {
                        width: "100%",
                        items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                    }).bindProperty("selectedKey", {
                        path: "lineStatus",
                        type: "sap.ui.model.type.Integer",
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_itemcode"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        showValueHelp: true,
                        valueHelpRequest: function (): void {
                            that.fireViewEvents(that.choosePurchaseReturnItemMaterialEvent,
                                // 获取当前对象
                                this.getBindingContext().getObject()
                            );
                        }
                    }).bindProperty("value", {
                        path: "itemCode"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_itemdescription"),
                    template: new sap.m.Text("", {
                        wrapping: false,
                    }).bindProperty("text", {
                        path: "itemDescription"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_warehouse"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        showValueHelp: true,
                        valueHelpRequest: function (): void {
                            that.fireViewEvents(that.choosePurchaseReturnItemWarehouseEvent,
                                // 获取当前对象
                                this.getBindingContext().getObject()
                            );
                        }
                    }).bindProperty("value", {
                        path: "warehouse"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_quantity"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "quantity"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_uom"),
                    template: new sap.m.Text("", {
                        width: "100%",
                        wrapping: false
                    }).bindProperty("text", {
                        path: "uom"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_price"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "price"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_linetotal"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "lineTotal"
                    })
                }),
            ]
        });
        let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchasereturnitem") }),
                this.tablePurchaseReturnItem,
            ]
        });
        let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_remarks") }),
                new sap.m.TextArea("", {
                    rows: 5,
                }).bindProperty("value", {
                    path: "remarks",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_total") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documenttotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_taxrate") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_taxtotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_discount") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_discounttotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "discountTotal"
                }),
            ]
        });
        this.layoutMain = new sap.ui.layout.VerticalLayout("", {
            content: [
                formTop,
                formMiddle,
                formBottom
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
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
                        text: ibas.i18n.prop("shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    icon: "sap-icon://copy"
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
                        })
                    }),
                ]
            }),
            content: [this.layoutMain]
        });
        return this.page;
    }
    private page: sap.m.Page;
    private tablePurchaseReturnItem: sap.ui.table.Table;
    private layoutMain: sap.ui.layout.VerticalLayout;
    /** 改变视图状态 */
    private changeViewStatus(data: bo.PurchaseReturn): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            openui5.utils.changeFormEditable(this.layoutMain, false);
        }
    }
    /** 显示数据 */
    showPurchaseReturn(data: bo.PurchaseReturn): void {
        this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
        this.layoutMain.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.layoutMain, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void {
        this.tablePurchaseReturnItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.tablePurchaseReturnItem, datas);
    }
}
