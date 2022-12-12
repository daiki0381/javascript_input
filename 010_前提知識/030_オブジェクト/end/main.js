let obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function() {
        console.log('value3');
    },
    prop4: {
        prop5: 'value5'
    }
}
obj.prop3();

obj.prop6 = 'value6';
console.log(obj);