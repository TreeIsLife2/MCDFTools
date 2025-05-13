/// <reference types="types-mediawiki" />

mw.hook('wikipage.content').add(() => {
	// get all tools on the page
	const interactiveTools = document.querySelectorAll('div.tool')
	interactiveTools.forEach((tool) => {
    	const type = tool.getAttribute('data-type')
    	if (!type) {
			console.error('No data-type attribute found on .tool', tool)
    		return
		}

		// since tools are hosted outside this wiki, we need to embed them
		const iframe = document.createElement('iframe')

		// a random string to use as id
		const id = Math.random().toString(36).substring(7)
		iframe.id = `tool-${id}`

		// if there are any attributes, they should be sent to the tool
		const attributes = tool.attributes
		for (let i = 0; i < attributes.length; i++) {
			iframe.setAttribute(attributes[i].name, attributes[i].value)
		}

		const url = `/tools/${type}/#?id=${id}&url=${encodeURIComponent(window.location.href)}` // url, with type and id

		if (localStorage.getItem('devMode') === 'true') { // development purposes only, though you better test it prior building it
			console.log('You are in development environment and tools are loaded from localhost.')
			iframe.src = `http://localhost:5173${url}`
		} else {
			iframe.src = `https://mcdf-static.github.io${url}`
		}

		// copy all children with .tool-parameter
		const parameters = tool.querySelectorAll('.tool-parameter')
		parameters.forEach((parameter) => {
			const iframeParameter = document.createElement('div')
			iframeParameter.className = 'tool-parameter'
			iframeParameter.innerHTML = parameter.innerHTML
			iframe.appendChild(iframeParameter)
		})
		
		// inherit styles
		iframe.style = tool.style
		
		// now that all information is processed, we can load iframe and work from there
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
			
			// theme based on theme selected AT LOAD
			iframe.contentWindow.postMessage(
				{
					type: 'tool-theme-change',
					data: {
						theme: document.classList.contains('theme-light') ? 'light' : 'dark',
					},
				},
				new URL(iframe.src).origin
			)
	
			// when theme changes during page session, the "Themes" extension fires function, which we can use to change theme
			mw.hook('ext.themes.themeChanged').add((theme) => {
				iframe.contentWindow.postMessage(
					{
						type: 'tool-theme-change',
						data: {
							theme,
						},
					},
					new URL(iframe.src).origin
				)
			})
		})

		// if needed, send messages
		window.addEventListener('message', (event) => {
			// security considirations
			if (event.origin !== new URL(iframe.src).origin) return
			if (event.data.id !== id) return

			// Request for data, height change or clipboard copy
			if (event.data.type === 'tool-init-request-data') {
				event.source.postMessage(
					{
						type: 'tool-init',
						data: {
							dataset,
							innerHTML: tool.innerHTML,
						},
					},
					new URL(iframe.src).origin
				)
			} else if (event.data.type === 'tool-height-change') {
				iframe.style.height = `${event.data.data.height}px`
			} else if (event.data.type === 'tool-clipboard') {
				navigator.clipboard.writeText(event.data.data.text)
			}
		})
	})
})
