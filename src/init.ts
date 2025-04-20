//import './assets/main.css'
import '@wikimedia/codex/dist/codex.style.css'
import './assets/local.css'

// use ResizeObserver to detect change of height and postMessage to parent

const observer = new ResizeObserver(() => {
    const id = new URLSearchParams(window.location.hash.substring(2)).get('id')
    window.parent.postMessage(
      {
        type: 'mcdfTool-height-change',
        data: { height: document.body.scrollHeight + 10, id },
      },
      '*',
    )
  })
  
  for (const child of document.body.children) {
    observer.observe(child)
  }
  
  window.addEventListener('message', (event) => {
    if (event.data.type === 'mcdfTool-theme-change') {
      //const { theme } = event.data.data
      //const { classList } = document.body
  
      //if (theme === 'dark') {
        //classList.add('dark')
        //themeRef.value = 'dark'
      //} else {
        //classList.remove('dark')
        //themeRef.value = 'light'
      //}
    }
  })