"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8255],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?t.createElement(h,s(s({ref:n},p),{},{components:r})):t.createElement(h,s({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8233:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={"\u6982\u8ff0":"\u7528Go\u5728whisper\u4e2d\u76d1\u542c/\u8ba2\u9605\u6d88\u606f\u7684\u6559\u7a0b\u3002"},c="\u76d1\u542c/\u8ba2\u9605Whisper\u6d88\u606f",l={unversionedId:"zh/whisper-subscribe/README",id:"zh/whisper-subscribe/README",title:"\u76d1\u542c/\u8ba2\u9605Whisper\u6d88\u606f",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba2\u9605websockets\u4e0a\u7684Whisper\u6d88\u606f\u3002 \u6211\u4eec\u9996\u5148\u9700\u8981\u7684\u662f\u4e00\u4e2a\u901a\u9053\uff0c\u5b83\u5c06\u4ecewhisper/whisperv6\u5305\u4e2d\u7684Message\u7c7b\u578b\u63a5\u6536Whispe\u6d88\u606f\u3002",source:"@site/docs/zh/whisper-subscribe/README.md",sourceDirName:"zh/whisper-subscribe",slug:"/zh/whisper-subscribe/",permalink:"/ethereum-development-with-go-book/docs/zh/whisper-subscribe/",editUrl:"https://github.com/mhxw/ethereum-development-with-go-book/tree/dev/docs/zh/whisper-subscribe/README.md",tags:[],version:"current",frontMatter:{"\u6982\u8ff0":"\u7528Go\u5728whisper\u4e2d\u76d1\u542c/\u8ba2\u9605\u6d88\u606f\u7684\u6559\u7a0b\u3002"},sidebar:"zh",previous:{title:"\u5728Whisper\u4e0a\u53d1\u9001\u6d88\u606f",permalink:"/ethereum-development-with-go-book/docs/zh/whisper-send/"},next:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/ethereum-development-with-go-book/docs/zh/util/"}},p={},u=[{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:3}],m={toc:u};function f(e){var n=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u76d1\u542c\u8ba2\u9605whisper\u6d88\u606f"},"\u76d1\u542c/\u8ba2\u9605Whisper\u6d88\u606f"),(0,i.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba2\u9605websockets\u4e0a\u7684Whisper\u6d88\u606f\u3002 \u6211\u4eec\u9996\u5148\u9700\u8981\u7684\u662f\u4e00\u4e2a\u901a\u9053\uff0c\u5b83\u5c06\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"whisper/whisperv6"),"\u5305\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Message"),"\u7c7b\u578b\u63a5\u6536Whispe\u6d88\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"messages := make(chan *whisperv6.Message)\n")),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u8c03\u7528\u8ba2\u9605\u4e4b\u524d\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u786e\u5b9a\u6d88\u606f\u7684\u8fc7\u6ee4\u6807\u51c6\u3002 \u4ecewhisperv6\u5305\u4e2d\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Criteria"),"\u5bf9\u8c61\u3002 \u7531\u4e8e\u6211\u4eec\u53ea\u5bf9\u5b9a\u4f4d\u5230\u6211\u4eec\u7684\u6d88\u606f\u611f\u5174\u8da3\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u6761\u4ef6\u5bf9\u8c61\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"PrivateKeyID"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u6211\u4eec\u7528\u4e8e\u52a0\u5bc6\u6d88\u606f\u7684\u76f8\u540c\u5bc6\u94a5ID\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"criteria := whisperv6.Criteria{\n  PrivateKeyID: keyID,\n}\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8c03\u7528\u5ba2\u6237\u7aef\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SubscribeMessages"),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8ba2\u9605\u7b26\u5408\u7ed9\u5b9a\u6761\u4ef6\u7684\u6d88\u606f\u3002 HTTP\u4e0d\u652f\u6301\u6b64\u65b9\u6cd5; \u4ec5\u652f\u6301\u53cc\u5411\u8fde\u63a5\uff0c\u4f8b\u5982websockets\u548cIPC\u3002 \u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u6211\u4eec\u4e4b\u524d\u521b\u5efa\u7684\u6d88\u606f\u901a\u9053\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"sub, err := client.SubscribeMessages(context.Background(), criteria, messages)\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u8ba2\u9605\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u8bed\u53e5\u6765\u8bfb\u53d6\u6d88\u606f\uff0c\u5e76\u5904\u7406\u8ba2\u9605\u4e2d\u7684\u9519\u8bef\u3002 \u5982\u679c\u60a8\u4ece\u4e0a\u4e00\u8282\u56de\u5fc6\u8d77\u6765\uff0c\u6d88\u606f\u5185\u5bb9\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Payload"),"\u5c5e\u6027\u4e2d\u4f5c\u4e3a\u5b57\u8282\u5207\u7247\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u8f6c\u6362\u56de\u4eba\u7c7b\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'for {\n  select {\n  case err := <-sub.Err():\n    log.Fatal(err)\n  case message := <-messages:\n    fmt.Printf(string(message.Payload)) // "Hello"\n  }\n}\n')),(0,i.kt)("p",null,"\u67e5\u770b\u4e0b\u9762\u7684\u5b8c\u6574\u4ee3\u7801\uff0c\u83b7\u53d6\u5b8c\u6574\u7684\u6817\u5b50\u3002 \u8fd9\u5c31\u662f\u6d88\u606f\u8ba2\u9605\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,i.kt)("p",null,"Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"geth --shh --rpc --ws\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mhxw/ethereum-development-with-go-book/blob/main/code/whisper_subscribe.go"},"whisper_subscribe.go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "os"\n    "runtime"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/whisper/shhclient"\n    "github.com/ethereum/go-ethereum/whisper/whisperv6"\n)\n\nfunc main() {\n    client, err := shhclient.Dial("ws://127.0.0.1:8546")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    keyID, err := client.NewKeyPair(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(keyID) // 0ec5cfe4e215239756054992dbc2e10f011db1cdfc88b9ba6301e2f9ea1b58d2\n\n    messages := make(chan *whisperv6.Message)\n    criteria := whisperv6.Criteria{\n        PrivateKeyID: keyID,\n    }\n    sub, err := client.SubscribeMessages(context.Background(), criteria, messages)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    go func() {\n        for {\n            select {\n            case err := <-sub.Err():\n                log.Fatal(err)\n            case message := <-messages:\n                fmt.Printf(string(message.Payload)) // "Hello"\n                os.Exit(0)\n            }\n        }\n    }()\n\n    publicKey, err := client.PublicKey(context.Background(), keyID)\n    if err != nil {\n        log.Print(err)\n    }\n    fmt.Println(hexutil.Encode(publicKey)) // 0x04f17356fd52b0d13e5ede84f998d26276f1fc9d08d9e73dcac6ded5f3553405db38c2f257c956f32a0c1fca4c3ff6a38a2c277c1751e59a574aecae26d3bf5d1d\n\n    message := whisperv6.NewMessage{\n        Payload:   []byte("Hello"),\n        PublicKey: publicKey,\n        TTL:       60,\n        PowTime:   2,\n        PowTarget: 2.5,\n    }\n\n    messageHash, err := client.Post(context.Background(), message)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(messageHash) // 0xdbfc815d3d122a90d7fb44d1fc6a46f3d76ec752f3f3d04230fe5f1b97d2209a\n\n    runtime.Goexit() // wait for goroutines to finish\n}\n')))}f.isMDXComponent=!0}}]);