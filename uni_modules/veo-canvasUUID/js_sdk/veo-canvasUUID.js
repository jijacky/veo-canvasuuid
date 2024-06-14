
function bin2hex(s) {
    let n,
        o = '';
    s += '';
    for (let i = 0, l = s.length; i < l; i++) {
        n = s.charCodeAt(i).toString(16);
        o += n.length < 2 ? '0' + n : n;
    }

    return o;
}

// 获取指纹UUID
function canvasUUID(domain='uuid') {
    // 创建 <canvas> 元素
    let canvas = document.createElement('canvas');
    // getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性
    let ctx = canvas.getContext('2d');
    // 设置在绘制文本时使用的当前文本基线
    ctx.textBaseline = 'top';
    // 设置文本内容的当前字体属性
    ctx.font = "14px 'Arial'";
    // 设置用于填充绘画的颜色、渐变或模式
    ctx.fillStyle = '#f60';
    // 绘制"被填充"的矩形
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    // 在画布上绘制"被填充的"文本
    ctx.fillText(domain, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(domain, 4, 17);

    // toDataURL返回一个包含图片展示的 data URI
    let b64 = canvas.toDataURL().replace('data:image/png;base64,', '');
    // atob() 方法用于解码使用 base-64 编码的字符串；base-64 编码使用方法是 btoa()，这俩都是window全局方法
    let crc = bin2hex(atob(b64).slice(-16, -12));
    return crc;
}

export default canvasUUID;
