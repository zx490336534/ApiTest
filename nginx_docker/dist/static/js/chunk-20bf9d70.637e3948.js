(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20bf9d70"],{"4b70":function(e,n,t){"use strict";var r=t("a252"),o=t.n(r);o.a},"4ec3":function(e,n,t){"use strict";t.d(n,"D",(function(){return c})),t.d(n,"G",(function(){return s})),t.d(n,"k",(function(){return a})),t.d(n,"j",(function(){return i})),t.d(n,"E",(function(){return l})),t.d(n,"q",(function(){return f})),t.d(n,"v",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"F",(function(){return m})),t.d(n,"x",(function(){return g})),t.d(n,"M",(function(){return _})),t.d(n,"h",(function(){return v})),t.d(n,"g",(function(){return w})),t.d(n,"i",(function(){return b})),t.d(n,"C",(function(){return h})),t.d(n,"p",(function(){return F})),t.d(n,"u",(function(){return k})),t.d(n,"c",(function(){return z})),t.d(n,"L",(function(){return j})),t.d(n,"S",(function(){return x})),t.d(n,"s",(function(){return y})),t.d(n,"f",(function(){return C})),t.d(n,"A",(function(){return E})),t.d(n,"V",(function(){return $})),t.d(n,"O",(function(){return q})),t.d(n,"B",(function(){return O})),t.d(n,"R",(function(){return V})),t.d(n,"r",(function(){return S})),t.d(n,"l",(function(){return A})),t.d(n,"Q",(function(){return J})),t.d(n,"e",(function(){return G})),t.d(n,"N",(function(){return L})),t.d(n,"z",(function(){return N})),t.d(n,"U",(function(){return T})),t.d(n,"K",(function(){return Z})),t.d(n,"H",(function(){return B})),t.d(n,"I",(function(){return D})),t.d(n,"J",(function(){return H})),t.d(n,"m",(function(){return I})),t.d(n,"n",(function(){return K})),t.d(n,"a",(function(){return M})),t.d(n,"y",(function(){return P})),t.d(n,"T",(function(){return Q})),t.d(n,"w",(function(){return R})),t.d(n,"o",(function(){return U})),t.d(n,"t",(function(){return W})),t.d(n,"b",(function(){return X})),t.d(n,"P",(function(){return Y}));var r=t("f753"),o=t.n(r),u="http://123.56.13.233:8000",c=function(e){return o.a.post("".concat(u,"/user/login/"),e)},s=function(e){return o.a.post("".concat(u,"/user/register/"),e)},a=function(e){return o.a.get("".concat(u,"/user/")+e+"/count/")},i=function(e){return o.a.get("".concat(u,"/user/")+e+"/count/")},l=function(e){return o.a.get("".concat(u,"/projects/?page=")+e.page+"&size="+e.size)},f=function(e){return o.a.delete("".concat(u,"/projects/")+e+"/")},d=function(e,n){return o.a.put("".concat(u,"/projects/")+e+"/",n)},p=function(e){return o.a.post("".concat(u,"/projects/"),e)},m=function(){return o.a.get("".concat(u,"/projects/names/"))},g=function(){return o.a.get("".concat(u,"/envs/names/"))},_=function(e,n){return o.a.post("".concat(u,"/projects/")+e+"/run/",{env_id:n})},v=function(e){return o.a.get("".concat(u,"/debugtalks/?page=")+e.page+"&size="+e.size)},w=function(e){return o.a.get("".concat(u,"/debugtalks/")+e+"/")},b=function(e,n){return o.a.put("".concat(u,"/debugtalks/")+e+"/",{debugtalk:n})},h=function(e){return o.a.get("".concat(u,"/interfaces/?page=")+e.page+"&size="+e.size)},F=function(e){return o.a.delete("".concat(u,"/interfaces/")+e+"/")},k=function(e,n){return o.a.put("".concat(u,"/interfaces/")+e+"/",n)},z=function(e){return o.a.post("".concat(u,"/interfaces/"),e)},j=function(e,n){return o.a.post("".concat(u,"/interfaces/")+e+"/run/",{env_id:n})},x=function(e){return o.a.get("".concat(u,"/testsuits/?page=")+e.page+"&size="+e.size)},y=function(e){return o.a.delete("".concat(u,"/testsuits/")+e+"/")},C=function(e){return o.a.post("".concat(u,"/testsuits/"),e)},E=function(e){return o.a.get("".concat(u,"/testsuits/")+e+"/")},$=function(e,n){return o.a.put("".concat(u,"/testsuits/")+e+"/",n)},q=function(e,n){return o.a.post("".concat(u,"/testsuits/")+e+"/run/",{env_id:n})},O=function(e){return o.a.get("".concat(u,"/projects/")+e+"/interfaces/")},V=function(e){return o.a.get("".concat(u,"/testcases/?page=")+e.page+"&size="+e.size)},S=function(e){return o.a.delete("".concat(u,"/testcases/")+e+"/")},A=function(e){return o.a.get("".concat(u,"/interfaces/")+e+"/configs/")},J=function(e){return o.a.get("".concat(u,"/interfaces/")+e+"/testcases/")},G=function(e){return o.a.post("".concat(u,"/testcases/"),e)},L=function(e,n){return o.a.post("".concat(u,"/testcases/")+e+"/run/",{env_id:n})},N=function(e){return o.a.get("".concat(u,"/testcases/")+e+"/")},T=function(e,n){return o.a.put("".concat(u,"/testcases/")+e+"/",n)},Z=function(e){return o.a.get("".concat(u,"/reports/?page=")+e.page+"&size="+e.size)},B=function(e){return o.a.delete("".concat(u,"/reports/")+e+"/")},D=function(e){return o.a.get("".concat(u,"/reports/")+e+"/download/",{responseType:"blob"})},H=function(e){return o.a.get("".concat(u,"/reports/")+e+"/")},I=function(e){return o.a.get("".concat(u,"/configures/?page=")+e.page+"&size="+e.size)},K=function(e){return o.a.delete("".concat(u,"/configures/")+e+"/")},M=function(e){return o.a.post("".concat(u,"/configures/"),e)},P=function(e){return o.a.get("".concat(u,"/configures/")+e+"/")},Q=function(e,n){return o.a.put("".concat(u,"/configures/")+e+"/",n)},R=function(e){return o.a.get("".concat(u,"/envs/?page=")+e.page+"&size="+e.size)},U=function(e){return o.a.delete("".concat(u,"/envs/")+e+"/")},W=function(e,n){return o.a.put("".concat(u,"/envs/")+e+"/",n)},X=function(e){return o.a.post("".concat(u,"/envs/"),e)},Y=function(){return o.a.get("".concat(u,"/summary/"))}},a252:function(e,n,t){},fe8e:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"ms-login"},[t("div",{staticClass:"ms-title"},[e._v("用户注册")]),t("el-form",{ref:"ruleForm",staticClass:"ms-content",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username",error:e.err_username_msg}},[t("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},on:{focus:function(n){return e.clearValidate("username")}},model:{value:e.ruleForm.username,callback:function(n){e.$set(e.ruleForm,"username",n)},expression:"ruleForm.username"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"email",error:e.err_email_msg}},[t("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},on:{focus:function(n){return e.clearValidate("email")}},model:{value:e.ruleForm.email,callback:function(n){e.$set(e.ruleForm,"email",n)},expression:"ruleForm.email"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-mail"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},on:{focus:function(n){return e.clearValidate("password")}},model:{value:e.ruleForm.password,callback:function(n){e.$set(e.ruleForm,"password",n)},expression:"ruleForm.password"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"password_conform"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入确认密码"},on:{focus:function(n){return e.clearValidate("password_conform")}},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.password_conform,callback:function(n){e.$set(e.ruleForm,"password_conform",n)},expression:"ruleForm.password_conform"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),t("el-link",{staticClass:"register_link",attrs:{type:"info",underline:!1,href:"/login"}},[e._v("已有账号？点击登录")]),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.submitForm("ruleForm")}}},[e._v("注册")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:e.err_info,expression:"err_info"}],staticClass:"login-tips"},[e._v(e._s(e.err_msg))])],1)],1)])},o=[],u=t("4ec3"),c={data:function(){var e=this,n=function(n,t,r){var o=t.length;e.err_username_msg="",o<6||o>20?r(new Error("用户名最少6位，最多20位")):Object(u["k"])(t).then((function(n){n.data.count>0?e.err_username_msg="用户名已存在":r()})).catch((function(n){n.response?(e.err_username_msg="服务器错误",console.log(n.response.data),console.log(n.response.status),console.log(n.response.headers)):n.request?(e.err_username_msg=n.request,console.log(n.request)):(e.err_username_msg=n.message,console.log("Error",n.message))}))},t=function(n,t,r){e.err_email_msg="";var o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,c=o.test(t.toLowerCase());c?Object(u["j"])(t).then((function(n){n.data.count>0?e.err_email_msg="邮箱已存在":r()})).catch((function(n){n.response?(e.err_email_msg="服务器错误",console.log(n.response.data),console.log(n.response.status),console.log(n.response.headers)):n.request?(e.err_email_msg=n.request,console.log(n.request)):(e.err_email_msg=n.message,console.log("Error",n.message))})):r(new Error("请输入合法的邮箱地址"))},r=function(n,t,r){var o=t.length;o<6||o>20?r(new Error("密码最少6位，最多20位")):(""!==e.ruleForm.password_conform&&e.$refs.ruleForm.validateField("password_conform"),r())},o=function(n,t,r){""===t?r(new Error("请输入确认密码")):t!==e.ruleForm.password?r(new Error("两次输入的密码不一致")):r()};return{ruleForm:{username:"",email:"",password:"",password_conform:""},err_info:!1,err_msg:"",err_username_msg:"",err_email_msg:"",rules:{username:[{validator:n,trigger:"blur"}],email:[{validator:t,trigger:"blur"}],password:[{validator:r,trigger:"blur"}],password_conform:[{validator:o,trigger:"blur"}]}}},methods:{submitForm:function(e){var n=this;this.$refs[e].validate((function(e){if(!e)return n.err_msg="参数有误",n.err_info=!0,!1;Object(u["G"])(n.ruleForm).then((function(e){sessionStorage.clear(),localStorage.clear(),localStorage.token=e.data.token,localStorage.username=e.data.username,localStorage.user_id=e.data.id,n.$router.push({name:"index"})})).catch((function(e){"non_field_errors"in e&&400===e.status_code&&(n.err_msg="用户名或密码错误"),e.response?n.err_msg="服务器异常":e.request&&(n.err_msg="网络异常"),n.err_info=!0}))}))},clearValidate:function(e){this.$refs["ruleForm"].clearValidate(e)}}},s=c,a=(t("4b70"),t("9ca4")),i=Object(a["a"])(s,r,o,!1,null,"6526ad81",null);n["default"]=i.exports}}]);