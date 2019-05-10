let reverse = require('../src/module/util');

describe('測試 reverse 函式', function(){
  test('我輸入 ABC 預期得到 CBA', () => {
    expect(reverse('ABC')).toBe('CBA');
  });

  test('我輸入 ??? 預期得到 ???', () => {
    expect(reverse('???')).toBe('???');
  });

  test('我輸入 三個空白 預期得到 三個空白', () => {
    expect(reverse('   ')).toBe('   ');
  });

  test('我輸入 空字串 預期得到 空字串', () => {
    expect(reverse('')).toBe('');
  });
});

