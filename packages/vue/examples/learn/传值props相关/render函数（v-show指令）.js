// template:`<input v-show="show"/>`,
function render(_ctx, _cache) {
  with (_ctx) {
    const {
      vShow: _vShow,
      withDirectives: _withDirectives,
      openBlock: _openBlock,
      createElementBlock: _createElementBlock,
    } = _Vue
    //可以看出v-show内部被作为一个标准的指令 ObjectDirective处理的
    return _withDirectives(
      (_openBlock(), _createElementBlock('input', null, null, 512)), // 512 = NEED_PATCH
      [[_vShow, show]],
    )
  }
}
