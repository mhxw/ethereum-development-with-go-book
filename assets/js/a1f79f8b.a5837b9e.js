"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2291],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,w=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(w,s(s({ref:t},l),{},{components:n})):r.createElement(w,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],u={description:"Tutorial on setting up swarm node."},c="Setting up Swarm",i={unversionedId:"en/swarm-setup/README",id:"en/swarm-setup/README",title:"Setting up Swarm",description:"Tutorial on setting up swarm node.",source:"@site/docs/en/swarm-setup/README.md",sourceDirName:"en/swarm-setup",slug:"/en/swarm-setup/",permalink:"/ethereum-development-with-go-book/docs/en/swarm-setup/",editUrl:"https://github.com/mhxw/ethereum-development-with-go-book/tree/dev/docs/en/swarm-setup/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on setting up swarm node."},sidebar:"en",previous:{title:"Swarm",permalink:"/ethereum-development-with-go-book/docs/en/swarm/"},next:{title:"Uploading Files to Swarm",permalink:"/ethereum-development-with-go-book/docs/en/swarm-upload/"}},l={},p=[{value:"Full code",id:"full-code",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-swarm"},"Setting up Swarm"),(0,o.kt)("p",null,"To run swarm you first need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"geth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bzzd")," which is the swarm daemon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go install github.com/ethereum/go-ethereum/cmd/geth\ngo install github.com/ethersphere/swarm/cmd/swarm\n")),(0,o.kt)("p",null,"Now we'll generate a new geth account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ geth account new\n\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassphrase:\nRepeat passphrase:\nAddress: {970ef9790b54425bea2c02e25cab01e48cf92573}\n")),(0,o.kt)("p",null,"Export the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"BZZKEY")," mapping to the geth account address we just generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export BZZKEY=970ef9790b54425bea2c02e25cab01e48cf92573\n")),(0,o.kt)("p",null,"And now run swarm with the specified account to be our swarm account. Swarm by default will run on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8500"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ swarm --bzzaccount $BZZKEY\nUnlocking swarm account 0x970EF9790B54425BEA2C02e25cAb01E48CF92573 [1/3]\nPassphrase:\nWARN [06-12|13:11:41] Starting Swarm service\n")),(0,o.kt)("p",null,"Now that we have the swarm daemon set up and running, let's learn how to upload files to swarm in the ",(0,o.kt)("a",{parentName:"p",href:"../swarm-upload"},"next section"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("p",null,"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/ethereum/go-ethereum/cmd/geth\ngo install github.com/ethersphere/swarm/cmd/swarm\ngeth account new\nexport BZZKEY=970ef9790b54425bea2c02e25cab01e48cf92573\nswarm --bzzaccount $BZZKEY\n")))}d.isMDXComponent=!0}}]);