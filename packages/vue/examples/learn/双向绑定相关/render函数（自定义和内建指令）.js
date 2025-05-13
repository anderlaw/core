//template:`<input v-model.trim="inputValue" v-my-trim:name.thin="123"/>`,
function render(_ctx, _cache) {
  with (_ctx) {
    const {
      vModelText: _vModelText,
      resolveDirective: _resolveDirective,
      withDirectives: _withDirectives,
      openBlock: _openBlock,
      createElementBlock: _createElementBlock,
    } = _Vue
    //取出指令
    const _directive_my_trim = _resolveDirective('my-trim')
    //withDirective函数用于将"指令绑定信息“（DirectiveBinding）添加到VNode.dirs上
    return _withDirectives(
      (_openBlock(),
      _createElementBlock(
        'input',
        {
          'onUpdate:modelValue': $event => (inputValue = $event),
        },
        null,
        8, // PROPS
        _hoisted_1,
      )),
      //DirectiveArguments： Array<[Directive | undefined，any,string,modifiers]>
      [
        // v-model.trim="inputValue"
        [
          _vModelText,
          inputValue, //值
          void 0, //空参数
          { trim: true },
        ],
        // v-my-trim:name.thin="123"
        [
          _directive_my_trim,
          123, //初始值
          'name', //参数
          { thin: true },
        ],
      ],
    )
  }
}
