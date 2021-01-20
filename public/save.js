save.onclick = function() {
    const head = `<!DOCTYPE html>
                      <html lang="">
                        <head>
                          <meta charset="utf-8">
                          <meta http-equiv="X-UA-Compatible" content="IE=edge">
                          <meta name="viewport" content="width=device-width,initial-scale=1.0">
                          <link rel="icon" href="favicon.ico">
                          <title>Title</title>
                        `

    const html = document.getElementById('field-to-save').innerHTML;

    const style =  Array.from(document.getElementsByTagName('style')).map((item) => {
        console.log(item)
        return item.innerHTML
    }).join('');

    console.log()

    const out = head + '<style>' + style + '</style></head><body>' +  html + '</body></html>'


    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = '<a download="text.html" id="ll">text.txt</a>';

    document.body.append(div)

    var BlobBlob = new Blob([out], {type : 'text/plain'});
    ww = URL.createObjectURL(BlobBlob);
    ll.href = ww;
};

