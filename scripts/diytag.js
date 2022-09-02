//参数处理函数
function dplayer (args, content) {
    args = args.join(' ').split(',')
    let p0 = args[0]
    let p1 = args[1]?args[1]:p0
    html = `<div id="${p1}"></div>
<script>
//立即执行函数
(
    function () {
        const ${p0} = new DPlayer({
            container: document.getElementById('${p1}'),
${content}
        });
    }
)();
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });