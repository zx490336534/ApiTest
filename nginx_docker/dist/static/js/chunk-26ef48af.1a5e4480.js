(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ef48af"],{"2ae0":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"reportShow"},[e("h1",[t._v("Test Report: "+t._s(t.html_report_name))]),e("h2",[t._v("Summary")]),e("table",{attrs:{id:"summary"}},[e("tr",[e("th",[t._v("START AT")]),e("td",{attrs:{colspan:"4"}},[t._v(t._s(t.time.start_datetime))])]),e("tr",[e("th",[t._v("DURATION")]),e("td",{attrs:{colspan:"4"}},[t._v(t._s(t.time.duration)+" seconds")])]),e("tr",[e("th",[t._v("PLATFORM")]),e("td",[t._v("HttpRunner "+t._s(t.platform.httprunner_version))]),e("td",[t._v(t._s(t.platform.python_version))]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.platform.platform))])]),t._m(0),e("tr",[e("td",[t._v(t._s(t.stat.testsRun))]),e("td",[t._v(t._s(t.stat.successes))]),e("td",[t._v(t._s(t.stat.failures))]),e("td",[t._v(t._s(t.stat.errors))]),e("td",[t._v(t._s(t.stat.skipped))])])]),e("h2",[t._v("Details")]),t._l(t.details,(function(n,r){return[e("h3",[t._v(t._s(n.name))]),e("table",{staticClass:"details",attrs:{id:"suite_"+r}},[e("tr",[e("th",[t._v("base_url")]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(n.base_url))]),e("td",{staticClass:"detail",attrs:{colspan:"2"}},[e("a",{staticClass:"button",attrs:{href:"#suite_output_"+r}},[t._v("parameters & output")]),e("div",{staticClass:"overlay",attrs:{id:"suite_output_"+r}},[e("div",{staticClass:"popup"},[e("h2",[t._v("Parameters and Output")]),e("a",{staticClass:"close",attrs:{href:"#suite_"+r}},[t._v("×")]),e("div",{staticClass:"content"},[e("div",{staticStyle:{overflow:"auto"}},[e("table",[t._m(1,!0),t._l(n.output,(function(n,r){return e("tr",[e("td",[t._v(t._s(n.in))]),e("td",[t._v(t._s(n.out))])])}))],2)])])])])])]),e("tr",[e("td",[t._v("TOTAL: "+t._s(n.stat.testsRun))]),e("td",[t._v("SUCCESS: "+t._s(n.stat.successes))]),e("td",[t._v("FAILED: "+t._s(n.stat.failures))]),e("td",[t._v("ERROR: "+t._s(n.stat.errors))]),e("td",[t._v("SKIPPED: "+t._s(n.stat.skipped))])]),t._m(2,!0),t._l(n.records,(function(n,a){return e("tr",{attrs:{id:"record_"+r+"_"+a}},[e("th",{class:n.status,staticStyle:{width:"5em"}},[t._v(t._s(n.status))]),e("td",{attrs:{colspan:"2"}},[t._v(t._s(n.name))]),e("td",{staticStyle:{"text-align":"center",width:"6em"}},[t._v(t._s(n.meta_data.response.response_time_ms)+" ms")]),e("td",{staticClass:"detail"},[e("a",{staticClass:"button",attrs:{href:"#popup_log_"+r+"_"+a}},[t._v("log")]),e("div",{staticClass:"overlay",attrs:{id:"popup_log_"+r+"_"+a}},[e("div",{staticClass:"popup"},[e("h2",[t._v("Request and Response data")]),e("a",{staticClass:"close",attrs:{href:"#record_"+r+"_"+a}},[t._v("×")]),e("div",{staticClass:"content"},[e("h3",[t._v("Request:")]),e("div",{staticStyle:{overflow:"auto"}},[e("table",[t._l(n.meta_data.request,(function(r,a){return[e("tr",[e("th",[t._v(t._s(a))]),e("td",["headers"===a?t._l(n.meta_data.request.headers,(function(n,r){return e("div",[e("strong",[t._v(t._s(r))]),t._v(": "+t._s(n)+"\n                                                        ")])})):[t._v("\n                                                        "+t._s(r)+"\n                                                    ")]],2)])]}))],2)]),e("h3",[t._v("Response:")]),e("div",{staticStyle:{overflow:"auto"}},[e("table",[t._l(n.meta_data.response,(function(r,a){return[e("tr",[e("th",[t._v(t._s(a))]),e("td",["headers"===a?[t._l(n.meta_data.request.headers,(function(n,r){return[e("div",[e("strong",[t._v(t._s(r))]),t._v(": "+t._s(n)+"\n                                                            ")])]}))]:"content_type"===a?["image"===r?[e("img",{attrs:{src:n.meta_data.response.body}})]:[e("pre",[t._v(t._s(n.meta_data.response.body))])]]:[t._v("\n                                                        "+t._s(r)+"\n                                                    ")]],2)])]}))],2)]),e("h3",[t._v("Validators:")]),e("div",{staticStyle:{overflow:"auto"}},[e("table",[t._m(3,!0),t._l(n.meta_data.validators,(function(n){return e("tr",["pass"===n.check_result?e("td",{staticClass:"passed"},[t._v("\n                                                "+t._s(n.check)+"\n                                            ")]):"fail"===n.check_result?e("td",{staticClass:"failed"},[t._v("\n                                                "+t._s(n.check)+"\n                                            ")]):"unchecked"===n.check_result?e("td",{staticClass:"unchecked"},[t._v(t._s(n.check)+"\n                                            ")]):t._e(),e("td",[t._v(t._s(n.comparator))]),e("td",[t._v(t._s(n.expect))]),e("td",[t._v(t._s(n.check_value))])])}))],2)]),e("h3",[t._v("Statistics:")]),e("div",{staticStyle:{overflow:"auto"}},[e("table",[e("tr",[e("th",[t._v("content_size(bytes)")]),e("td",[t._v(t._s(n.meta_data.response.content_size))])]),e("tr",[e("th",[t._v("response_time(ms)")]),e("td",[t._v(t._s(n.meta_data.response.response_time_ms))])]),e("tr",[e("th",[t._v("elapsed(ms)")]),e("td",[t._v(t._s(n.meta_data.response.elapsed_ms))])])])])])])]),n.attachment?[e("a",{staticClass:"button",attrs:{href:"#popup_attachment_"+r+"_"+a}},[t._v("traceback")]),e("div",{staticClass:"overlay",attrs:{id:"popup_attachment_"+r+"_"+a}},[e("div",{staticClass:"popup"},[e("h2",[t._v("Traceback Message")]),e("a",{staticClass:"close",attrs:{href:"#record_"+ +r+"_"+a}},[t._v("×")]),e("div",{staticClass:"content"},[e("pre",[t._v(t._s(n.attachment))])])])])]:t._e()],2)])}))],2)]}))],2)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("TOTAL")]),e("th",[t._v("SUCCESS")]),e("th",[t._v("FAILED")]),e("th",[t._v("ERROR")]),e("th",[t._v("SKIPPED")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("variables")]),e("th",[t._v("output")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("Status")]),e("th",{attrs:{colspan:"2"}},[t._v("Name")]),e("th",[t._v("Response Time")]),e("th",[t._v("Detail")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("check")]),e("th",[t._v("comparator")]),e("th",[t._v("expect value")]),e("th",[t._v("actual value")])])}],s=e("f7f9"),c=e("4ec3"),u={beforeRouteEnter:function(t,n,e){e((function(t){t.report_id=t.$route.params.id,t.getData()})),e()},beforeRouteUpdate:function(t,n,e){this.report_id=t.params.id,this.getData(),e()},name:"reportShow",data:function(){return{report_id:null,html_report_name:"",time:Object,stat:Object,platform:Object,details:Array}},methods:{getData:function(){var t=this;Object(c["O"])(this.report_id).then((function(n){t.html_report_name=n.data.summary.html_report_name,t.time=n.data.summary.time,t.stat=n.data.summary.stat,t.platform=n.data.summary.platform,t.details=n.data.summary.details})).catch((function(n){"object"===Object(s["a"])(n)&&n.hasOwnProperty("status_code")?404===n.status_code&&t.$router.push({name:"404"}):t.$message.error("服务器错误")}))}},mounted:function(){}},o=u,i=(e("d5c7"),e("9ca4")),_=Object(i["a"])(o,r,a,!1,null,"54a77bb5",null);n["default"]=_.exports},"4ec3":function(t,n,e){"use strict";e.d(n,"I",(function(){return c})),e.d(n,"L",(function(){return u})),e.d(n,"m",(function(){return o})),e.d(n,"l",(function(){return i})),e.d(n,"J",(function(){return _})),e.d(n,"u",(function(){return f})),e.d(n,"z",(function(){return d})),e.d(n,"d",(function(){return l})),e.d(n,"K",(function(){return p})),e.d(n,"B",(function(){return v})),e.d(n,"R",(function(){return m})),e.d(n,"j",(function(){return h})),e.d(n,"i",(function(){return g})),e.d(n,"k",(function(){return b})),e.d(n,"G",(function(){return y})),e.d(n,"H",(function(){return C})),e.d(n,"t",(function(){return S})),e.d(n,"y",(function(){return k})),e.d(n,"c",(function(){return R})),e.d(n,"Q",(function(){return z})),e.d(n,"Y",(function(){return j})),e.d(n,"w",(function(){return w})),e.d(n,"f",(function(){return O})),e.d(n,"E",(function(){return E})),e.d(n,"bb",(function(){return T})),e.d(n,"T",(function(){return D})),e.d(n,"F",(function(){return A})),e.d(n,"W",(function(){return P})),e.d(n,"X",(function(){return $})),e.d(n,"v",(function(){return q})),e.d(n,"p",(function(){return I})),e.d(n,"V",(function(){return L})),e.d(n,"g",(function(){return x})),e.d(n,"e",(function(){return U})),e.d(n,"S",(function(){return F})),e.d(n,"D",(function(){return J})),e.d(n,"ab",(function(){return K})),e.d(n,"h",(function(){return M})),e.d(n,"P",(function(){return N})),e.d(n,"M",(function(){return H})),e.d(n,"N",(function(){return V})),e.d(n,"O",(function(){return B})),e.d(n,"q",(function(){return G})),e.d(n,"o",(function(){return Q})),e.d(n,"n",(function(){return W})),e.d(n,"r",(function(){return X})),e.d(n,"a",(function(){return Y})),e.d(n,"C",(function(){return Z})),e.d(n,"Z",(function(){return tt})),e.d(n,"A",(function(){return nt})),e.d(n,"s",(function(){return et})),e.d(n,"x",(function(){return rt})),e.d(n,"b",(function(){return at})),e.d(n,"U",(function(){return st}));var r=e("f753"),a=e.n(r),s="http://123.56.13.233:8000",c=function(t){return a.a.post("".concat(s,"/user/login/"),t)},u=function(t){return a.a.post("".concat(s,"/user/register/"),t)},o=function(t){return a.a.get("".concat(s,"/user/")+t+"/count/")},i=function(t){return a.a.get("".concat(s,"/user/")+t+"/count/")},_=function(t){return a.a.get("".concat(s,"/projects/?page=")+t.page+"&size="+t.size)},f=function(t){return a.a.delete("".concat(s,"/projects/")+t+"/")},d=function(t,n){return a.a.put("".concat(s,"/projects/")+t+"/",n)},l=function(t){return a.a.post("".concat(s,"/projects/"),t)},p=function(){return a.a.get("".concat(s,"/projects/names/"))},v=function(){return a.a.get("".concat(s,"/envs/names/"))},m=function(t,n){return a.a.post("".concat(s,"/projects/")+t+"/run/",{env_id:n})},h=function(t){return a.a.get("".concat(s,"/debugtalks/?page=")+t.page+"&size="+t.size)},g=function(t){return a.a.get("".concat(s,"/debugtalks/")+t+"/")},b=function(t,n){return a.a.put("".concat(s,"/debugtalks/")+t+"/",{debugtalk:n})},y=function(t){return a.a.get("".concat(s,"/interfaces/?page=")+t.page+"&size="+t.size)},C=function(){return a.a.get("".concat(s,"/interfaces/all"))},S=function(t){return a.a.delete("".concat(s,"/interfaces/")+t+"/")},k=function(t,n){return a.a.put("".concat(s,"/interfaces/")+t+"/",n)},R=function(t){return a.a.post("".concat(s,"/interfaces/"),t)},z=function(t,n){return a.a.post("".concat(s,"/interfaces/")+t+"/run/",{env_id:n})},j=function(t){return a.a.get("".concat(s,"/testsuits/?page=")+t.page+"&size="+t.size)},w=function(t){return a.a.delete("".concat(s,"/testsuits/")+t+"/")},O=function(t){return a.a.post("".concat(s,"/testsuits/"),t)},E=function(t){return a.a.get("".concat(s,"/testsuits/")+t+"/")},T=function(t,n){return a.a.put("".concat(s,"/testsuits/")+t+"/",n)},D=function(t,n){return a.a.post("".concat(s,"/testsuits/")+t+"/run/",{env_id:n})},A=function(t){return a.a.get("".concat(s,"/projects/")+t+"/interfaces/")},P=function(t){return a.a.get("".concat(s,"/testcases/?page=")+t.page+"&size="+t.size)},$=function(){return a.a.get("".concat(s,"/testcases/all"))},q=function(t){return a.a.delete("".concat(s,"/testcases/")+t+"/")},I=function(t){return a.a.get("".concat(s,"/interfaces/")+t+"/configs/")},L=function(t){return a.a.get("".concat(s,"/interfaces/")+t+"/testcases/")},x=function(){return a.a.get("".concat(s,"/interfaces/all_interfaces_project/"))},U=function(t){return a.a.post("".concat(s,"/testcases/"),t)},F=function(t,n){return a.a.post("".concat(s,"/testcases/")+t+"/run/",{env_id:n})},J=function(t){return a.a.get("".concat(s,"/testcases/")+t+"/")},K=function(t,n){return a.a.put("".concat(s,"/testcases/")+t+"/",n)},M=function(){return a.a.get("".concat(s,"/testcases/all_interfaces_project/"))},N=function(t){return a.a.get("".concat(s,"/reports/?page=")+t.page+"&size="+t.size)},H=function(t){return a.a.delete("".concat(s,"/reports/")+t+"/")},V=function(t){return a.a.get("".concat(s,"/reports/")+t+"/download/",{responseType:"blob"})},B=function(t){return a.a.get("".concat(s,"/reports/")+t+"/")},G=function(t){return a.a.get("".concat(s,"/configures/?page=")+t.page+"&size="+t.size)},Q=function(){return a.a.get("".concat(s,"/configures/all"))},W=function(){return a.a.get("".concat(s,"/configures/all_interfaces_project"))},X=function(t){return a.a.delete("".concat(s,"/configures/")+t+"/")},Y=function(t){return a.a.post("".concat(s,"/configures/"),t)},Z=function(t){return a.a.get("".concat(s,"/configures/")+t+"/")},tt=function(t,n){return a.a.put("".concat(s,"/configures/")+t+"/",n)},nt=function(t){return a.a.get("".concat(s,"/envs/?page=")+t.page+"&size="+t.size)},et=function(t){return a.a.delete("".concat(s,"/envs/")+t+"/")},rt=function(t,n){return a.a.put("".concat(s,"/envs/")+t+"/",n)},at=function(t){return a.a.post("".concat(s,"/envs/"),t)},st=function(){return a.a.get("".concat(s,"/summary/"))}},"54b9":function(t,n,e){},d5c7:function(t,n,e){"use strict";var r=e("54b9"),a=e.n(r);a.a},f7f9:function(t,n,e){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,"a",(function(){return r}))}}]);