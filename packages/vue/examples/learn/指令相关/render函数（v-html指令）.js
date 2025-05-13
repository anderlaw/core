//template:'<div v-html="`<button>Click</button>`"></div>',
function render(_ctx, _cache) {
  with (_ctx) {
    const { openBlock: _openBlock, createElementBlock: _createElementBlock } =
      _Vue

    return (
      _openBlock(),
      _createElementBlock(
        'div',
        //v-html会被编译成 innerHTML属性
        {
          innerHTML: `<button>Click</button>`,
        },
        null,
        8, // PROPS
        _hoisted_1,
      )
    )
  }
}
