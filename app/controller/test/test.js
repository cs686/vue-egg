module.exports = app => {

    return class TestController extends app.Controller {

        async index() {
            const { ctx } = this;
            await ctx.render('test/test.js', { title: 'error test', message: 'vue server side render!', msg: ctx });
        }

        async upload(ctx, options) {
            let req = ctx.req
            let res = ctx.res
                // let fileType = options.fileType || 'common'
                // let filePath = path.join(options.path, fileType)
            return options
        }

    };
};