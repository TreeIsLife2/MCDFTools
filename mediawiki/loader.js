mw.hook('wikipage.content').add(() => {
    const tools = document.querySelectorAll('div.mcdfTool')
    tools.forEach((tool) => {
      const type = tool.getAttribute('data-type')
      if (!type) {
        console.error('No data-type attribute found on .mcdfTool', tool)
        return
      }
  
      const iframe = document.createElement('iframe')
  
      // a random string to use as id
      const id = Math.random().toString(36).substring(7)
  
      iframe.id = `mcdfTool-${id}`
  
      const attributes = tool.attributes
      for (let i = 0; i < attributes.length; i++) {
        iframe.setAttribute(attributes[i].name, attributes[i].value)
      }
  
      // eslint-disable-next-line no-undef
      const url = `/tools/${type}/#?id=${id}&locale=${mw.config.get('wgPageContentLanguage')}&origin=${encodeURIComponent(window.location.origin)}`
  
      if (localStorage.getItem('mcwtoolLocal') === 'true') {
        console.log('You are in development environment and tools are loaded from localhost.')
        iframe.src = `http://localhost:5173${url}`
      } else {
        iframe.src = `https://tools.minecraft.wiki/static${url}`
      }
  
      // copy all children with .mcdfTool-parameter
      const parameters = tool.querySelectorAll('.mcdfTool-parameter')
      parameters.forEach((parameter) => {
        const iframeParameter = document.createElement('div')
        iframeParameter.className = 'mcdfTool-parameter'
        iframeParameter.innerHTML = parameter.innerHTML
        iframe.appendChild(iframeParameter)
      })
  
      tool.replaceWith(iframe)
  
      iframe.style.border = 'none'
      iframe.style.display = 'block'
      iframe.style.width = '100%'
      iframe.style.colorScheme = 'auto'
  
      const dataset = {}
      Object.entries(tool.dataset).forEach((entry) => {
        const key = entry[0]
        const value = entry[1]
        dataset[key] = value
      })
  
      iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage(
          {
            type: 'mcdfTool-theme-change',
            data: {
              theme: document.body.classList.contains('wgl-theme-light') ? 'light' : 'dark',
            },
          },
          new URL(iframe.src).origin
        )
  
        document.querySelector('#pt-dm-toggle > a').addEventListener('click', () => {
          iframe.contentWindow.postMessage(
            {
              type: 'mcdfTool-theme-change',
              data: {
                theme: document.body.classList.contains('wgl-theme-light') ? 'dark' : 'light',
              },
            },
            new URL(iframe.src).origin
          )
        })
      })
  
      window.addEventListener('message', (event) => {
        if (event.origin !== new URL(iframe.src).origin) return
        if (event.data.data.id !== id) return
  
        if (event.data.type === 'mcdfTool-init-request-data') {
          event.source.postMessage(
            {
              type: 'mcdfTool-init',
              data: {
                dataset,
                innerHTML: tool.innerHTML,
              },
            },
            new URL(iframe.src).origin
          )
        } else if (event.data.type === 'mcdfTool-height-change') {
          iframe.style.height = `${event.data.data.height}px`
        }
      })
    })
  })