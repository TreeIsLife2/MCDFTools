//import './assets/main.css'
import '@wikimedia/codex/dist/codex.style.css'
import './assets/local.css'

const env = import.meta.env.VITE_LOCAL

if (env == 'true') {
    let comparatorStrength = document.createElement('div')
    comparatorStrength.setAttribute('class', 'mcdfTool')
    comparatorStrength.setAttribute('data-type', 'comparatorStrength')
    
    let genericItemBlock = document.createElement('div')
    genericItemBlock.setAttribute('class', 'mcdfTool')
    genericItemBlock.setAttribute('data-type', 'genericItemBlock')

    const body = document.querySelector('body')
    body.appendChild(comparatorStrength)
    body.appendChild(genericItemBlock)

    import('./tools/comparatorStrength/main.js')
    import('./tools/genericItemblock/main.js')

    console.log('Imported')
} 
// this is on-wiki loading
else {
    const tools = document.querySelectorAll('.mcdfTool')
    tools.forEach((calc) => {
        const type = calc.getAttribute('data-type')
        if (!type) {
            console.error('No data-type attribute found on .mcdfTool', calc)
            return
        }

        mw.loader.load('ext.gadget.mcdfTool-' + type)
    })

    console.log('loaded2')
}
