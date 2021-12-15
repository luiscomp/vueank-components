module.exports = {
    locales: {
        '/': {
            lang: 'pt-BR',
            title: 'VueAnk',
			description: 'Framework de componentes criado com VueJS.'
        }
	},
	head: [
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' }],
	],
    themeConfig: {
        repoLabel: 'Github',
        repo: 'https://github.com/luiscomp',
        docsDir: 'docs',
        editLinks: false,
        docsBranch: 'master',
        editLinkText: null,
        search: true,
        locales: {
            '/': {
                label: 'Português',
                selectText: 'Linguagens',
                lastUpdated: 'Última Atualização',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'Novo conteudo já disponível.',
                        buttonText: 'Atualizar'
                    }
                },
                nav: [
                    { text: 'Começar', link: '/guide' },
                    { text: 'Componentes', link: '/components/' },
                ],
                sidebar: {
                    '/components/': [{
                        title: 'Componentes',
                        collapsable: false,
                        children: ['button', 'alert', 'input', 'date', 'time', 'checkbox', 'radio', 'switch', 'select']
                    }]
                }
            }
        }
    }
}
