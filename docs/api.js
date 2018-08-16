$links = document.querySelectorAll('a[name^="Vector"');

// hack: 在 docify 中需要自己手动添加 id 属性，配合 markdown 中的 hack
// 动态添加 id 属性，方便直接 anchor
Array.prototype.forEach.call($links, function(el) {
  var name = el.name;
    var id = name.replace(/[\+\.]/g, '-').toLowerCase();
  el.id = id;
});