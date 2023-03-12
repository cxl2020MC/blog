//参数处理函数
function dplayer (args, content) {
    // args = args.join(' ').split(',')
    // const div_id = args[0]
    // const div_id = args[1]?args[1]:p0
    const div_id = args
    html = `<div id="${div_id}">播放器加载中......</div>
<script>
//立即执行函数
(
    function () {
        import('https://jsd.cxl2020mc.top/npm/dplayer/+esm')
            .then((module) => {
                // Do something with the module.
                // const ${div_id} = new DPlayer({
                const ${div_id} = new module.default({
                    container: document.getElementById('${div_id}'),
                    ${content}
                });
            });
    }
)();
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });