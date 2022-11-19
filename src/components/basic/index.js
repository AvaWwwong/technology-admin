const cpns = require.context('./', true, /\.js$/)

export default (Vue) => {
    cpns.keys().map(cpn => {
        let component = cpns(cpn)
        let cpnames = Object.keys(component)
        cpnames.map(item => {
            Vue.component(item, component[item])
        })
    })
}
