process.nextTick(function() {
    console.log('nextTick延迟执行');
});
setImmediate(function() {
    console.log('setImmedidate延迟执行');
})
console.log('正常执行');
