import exceltoexportComponent from './ExceltoExport.vue'

const excel = {
    install: (Vue) => {
        Vue.component('Exceltoexport',exceltoexportComponent)
    }
}

export default excel