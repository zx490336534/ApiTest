(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7421ee4b"],{"0140":function(e,t,a){},"0f3d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 用例管理")]),a("el-breadcrumb-item",[e._v("编辑用例")])],1)],1),a("div",{staticClass:"container"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("div",{staticClass:"form-box"},[a("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"选择项目"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.getInterfacesByProjectID(e.selected_project_id)}},model:{value:e.selected_project_id,callback:function(t){e.selected_project_id=t},expression:"selected_project_id"}},e._l(e.project_names,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"选择接口"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.getConfTestcaseByInterfaceID(e.selected_interface_id)}},model:{value:e.selected_interface_id,callback:function(t){e.selected_interface_id=t},expression:"selected_interface_id"}},e._l(e.interfaces,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"选择配置"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.selected_configure_id,callback:function(t){e.selected_configure_id=t},expression:"selected_configure_id"}},e._l(e.configures,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:100}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"drag-box-item"},[a("div",{staticClass:"item-title"},[e._v("待选前置用例")]),a("draggable",{attrs:{options:e.dragOptions},model:{value:e.unselected,callback:function(t){e.unselected=t},expression:"unselected"}},[a("transition-group",{staticClass:"item-ul",attrs:{tag:"div"}},e._l(e.unselected,(function(t){return a("div",{key:t.id,staticClass:"drag-list"},[e._v("\n                                                    "+e._s(t.name)+"\n                                                ")])})),0)],1)],1)]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"drag-box-item"},[a("div",{staticClass:"item-title"},[e._v("已选前置用例")]),a("draggable",{attrs:{options:e.dragOptions},on:{change:function(t){return e.changeResult()}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("transition-group",{staticClass:"item-ul",attrs:{tag:"div"}},e._l(e.selected,(function(t){return a("div",{key:t.id,staticClass:"drag-list"},[e._v("\n                                                    "+e._s(t.name)+"\n                                                ")])})),0)],1)],1)])],1)],1)],1)]),a("el-tab-pane",{attrs:{label:"请求信息"}},[a("el-form",{staticStyle:{margin:"0 0 0 10px"}},[a("el-form-item",[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%","margin-right":"5px"},attrs:{placeholder:"Enter request URL"},model:{value:e.apiMsgData.url,callback:function(t){e.$set(e.apiMsgData,"url",t)},expression:"apiMsgData.url"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",size:"medium",placeholder:"选择请求方式"},slot:"prepend",model:{value:e.apiMsgData.method,callback:function(t){e.$set(e.apiMsgData,"method",t)},expression:"apiMsgData.method"}},e._l(e.methods,(function(e){return a("el-option",{key:e,attrs:{value:e,label:e}})})),1),a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:function(t){e.ParamViewStatus=!e.ParamViewStatus}},slot:"append"},[e._v("\n                                    Params\n                                ")])],1)],1)],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:this.ParamViewStatus,expression:"this.ParamViewStatus"}],staticStyle:{width:"98.2%","margin-top":"-20px",left:"10px"},attrs:{data:e.apiMsgData.param,"row-style":{"background-color":"rgb(250, 250, 250)"},size:"mini","show-header":!1}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"value",id:"param_input"+t.$index,type:"textarea",rows:"1",resize:"none"},on:{focus:function(a){return e.showLine("param_input",t.$index)},input:function(t){return e.changeLine()},blur:function(a){return e.resetLine(t.$index)}},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("param",t.$index)}}})]}}])})],1),a("el-tabs",{staticStyle:{margin:"0 0 0 10px"},model:{value:e.bodyShow,callback:function(t){e.bodyShow=t},expression:"bodyShow"}},[a("el-tab-pane",{attrs:{label:"Headers(请求头)",name:"first"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.header,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("header",t.$index)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"Body(请求体)",name:"second",disabled:"GET"===e.apiMsgData.method}},[a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"10px"},attrs:{inline:!0}},[a("el-radio-group",{model:{value:e.apiMsgData.choiceType,callback:function(t){e.$set(e.apiMsgData,"choiceType",t)},expression:"apiMsgData.choiceType"}},[a("el-radio",{attrs:{label:"data"}},[e._v("form-data")]),a("el-radio",{attrs:{label:"json"}},[e._v("json")])],1),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"json"===e.apiMsgData.choiceType,expression:"apiMsgData.choiceType === 'json'"}],staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.formatData()}}},[e._v("格式化\n\n                                ")])],1),a("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px solid rgb(241, 215, 215)"}}),"json"===e.apiMsgData.choiceType?a("div",[a("div",{staticStyle:{border:"1px solid rgb(234, 234, 234)"}},[a("el-container",[a("editor",{directives:[{name:"contextmenu",rawName:"v-contextmenu:contextmenu",arg:"contextmenu"}],staticStyle:{"font-size":"15px"},attrs:{lang:"json",theme:"chrome",width:"100%",height:"575px",options:{}},on:{init:e.editorInit},model:{value:e.apiMsgData.jsonVariable,callback:function(t){e.$set(e.apiMsgData,"jsonVariable",t)},expression:"apiMsgData.jsonVariable"}})],1)],1)]):e._e(),"data"===e.apiMsgData.choiceType?a("el-table",{staticStyle:{"background-color":"rgb(250, 250, 250)"},attrs:{data:e.apiMsgData.variable,size:"mini",stripe:"","show-header":!1,height:"500","row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}],null,!1,1066183472)}),a("el-table-column",{attrs:{label:"type","header-align":"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.param_type,callback:function(a){e.$set(t.row,"param_type",a)},expression:"scope.row.param_type"}},e._l(e.paramTypes,(function(e){return a("el-option",{key:e,attrs:{value:e}})})),1)]}}],null,!1,2916901183)}),a("el-table-column",{attrs:{label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-input",{attrs:{id:"data_input"+t.$index,type:"textarea",rows:"1",size:"mini",resize:"none",placeholder:"value"},on:{focus:function(a){return e.showLine("data_input",t.$index)},input:function(t){return e.changeLine()},blur:function(t){return e.resetLine()}},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})],1)]}}],null,!1,78841193)}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("variable",t.$index)}}})]}}],null,!1,3617919201)})],1):e._e()],1),a("el-tab-pane",{attrs:{label:"Extract(提取)",name:"third"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.extract,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("extract",t.$index)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"Assert(断言)",name:"fourth"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.validate,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"check"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{label:"Comparator","header-align":"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请选择",size:"mini"},model:{value:t.row.comparator,callback:function(a){e.$set(t.row,"comparator",a)},expression:"scope.row.comparator"}})]}}])}),a("el-table-column",{attrs:{label:"type","header-align":"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.param_type,callback:function(a){e.$set(t.row,"param_type",a)},expression:"scope.row.param_type"}},e._l(e.paramTypes,(function(e){return a("el-option",{key:e,attrs:{value:e}})})),1)]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"expected"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("validate",t.$index)}}})]}}])})],1)],1)],1)],1),a("el-tab-pane",{attrs:{label:"环境变量|参数化|请求钩子"}},[a("el-tabs",{staticStyle:{margin:"0 0 0 10px"},model:{value:e.otherShow,callback:function(t){e.otherShow=t},expression:"otherShow"}},[a("el-tab-pane",{attrs:{label:"环境变量",name:"first"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.globalVar,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{label:"type","header-align":"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.param_type,callback:function(a){e.$set(t.row,"param_type",a)},expression:"scope.row.param_type"}},e._l(e.paramTypes,(function(e){return a("el-option",{key:e,attrs:{value:e}})})),1)]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("globalVar",t.$index)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"参数化",name:"second"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.parameterized,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key 或者 key1-key2-key3"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:'["value1", "value2] 或者 [["v1", "v2", "v3"],["v11","v22", "v33"]] 或者 ${函数名(参数, 参数, ...)}'},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("parameterized",t.$index)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"setup_hooks",name:"third"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.setupHooks,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("setupHooks",t.$index)}}})]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"teardown_hooks",name:"fourth"}},[a("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.teardownHooks,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),a("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(a){return e.delTableRow("teardownHooks",t.$index)}}})]}}])})],1)],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("提交")])],1),a("el-col",{attrs:{span:2}},[a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("取消")])],1)],1)],1),a("v-contextmenu",{ref:"contextmenu"},[a("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("clear")])],1),a("el-dialog",{attrs:{title:"编辑用例",visible:e.editVisible,width:"28%",center:""},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"用例名称",required:""}},[a("el-input",{attrs:{clearable:""},model:{value:e.testcase_name,callback:function(t){e.testcase_name=t},expression:"testcase_name"}})],1),a("el-form-item",{attrs:{label:"测试人员",required:""}},[a("el-input",{attrs:{clearable:""},model:{value:e.author,callback:function(t){e.author=t},expression:"author"}})],1),a("el-form-item",{attrs:{label:"选择项目",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.getInterfacesByProjectID(e.selected_project_id)}},model:{value:e.selected_project_id,callback:function(t){e.selected_project_id=t},expression:"selected_project_id"}},e._l(e.project_names,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"选择接口",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selected_interface_id,callback:function(t){e.selected_interface_id=t},expression:"selected_interface_id"}},e._l(e.interfaces,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},l=[],s=a("ee5f"),i=s["a"],n=(a("deeb"),a("9ca4")),o=Object(n["a"])(i,r,l,!1,null,"5640363e",null);t["default"]=o.exports},deeb:function(e,t,a){"use strict";var r=a("0140"),l=a.n(r);l.a},ee5f:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_zhongxin_Desktop_ApiTest_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("f7f9"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("9a33"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("163d"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__),vuedraggable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("8a87"),vuedraggable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__),_api_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4ec3");__webpack_exports__["a"]={beforeRouteEnter:function(e,t,a){a((function(e){e.current_testcase_id=e.$route.params.id,e.getTestcaseDetail()})),a()},beforeRouteUpdate:function(e,t,a){this.current_testcase_id=e.params.id,this.getTestSuiteDetail(),a()},name:"baseform",data:function(){return{current_testcase_id:null,editVisible:!1,methods:["POST","GET","PUT","DELETE"],types:["data","json","params"],ParamViewStatus:!1,comparators:[{value:"equals"},{value:"contains"},{value:"contained_by"},{value:"startswith"},{value:"endswith"},{value:"regex_match"},{value:"less_than"},{value:"less_than_or_equals"},{value:"greater_than"},{value:"greater_than_or_equals"},{value:"not_equals"},{value:"string_equals"},{value:"length_equals"},{value:"length_greater_than"},{value:"count_greater_than_or_equals"},{value:"length_less_than"},{value:"length_less_than_or_equals"}],apiMsgData:{id:null,method:"POST",name:"",url:"",choiceType:"json",param:[{key:null,value:null}],header:[{key:null,value:null}],variable:[{key:null,value:null,param_type:"string"}],jsonVariable:"",extract:[{key:null,value:null}],validate:[{key:null,value:null,comparator:"equals",param_type:"string"}],globalVar:[{key:null,value:null,param_type:"string"}],parameterized:[{key:null,value:null}],setupHooks:[{key:null}],teardownHooks:[{key:null}]},bodyShow:"second",otherShow:"first",paramTypes:["string","int","float","boolean"],cell:Object(),dragOptions:{animation:120,scroll:!0,group:"sortlist",ghostClass:"ghost-style"},project_names:[],selected_project_id:null,selected_interface_id:null,selected_configure_id:null,selected_testcase_id:[],testcase_name:null,author:"",interfaces:[],configures:[],unselected:[],selected:[]}},created:function(){this.getProjectNames()},components:{draggable:vuedraggable__WEBPACK_IMPORTED_MODULE_3___default.a,editor:__webpack_require__("574d")},methods:{editorInit:function(){__webpack_require__("93c6"),__webpack_require__("012f"),__webpack_require__("cabe"),__webpack_require__("d58b3")},onSubmit:function(){if(0!==this.apiMsgData.url.length){var e=this.apiMsgData.validate;e.splice(-1,1),0!==e.length?this.editVisible=!0:this.$message.error("未设置Assert断言!")}else this.$message.error("没有输入请求URL")},handleData1:function(e,t){for(var a={},r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];var s=e[r].param_type,i=e[r].value;if("int"===s){if(!/^\d+$/.test(i))return this.$message.error(t+"不是整数int类型!"),[];i=Number(i)}else if("float"===s){if(!/^[+-]?\d+(\.\d+)?$/.test(i))return this.$message.error(t+"不是小数float类型!"),[];i=Number(i)}else if("boolean"===s)if(/^(true|True|TRUE|1|0)$/.test(i))i=!0;else{if(!/^(false|False|FALSE|0)$/.test(i))return this.$message.error(t+"不是布尔boolean类型!"),[];i=!1}a[l]=i}return a},handleData11:function(e,t){for(var a=[],r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];var s=e[r].param_type,i=e[r].value;if("int"===s){if(!/^\d+$/.test(i))return this.$message.error(t+"不是整数int类型!"),[];i=Number(i)}else if("float"===s){if(!/^[+-]?\d+(\.\d+)?$/.test(i))return this.$message.error(t+"不是小数float类型!"),[];i=Number(i)}else if("boolean"===s)if(/^(true|True|TRUE|1|0)$/.test(i))i=!0;else{if(!/^(false|False|FALSE|0)$/.test(i))return this.$message.error(t+"不是布尔boolean类型!"),[];i=!1}var n={};n[l]=i,a.push(n)}return a},handleData2:function(e,t){for(var a={},r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];a[l]=e[r].value}return a},handleData22:function(e,t){for(var a=[],r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];var s=e[r].value,i={};i[l]=s,a.push(i)}return a},handleData3:function(e,t){for(var a=[],r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];a.push(l)}return a},handleData4:function(e,t){for(var a=[],r=0;r<e.length;r++){var l=e[r].key;if(!l)return this.$message.error(t+"的key为空!"),[];var s=e[r].param_type,i=e[r].value,n=e[r].comparator;if("int"===s){if(!/^\d+$/.test(i))return this.$message.error(t+"不是整数int类型!"),[];i=Number(i)}else if("float"===s){if(!/^[+-]?\d+(\.\d+)?$/.test(i))return this.$message.error(t+"不是小数float类型!"),[];i=Number(i)}else if("boolean"===s)if(/^(true|True|TRUE|1|0)$/.test(i))i=!0;else{if(!/^(false|False|FALSE|0)$/.test(i))return this.$message.error(t+"不是布尔boolean类型!"),[];i=!1}var o={};o["check"]=l,o["expected"]=i,o["comparator"]=n,a.push(o)}return a},saveEdit:function(){var e=this;if(null!==this.testcase_name)if(""!==this.author)if(null!==this.selected_project_id&&null!==this.selected_interface_id){""===this.selected_configure_id&&(this.selected_configure_id=null);var t={config:this.selected_configure_id,testcases:this.selected_testcase_id},a=this.apiMsgData.url.trim().split("?",1)[0],r={name:this.testcase_name,include:t,interface:{pid:this.selected_project_id,iid:this.selected_interface_id},author:this.author,request:{test:{name:this.testcase_name,request:{url:a,method:this.apiMsgData.method}}}},l=this.apiMsgData.param;if(l.splice(-1,1),0!==l.length){var s=this.handleData2(l,"param参数");if(0===s.length)return;r.request.test.request["params"]=s}var i=null;if("json"===this.apiMsgData.choiceType)"json",i=this.apiMsgData.jsonVariable,0!==i.length&&(r.request.test.request["json"]=JSON.parse(i));else if("data",i=this.apiMsgData.variable,i.splice(-1,1),0!==i.length){var n=this.handleData1(i,"form-data参数");if(0===n.length)return;r.request.test.request["data"]=n}var o=this.apiMsgData.parameterized;if(o.splice(-1,1),0!==o.length){var c=this.handleData22(o,"参数化参数");if(0===c.length)return;r.request.test["parameters"]=c}var u=this.apiMsgData.globalVar;if(u.splice(-1,1),0!==u.length){var p=this.handleData11(u,"全局变量variables");if(0===p.length)return;r.request.test["variables"]=p}var d=this.apiMsgData.header;if(d.splice(-1,1),0!==d.length){var h=this.handleData2(d,"请求头header");if(0===h.length)return;r.request.test.request["headers"]=h}var _=this.apiMsgData.extract;if(_.splice(-1,1),0!==_.length){var g=this.handleData22(_,"extract参数");if(0===g.length)return;r.request.test["extract"]=g}var m=this.apiMsgData.validate;if(m.splice(-1,1),0!==m.length){var f=this.handleData4(m,"Assert断言参数");if(0!==f.length){r.request.test["validate"]=f;var b=this.apiMsgData.setupHooks;if(b.splice(-1,1),0!==b.length){var v=this.handleData3(b,"请求钩子setup_hooks");if(0===v.length)return;r.request.test["setup_hooks"]=v}var y=this.apiMsgData.teardownHooks;if(y.splice(-1,1),0!==y.length){var k=this.handleData3(y,"请求钩子teardown_hooks");if(0===k.length)return;r.request.test["teardown_hooks"]=k}r.include=JSON.stringify(r.include),r.request=JSON.stringify(r.request),Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["ab"])(this.current_testcase_id,r).then((function(t){e.editVisible=!1;var a=e;e.$message.success("更新用例成功"),setInterval((function(){a.$router.go()}),1e3)})).catch((function(t){e.editVisible=!1,"object"===Object(_Users_zhongxin_Desktop_ApiTest_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(t)&&t.hasOwnProperty("name")?(console.log(t),e.$message.error("用例名称已存在")):(console.log(t),e.$message.error("服务器错误"))}))}}else this.$message.error("未设置Assert断言!")}else this.$message.error("未选择所属项目或者接口!");else this.$message.error("测试人员名称不能为空!");else this.$message.error("用例名称不能为空!")},getProjectNames:function(){var e=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["K"])().then((function(t){e.project_names=t.data})).catch((function(e){that.$message.error("服务器错误")}))},getInterfacesByProjectID:function(e){var t=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["F"])(e).then((function(e){t.interfaces=e.data})).catch((function(e){that.$message.error("服务器错误")}))},getConfTestcaseByInterfaceID:function(e){var t=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["p"])(e).then((function(e){t.configures=e.data})).catch((function(e){that.$message.error("服务器错误")})),Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["V"])(e).then((function(e){t.unselected=e.data})).catch((function(e){that.$message.error("服务器错误")}))},changeResult:function changeResult(){for(var len=this.selected.length,text="[",i=0;i<len;i++)text+=i===len-1?this.selected[i].id+"]":this.selected[i].id+", ";0===len&&(text="[]"),this.selected_testcase_id=eval(text)},delTableRow:function(e,t){"variable"===e?this.apiMsgData.variable.splice(t,1):"header"===e?this.apiMsgData.header.splice(t,1):"validate"===e?this.apiMsgData.validate.splice(t,1):"extract"===e?this.apiMsgData.extract.splice(t,1):"param"===e?this.apiMsgData.param.splice(t,1):"globalVar"===e?this.apiMsgData.globalVar.splice(t,1):"parameterized"===e?this.apiMsgData.parameterized.splice(t,1):"setupHooks"===e?this.apiMsgData.setupHooks.splice(t,1):"teardownHooks"===e&&this.apiMsgData.teardownHooks.splice(t,1)},addTableRow:function(e){"variable"===e?this.apiMsgData.variable.push({key:null,value:null,param_type:"string"}):"header"===e?this.apiMsgData.header.push({key:null,value:null}):"validate"===e?this.apiMsgData.validate.push({key:null,value:null,comparator:"equals",param_type:"string"}):"extract"===e?this.apiMsgData.extract.push({key:null,value:null}):"param"===e?this.apiMsgData.param.push({key:null,value:null}):"globalVar"===e?this.apiMsgData.globalVar.push({key:null,value:null,param_type:"string"}):"parameterized"===e?this.apiMsgData.parameterized.push({key:null,value:null}):"setupHooks"===e?this.apiMsgData.setupHooks.push({key:null}):"teardownHooks"===e&&this.apiMsgData.teardownHooks.push({key:null})},formatData:function(){try{this.apiMsgData.jsonVariable=JSON.parse(this.apiMsgData.jsonVariable),this.apiMsgData.jsonVariable=JSON.stringify(this.apiMsgData.jsonVariable,null,4)}catch(e){this.$message({showClose:!0,message:"json格式错误",type:"warning"})}},tempNum:function(e){this.temp_num=e},resetLine:function(){this.cell.style.height="18px"},showLine:function(e,t){this.cell=document.getElementById(e+t),this.cell.style.height=this.cell.scrollHeight+"px"},changeLine:function(){if(this.cell.style.height!==this.cell.scrollHeight+"px"){var e=parseInt(this.cell.style.height.substring(0,this.cell.style.height.length-2));e-this.cell.scrollHeight===2?this.cell.style.height=e-18+"px":this.cell.style.height=this.cell.scrollHeight+"px"}},handleClick:function(){this.apiMsgData.jsonVariable=""},querySearch:function(e,t){t(this.comparators)},getTestcaseDetail:function(){var e=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["D"])(this.current_testcase_id).then((function(t){e.author=t.data.author,e.testcase_name=t.data.testcase_name,e.selected_project_id=t.data.selected_project_id,e.getInterfacesByProjectID(e.selected_project_id),e.selected_interface_id=t.data.selected_interface_id,e.getConfTestcaseByInterfaceID(e.selected_interface_id),e.selected_configure_id=t.data.selected_configure_id,e.selected_testcase_id=t.data.selected_testcase_id,e.apiMsgData.method=t.data.method,e.apiMsgData.url=t.data.url,e.apiMsgData.param=t.data.param,e.apiMsgData.header=t.data.header,e.apiMsgData.variable=t.data.variable,e.apiMsgData.jsonVariable=t.data.jsonVariable,"null"===e.apiMsgData.jsonVariable&&(e.apiMsgData.choiceType="data"),e.apiMsgData.extract=t.data.extract,e.apiMsgData.validate=t.data.validate,e.apiMsgData.globalVar=t.data.globalVar,e.apiMsgData.parameterized=t.data.parameterized,e.apiMsgData.setupHooks=t.data.setupHooks,e.apiMsgData.teardownHooks=t.data.teardownHooks})).catch((function(t){e.$message.error("服务器错误")}))}},computed:{monitorParam:function(){return this.apiMsgData.param},monitorUrl:function(){return this.apiMsgData.url},monitorMethod:function(){return this.apiMsgData.method},monitorVariable:function(){return this.apiMsgData.variable},monitorHeader:function(){return this.apiMsgData.header},monitorExtract:function(){return this.apiMsgData.extract},monitorValidate:function(){return this.apiMsgData.validate},monitorGlobalVar:function(){return this.apiMsgData.globalVar},monitorParameterized:function(){return this.apiMsgData.parameterized},monitorSetupHooks:function(){return this.apiMsgData.setupHooks},monitorTeardownHooks:function(){return this.apiMsgData.teardownHooks}},watch:{monitorParam:{handler:function(){(0===this.apiMsgData.param.length||this.apiMsgData.param[this.apiMsgData.param.length-1]["key"]||this.apiMsgData.param[this.apiMsgData.param.length-1]["value"])&&this.addTableRow("param");var e="";for(var t in this.apiMsgData.param)parseInt(t)+2===this.apiMsgData.param.length&&this.apiMsgData.param[t].key?this.apiMsgData.param[t].value?e+=this.apiMsgData.param[t].key+"="+this.apiMsgData.param[t].value:e+=this.apiMsgData.param[t].key:this.apiMsgData.param[t].key&&(e+=this.apiMsgData.param[t].key+"="+this.apiMsgData.param[t].value+"&");"&"===e.substr(e.length-1,1)&&(e=e.substring(0,e.length-1)),this.apiMsgData.url=e?this.apiMsgData.url.split("?")[0]+"?"+e:this.apiMsgData.url.split("?")[0]},deep:!0},monitorUrl:function(){if(this.apiMsgData.url)if(-1!==this.apiMsgData.url.indexOf("?")){var e=this.apiMsgData.url.split("?");if(e.splice(0,1),e=e.join("?"),e){var t=e.split("&");if(t[0]){this.apiMsgData.param=Array();for(var a=0;a<t.length;a++)if(-1!==t[a].indexOf("=")){var r=t[a].split("="),l=r[0];r.splice(0,1),this.apiMsgData.param.push({key:l,value:r.join("=")})}else this.apiMsgData.param.push({key:t[a],value:""})}}else this.apiMsgData.param=[{key:"",value:""}]}else this.apiMsgData.param=[{key:"",value:""}];else this.apiMsgData.param=[{key:"",value:""}]},monitorMethod:function(e){"GET"===e&&(this.bodyShow="first")},monitorVariable:{handler:function(){0===this.apiMsgData.variable.length&&this.addTableRow("variable"),(this.apiMsgData.variable[this.apiMsgData.variable.length-1]["key"]||this.apiMsgData.variable[this.apiMsgData.variable.length-1]["value"])&&this.addTableRow("variable")},deep:!0},monitorExtract:{handler:function(){0===this.apiMsgData.extract.length&&this.addTableRow("extract"),(this.apiMsgData.extract[this.apiMsgData.extract.length-1]["key"]||this.apiMsgData.extract[this.apiMsgData.extract.length-1]["value"])&&this.addTableRow("extract")},deep:!0},monitorHeader:{handler:function(){0===this.apiMsgData.header.length&&this.addTableRow("header"),(this.apiMsgData.header[this.apiMsgData.header.length-1]["key"]||this.apiMsgData.header[this.apiMsgData.header.length-1]["value"])&&this.addTableRow("header")},deep:!0},monitorValidate:{handler:function(){0===this.apiMsgData.validate.length&&this.addTableRow("validate"),(this.apiMsgData.validate[this.apiMsgData.validate.length-1]["key"]||this.apiMsgData.validate[this.apiMsgData.validate.length-1]["value"])&&this.addTableRow("validate")},deep:!0},monitorGlobalVar:{handler:function(){0===this.apiMsgData.globalVar.length&&this.addTableRow("globalVar"),(this.apiMsgData.globalVar[this.apiMsgData.globalVar.length-1]["key"]||this.apiMsgData.globalVar[this.apiMsgData.globalVar.length-1]["value"])&&this.addTableRow("globalVar")},deep:!0},monitorParameterized:{handler:function(){0===this.apiMsgData.parameterized.length&&this.addTableRow("parameterized"),(this.apiMsgData.parameterized[this.apiMsgData.parameterized.length-1]["key"]||this.apiMsgData.parameterized[this.apiMsgData.parameterized.length-1]["value"])&&this.addTableRow("parameterized")},deep:!0},monitorSetupHooks:{handler:function(){0===this.apiMsgData.setupHooks.length&&this.addTableRow("setupHooks"),this.apiMsgData.setupHooks[this.apiMsgData.setupHooks.length-1]["key"]&&this.addTableRow("setupHooks")},deep:!0},monitorTeardownHooks:{handler:function(){0===this.apiMsgData.teardownHooks.length&&this.addTableRow("teardownHooks"),this.apiMsgData.teardownHooks[this.apiMsgData.teardownHooks.length-1]["key"]&&this.addTableRow("teardownHooks")},deep:!0}}}}}]);