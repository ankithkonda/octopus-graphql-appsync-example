!function(e,n){for(var r in n)e[r]=n[r]}(exports,function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n){e.exports=require("aws-sdk")},function(e,n,r){"use strict";r.r(n);var t=r(0);r.d(n,"handler",function(){return o});const o=async(e,n)=>{console.log(process.env.DAAS_ROLE_ARN,n,process);let r=e.arguments.course_id;const o=e.arguments.filter,a=await(async(e,n,r)=>{const t=new e({apiVersion:"2011-06-15"}),o={RoleArn:n,RoleSessionName:r||"SessionA"},a=new Promise((e,n)=>{t.assumeRole(o,(r,t)=>{r?n(r):e(t)})});try{return await a}catch(e){return console.log("ERRROOOOOOOOOOR",e),e}})(t.STS,process.env.DAAS_ROLE_ARN||"");if(console.log(a),(e=>void 0!==e.code||void 0!==e.statusCode)(a))throw new Error("Unable to assume IAM Role to invoke DAAS Lambda");if(null===(a.Credentials||null))throw new Error("Unable to obtain AWS credentials from DAAS IAM Role");let l=!1;"TEST0019N_6920_TEACHER_DASHBOARD"!==r&&"TEST0019N_6920_00001"!==r||(r="ECON1010S_6920_20256",l=!0);const s=r.split("_"),u=s[0].slice(0,8),i=s[1],c=s[2];let d=null,f=null,p=null,m=null,g=null,O=null,A=null,S=null,b=null;if(o&&o.age&&o.age.min&&(d=o.age.min),o&&o.age&&o.age.max&&(f=o.age.max),o&&o.gpa&&o.gpa.min&&(p=o.gpa.min),o&&o.gpa&&o.gpa.max&&(m=o.gpa.max),o&&o.program&&(g=o.program),o&&o.studentUsername&&(b=o.studentUsername),o&&o.gender)switch(o.gender){case"MALE":O="Male";break;case"FEMALE":O="Female";break;case"OTHER":O="Other"}if(o&&o.studyLoad)switch(o.studyLoad){case"FULL_TIME":A="Full-Time";break;case"PART_TIME":A="Part-Time"}if(o&&o.residentialStatus)switch(o.residentialStatus){case"DOMESTIC":S="0";break;case"INTERNATIONAL":S="1"}return console.log("TEST"),"Hello World 4"}}]));