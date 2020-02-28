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
            /** 选择视图-采购申请 */
            export class PurchaseRequestChooseView extends ibas.BOChooseView implements app.IPurchaseRequestChooseView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.PurchaseRequest;
                }
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.extension.table.DataTable("", {
                        chooseType: this.chooseType,
                        visibleRowCount: sap.extension.table.visibleRowCount(15),
                        dataInfo: this.queryTarget,
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_docentry"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "docEntry",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_docnum"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "docNum",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_period"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "period",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_canceled"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "canceled",
                type: new sap.extension.data.YesNo(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_status"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "status",
                type: new sap.extension.data.BOStatus(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_approvalstatus"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "approvalStatus",
                type: new sap.extension.data.ApprovalStatus(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_documentstatus"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "documentStatus",
                type: new sap.extension.data.DocumentStatus(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_objectcode"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "objectCode",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_createdate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "createDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_createtime"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "createTime",
                type: new sap.extension.data.Time(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_updatedate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "updateDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_updatetime"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "updateTime",
                type: new sap.extension.data.Time(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_loginst"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "logInst",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_series"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "series",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_datasource"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "dataSource",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_createusersign"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "createUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_updateusersign"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "updateUserSign",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_createactionid"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "createActionId",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_updateactionid"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "updateActionId",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_dataowner"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "dataOwner",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_teammembers"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "teamMembers",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_organization"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "organization",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_postingdate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "postingDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_deliverydate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "deliveryDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_documentdate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "documentDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_reference1"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "reference1",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_reference2"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "reference2",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_remarks"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "remarks",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_referenced"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "referenced",
                type: new sap.extension.data.YesNo(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_deleted"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "deleted",
                type: new sap.extension.data.YesNo(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_requester"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "requester",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_cause"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "cause",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_requestdate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "requestDate",
                type: new sap.extension.data.Date(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_documentcurrency"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "documentCurrency",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_documentrate"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "documentRate",
                type: new sap.extension.data.Rate(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_documenttotal"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "documentTotal",
                type: new sap.extension.data.Sum(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_pricelist"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "priceList",
                type: new sap.extension.data.Numeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_rounding"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "rounding",
                type: new sap.extension.data.YesNo(true),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_diffamount"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "diffAmount",
                type: new sap.extension.data.Sum(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_project"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "project",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaserequest_ordertype"),
                                template: new sap.extension.m.Text("", {
            }).bindProperty("bindingValue", {
                path: "orderType",
                type: new sap.extension.data.Alphanumeric(),
            }),
                            }),
                        ],
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        }
                    });
                    return new sap.extension.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.table
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_new"),
                                type: sap.m.ButtonType.Transparent,
                                visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                press: function (): void {
                                    that.fireViewEvents(that.newDataEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_choose"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.chooseDataEvent, that.table.getSelecteds());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ],
                    });
                }
                private table: sap.extension.table.Table;
                /** 显示数据 */
                showData(datas: bo.PurchaseRequest[]): void {
                    let model: sap.ui.model.Model = this.table.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.table.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.table.setBusy(true);
                        this.table.setFirstVisibleRow(0);
                        this.table.setModel(null);
                    }
                }
            }
        }
    }
}
