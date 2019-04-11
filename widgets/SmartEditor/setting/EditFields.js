// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/EditFields.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"fieldsDesc"\x3e${nls.fieldsPage.description}\x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"settingsNotes" data-dojo-attach-point\x3d"fieldsNotes"\x3e${nls.fieldsPage.fieldsNotes}\x3c/div\x3e\r\n    \x3cdiv class\x3d"attachmentsDesc" data-dojo-attach-point\x3d"attachmentsValidation"\x3e${nls.fieldsPage.smartAttachmentText}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-construct dojo/on dojo/query dojo/text!./EditFields.html ./FieldValidation ./CopyAttributes dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang".split(" "),function(p,q,b,f,h,k,e,l,r,m,t,u,v,w,x,g){return p([v,q,u],{baseClass:"jimu-widget-smartEditor-setting-fields",templateString:r,_configInfo:null,_fieldValid:null,_fieldValidations:null,_fieldValues:null,_attachmentValidations:null,
__layerName:null,_removeFromSmartActionsGroup:[],_removeFromAttributeActionsGroup:[],postCreate:function(){this.inherited(arguments);this._removeFromSmartActionsGroup=[];this._removeFromAttributeActionsGroup=[];this.fieldsPopUp=null;this._initFieldsTable();this._setFiedsTable(this._configInfo.fieldInfos);this._fieldValidations=void 0===this._configInfo.fieldValidations?{}:b.clone(this._configInfo.fieldValidations);this._fieldValues=void 0===this._configInfo.fieldValues?{}:b.clone(this._configInfo.fieldValues);
this._attachmentValidations=void 0===this._configInfo.attachmentValidations?{}:b.clone(this._configInfo.attachmentValidations);this.own(e(this.attachmentsValidation,"click",b.hitch(this,function(){this._onAttachmentsValidationClicked()})));this._configInfo.layerInfo.layerObject.hasAttachments?h.set(this.attachmentsValidation,"display","block"):h.set(this.attachmentsValidation,"display","none")},popupEditPage:function(){this.fieldsPopUp=new x({titleLabel:g.substitute({layername:this._layerName},this.nls.fieldsPage.title),
width:972,maxHeight:700,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:b.hitch(this,function(){this._validateTable()&&(this._resetFieldInfos(),this._configInfo.fieldValidations=this._fieldValidations,this._configInfo.fieldValues=this._fieldValues,this._configInfo.attachmentValidations=this._attachmentValidations,this.emit("RemoveFromGroup",{smartActionGroupInfo:this._removeFromSmartActionsGroup,attributeActionGroupInfo:this._removeFromAttributeActionsGroup}),this.fieldsPopUp.close())})},
{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:b.hitch(this,function(){this.fieldsPopUp.close()})}],onClose:b.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new w({fields:[{name:"required",title:"",type:"text","class":"required"},{name:"visible",title:this.nls.fieldsPage.fieldsSettingsTable.display,type:"checkbox","class":"visible",width:"15%"},{name:"isEditable",title:this.nls.fieldsPage.fieldsSettingsTable.edit,type:"checkbox","class":"editable",width:"15%"},
{name:"fieldName",title:this.nls.fieldsPage.fieldsSettingsTable.fieldName,type:"text","class":"fieldName",width:"30%"},{name:"label",title:this.nls.fieldsPage.fieldsSettingsTable.fieldAlias,type:"text",editable:!1,"class":"fieldLabel",width:"30%"},{name:"actions",title:this.nls.fieldsPage.fieldsSettingsTable.actions,type:"actions",actions:["up","down","edit","copy"],"class":"actions",width:"10%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);
this._fieldsTable.startup();l("th.simple-table-field",this._fieldsTable.domNode).forEach(function(a){switch(void 0===a.innerText||""===a.innerText?"":a.innerText.replace(/(\r\n|\n|\r)/gm,"")){case this.nls.fieldsPage.fieldsSettingsTable.display:a.title=this.nls.fieldsPage.fieldsSettingsTable.displayTip;break;case this.nls.fieldsPage.fieldsSettingsTable.edit:a.title=this.nls.fieldsPage.fieldsSettingsTable.editTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldName:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldNameTip;
break;case this.nls.fieldsPage.fieldsSettingsTable.fieldAlias:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldAliasTip;break;case this.nls.fieldsPage.fieldsSettingsTable.actions:a.title=this.nls.fieldsPage.fieldsSettingsTable.actionsTip}},this);this.own(e(this._fieldsTable,"actions-edit",b.hitch(this,this._onEditFieldInfoClick)))},_validateTable:function(){var a=this._fieldsTable.getRows();return 0===a.length?!1:f.some(a,function(a){return this._fieldsTable.getRowData(a).isEditable},this)},_onEditFieldInfoClick:function(a){a=
this._fieldsTable.getRowData(a);var d=g.substitute({fieldname:a.fieldName},this.nls.actionPage.smartActionTitle),c={fields:b.clone(this._configInfo.layerInfo.layerObject.fields)};this._fieldValid=new m({nls:this.nls,_layerDefinition:c,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldValidations:this._fieldValidations,_fieldName:a.fieldName,_fieldAlias:a.label,popupTitle:d,_smartActionsTable:this._smartActionsTable});this._fieldValid.removeFromGroup=
b.hitch(this,function(a){this._removeFromSmartActionsGroup.push(a)});this._fieldValid.onGroupEditingStart=b.hitch(this,function(){this.fieldsPopUp&&this.fieldsPopUp.close();this._tab&&this._tab.selectTab(this.nls.layersPage.smartActionsTabTitle)});this._fieldValid.popupActionsPage()},_onCopyAttrButtonClick:function(a){var d=this._fieldsTable.getRowData(a),c={fields:b.clone(this._configInfo.layerInfo.layerObject.fields)};this._copyAttr=new t({nls:this.nls,_layerDefinition:c,_fieldInfos:this._configInfo.fieldInfos,
_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldName:d.fieldName,_fieldAlias:d.label,_fieldValues:this._fieldValues,_geocoderSettings:this._geocoderSettings,_configuredPresetInfos:this._configuredPresetInfos,layerInfos:this.layerInfos,isRelatedLayer:this.isRelatedLayer,map:this.map,_fieldType:a.fieldType,_attributeActionsTable:this._attributeActionsTable});this.own(e(this._copyAttr,"onGroupEditingStart",b.hitch(this,function(a){this.fieldsPopUp&&
this.fieldsPopUp.close();this._tab&&this._tab.selectTab(a)})));this.own(e(this._copyAttr,"removeFromGroup",b.hitch(this,function(a){this._removeFromAttributeActionsGroup.push(a)})));this._copyAttr.popupActionsPage();this.own(e(this._copyAttr,"SetGeocoder",b.hitch(this,function(){this.emit("SetGeocoder")})))},_onAttachmentsValidationClicked:function(){var a=g.substitute({layername:this._layerName},this.nls.fieldsPage.smartAttachmentPopupTitle),d={fields:b.clone(this._configInfo.layerInfo.layerObject.fields)};
this._attachmentFieldValidation=new m({nls:this.nls,_layerDefinition:d,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldValidations:this._attachmentValidations,_fieldName:"Actions",_fieldAlias:"",popupTitle:a});this._attachmentFieldValidation.popupActionsPage()},_setFiedsTable:function(a){var d,c,n;f.forEach(a,function(a){var b=a.visible;"esriFieldTypeGeometry"!==a.type&&"esriFieldTypeOID"!==a.type&&"esriFieldTypeBlob"!==a.type&&"esriFieldTypeGlobalID"!==
a.type&&"esriFieldTypeRaster"!==a.type&&"esriFieldTypeXML"!==a.type&&(!1===a.visible&&!0===a.isEditable&&(b=!0),b={fieldName:a.fieldName,isEditable:a.isEditable,label:a.label,visible:b},a.hasOwnProperty("nullable")&&!1===a.nullable?b.required="*":b.required="",d=this._fieldsTable.addRow(b).tr,n=l(".jimu-icon-edit",d)[0],n.title=this.nls.fieldsPage.editActionTip,c=d.children[d.children.length-1],d.fieldType=a.type,this._addNewAction(c.children[0],d))},this);setTimeout(b.hitch(this,function(){f.forEach(this._fieldsTable.fields,
function(a){"visible"===a.name?a.onChange=b.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=b.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_addNewAction:function(a,d){var c;c=k.create("div",{"class":"esriCTCopyAction",title:this.nls.fieldsPage.copyActionTip});e(c,"click",b.hitch(this,this._onCopyAttrButtonClick,d));k.place(c,a,"last")},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,this._fieldsTable.editRow(a,
b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=[],d=this._fieldsTable.getData();f.forEach(d,b.hitch(this,function(c){var d={isEditable:null===c.isEditable?!0:c.isEditable,visible:null===c.visible?!0:c.visible};c=this._getFieldInfoByFieldName(this._configInfo.fieldInfos,c.fieldName);b.mixin(c,d);a.push(c)}));this._configInfo.fieldInfos=a},_getFieldInfoByFieldName:function(a,
b){var c;f.some(a,function(a){if(a.name===b)return c=a,!0});return c},geocoderConfigured:function(){this._copyAttr.geocoderConfigured()}})});