console.log('starting readibility');
console.assert(readability, 'missing readability');
readability.init();

var readableContent = document.getElementById('readability-content').innerHTML;
console.log('readable content', readableContent);
