(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(74)},55:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(17),o=n.n(a),r=n(1),s=n.n(r),i=n(19),l=n.n(i),c=n(5),u=n(7),d=n(12),m=n(11),p=n(13),h=n(27),f=n(84),g=n(85),b=(n(55),n(75)),y=n(76),v={ROMS:{owlia:{name:"The Legends of Owlia",description:s.a.createElement("span",null,s.a.createElement("a",{href:"http://www.gradualgames.com/p/the-legends-of-owlia_1.html",target:"_blank"},"Owlia by Gradual Games")," ","/"," ",s.a.createElement("a",{href:"http://www.infiniteneslives.com/owlia.php",target:"_blank"},"Buy the cartridge")),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/owlia.nes"},nomolos:{name:"Nomolos: Storming the Catsle",description:s.a.createElement("span",null,s.a.createElement("a",{href:"http://www.gradualgames.com/p/nomolos-storming-catsle.html",target:"_blank"},"Monolos by Gradual Games")," ","/"," ",s.a.createElement("a",{href:"http://www.infiniteneslives.com/nomolos.php",target:"_blank"},"Buy the cartridge")),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/nomolos.nes"},croom:{name:"Concentration Room",description:s.a.createElement("span",null,s.a.createElement("a",{href:"http://www.pineight.com/croom/README",target:"_blank"},"Concentration Room")," ","by Damian Yerrick"),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/croom/croom.nes"},lj65:{name:"LJ65",description:s.a.createElement("span",null,s.a.createElement("a",{href:"http://harddrop.com/wiki/LJ65",target:"_blank"},"Concentration Room")," ","by Damian Yerrick"),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/lj65/lj65.nes"}},GOOGLE_ANALYTICS_CODE:Object({NODE_ENV:"production",PUBLIC_URL:"/myapp"}).REACT_APP_GOOGLE_ANALYTICS_CODE,SENTRY_URI:Object({NODE_ENV:"production",PUBLIC_URL:"/myapp"}).REACT_APP_SENTRY_URI},C={getRomInfoByHash:function(e){return this.load().find(function(t){return t.hash===e})},save:function(e){return function(e){return new Promise(function(t,n){var a=new FileReader;a.onload=t,a.readAsBinaryString(e)})}(e).then(function(e){var t=e.target.result;return function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return crypto.subtle.digest("SHA-1",t).then(function(e){return Array.from(new Uint8Array(e)).map(function(e){return e.toString(16).padStart(2,"0")}).join("")})}(t).then(function(e){return{hash:e,byteString:t}})}).then(function(t){var n=t.hash,a=t.byteString,o=localStorage.getItem("savedRomInfo"),r=o?JSON.parse(o):[],s={name:e.name,hash:n,added:Date.now()},i=JSON.stringify(r.concat([s]));return localStorage.setItem("savedRomInfo",i),localStorage.setItem("blob-"+n,a),s})},load:function(){return localStorage.getItem("savedRomInfo")&&JSON.parse(localStorage.getItem("savedRomInfo"))||[]},delete:function(e){var t=this.load();localStorage.removeItem("blob-"+e),localStorage.setItem("savedRomInfo",JSON.stringify(t.filter(function(t){return t.hash!==e})))}},k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).deleteRom=function(e){C.delete(e),n.updateLibrary()},n.updateLibrary=function(){n.setState({romLibrary:C.load()})},n.handleDragOver=function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"},n.handleDrop=function(e){e.preventDefault();var t=e.dataTransfer.items?e.dataTransfer.items[0].getAsFile():e.dataTransfer.files[0];C.save(t).then(function(e){n.updateLibrary(),n.props.history.push({pathname:"run/local-"+e.hash})})},n.state={romLibrary:C.load()},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container ListPage my-4",onDragOver:this.handleDragOver,onDrop:this.handleDrop},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("header",{className:"mb-4"},s.a.createElement("h1",{className:"mb-3"},"JSNES"),s.a.createElement("p",null,"A JavaScript NES emulator."," ",s.a.createElement("a",{href:"https://github.com/bfirsh/jsnes"},"Source on GitHub."))),s.a.createElement(b.a,{className:"mb-4"},Object.keys(v.ROMS).sort().map(function(e){return s.a.createElement(y.a,{key:e,to:"/run/"+encodeURIComponent(e),className:"list-group-item"},v.ROMS[e].name,s.a.createElement("span",{className:"float-right"},"\u203a"))})),s.a.createElement("p",null,"Or, drag and drop a ROM file onto the page to play it. (Google may help you find them.)"),this.state.romLibrary.length>0?s.a.createElement("div",null,s.a.createElement("p",null,"Previously played:"),s.a.createElement(b.a,{className:"mb-4"},this.state.romLibrary.sort(function(e,t){return new Date(t.added)-new Date(e.added)}).map(function(t){return s.a.createElement(y.a,{key:t.hash,to:"run/local-"+t.hash,className:"list-group-item"},t.name,s.a.createElement("a",{onClick:function(n){n.preventDefault(),e.deleteRom(t.hash)},className:"delete",title:"Delete"},"\xd7"),s.a.createElement("span",{className:"float-right"},"\u203a"))}))):null)))}}]),t}(r.Component),w=n(81),O=n(82),B=n(21),E=n(42),N=n(39),T=n(14),S=n(83),I=n(77),D=n(78),U=n(79),P=n(80),F=n(3),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={playerOneButton:"",playerTwoButton:"",waitingForKey:0},n.handleClick=n.handleClick.bind(Object(T.a)(Object(T.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keys,t=this.props.button,n=[];for(var a in e)1===e[a][0]&&e[a][1]===t?(n[0]=e[a][2],console.log(n[0])):2===e[a][0]&&e[a][1]===t&&(n[1]=e[a][2]);this.setState({playerOneButton:n[0],playerTwoButton:n[1]})}},{key:"componentDidUpdate",value:function(e,t){var n,a,o=this.props.keys,r=this.props.button,s=[];for(var i in o)1===o[i][0]&&o[i][1]===r?(s[0]=o[i][2],console.log(s[0])):2===o[i][0]&&o[i][1]===r&&(s[1]=o[i][2]);var l=function(e,t){return e.buttons.filter(function(e){return e.buttonId===t})[0]},c=function(e,t){return t.buttons.filter(function(t){return!e||!e.buttons.some(function(e){return e.buttonId===t.buttonId})})[0]},u=0,d=0,m=function(e){return"button"===e.type?"Btn-"+e.code:"axis"===e.type?"Axis-"+e.code+" "+e.value:void 0};if(this.props.gamepadConfig&&this.props.gamepadConfig.playerGamepadId){var p=this.props.gamepadConfig.playerGamepadId;p[0]&&(s[0]="",n=l(this.props.gamepadConfig.configs[p[0]],r),a=c(e.gamepadConfig.configs[p[0]],this.props.gamepadConfig.configs[p[0]]),n?s[0]=m(n):a&&a.buttonId===this.props.prevButton&&(u||(u=1,d=1))),p[1]&&(s[1]="",n=l(this.props.gamepadConfig.configs[p[1]],r),a=c(e.gamepadConfig.configs[p[1]],this.props.gamepadConfig.configs[p[1]]),n?s[1]=m(n):a&&a.buttonId===this.props.prevButton&&(u||(u=2,d=2)))}var h={};u&&this.props.handleClick([d,this.props.button]),t.playerOneButton===s[0]&&t.playerTwoButton===s[1]||(h.playerOneButton=s[0],h.playerTwoButton=s[1]),u?h.waitingForKey=u:1===t.waitingForKey?this.props.currentPromptButton!==this.props.button&&(h.waitingForKey=0):2===t.waitingForKey&&this.props.currentPromptButton!==this.props.button&&(h.waitingForKey=0),Object.keys(h).length>0&&this.setState(h)}},{key:"handleClick",value:function(e){this.props.handleClick([e,this.props.button]),this.setState({waitingForKey:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.buttonName),s.a.createElement("td",{onClick:function(){return e.handleClick(1)}},1===this.state.waitingForKey?"Press key or button...":this.state.playerOneButton),s.a.createElement("td",{onClick:function(){return e.handleClick(2)}},2===this.state.waitingForKey?"Press key or button...":this.state.playerTwoButton))}}]),t}(r.Component),_="../img/nes_controller.png",G="../img/keyboard.png",R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={gamepadConfig:e.gamepadConfig,keys:e.keys,button:void 0,modified:!1},n.handleKeyDown=n.handleKeyDown.bind(Object(T.a)(Object(T.a)(n))),n.handleGamepadButtonDown=n.handleGamepadButtonDown.bind(Object(T.a)(Object(T.a)(n))),n.listenForKey=n.listenForKey.bind(Object(T.a)(Object(T.a)(n))),n.state.gamepadConfig=n.state.gamepadConfig||{},n.state.gamepadConfig.playerGamepadId=n.state.gamepadConfig.playerGamepadId||[null,null],n.state.gamepadConfig.configs=n.state.gamepadConfig.configs||{},n.state.controllerIcon=n.state.gamepadConfig.playerGamepadId.map(function(e){return e?_:G}),n.state.controllerIconAlt=n.state.gamepadConfig.playerGamepadId.map(function(e){return e?"gamepad":"keyboard"}),n.state.currentPromptButton=-1,n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.state.modified&&(this.props.setKeys(this.state.keys),this.props.setGamepadConfig(this.state.gamepadConfig)),this.removeKeyListener()}},{key:"listenForKey",value:function(e){var t=e[1];this.removeKeyListener(),this.setState({button:e,currentPromptButton:t}),this.props.promptButton(this.handleGamepadButtonDown),document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleGamepadButtonDown",value:function(e){this.removeKeyListener();var t=this.state.button,n=t[0],a=t[1],o=e.gamepadId,r=this.state.gamepadConfig,s=r.playerGamepadId.slice(0),i={};s[n-1]=o;var l={code:e.code,type:e.type,buttonId:a,value:e.value};i[o]={buttons:(r.configs[o]||{buttons:[]}).buttons.filter(function(e){return e.buttonId!==a}).concat([l])};var c=Object.assign({},r.configs,i);this.setState({gamepadConfig:{configs:c,playerGamepadId:s},currentPromptButton:-1,controllerIcon:s.map(function(e){return e?_:G}),modified:!0})}},{key:"handleKeyDown",value:function(e){this.removeKeyListener();var t=this.state.button,n=this.state.keys,a={};for(var o in n)n[o][0]===t[0]&&n[o][1]===t[1]||(a[o]=n[o]);var r=this.state.gamepadConfig.playerGamepadId.slice(0);r[t[0]-1]=null,this.setState({keys:Object(N.a)({},a,Object(B.a)({},e.keyCode,Object(E.a)(t.slice(0,2)).concat([e.key.length>1?e.key:String(e.key).toUpperCase()]))),button:void 0,gamepadConfig:{configs:this.state.gamepadConfig.configs,playerGamepadId:r},currentPromptButton:-1,controllerIcon:r.map(function(e){return e?_:G}),controllerIconAlt:r.map(function(e){return e?"gamepad":"keyboard"}),modified:!0})}},{key:"removeKeyListener",value:function(){this.props.promptButton(null),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return s.a.createElement(S.a,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:"ControlsModal"},s.a.createElement(I.a,{toggle:this.props.toggle},"Controls"),s.a.createElement(D.a,null,s.a.createElement(U.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Button"),s.a.createElement("th",null,"Player 1",s.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[0],alt:this.state.controllerIconAlt[0]})),s.a.createElement("th",null,"Player 2",s.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[1],alt:this.state.controllerIconAlt[1]})))),s.a.createElement("tbody",null,s.a.createElement(j,{buttonName:"Left",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_LEFT,prevButton:F.Controller.BUTTON_SELECT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"Right",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_RIGHT,prevButton:F.Controller.BUTTON_LEFT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"Up",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_UP,prevButton:F.Controller.BUTTON_RIGHT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"Down",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_DOWN,prevButton:F.Controller.BUTTON_UP,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"A",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_A,prevButton:F.Controller.BUTTON_DOWN,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"B",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_B,prevButton:F.Controller.BUTTON_A,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"Start",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_START,prevButton:F.Controller.BUTTON_B,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),s.a.createElement(j,{buttonName:"Select",currentPromptButton:this.state.currentPromptButton,button:F.Controller.BUTTON_SELECT,prevButton:F.Controller.BUTTON_START,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig})))),s.a.createElement(P.a,null,s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.props.toggle},"Close")))}}]),t}(r.Component),A=function(){function e(t){var n=this;Object(c.a)(this,e),this.onAnimationFrame=function(){if(n.calibrating&&(null===n.calibrationStartTime?(n.calibrationStartTime=(new Date).getTime(),n.calibrationCurrentFrames=0):n.calibrationCurrentFrames+=1,n.calibrationCurrentFrames===n.calibrationFrames)){n.calibrating=!1;var e=1e3/(((new Date).getTime()-n.calibrationStartTime)/n.calibrationFrames);(e<=n.desiredFPS-n.calibrationTolerance||e>=n.desiredFPS+n.calibrationTolerance)&&(console.log("Enabling bodge mode. (Desired FPS is ".concat(n.desiredFPS,", actual FPS is ").concat(e,")")),n.startBodgeMode())}n.requestAnimationFrame(),n.running&&(n.bodgeMode||n.onGenerateFrame(),n.onWriteFrame())},this.startBodgeMode=function(){n.bodgeMode=!0,n.bodgeInterval=setInterval(n.onBodge,1e3/n.desiredFPS)},this.onBodge=function(){n.running&&n.onGenerateFrame()},this.onGenerateFrame=t.onGenerateFrame,this.onWriteFrame=t.onWriteFrame,this.running=!1,this.bodgeMode=!1,this.desiredFPS=60,this.calibrationDelay=200,this.calibrationFrames=10,this.calibrationTolerance=5,this.calibrating=!1,this.calibrationStartTime=null,this.calibrationCurrentFrames=null}return Object(u.a)(e,[{key:"start",value:function(){this.running=!0,this.requestAnimationFrame(),this.bodgeMode&&this.startBodgeMode()}},{key:"stop",value:function(){this.running=!1,this._requestID&&window.cancelAnimationFrame(this._requestID),this.bodgeInterval&&clearInterval(this.bodgeInterval)}},{key:"requestAnimationFrame",value:function(){this._requestID=window.requestAnimationFrame(this.onAnimationFrame)}}]),e}(),L=function e(t){var n=this;Object(c.a)(this,e),this.disableIfGamepadEnabled=function(e){var t=n;return function(n,a){if(!t.gamepadConfig)return e(n,a);var o=t.gamepadConfig.playerGamepadId;return o&&o[n-1]?void 0:e(n,a)}},this._getPlayerNumberFromGamepad=function(e){return n.gamepadConfig.playerGamepadId[0]===e.id?1:n.gamepadConfig.playerGamepadId[1]===e.id?2:1},this.poll=function(){for(var e=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads(),t=[],a=0;a<e.length;a++){var o=e[a],r=n.gamepadState[a];if(o)if(r){var s=o.buttons,i=r.buttons;if(n.buttonCallback){for(var l=0;l<o.axes.length;l++){var c=o.axes[l],u=r.axes[l];-1===c&&-1!==u&&n.buttonCallback({gamepadId:o.id,type:"axis",code:l,value:c}),1===c&&1!==u&&n.buttonCallback({gamepadId:o.id,type:"axis",code:l,value:c})}for(var d=0;d<s.length;d++){var m=s[d],p=i[d];m.pressed&&!p.pressed&&n.buttonCallback({gamepadId:o.id,type:"button",code:d})}}else if(n.gamepadConfig){var h=n._getPlayerNumberFromGamepad(o);if(t.length<2&&(-1!==t.indexOf(h)&&++h>2&&(h=1),t.push(h),n.gamepadConfig.configs[o.id]))for(var f=n.gamepadConfig.configs[o.id].buttons,g=0;g<f.length;g++){var b=f[g];if("button"===b.type){var y=b.code,v=s[y],C=i[y];v.pressed&&!C.pressed?n.onButtonDown(h,b.buttonId):!v.pressed&&C.pressed&&n.onButtonUp(h,b.buttonId)}else if("axis"===b.type){var k=b.code,w=o.axes[k],O=r.axes[k];w===b.value&&O!==b.value&&n.onButtonDown(h,b.buttonId),w!==b.value&&O===b.value&&n.onButtonUp(h,b.buttonId)}}}n.gamepadState[a]={buttons:s.map(function(e){return{pressed:e.pressed}}),axes:o.axes.slice(0)}}else n.gamepadState[a]=o}},this.promptButton=function(e){n.buttonCallback=e?function(t){n.buttonCallback=null,e(t)}:e},this.loadGamepadConfig=function(){var e;try{(e=localStorage.getItem("gamepadConfig"))&&(e=JSON.parse(e))}catch(t){console.log("Failed to get gamepadConfig from localStorage.",t)}n.gamepadConfig=e},this.setGamepadConfig=function(e){try{localStorage.setItem("gamepadConfig",JSON.stringify(e)),n.gamepadConfig=e}catch(t){console.log("Failed to set gamepadConfig in localStorage")}},this.startPolling=function(){if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return{stop:function(){}};var e=!1;return requestAnimationFrame(function t(){e||(n.poll(),requestAnimationFrame(t))}),{stop:function(){e=!0}}},this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp,this.gamepadState=[],this.buttonCallback=null},x={88:[1,F.Controller.BUTTON_A,"X"],89:[1,F.Controller.BUTTON_B,"Y"],90:[1,F.Controller.BUTTON_B,"Z"],17:[1,F.Controller.BUTTON_SELECT,"Right Ctrl"],13:[1,F.Controller.BUTTON_START,"Enter"],38:[1,F.Controller.BUTTON_UP,"Up"],40:[1,F.Controller.BUTTON_DOWN,"Down"],37:[1,F.Controller.BUTTON_LEFT,"Left"],39:[1,F.Controller.BUTTON_RIGHT,"Right"],103:[2,F.Controller.BUTTON_A,"Num-7"],105:[2,F.Controller.BUTTON_B,"Num-9"],99:[2,F.Controller.BUTTON_SELECT,"Num-3"],97:[2,F.Controller.BUTTON_START,"Num-1"],104:[2,F.Controller.BUTTON_UP,"Num-8"],98:[2,F.Controller.BUTTON_DOWN,"Num-2"],100:[2,F.Controller.BUTTON_LEFT,"Num-4"],102:[2,F.Controller.BUTTON_RIGHT,"Num-6"]},M=function e(t){var n=this;Object(c.a)(this,e),this.loadKeys=function(){var e;try{(e=localStorage.getItem("keys"))&&(e=JSON.parse(e))}catch(t){console.log("Failed to get keys from localStorage.",t)}n.keys=e||x},this.setKeys=function(e){try{localStorage.setItem("keys",JSON.stringify(e)),n.keys=e}catch(t){console.log("Failed to set keys in localStorage")}},this.handleKeyDown=function(e){var t=n.keys[e.keyCode];t&&(n.onButtonDown(t[0],t[1]),e.preventDefault())},this.handleKeyUp=function(e){var t=n.keys[e.keyCode];t&&(n.onButtonUp(t[0],t[1]),e.preventDefault())},this.handleKeyPress=function(e){e.preventDefault()},this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp},K=(n(69),256),q=240,z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).setBuffer=function(e){for(var t=0,a=0;a<q;++a)for(var o=0;o<K;++o)t=256*a+o,n.buf32[t]=4278190080|e[t]},n.writeBuffer=function(){n.imageData.data.set(n.buf8),n.context.putImageData(n.imageData,0,0)},n.fitInParent=function(){var e=n.canvas.parentNode,t=e.clientWidth,a=e.clientHeight,o=K/q;o<t/a?(n.canvas.style.width="".concat(Math.round(a*o),"px"),n.canvas.style.height="".concat(a,"px")):(n.canvas.style.width="".concat(t,"px"),n.canvas.style.height="".concat(Math.round(t/o),"px"))},n.handleMouseDown=function(e){if(n.props.onMouseDown){var t=K/parseFloat(n.canvas.style.width),a=n.canvas.getBoundingClientRect(),o=Math.round((e.clientX-a.left)*t),r=Math.round((e.clientY-a.top)*t);n.props.onMouseDown(o,r)}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("canvas",{className:"Screen",width:K,height:q,onMouseDown:this.handleMouseDown,onMouseUp:this.props.onMouseUp,ref:function(t){e.canvas=t}})}},{key:"componentDidMount",value:function(){this.initCanvas()}},{key:"componentDidUpdate",value:function(){this.initCanvas()}},{key:"initCanvas",value:function(){this.context=this.canvas.getContext("2d"),this.imageData=this.context.getImageData(0,0,K,q),this.context.fillStyle="black",this.context.fillRect(0,0,K,q),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var e=0;e<this.buf32.length;++e)this.buf32[e]=4278190080}},{key:"screenshot",value:function(){var e=new Image;return e.src=this.canvas.toDataURL("image/png"),e}}]),t}(r.Component),J=n(40),W=n.n(J),Y=function(e,t){console.error(e),o.a.captureException(e,{extra:t})},H=function(){function e(t){var n=this,a=t.onBufferUnderrun;Object(c.a)(this,e),this.writeSample=function(e,t){n.buffer.size()/2>=n.bufferSize&&console.log("Buffer overrun"),n.buffer.enq(e),n.buffer.enq(t)},this.onaudioprocess=function(e){var t=e.outputBuffer.getChannelData(0),a=e.outputBuffer.getChannelData(1),o=t.length;n.buffer.size()<2*o&&n.onBufferUnderrun&&n.onBufferUnderrun(n.buffer.size(),2*o);try{var r=n.buffer.deqN(2*o)}catch(e){var s=n.buffer.size()/2;s>0&&console.log("Buffer underrun (needed ".concat(o,", got ").concat(s,")"));for(var i=0;i<o;i++)t[i]=0,a[i]=0;return}for(var l=0;l<o;l++)t[l]=r[2*l],a[l]=r[2*l+1]},this.onBufferUnderrun=a,this.bufferSize=8192,this.buffer=new W.a(2*this.bufferSize)}return Object(u.a)(e,[{key:"start",value:function(){window.AudioContext&&(this.audioCtx=new window.AudioContext,this.scriptNode=this.audioCtx.createScriptProcessor(1024,0,2),this.scriptNode.onaudioprocess=this.onaudioprocess,this.scriptNode.connect(this.audioCtx.destination))}},{key:"stop",value:function(){this.scriptNode&&(this.scriptNode.disconnect(this.audioCtx.destination),this.scriptNode.onaudioprocess=null,this.scriptNode=null),this.audioCtx&&(this.audioCtx.close().catch(Y),this.audioCtx=null)}}]),e}(),X=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).start=function(){n.frameTimer.start(),n.speakers.start(),n.fpsInterval=setInterval(function(){console.log("FPS: ".concat(n.nes.getFPS()))},1e3)},n.stop=function(){n.frameTimer.stop(),n.speakers.stop(),clearInterval(n.fpsInterval)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(z,{ref:function(t){e.screen=t},onGenerateFrame:function(){e.nes.frame()},onMouseDown:function(t,n){e.nes.zapperMove(t,n),e.nes.zapperFireDown()},onMouseUp:function(){e.nes.zapperFireUp()}})}},{key:"componentDidMount",value:function(){var e=this;this.fitInParent(),this.speakers=new H({onBufferUnderrun:function(t,n){e.props.paused||(console.log("Buffer underrun, running another frame to try and catch up"),e.nes.frame(),e.speakers.buffer.size()<n&&(console.log("Still buffer underrun, running a second frame"),e.nes.frame()))}}),this.nes=new F.NES({onFrame:this.screen.setBuffer,onStatusUpdate:console.log,onAudioSample:this.speakers.writeSample}),window.nes=this.nes,this.frameTimer=new A({onGenerateFrame:o.a.wrap(this.nes.frame),onWriteFrame:o.a.wrap(this.screen.writeBuffer)}),this.gamepadController=new L({onButtonDown:this.nes.buttonDown,onButtonUp:this.nes.buttonUp}),this.gamepadController.loadGamepadConfig(),this.gamepadPolling=this.gamepadController.startPolling(),this.keyboardController=new M({onButtonDown:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonDown),onButtonUp:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonUp)}),this.keyboardController.loadKeys(),document.addEventListener("keydown",this.keyboardController.handleKeyDown),document.addEventListener("keyup",this.keyboardController.handleKeyUp),document.addEventListener("keypress",this.keyboardController.handleKeyPress),this.nes.loadROM(this.props.romData),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),document.removeEventListener("keydown",this.keyboardController.handleKeyDown),document.removeEventListener("keyup",this.keyboardController.handleKeyUp),document.removeEventListener("keypress",this.keyboardController.handleKeyPress),this.gamepadPolling.stop(),window.nes=void 0}},{key:"componentDidUpdate",value:function(e){this.props.paused!==e.paused&&(this.props.paused?this.stop():this.start())}},{key:"fitInParent",value:function(){this.screen.fitInParent()}}]),t}(r.Component);n(70);var V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).load=function(){if(n.props.match.params.slug){var e=n.props.match.params.slug,t=/^local-/.test(e),a=e.split("-")[1],o=t?C.getRomInfoByHash(a):v.ROMS[e];if(!o)return void n.setState({error:"No such ROM: ".concat(e)});if(t){n.setState({romName:o.name});var r=localStorage.getItem("blob-"+a);n.handleLoaded(r)}else n.setState({romName:o.description}),n.currentRequest=function(e,t,n){var a=new XMLHttpRequest;return a.open("GET",e),a.overrideMimeType("text/plain; charset=x-user-defined"),a.onload=function(){if(200===this.status){if(a.responseText.match(/^<!doctype html>/i))return t(new Error("Page not found"));t(null,this.responseText)}else 0===this.status||t(new Error(a.statusText))},a.onerror=function(){t(new Error(a.statusText))},a.onprogress=n,a.send(),a}(o.url,function(e,t){e?n.setState({error:"Error loading ROM: ".concat(e.message)}):n.handleLoaded(t)},n.handleProgress)}else if(n.props.location.state&&n.props.location.state.file){var s=new FileReader;s.readAsBinaryString(n.props.location.state.file),s.onload=function(e){n.currentRequest=null,n.handleLoaded(s.result)}}else n.setState({error:"No ROM provided"})},n.handleProgress=function(e){e.lengthComputable&&n.setState({loadedPercent:e.loaded/e.total*100})},n.handleLoaded=function(e){n.setState({running:!0,loading:!1,romData:e})},n.handlePauseResume=function(){n.setState({paused:!n.state.paused})},n.layout=function(){var e=parseFloat(window.getComputedStyle(n.navbar).height);n.screenContainer.style.height="".concat(window.innerHeight-e,"px"),n.emulator&&n.emulator.fitInParent()},n.toggleControlsModal=function(){n.setState({controlsModalOpen:!n.state.controlsModalOpen})},n.state={romName:null,romData:null,running:!1,paused:!1,controlsModalOpen:!1,loading:!0,loadedPercent:3,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"RunPage"},s.a.createElement("nav",{className:"navbar navbar-expand",ref:function(t){e.navbar=t}},s.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},s.a.createElement("li",{className:"navitem"},s.a.createElement(y.a,{to:"/",className:"nav-link"},"\u2039 Back"))),s.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},s.a.createElement("li",{className:"navitem"},s.a.createElement("span",{className:"navbar-text mr-3"},this.state.romName))),s.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},s.a.createElement("li",{className:"navitem"},s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.toggleControlsModal,className:"mr-3"},"Controls"),s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.handlePauseResume,disabled:!this.state.running},this.state.paused?"Resume":"Pause")))),this.state.error?this.state.error:s.a.createElement("div",{className:"screen-container",ref:function(t){e.screenContainer=t}},this.state.loading?s.a.createElement(O.a,{value:this.state.loadedPercent,style:{position:"absolute",width:"70%",left:"15%",top:"48%"}}):this.state.romData?s.a.createElement(X,{romData:this.state.romData,paused:this.state.paused,ref:function(t){e.emulator=t}}):null,this.state.controlsModalOpen&&s.a.createElement(R,{isOpen:this.state.controlsModalOpen,toggle:this.toggleControlsModal,keys:this.emulator.keyboardController.keys,setKeys:this.emulator.keyboardController.setKeys,promptButton:this.emulator.gamepadController.promptButton,gamepadConfig:this.emulator.gamepadController.gamepadConfig,setGamepadConfig:this.emulator.gamepadController.setGamepadConfig})))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.layout),this.layout(),this.load()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.layout),this.currentRequest&&this.currentRequest.abort()}}]),t}(r.Component),Z=(n(71),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).recordPageview=function(e){var t=e.location;return h.a.pageview(t.pathname),null},n.state={error:null},v.GOOGLE_ANALYTICS_CODE&&h.a.initialize(v.GOOGLE_ANALYTICS_CODE),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.error?s.a.createElement("div",{className:"container my-4"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8"},"Oops - there has been an error. It has been logged to the console."))):s.a.createElement(f.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(g.a,{exact:!0,path:"/",component:k}),s.a.createElement(g.a,{exact:!0,path:"/run",component:V}),s.a.createElement(g.a,{exact:!0,path:"/run/:slug",component:V}),s.a.createElement(g.a,{path:"/",render:this.recordPageview})))}},{key:"componentDidCatch",value:function(e,t){this.setState({error:e}),Y(e,t)}}]),t}(r.Component));n(73);v.SENTRY_URI&&o.a.config(v.SENTRY_URI).install(),o.a.context(function(){l.a.render(s.a.createElement(Z,null),document.getElementById("root"))})}},[[43,1,2]]]);
//# sourceMappingURL=main.e7c2cb55.chunk.js.map