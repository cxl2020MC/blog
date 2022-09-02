//参数处理函数
function dplayer (args, content) {
    args = args.join(' ').split(',')
    let p0 = args[0]
    let p1 = args[1]?args[1]:p0
    html = `${hexo.render.renderSync({ text: '> 这里有个视频播放器，如无法显示请刷新', engine: 'markdown' })}
<div id="${p1}"></div>
<script>
    const ${p0} = new DPlayer({
        container: document.getElementById('${p1}'),
${content}
    });
</script>`
    return html
}
//标签注册函数
hexo.extend.tag.register('dplayer', dplayer, { ends: true });