import{l as e,ac as a,ad as t,ae as r,b as c,w as l,af as m,s as i,ag as o}from"./vendor.dce33a88.js";import{H as d}from"./Header.80fac76e.js";import{M as n}from"./MediaStream.f7bcd26c.js";import{e as s}from"./index.63c48489.js";const f=()=>{const{t:i}=e("camera_setting"),{preferredCameraId:o,setPreferredCameraId:f,cameraList:E}=s();return React.createElement(u,null,React.createElement(d,{backPath:"/",name:i("name")}),React.createElement(h,null,React.createElement(v,null,React.createElement(a,{id:"cameraId"},i("form.camera_choice.label")),React.createElement(t,{labelId:"cameraId",id:"demo-simple-select",value:o,onChange:e=>{f(e.target.value||"AUTO")}},React.createElement(r,{value:"AUTO"},i("form.camera_choice.auto")),E.map((({deviceId:e,label:a})=>React.createElement(r,{value:e,key:"deviceId"},c(a)||l(a)?e:a)))),React.createElement(m,null,i("form.camera_choice.explain")))),React.createElement(p,null,React.createElement(n,{suppressError:!0})))},u=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`,p=i.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`,h=i.div`
  width: 100%;
  display: flex;
`,v=i(o)`
  width: 100%;

  &.MuiFormControl-root {
    margin: 8px;
  }
`;export{f as default};
