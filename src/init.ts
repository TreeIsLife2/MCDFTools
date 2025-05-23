import { postMessageParent } from './utils/iframe'
import { theme as themeRef } from './utils/theme'
import './base.less'

function sendHeightChange() {
  return () => {
    postMessageParent('tool-height-change', { height: document.body.scrollHeight + 10 })
  }
}

// use ResizeObserver to detect change of height and postMessage to parent
const observer = new ResizeObserver(sendHeightChange())

// listen to fullscreen
document.addEventListener('fullscreenchange', sendHeightChange)

for (const child of document.body.children) {
  observer.observe(child)
}

window.addEventListener('message', (event) => {
  if (event.data.type === 'tool-theme-change') {
    const { theme } = event.data.data
    const { classList } = document.body

    if (theme === 'dark') {
      classList.add('dark')
      themeRef.value = 'dark'
    } else {
      classList.remove('dark')
      themeRef.value = 'light'
    }
  } else if (event.data.type === 'tool-styles') {
    const { styles } = event.data.data
    const styleEl = document.createElement('style')
    styleEl.innerHTML = styles
    document.head.appendChild(styleEl)
  }
})

postMessageParent('tool-init-request-styles', {
  type: new URL(window.location.href).pathname.split('/').slice(-2, -1)[0],
})

const locale =
  new URLSearchParams(window.location.hash.substring(2)).get('locale') ??
  window.navigator.language.split('-')[0]
document.body.lang = locale
