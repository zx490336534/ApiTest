(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06f77e34"],{"4d62":function(e,t,n){},"4ec3":function(e,t,n){"use strict";n.d(t,"I",(function(){return o})),n.d(t,"L",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"J",(function(){return l})),n.d(t,"u",(function(){return f})),n.d(t,"z",(function(){return d})),n.d(t,"d",(function(){return _})),n.d(t,"K",(function(){return p})),n.d(t,"B",(function(){return h})),n.d(t,"R",(function(){return g})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"k",(function(){return y})),n.d(t,"G",(function(){return v})),n.d(t,"H",(function(){return k})),n.d(t,"t",(function(){return D})),n.d(t,"y",(function(){return w})),n.d(t,"c",(function(){return M})),n.d(t,"Q",(function(){return j})),n.d(t,"Y",(function(){return E})),n.d(t,"w",(function(){return O})),n.d(t,"f",(function(){return x})),n.d(t,"E",(function(){return V})),n.d(t,"bb",(function(){return z})),n.d(t,"T",(function(){return P})),n.d(t,"F",(function(){return $})),n.d(t,"W",(function(){return T})),n.d(t,"X",(function(){return R})),n.d(t,"v",(function(){return S})),n.d(t,"p",(function(){return C})),n.d(t,"V",(function(){return I})),n.d(t,"g",(function(){return q})),n.d(t,"e",(function(){return B})),n.d(t,"S",(function(){return L})),n.d(t,"D",(function(){return U})),n.d(t,"ab",(function(){return W})),n.d(t,"h",(function(){return A})),n.d(t,"P",(function(){return K})),n.d(t,"M",(function(){return H})),n.d(t,"N",(function(){return N})),n.d(t,"O",(function(){return F})),n.d(t,"q",(function(){return J})),n.d(t,"o",(function(){return G})),n.d(t,"n",(function(){return Z})),n.d(t,"r",(function(){return Q})),n.d(t,"a",(function(){return X})),n.d(t,"C",(function(){return Y})),n.d(t,"Z",(function(){return ee})),n.d(t,"A",(function(){return te})),n.d(t,"s",(function(){return ne})),n.d(t,"x",(function(){return re})),n.d(t,"b",(function(){return ae})),n.d(t,"U",(function(){return ie}));var r=n("f753"),a=n.n(r),i="http://123.56.13.233:8000",o=function(e){return a.a.post("".concat(i,"/user/login/"),e)},c=function(e){return a.a.post("".concat(i,"/user/register/"),e)},u=function(e){return a.a.get("".concat(i,"/user/")+e+"/count/")},s=function(e){return a.a.get("".concat(i,"/user/")+e+"/count/")},l=function(e){return a.a.get("".concat(i,"/projects/?page=")+e.page+"&size="+e.size)},f=function(e){return a.a.delete("".concat(i,"/projects/")+e+"/")},d=function(e,t){return a.a.put("".concat(i,"/projects/")+e+"/",t)},_=function(e){return a.a.post("".concat(i,"/projects/"),e)},p=function(){return a.a.get("".concat(i,"/projects/names/"))},h=function(){return a.a.get("".concat(i,"/envs/names/"))},g=function(e,t){return a.a.post("".concat(i,"/projects/")+e+"/run/",{env_id:t})},b=function(e){return a.a.get("".concat(i,"/debugtalks/?page=")+e.page+"&size="+e.size)},m=function(e){return a.a.get("".concat(i,"/debugtalks/")+e+"/")},y=function(e,t){return a.a.put("".concat(i,"/debugtalks/")+e+"/",{debugtalk:t})},v=function(e){return a.a.get("".concat(i,"/interfaces/?page=")+e.page+"&size="+e.size)},k=function(){return a.a.get("".concat(i,"/interfaces/all"))},D=function(e){return a.a.delete("".concat(i,"/interfaces/")+e+"/")},w=function(e,t){return a.a.put("".concat(i,"/interfaces/")+e+"/",t)},M=function(e){return a.a.post("".concat(i,"/interfaces/"),e)},j=function(e,t){return a.a.post("".concat(i,"/interfaces/")+e+"/run/",{env_id:t})},E=function(e){return a.a.get("".concat(i,"/testsuits/?page=")+e.page+"&size="+e.size)},O=function(e){return a.a.delete("".concat(i,"/testsuits/")+e+"/")},x=function(e){return a.a.post("".concat(i,"/testsuits/"),e)},V=function(e){return a.a.get("".concat(i,"/testsuits/")+e+"/")},z=function(e,t){return a.a.put("".concat(i,"/testsuits/")+e+"/",t)},P=function(e,t){return a.a.post("".concat(i,"/testsuits/")+e+"/run/",{env_id:t})},$=function(e){return a.a.get("".concat(i,"/projects/")+e+"/interfaces/")},T=function(e){return a.a.get("".concat(i,"/testcases/?page=")+e.page+"&size="+e.size)},R=function(){return a.a.get("".concat(i,"/testcases/all"))},S=function(e){return a.a.delete("".concat(i,"/testcases/")+e+"/")},C=function(e){return a.a.get("".concat(i,"/interfaces/")+e+"/configs/")},I=function(e){return a.a.get("".concat(i,"/interfaces/")+e+"/testcases/")},q=function(){return a.a.get("".concat(i,"/interfaces/all_interfaces_project/"))},B=function(e){return a.a.post("".concat(i,"/testcases/"),e)},L=function(e,t){return a.a.post("".concat(i,"/testcases/")+e+"/run/",{env_id:t})},U=function(e){return a.a.get("".concat(i,"/testcases/")+e+"/")},W=function(e,t){return a.a.put("".concat(i,"/testcases/")+e+"/",t)},A=function(){return a.a.get("".concat(i,"/testcases/all_interfaces_project/"))},K=function(e){return a.a.get("".concat(i,"/reports/?page=")+e.page+"&size="+e.size)},H=function(e){return a.a.delete("".concat(i,"/reports/")+e+"/")},N=function(e){return a.a.get("".concat(i,"/reports/")+e+"/download/",{responseType:"blob"})},F=function(e){return a.a.get("".concat(i,"/reports/")+e+"/")},J=function(e){return a.a.get("".concat(i,"/configures/?page=")+e.page+"&size="+e.size)},G=function(){return a.a.get("".concat(i,"/configures/all"))},Z=function(){return a.a.get("".concat(i,"/configures/all_interfaces_project"))},Q=function(e){return a.a.delete("".concat(i,"/configures/")+e+"/")},X=function(e){return a.a.post("".concat(i,"/configures/"),e)},Y=function(e){return a.a.get("".concat(i,"/configures/")+e+"/")},ee=function(e,t){return a.a.put("".concat(i,"/configures/")+e+"/",t)},te=function(e){return a.a.get("".concat(i,"/envs/?page=")+e.page+"&size="+e.size)},ne=function(e){return a.a.delete("".concat(i,"/envs/")+e+"/")},re=function(e,t){return a.a.put("".concat(i,"/envs/")+e+"/",t)},ae=function(e){return a.a.post("".concat(i,"/envs/"),e)},ie=function(){return a.a.get("".concat(i,"/summary/"))}},cefc:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_zhongxin_Desktop_ApiTest_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("f7f9"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("163d"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__),_api_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4ec3");__webpack_exports__["a"]={beforeRouteEnter:function(e,t,n){n((function(e){e.current_configure_id=e.$route.params.id,e.getConfigureDetail()})),n()},beforeRouteUpdate:function(e,t,n){this.current_configure_id=e.params.id,this.getConfigureDetail(),n()},name:"baseform",data:function(){return{current_configure_id:null,editVisible:!1,apiMsgData:{id:null,name:"",header:[{key:null,value:null}],globalVar:[{key:null,value:null,param_type:"string"}]},bodyShow:"second",otherShow:"first",paramTypes:["string","int","float","boolean"],cell:Object(),project_names:[],selected_project_id:null,selected_interface_id:null,selected_configure_id:null,configure_name:null,author:"",interfaces:[]}},created:function(){this.getProjectNames()},methods:{onSubmit:function(){this.editVisible=!0},handleData1:function(e,t){for(var n=[],r=0;r<e.length;r++){var a=e[r].key;if(!a)return this.$message.error(t+"的key为空!"),[];var i=e[r].param_type,o=e[r].value;if("int"===i){if(!/^\d+$/.test(o))return this.$message.error(t+"不是整数int类型!"),[];o=Number(o)}else if("float"===i){if(!/^[+-]?\d+(\.\d+)?$/.test(o))return this.$message.error(t+"不是小数float类型!"),[];o=Number(o)}else if("boolean"===i)if(/^(true|True|TRUE|1|0)$/.test(o))o=!0;else{if(!/^(false|False|FALSE|0)$/.test(o))return this.$message.error(t+"不是布尔boolean类型!"),[];o=!1}var c={};c[a]=o,n.push(c)}return n},handleData2:function(e,t){for(var n={},r=0;r<e.length;r++){var a=e[r].key;if(!a)return this.$message.error(t+"的key为空!"),[];n[a]=e[r].value}return n},saveEdit:function(){var e=this;if(null!==this.configure_name)if(""!==this.author)if(null!==this.selected_project_id&&null!==this.selected_interface_id){var t={name:this.configure_name,interface:{pid:this.selected_project_id,iid:this.selected_interface_id},author:this.author,request:{config:{name:this.configure_name,request:{}}}},n=this.apiMsgData.globalVar;if(n.splice(-1,1),0!==n.length){var r=this.handleData1(n,"全局变量variables");if(0===r.length)return;t.request.config["variables"]=r}var a=this.apiMsgData.header;if(a.splice(-1,1),0!==a.length){var i=this.handleData2(a,"请求头header");if(0===i.length)return;t.request.config.request["headers"]=i}t.include=JSON.stringify(t.include),t.request=JSON.stringify(t.request),Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["Z"])(this.current_configure_id,t).then((function(t){e.editVisible=!1,e.$message.success("更新成功")})).catch((function(t){e.editVisible=!1,"object"===Object(_Users_zhongxin_Desktop_ApiTest_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(t)&&t.hasOwnProperty("name")?(console.log(t),e.$message.error("更新配置失败")):(console.log(t),e.$message.error("服务器错误"))}))}else this.$message.error("未选择所属项目或者接口!");else this.$message.error("编写人员名称不能为空!");else this.$message.error("配置名称不能为空!")},getProjectNames:function(){var e=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["K"])().then((function(t){e.project_names=t.data})).catch((function(e){that.$message.error("服务器错误")}))},getInterfacesByProjectID:function(e){var t=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["F"])(e).then((function(e){t.interfaces=e.data})).catch((function(e){that.$message.error("服务器错误")}))},changeResult:function changeResult(){for(var len=this.selected.length,text="[",i=0;i<len;i++)text+=i===len-1?this.selected[i].id+"]":this.selected[i].id+", ";0===len&&(text="[]"),this.selected_testcase_id=eval(text)},delTableRow:function(e,t){"variable"===e?this.apiMsgData.variable.splice(t,1):"header"===e?this.apiMsgData.header.splice(t,1):"globalVar"===e&&this.apiMsgData.globalVar.splice(t,1)},addTableRow:function(e){"variable"===e?this.apiMsgData.variable.push({key:null,value:null,param_type:"string"}):"header"===e?this.apiMsgData.header.push({key:null,value:null}):"globalVar"===e&&this.apiMsgData.globalVar.push({key:null,value:null,param_type:"string"})},tempNum:function(e){this.temp_num=e},resetLine:function(){this.cell.style.height="18px"},showLine:function(e,t){this.cell=document.getElementById(e+t),this.cell.style.height=this.cell.scrollHeight+"px"},changeLine:function(){if(this.cell.style.height!==this.cell.scrollHeight+"px"){var e=parseInt(this.cell.style.height.substring(0,this.cell.style.height.length-2));e-this.cell.scrollHeight===2?this.cell.style.height=e-18+"px":this.cell.style.height=this.cell.scrollHeight+"px"}},getConfigureDetail:function(){var e=this;Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["C"])(this.current_configure_id).then((function(t){e.configure_name=t.data.configure_name,e.author=t.data.author,e.selected_project_id=t.data.selected_project_id,e.getInterfacesByProjectID(e.selected_project_id),e.selected_interface_id=t.data.selected_interface_id,e.apiMsgData.globalVar=t.data.globalVar,e.apiMsgData.header=t.data.header})).catch((function(t){e.$message.error("服务器错误")}))}},computed:{monitorHeader:function(){return this.apiMsgData.header},monitorGlobalVar:function(){return this.apiMsgData.globalVar}},watch:{monitorHeader:{handler:function(){0===this.apiMsgData.header.length&&this.addTableRow("header"),(this.apiMsgData.header[this.apiMsgData.header.length-1]["key"]||this.apiMsgData.header[this.apiMsgData.header.length-1]["value"])&&this.addTableRow("header")},deep:!0},monitorGlobalVar:{handler:function(){0===this.apiMsgData.globalVar.length&&this.addTableRow("globalVar"),(this.apiMsgData.globalVar[this.apiMsgData.globalVar.length-1]["key"]||this.apiMsgData.globalVar[this.apiMsgData.globalVar.length-1]["value"])&&this.addTableRow("globalVar")},deep:!0}}}},e882:function(e,t,n){"use strict";var r=n("4d62"),a=n.n(r);a.a},f359:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 配置管理")]),n("el-breadcrumb-item",[e._v("编辑配置")])],1)],1),n("div",{staticClass:"container"},[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"请求头|全局变量"}},[n("el-tabs",{staticStyle:{margin:"0 0 0 10px"},model:{value:e.otherShow,callback:function(t){e.otherShow=t},expression:"otherShow"}},[n("el-tab-pane",{attrs:{label:"Headers",name:"first"}},[n("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.header,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[n("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(n){e.$set(t.row,"key",n)},expression:"scope.row.key"}})]}}])}),n("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(n){e.$set(t.row,"value",n)},expression:"scope.row.value"}})]}}])}),n("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(n){return e.delTableRow("header",t.$index)}}})]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"全局变量",name:"second"}},[n("el-table",{staticClass:"h-b-e-a-style",attrs:{data:e.apiMsgData.globalVar,size:"mini",stripe:"","show-header":!1,"row-style":{"background-color":"rgb(250, 250, 250)"}}},[n("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center",minWidth:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(n){e.$set(t.row,"key",n)},expression:"scope.row.key"}})]}}])}),n("el-table-column",{attrs:{label:"type","header-align":"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"mini"},model:{value:t.row.param_type,callback:function(n){e.$set(t.row,"param_type",n)},expression:"scope.row.param_type"}},e._l(e.paramTypes,(function(e){return n("el-option",{key:e,attrs:{value:e}})})),1)]}}])}),n("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center",minWidth:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(n){e.$set(t.row,"value",n)},expression:"scope.row.value"}})]}}])}),n("el-table-column",{attrs:{property:"value",label:"操作","header-align":"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},nativeOn:{click:function(n){return e.delTableRow("globalVar",t.$index)}}})]}}])})],1)],1)],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("更新")])],1),n("el-col",{attrs:{span:2}},[n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("取消")])],1)],1)],1),n("el-dialog",{attrs:{title:"编辑配置",visible:e.editVisible,width:"28%",center:""},on:{"update:visible":function(t){e.editVisible=t}}},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"配置名称",required:""}},[n("el-input",{attrs:{clearable:""},model:{value:e.configure_name,callback:function(t){e.configure_name=t},expression:"configure_name"}})],1),n("el-form-item",{attrs:{label:"编写人员",required:""}},[n("el-input",{attrs:{clearable:""},model:{value:e.author,callback:function(t){e.author=t},expression:"author"}})],1),n("el-form-item",{attrs:{label:"选择项目",required:""}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.getInterfacesByProjectID(e.selected_project_id)}},model:{value:e.selected_project_id,callback:function(t){e.selected_project_id=t},expression:"selected_project_id"}},e._l(e.project_names,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"选择接口",required:""}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selected_interface_id,callback:function(t){e.selected_interface_id=t},expression:"selected_interface_id"}},e._l(e.interfaces,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},a=[],i=n("cefc"),o=i["a"],c=(n("e882"),n("9ca4")),u=Object(c["a"])(o,r,a,!1,null,"60ccaf28",null);t["default"]=u.exports},f7f9:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,"a",(function(){return r}))}}]);