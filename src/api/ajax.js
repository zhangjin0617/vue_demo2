// 一个能发送ajax请求的函数
import axios from 'axios'
import qs from 'qs'

// 超时时间全局配置
axios.defaults.timeout=20000
// 请求拦截器
axios.interceptors.request.use((config)=>{
  const {method,data}=config
  if(method.toLowerCase()==='post' && data && typeof data==='object'){
   config.data=qs.stringify(data)
  }
  return config
})

axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  alert('请求异常: ' + error.message)
  /* return error//进入成功 */
  /* throw error//进入失败 （不能用的原因是：后面要做统一处理）*/
  /* return Promise.reject(error)//这样做就把异常抛出去了 */
  return new Promise(()=>{})
})

export default axios

// axios.get('/api/test_get',{
//   params:{
//     name:'jack',pwd:'456'
//   }
// })
// axios.post('/api/test_post',{name:'Tom',pwd:'123'})
