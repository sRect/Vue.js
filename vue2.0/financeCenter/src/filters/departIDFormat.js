export const departIDFilter = (data) => {
    switch(Number.parseInt(data)){
        case 48:
            return '上海易好房网络科技有限公司';
            break;
        default:
            return '上海轩天实业有限公司';
            break;
    }
}
