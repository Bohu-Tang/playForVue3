function add(x, y) {
  return x + y
}

function expect(ret){
  return {
    toBe(arg){
      if(ret!==arg){
        throw Error(`预期与实际不符！预期${ret}, 实际${arg}`)
      }
    }
  }
}

function test(title, fn){
  try{
    fn()
    console.log('测试通过')
  }catch (e){
    console.log(e)
    console.error('测试不通过')
  }
}

test('测试两个数字相加',()=>{
  expect(add(1,2)).toBe(3)
})
