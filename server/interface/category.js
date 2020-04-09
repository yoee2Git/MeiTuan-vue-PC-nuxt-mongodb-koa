const Router = require('koa-router');
import axios from "axios";

const axiosIns = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 1000
})

let router = new Router({
	prefix: '/category'
})

const sign = 'b735ab0b3e46d12ec07336ec5195a95f';

router.get('/crumbs', async (ctx) => {
	let { status, data: {areas, types}} = await axiosIns.get('http://cp-tools.cn/categroy/crumbs', {
		params: {
			city: ctx.query.city || '北京',
			sign
		}
	})
	if (status === 200) {
		ctx.body = {
			areas,
			types
		}
	} else {
		ctx.body = {
			areas: [],
			types: []
		}
	}
})

module.exports = router;