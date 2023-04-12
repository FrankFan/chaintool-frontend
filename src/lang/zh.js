export default {
    pubilc: {
        usingHelp: "使用帮助",
        copySauccessfully: "复制成功",
        copyFailed: "复制失败",
        noData: "暂无数据",
        cancel: "取 消",
        sure: "确 定",
        copy: "复制",
        querying: "正在查询",
        btnInquire: "查询",
    },
    title: {
        home: "区块链开发者的工具箱",
        unitConvert: "Ether单位换算",
        bulkQuery: "批量查询钱包余额",
        traceview: "交易分析工具",
        abi: "ABI 图形化",
        address: "地址转换与ENS查询",
        generateWallet: "批量生成EVM钱包",
        querySelector: "函数名查询函数选择器",
        topicID: "查询事件主题(TopicID)",
        hashTool: "Hash工具",
        calldata: "交易输入数据(Calldata)编解码",
        faucet: "测试币水龙头"
    },
    navigation: {
        connectWallet: "连接钱包",
        nav: {
            home: "首页",
            languageSelection: "语言选择",
            folloUs: "关注我们",
        }
    },
    home: {
        title: ["开源", "工具箱", "让区块链开发更轻松"],
        describe: "开源才值得信赖，好用才提高效率，你所需的工具尽在于此。",
        btnFeedback: "问题反馈",
        subheadingToolList: "工具列表",
        listDescribe: "免费效率工具，快上手试试吧",
        toolList: [
            {
                title: '单位换算',
                detail: 'ETH 单位换算',
            },
            {
                title: '批量查询',
                detail: '批量查询钱包余额',
            },
            {
                title: '交易分析',
                detail: '解析 EVM 交易内部详情',
            },
            {
                title: 'ABI 可视化调用',
                detail: '根据 ABI 自动生成可调用函数',
            },
            {
                title: '地址转换与ENS查询',
                detail: '地址查询转换与ENS查询',
            },
            {
                title: '生成 EVM 钱包',
                detail: '批量生成 EVM 钱包',
            },
            {
                title: '签名选择器查询',
                detail: '根据函数签名查询 4 字节函数选择器',
            },
            {
                title: '事件签名查询主题(TopicID)',
                detail: '根据事件签名查询主题TopicID及反向查询',
            },
            {
                title: 'Hash 工具',
                detail: '常用 Hash 工具，如keccak-256、base64 等计算',
            },
            {
                title: '交易输入数据编解码',
                detail: '编码及解码交易输入数据（Input Calldata）',
            },
            {
                title: '测试币水龙头大全',
                detail: '测试网水龙头测试币获取',
            },
        ],
    },
    uintConvert: {
        title: "以太 ETH 单位转换器",
        describe: "以太币的最小单位是Wei，1个ETH等于10的18次方Wei。在支付Gas费时大家习惯使用Gwei作为展示单位，日常使用的单位是ETH、Gwei 和 Wei；",
        illustrate: ["以太坊 Ethereum 和以太币 Ether 的区别：", "以太坊 Ethereum 是一个允许任何人在其上创建和使用分布式应用的开放的区块链平台。", "以太币 Ether 是以太坊 Ethereum 中通用的货币，它主要用于支付转账及执行智能合约所消耗的汽油(Gas)，在交易中以太币被缩写为ETH。"],
    },
    bulkQuery: {
        enterAddress: "代币地址",
        enterAddressPrompt: "默认 ETH 地址",
        enterWalletAddress: "钱包地址",
        enterWalletAddressPrompt: "一行输入一个地址",
        inquireResult: "查询结果",
        list: ["钱包地址", "代币", "余额"],
        bntCheckBalance: "查询余额",
        btnExportExcel: "下载 Excel",
        exportExcelPrompt: "你当前还没有查询余额，请查询余额后再进行下载表格",
        checkBalancePrompt: ["你还没有输入钱包地址，请输入钱包地址后重试", "你输入代币地址错误，请重新输入后重试"],
    },
    traceView: {
        title: "交易堆栈 Trace 分析工具",
        transactionHash: "交易哈希",
        inputTransactionHash: "输入交易哈希",
        btnAnalyze: "分析",
        options: "高级选项",
        inputAddressMap: "请填入Address 别名",
        inputFunctionMap: "请填入函数别名",
        example: "例",
        AddressMap: "地址映射",
        FunctionMap: "功能映射",
        CallTraces: "CallTraces",
        prompt: ["请输入正确的交易 Hash 值", "请输入交易hash值后重试"],
        analyzing: "全力分析中...",
        parsingFailed: ["解析失败，请稍后再试", "解析失败"]
    },
    abi: {
        title: "ABI 可视化调用",
        btnAddContract: "添加合约",
        btnShare: "分享",
        sharePrompt: "链接分享给好友，将自动加载合约",
        btnABI: "查看ABI",
        ABIPrompt: "点击可查看ABI,还可以复制ABI",
        btnEtherscan: "查看Etherscan",
        EtherscanPrompt: "点击可跳转到对应区块链浏览器",
        btnEdit: "编辑",
        editPrompt: "可修改合约的名称、网络、地址、ABI",
        btnDelect: "删除",
        delectPrompt: "点击可删除合约",
        contractName: "合约名称",
        blockchainAddress: "区块链",
        contractAddress: "合约地址",
        callFunctions: "调用函数：",
        inputValue: "请输入 Value",
        pleaseChoose: "请选择",
        clearOutput: "清空输出",
        run: "运行",
        transactionDetails: "交易详情：",
        returnContent: "返回内容：",
        contract: "合约",
        commonABIs: "常见 ABI",
        blockchainNetwork: "区块链网络",
        selectNetwork: "请选择要连接的网络",
        chooseCommonABI: "从常见 ABI 选择",
        uploadABIFile: "上传 ABI 文件",
        etherscanGet: "从 Etherscan 获取",
        lookOverABI: "查看 ABI",
        jsonABI: "JSON ABI",
        readableABI: "可读友好的 ABI",
        inputPrompt: "请输入内容",
        quit: "关 闭",
        validateName: "请输入合约名称",
        sameName: "已有相同名称合约存在",
        validateAddress: "请输入正确的合约地址",
        checkAbi: "请输入 ABI",
        checkNetwork: "请选择区块链网络",
        autoAddError: '自动添加合约失败',
        doesNotSupportSharing: "当前合约暂不支持分享",
        copyShareSuccess: "复制分享链接成功",
        examineAddressAndNetwork: "请输如合约地址和网络后重试",
        getABIeroor: "ABI获取失败",
        useCurrentNetwork: "使用当前连接网络",
        checkAbiError: "ABI有误!添加失败,请检查后重试",
        notSelectedContractPrompt: "当前暂未选择合约",
        contractNotRecorded: "该合约Etherscan暂未被记录",
        deniedAccess: "用户拒绝帐户访问",
        notInstalledMetaMaskPrompt: "需要安装MetaMask",
        abiError: "ABI有误",
        switchNetworkPrompt: "当前钱包连接的链与本合约连接的链不同。将为你切换到对应网络",
        currentNetworkError: "当前网络错误",
        connectionRequestError: "连接请求错误，请尝试手动连接。连接后刷新页面重试。",
    },
    address: {
        address: "地址",
        btnConvert: "确认转换",
        btnInquire: "确认查询",
        inputENS: "输入ENS",
        errorAddressPrompt: "您输入的地址不合法，请重新输入。",
        errorENSPrompt: "没有查询到对应的ENS,也没有查询到对应的地址。"
    },
    generateWallet: {
        tips: ["Tips:钱包生成过程均在本地完成，代码完全", "开源", "。任何人都无法获取到您的助记词及私钥，请放心使用。"],
        randomBatch: "随机批量生成",
        customize: "自定义私钥或助记词创建",
        mnemonicLength: "选择助记词长度",
        quantity: "生成钱包的数量",
        btnGenerateImmediately: "立即生成",
        regenerate: "重新生成",
        exportexcel: "下载表格",
        walletsNumber: "输入生成钱包数量",
        subtitle: "通过私钥或助记词创建钱包",
        createNow: "立即创建",
        enterPrompt: "输入私钥或助记词",
        address: "地址",
        privateKey: "私钥",
        mnemonic: '助记词',
        nullErrorPrompt: "你没有选择助记词长度或没有填入生成钱包的地址数量",
        IllegalErrorPrompt: "你写入的生成钱包的地址数量非数字或小于1,无法生成,请重新输入",
        beyondErrorPrompt: "你写入的钱包数量大于100,无法生成。请输入不大于100的生成数量。",
        inputErrorPrompt: "创建失败，请检查你的输入"
    },
    querySelector: {
        title: "函数名 <=> 函数选择器",
        inputFunctionName: '通过函数名查询函数选择器',
        inputFunctionNamePrompt: "输入函数签名",
        inquire: "查询",
        inputByteFunctionSelector: "输入函数选择器查询函数签名",
        functionInputError: "你输入的函数有误，请重新输入!",
        noRecord: "你所查找的选择器暂未被记录",
        popoverBtnLookOver: "查看"
    },
    topicID: {
        title: "事件 <=> 主题(TopicID)",
        EventSignature: '根据事件名查询主题(TopicID)',
        inputEventSignature: "输入事件签名",
        TopicID: "根据TopicID查询事件名",
        InputTopicID: "输入主题ID",
        signatureInputError: "输入错误，输入示例：event Transfer(address indexed from, address indexed to, uint256 amount)",
        topicIDInputError: "暂未查询到对应的事件签名。输入示例：0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    hashTool: {
        title: "Hash 工具",
        btnConfirm: "确认",
        coding: "编码",
        decoding: "解码",
        errorHexadecimal: "你的输入不是16进制的字符，请重新输入",
        decodingError: "解码失败，请检查你的输入后重试",
        noInput: "你的输入为空，请重新输入"
    },
    calldata: {
        decoding: "解码",
        coding: "编码",
        inputFunction: "输入函数",
        inputFunctionPrompt: "请输入函数",
        parameter: "参数",
        inputParameterPrompt: "一行输入一个参数，数组类型参数输入格式:[0x2222,0x4444]",
        inputError: "你的输入有误，请检查后重试",
        inputCalldata: "输入Calldata",
        selectFunction: "选择函数",
        autoChoose: "自动选择",
        manualInput: "手动输入",
        decodingResult: "解码结果",
        parameter: "参数",
        parameterType: "参数类型",
        value: "值",
        queryFailed: "查询失败，请检查你的输入后重试",
    },
    faucet: {
        prompt: ["水龙头（Faucet）是一个平台，为你提供测试币（或 Token ），以便在测试智能合约时使用。", "ChainTool 水龙头为大家收集了常用测试网的水龙头网站，方便开发者们享用。", "如果你有我们没有列出的水龙头网站，欢迎提交", "PR", "或", "ISSUE", "帮我们改进，你的支持是我们无限的动力。"],
        currency: "货币",
        url: "网址",
        remark: "备注",
        operate: "操作",
        receive: "前往领取",
        copyUrl: "复制网址",
        copyURLSuccessfully: "复制网址成功",
    },
    notfind: {
        title: "未到找指定页面",
        return: "返回页面"
    },
    faucetData: {
        ethereum: "以太坊",
        testnet: "测试网",
        remarkGoerli: ["每天0.1 Goerli ETH", "需要通过挖矿获取", "可领取ETH、wETH、DAI、NFTs，要求登录Twitter", "在 2022 年11之前部署过合约的，可以领 10 个"],
        remarkSepolia: ["每天0.5 Sepolia ETH", "需要通过挖矿获取", "在 2022 年11之前部署过合约的，可以领 10 个"],
        remarkMumbai: ["每天0.5 Mumbai MATIC"],
        remarkHarmony: ["包含Shard 0、Shard 1、Shard 2、Shard 3"],
        remarkCelo: ["需要使用Github进行身份验证"]
    },
    connectWallet: {
        walleAccessDenied: "连接失败, MetaMask连接被拒绝。",
        notInstalledMetaMask: "连接失败, 请先安装MetaMask."
    }
}