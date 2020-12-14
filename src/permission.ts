import router from './router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
import { GetUserInfo } from "./api/Logins";
import store from './/store'
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.name === 'Login') {
        if (store.state.token) {
            GetUserInfo().then((res: any) => {
                if (res.status_code == 200) {
                    store.commit('SaveUserInfo', res.data);
                    router.push('/Homes')

                } else {
                    next()
                }
            }).catch(res => {
                next()
            })
        }
    }
    next();
 
  });

  router.afterEach(() => {
    NProgress.done(); // 结束Progress
});