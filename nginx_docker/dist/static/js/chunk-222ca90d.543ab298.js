(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-222ca90d"],{"4ec3":function(t,e,n){"use strict";n.d(e,"I",(function(){return c})),n.d(e,"L",(function(){return o})),n.d(e,"m",(function(){return u})),n.d(e,"l",(function(){return s})),n.d(e,"J",(function(){return l})),n.d(e,"u",(function(){return f})),n.d(e,"z",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"K",(function(){return h})),n.d(e,"B",(function(){return g})),n.d(e,"R",(function(){return b})),n.d(e,"j",(function(){return _})),n.d(e,"i",(function(){return m})),n.d(e,"k",(function(){return v})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return j})),n.d(e,"t",(function(){return x})),n.d(e,"y",(function(){return z})),n.d(e,"c",(function(){return k})),n.d(e,"Q",(function(){return D})),n.d(e,"Y",(function(){return C})),n.d(e,"w",(function(){return O})),n.d(e,"f",(function(){return y})),n.d(e,"E",(function(){return V})),n.d(e,"bb",(function(){return S})),n.d(e,"T",(function(){return $})),n.d(e,"F",(function(){return A})),n.d(e,"W",(function(){return R})),n.d(e,"X",(function(){return T})),n.d(e,"v",(function(){return E})),n.d(e,"p",(function(){return I})),n.d(e,"V",(function(){return J})),n.d(e,"g",(function(){return N})),n.d(e,"e",(function(){return P})),n.d(e,"S",(function(){return B})),n.d(e,"D",(function(){return W})),n.d(e,"ab",(function(){return X})),n.d(e,"h",(function(){return q})),n.d(e,"P",(function(){return F})),n.d(e,"M",(function(){return G})),n.d(e,"N",(function(){return H})),n.d(e,"O",(function(){return K})),n.d(e,"q",(function(){return L})),n.d(e,"o",(function(){return M})),n.d(e,"n",(function(){return Q})),n.d(e,"r",(function(){return U})),n.d(e,"a",(function(){return Y})),n.d(e,"C",(function(){return Z})),n.d(e,"Z",(function(){return tt})),n.d(e,"A",(function(){return et})),n.d(e,"s",(function(){return nt})),n.d(e,"x",(function(){return rt})),n.d(e,"b",(function(){return it})),n.d(e,"U",(function(){return at}));var r=n("f753"),i=n.n(r),a="http://123.56.13.233:8000",c=function(t){return i.a.post("".concat(a,"/user/login/"),t)},o=function(t){return i.a.post("".concat(a,"/user/register/"),t)},u=function(t){return i.a.get("".concat(a,"/user/")+t+"/count/")},s=function(t){return i.a.get("".concat(a,"/user/")+t+"/count/")},l=function(t){return i.a.get("".concat(a,"/projects/?page=")+t.page+"&size="+t.size)},f=function(t){return i.a.delete("".concat(a,"/projects/")+t+"/")},d=function(t,e){return i.a.put("".concat(a,"/projects/")+t+"/",e)},p=function(t){return i.a.post("".concat(a,"/projects/"),t)},h=function(){return i.a.get("".concat(a,"/projects/names/"))},g=function(){return i.a.get("".concat(a,"/envs/names/"))},b=function(t,e){return i.a.post("".concat(a,"/projects/")+t+"/run/",{env_id:e})},_=function(t){return i.a.get("".concat(a,"/debugtalks/?page=")+t.page+"&size="+t.size)},m=function(t){return i.a.get("".concat(a,"/debugtalks/")+t+"/")},v=function(t,e){return i.a.put("".concat(a,"/debugtalks/")+t+"/",{debugtalk:e})},w=function(t){return i.a.get("".concat(a,"/interfaces/?page=")+t.page+"&size="+t.size)},j=function(){return i.a.get("".concat(a,"/interfaces/all"))},x=function(t){return i.a.delete("".concat(a,"/interfaces/")+t+"/")},z=function(t,e){return i.a.put("".concat(a,"/interfaces/")+t+"/",e)},k=function(t){return i.a.post("".concat(a,"/interfaces/"),t)},D=function(t,e){return i.a.post("".concat(a,"/interfaces/")+t+"/run/",{env_id:e})},C=function(t){return i.a.get("".concat(a,"/testsuits/?page=")+t.page+"&size="+t.size)},O=function(t){return i.a.delete("".concat(a,"/testsuits/")+t+"/")},y=function(t){return i.a.post("".concat(a,"/testsuits/"),t)},V=function(t){return i.a.get("".concat(a,"/testsuits/")+t+"/")},S=function(t,e){return i.a.put("".concat(a,"/testsuits/")+t+"/",e)},$=function(t,e){return i.a.post("".concat(a,"/testsuits/")+t+"/run/",{env_id:e})},A=function(t){return i.a.get("".concat(a,"/projects/")+t+"/interfaces/")},R=function(t){return i.a.get("".concat(a,"/testcases/?page=")+t.page+"&size="+t.size)},T=function(){return i.a.get("".concat(a,"/testcases/all"))},E=function(t){return i.a.delete("".concat(a,"/testcases/")+t+"/")},I=function(t){return i.a.get("".concat(a,"/interfaces/")+t+"/configs/")},J=function(t){return i.a.get("".concat(a,"/interfaces/")+t+"/testcases/")},N=function(){return i.a.get("".concat(a,"/interfaces/all_interfaces_project/"))},P=function(t){return i.a.post("".concat(a,"/testcases/"),t)},B=function(t,e){return i.a.post("".concat(a,"/testcases/")+t+"/run/",{env_id:e})},W=function(t){return i.a.get("".concat(a,"/testcases/")+t+"/")},X=function(t,e){return i.a.put("".concat(a,"/testcases/")+t+"/",e)},q=function(){return i.a.get("".concat(a,"/testcases/all_interfaces_project/"))},F=function(t){return i.a.get("".concat(a,"/reports/?page=")+t.page+"&size="+t.size)},G=function(t){return i.a.delete("".concat(a,"/reports/")+t+"/")},H=function(t){return i.a.get("".concat(a,"/reports/")+t+"/download/",{responseType:"blob"})},K=function(t){return i.a.get("".concat(a,"/reports/")+t+"/")},L=function(t){return i.a.get("".concat(a,"/configures/?page=")+t.page+"&size="+t.size)},M=function(){return i.a.get("".concat(a,"/configures/all"))},Q=function(){return i.a.get("".concat(a,"/configures/all_interfaces_project"))},U=function(t){return i.a.delete("".concat(a,"/configures/")+t+"/")},Y=function(t){return i.a.post("".concat(a,"/configures/"),t)},Z=function(t){return i.a.get("".concat(a,"/configures/")+t+"/")},tt=function(t,e){return i.a.put("".concat(a,"/configures/")+t+"/",e)},et=function(t){return i.a.get("".concat(a,"/envs/?page=")+t.page+"&size="+t.size)},nt=function(t){return i.a.delete("".concat(a,"/envs/")+t+"/")},rt=function(t,e){return i.a.put("".concat(a,"/envs/")+t+"/",e)},it=function(t){return i.a.post("".concat(a,"/envs/"),t)},at=function(){return i.a.get("".concat(a,"/summary/"))}},"73b0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 用例管理")]),n("el-breadcrumb-item",[t._v("用例列表")])],1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"handle-box"},[n("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),n("el-cascader",{staticClass:"handle-del mr10",attrs:{options:t.options,"show-all-levels":!1},model:{value:t.project_options_value,callback:function(e){t.project_options_value=e},expression:"project_options_value"}}),n("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"用例名称",width:"250"}}),n("el-table-column",{attrs:{prop:"interface.project",label:"所属项目",width:"250"}}),n("el-table-column",{attrs:{prop:"interface.name",label:"所属接口",width:"250"}}),n("el-table-column",{attrs:{prop:"author",label:"测试人员",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleRun(e.$index,e.row)}}},[t._v("运行\n                        ")]),n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.linkTo(e.row.id)}}},[t._v("编辑")]),n("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n                        ")])]}}])})],1),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),n("el-dialog",{attrs:{title:"删除接口",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[n("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"运行接口",visible:t.runVisible,width:"30%",center:""},on:{"update:visible":function(e){t.runVisible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"运行环境"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.env_id,callback:function(e){t.env_id=e},expression:"env_id"}},t._l(t.envs_id_names,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.runVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.confirmRun}},[t._v("运 行")])],1)],1)],1)},i=[],a=(n("cc57"),n("4ec3")),c={name:"basetable",data:function(){return{tableData:[],AlltableData:[],options:[],searchData:[],project_options_value:["全部项目","全部接口"],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],editVisible:!1,delVisible:!1,runVisible:!1,form:{},idx:-1,id:-1,env_id:"",envs_id_names:[]}},created:function(){this.getData(),this.getAllData(),this.getEnvsIdNames(),this.getAllInterfacesProject()},computed:{data:function(){var t=this;return""!==this.select_word?this.searchData=this.AlltableData:this.searchData=this.tableData,this.searchData.filter((function(e){for(var n=!1,r=0;r<t.del_list.length;r++)if(e.name===t.del_list[r].name){n=!0;break}if(!n)if(-1===t.project_options_value.indexOf("全部接口")){if(console.log(e),e.interface.project.indexOf(t.project_options_value[0])>-1&&e.interface.name.indexOf(t.project_options_value[1])>-1&&(e.name.indexOf(t.select_word)>-1||e.tester.indexOf(t.select_word)>-1))return e}else if(e.name.indexOf(t.select_word)>-1||e.interface.project.indexOf(t.select_word)>-1||e.interface.name.indexOf(t.select_word)>-1||e.author.indexOf(t.select_word)>-1)return e}))}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;Object(a["W"])({page:this.cur_page,size:this.page_size}).then((function(e){t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1}))},getAllData:function(){var t=this;Object(a["X"])().then((function(e){t.AlltableData=e.data.results}))},getAllInterfacesProject:function(){var t=this;Object(a["h"])().then((function(e){console.log(e.data),t.options=e.data}))},search:function(){this.is_search=!0},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.editVisible=!0},handleRun:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.runVisible=!0},handleDelete:function(t,e){this.idx=t,this.id=e.id,this.delVisible=!0},delAll:function(){var t=this,e=this.multipleSelection.length,n="";this.del_list=this.del_list.concat(this.multipleSelection);for(var r=0;r<e;r++)n+=this.multipleSelection[r].name+" ",Object(a["v"])(this.multipleSelection[r].id).then((function(t){})).catch((function(e){t.$message.error("服务器错误")}));this.$message.error("删除了"+n),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t},deleteRow:function(){var t=this;Object(a["v"])(this.id).then((function(e){if(t.$message.success("删除成功"),t.delVisible=!1,t.tableData[t.idx].id===t.id)t.tableData.splice(t.idx,1);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.id)return void t.tableData.splice(n,1)})).catch((function(e){t.$message.error("服务器错误")}))},getEnvsIdNames:function(){var t=this;Object(a["B"])().then((function(e){t.envs_id_names=e.data})).catch((function(e){t.$message.error("服务器错误")}))},confirmRun:function(){var t=this;Object(a["S"])(this.id,this.env_id).then((function(e){t.runVisible=!1,t.$router.push({path:"/reports_view/".concat(e.data.id)})})).catch((function(e){t.$message.error("服务器错误")}))},linkTo:function(t){this.$router.push({path:"/testcases_edit/".concat(t)})}}},o=c,u=(n("941c"),n("9ca4")),s=Object(u["a"])(o,r,i,!1,null,"f417a5a6",null);e["default"]=s.exports},"941c":function(t,e,n){"use strict";var r=n("fd63"),i=n.n(r);i.a},fd63:function(t,e,n){}}]);