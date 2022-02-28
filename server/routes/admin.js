import adminJs from "adminjs";
import AdminJSExpress from '@adminjs/express'


// const AdminJS = require('adminjs')
// const AdminJSExpress = require('@adminjs/express')



// const adminJs = new AdminJS({
//   databases: [],
//   rootPath: '/admin',
// })
const router = AdminJSExpress.buildRouter(adminJs)
router.get('/admin', adminJs);
export default router;