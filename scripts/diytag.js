//参数处理函数
function dplayer (args, content) {
    // args = args.join(' ').split(',')
    // const div_id = args[0]
    // const div_id = args[1]?args[1]:p0
    const div_id = args
    html = `<div id="${div_id}"></div>
<script>
//立即执行函数
(
    function () {
        const ${div_id} = new DPlayer({
            container: document.getElementById('${div_id}'),
${content}
        });
    }
)();
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });