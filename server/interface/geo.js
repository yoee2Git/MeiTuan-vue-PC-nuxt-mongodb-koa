import Router from 'koa-router';
import axios from './utils/axios';

let router = new Router({
	prefix: '/geo'
});

const sign = 'b735ab0b3e46d12ec07336ec5195a95f'

router.get('/getPosition',async (ctx) => {
  let { status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`); 

  if(status === 200){
    ctx.body = {
      province,
      city
    }
  }else{
    ctx.body = {
      province : '',
      city: ""
    }
  }
})

router.get('/menu',async (ctx) => {
  let {status,data: {menu}} = await axios.get('`http://cp-tools.cn/geo/menu?sign=${sign}`')
  if(status === 200){
    ctx.body = {
      menu
    }
  }else{
    ctx.body = {
      menu : []
    }
  }
})



export default router