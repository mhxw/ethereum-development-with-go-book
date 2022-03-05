"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1920],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=o,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},226:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return b}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={description:"Tutorial on how to subscribe to latest blocks in Ethereum with Go."},i="Subscribing to New Blocks",s={unversionedId:"en/block-subscribe/README",id:"en/block-subscribe/README",title:"Subscribing to New Blocks",description:"Tutorial on how to subscribe to latest blocks in Ethereum with Go.",source:"@site/docs/en/block-subscribe/README.md",sourceDirName:"en/block-subscribe",slug:"/en/block-subscribe/",permalink:"/ethereum-development-with-go-book/docs/en/block-subscribe/",editUrl:"https://github.com/mhxw/ethereum-development-with-go-book/tree/dev/docs/en/block-subscribe/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to subscribe to latest blocks in Ethereum with Go."},sidebar:"en",previous:{title:"Transferring Tokens (ERC-20)",permalink:"/ethereum-development-with-go-book/docs/en/transfer-tokens/"},next:{title:"Create Raw Transaction",permalink:"/ethereum-development-with-go-book/docs/en/transaction-raw-create/"}},u={},b=[{value:"Full code",id:"full-code",level:3}],d={toc:b};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subscribing-to-new-blocks"},"Subscribing to New Blocks"),(0,a.kt)("p",null,"In this section we'll go over how to set up a subscription to get events when there is a new block mined. First thing is we need an Ethereum provider that supports RPC over websockets. In this example we'll use the infura websocket endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := ethclient.Dial("wss://ropsten.infura.io/ws")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,a.kt)("p",null,"Next we'll create a new channel that will be receiving the latest block headers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"headers := make(chan *types.Header)\n")),(0,a.kt)("p",null,"Now we call the client's ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscribeNewHead")," method which takes in the headers channel we just created, which will return a subscription object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"sub, err := client.SubscribeNewHead(context.Background(), headers)\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,a.kt)("p",null,"The subscription will push new block headers to our channel so we'll use a select statement to listen for new messages. The subscription object also contains an error channel that will send a message in case of a failure with the subscription."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"for {\n  select {\n  case err := <-sub.Err():\n    log.Fatal(err)\n  case header := <-headers:\n    fmt.Println(header.Hash().Hex()) // 0xbc10defa8dda384c96a17640d84de5578804945d347072e091b4e5f390ddea7f\n  }\n}\n")),(0,a.kt)("p",null,"To get the full contents of the block, we can pass the block header hash to the client's ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockByHash")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"block, err := client.BlockByHash(context.Background(), header.Hash())\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(block.Hash().Hex())        // 0xbc10defa8dda384c96a17640d84de5578804945d347072e091b4e5f390ddea7f\nfmt.Println(block.Number().Uint64())   // 3477413\nfmt.Println(block.Time())              // 1529525947\nfmt.Println(block.Nonce())             // 130524141876765836\nfmt.Println(len(block.Transactions())) // 7\n")),(0,a.kt)("p",null,"As you can see, you can read the entire block's metadata fields, list of transactions, and much more."),(0,a.kt)("h3",{id:"full-code"},"Full code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhxw/ethereum-development-with-go-book/blob/main/code/block_subscribe.go"},"block_subscribe.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/ethclient"\n)\n\nfunc main() {\n    client, err := ethclient.Dial("wss://ropsten.infura.io/ws")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    headers := make(chan *types.Header)\n    sub, err := client.SubscribeNewHead(context.Background(), headers)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    for {\n        select {\n        case err := <-sub.Err():\n            log.Fatal(err)\n        case header := <-headers:\n            fmt.Println(header.Hash().Hex()) // 0xbc10defa8dda384c96a17640d84de5578804945d347072e091b4e5f390ddea7f\n\n            block, err := client.BlockByHash(context.Background(), header.Hash())\n            if err != nil {\n                log.Fatal(err)\n            }\n\n            fmt.Println(block.Hash().Hex())        // 0xbc10defa8dda384c96a17640d84de5578804945d347072e091b4e5f390ddea7f\n            fmt.Println(block.Number().Uint64())   // 3477413\n            fmt.Println(block.Time())              // 1529525947\n            fmt.Println(block.Nonce())             // 130524141876765836\n            fmt.Println(len(block.Transactions())) // 7\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);