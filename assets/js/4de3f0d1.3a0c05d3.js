"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4753],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={description:"Tutorial on how to write to a smart contract with Go."},l="Writing to a Smart Contract",s={unversionedId:"en/smart-contract-write/README",id:"en/smart-contract-write/README",title:"Writing to a Smart Contract",description:"Tutorial on how to write to a smart contract with Go.",source:"@site/docs/en/smart-contract-write/README.md",sourceDirName:"en/smart-contract-write",slug:"/en/smart-contract-write/",permalink:"/ethereum-development-with-go-book/docs/en/smart-contract-write/",editUrl:"https://github.com/mhxw/ethereum-development-with-go-book/tree/dev/docs/en/smart-contract-write/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to write to a smart contract with Go."},sidebar:"en",previous:{title:"Querying a Smart Contract",permalink:"/ethereum-development-with-go-book/docs/en/smart-contract-read/"},next:{title:"Reading Smart Contract Bytecode",permalink:"/ethereum-development-with-go-book/docs/en/smart-contract-bytecode/"}},u={},p=[{value:"Full code",id:"full-code",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-to-a-smart-contract"},"Writing to a Smart Contract"),(0,o.kt)("p",null,"These section requires knowledge of how to compile a smart contract's ABI to a Go contract file. If you haven't already gone through it, please ",(0,o.kt)("a",{parentName:"p",href:"../smart-contract-compile"},"read the section")," first."),(0,o.kt)("p",null,"Writing to a smart contract requires us to sign the sign transaction with our private key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\nif err != nil {\n  log.Fatal(err)\n}\n\npublicKey := privateKey.Public()\npublicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)\nif !ok {\n  log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")\n}\n\nfromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)\n')),(0,o.kt)("p",null,"We'll also need to figure the nonce and gas price."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"nonce, err := client.PendingNonceAt(context.Background(), fromAddress)\nif err != nil {\n  log.Fatal(err)\n}\n\ngasPrice, err := client.SuggestGasPrice(context.Background())\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,o.kt)("p",null,"Next we create a new keyed transactor which takes in the private key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"auth := bind.NewKeyedTransactor(privateKey)\n")),(0,o.kt)("p",null,"Then we need to set the standard transaction options attached to the keyed transactor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"auth.Nonce = big.NewInt(int64(nonce))\nauth.Value = big.NewInt(0)     // in wei\nauth.GasLimit = uint64(300000) // in units\nauth.GasPrice = gasPrice\n")),(0,o.kt)("p",null,"Now we load an instance of the smart contract. If you recall in the ",(0,o.kt)("a",{parentName:"p",href:"../smart-contract-compile"},"previous sections")," we create a contract called ",(0,o.kt)("em",{parentName:"p"},"Store")," and generated a Go package file using the ",(0,o.kt)("inlineCode",{parentName:"p"},"abigen")," tool. To initialize it we just invoke the ",(0,o.kt)("em",{parentName:"p"},"New")," method of the contract package and give the smart contract address and the ethclient, which returns a contract instance that we can use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'address := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\ninstance, err := store.NewStore(address, client)\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,o.kt)("p",null,"The smart contract that we created has an external method called ",(0,o.kt)("em",{parentName:"p"},"SetItem")," which takes in two arguments (key, value) in the from of solidity ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes32"),". This means that the Go contract package requires us to pass a byte array of length 32 bytes. Invoking the ",(0,o.kt)("em",{parentName:"p"},"SetItem")," method requires us to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," object we created earlier. Behind the scenes this method will encode this function call with it's arguments, set it as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property of the transaction, and sign it with the private key. The result will be a signed transaction object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'key := [32]byte{}\nvalue := [32]byte{}\ncopy(key[:], []byte("foo"))\ncopy(value[:], []byte("bar"))\n\ntx, err := instance.SetItem(auth, key, value)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Printf("tx sent: %s\\n", tx.Hash().Hex()) // tx sent: 0x8d490e535678e9a24360e955d75b27ad307bdfb97a1dca51d0f3035dcee3e870\n')),(0,o.kt)("p",null,"We can see now that the transaction has been successfully sent on the network: ",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/tx/0x8d490e535678e9a24360e955d75b27ad307bdfb97a1dca51d0f3035dcee3e870"},"https://rinkeby.etherscan.io/tx/0x8d490e535678e9a24360e955d75b27ad307bdfb97a1dca51d0f3035dcee3e870")),(0,o.kt)("p",null,"To verify that the key/value was set, we read the smart contract mapping value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'result, err := instance.Items(nil, key)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(string(result[:])) // "bar"\n')),(0,o.kt)("p",null,"There you have it."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("p",null,"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solc --abi Store.sol\nsolc --bin Store.sol\nabigen --bin=Store_sol_Store.bin --abi=Store_sol_Store.abi --pkg=store --out=Store.go\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/ethereum-development-with-go-book/blob/main/code/contracts/Store.sol"},"Store.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.4.24;\n\ncontract Store {\n  event ItemSet(bytes32 key, bytes32 value);\n\n  string public version;\n  mapping (bytes32 => bytes32) public items;\n\n  constructor(string _version) public {\n    version = _version;\n  }\n\n  function setItem(bytes32 key, bytes32 value) external {\n    items[key] = value;\n    emit ItemSet(key, value);\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/ethereum-development-with-go-book/blob/main/code/contract_write.go"},"contract_write.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum/accounts/abi/bind"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/ethclient"\n\n    store "./contracts" // for demo\n)\n\nfunc main() {\n    client, err := ethclient.Dial("https://rinkeby.infura.io")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    publicKey := privateKey.Public()\n    publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)\n    if !ok {\n        log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")\n    }\n\n    fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)\n    nonce, err := client.PendingNonceAt(context.Background(), fromAddress)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    gasPrice, err := client.SuggestGasPrice(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    auth := bind.NewKeyedTransactor(privateKey)\n    auth.Nonce = big.NewInt(int64(nonce))\n    auth.Value = big.NewInt(0)     // in wei\n    auth.GasLimit = uint64(300000) // in units\n    auth.GasPrice = gasPrice\n\n    address := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\n    instance, err := store.NewStore(address, client)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    key := [32]byte{}\n    value := [32]byte{}\n    copy(key[:], []byte("foo"))\n    copy(value[:], []byte("bar"))\n\n    tx, err := instance.SetItem(auth, key, value)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Printf("tx sent: %s", tx.Hash().Hex()) // tx sent: 0x8d490e535678e9a24360e955d75b27ad307bdfb97a1dca51d0f3035dcee3e870\n\n    result, err := instance.Items(nil, key)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(string(result[:])) // "bar"\n}\n')),(0,o.kt)("p",null,"solc version used for these examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.24+commit.e67f0147.Emscripten.clang\n")))}m.isMDXComponent=!0}}]);