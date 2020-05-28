module.exports = {
	app: [
    {
    	name: 'meituan',
    	script: 'server/index.js',
    	env: {
    		COMMON_VARIABLE: 'true'
    	},
    	env_production: {
    		NODE_ENV: 'production'
    	}
    }
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.114.87.244',
			ref: 'origin/master',
			repo: 'https://gitee.com/yoee/meituan-pc-nuxt.git',
			path: '/var/www/meituan',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run build && npm start && pm2 start pm2.config.js --env production'
		}
	}
}