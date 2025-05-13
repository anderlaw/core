// template:`<input v-if="show"/>`,
function render(_ctx, _cache) {
  with (_ctx) {
    const {
      openBlock: _openBlock,
      createElementBlock: _createElementBlock,
      createCommentVNode: _createCommentVNode,
    } = _Vue

    //可以看出，Vue内部并没有把v-if当成一个Directive 而是render成 条件渲染
    return show
      ? (_openBlock(), _createElementBlock('input', _hoisted_1))
      : _createCommentVNode('v-if', true)
  }
}
