interface Config {
	basename: string
}

export const config: Record<string, Config> = {
	development: {
		basename: ''
	},
	production: {
		basename: '/aha-fe-assignment'
	}
}

export const getConfig = (): Config => {
	const environment = process.env.NODE_ENV ?? 'development'
	return config[environment]
}
