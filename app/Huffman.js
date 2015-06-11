function HuffmanEncoding(str) {
    this.str = str;

    var count_chars = {};
    for (var i = 0; i < str.length; i++)
        if (str[i] in count_chars)
            count_chars[str[i]] ++;
        else
            count_chars[str[i]] = 1;

    var heap = new BinaryHeap(function(x){return x[0];});
    debugger;
    for (var ch in count_chars)
        heap.push([count_chars[ch], ch]);

    while (heap.size() > 1) {
        var pair1 = heap.pop();
        var pair2 = heap.pop();
        heap.push([pair1[0]+pair2[0], [pair1[1], pair2[1]]]);
    }

    var tree = heap.pop();
    this.encoding = {};
    this._generate_encoding(tree[1], "");

    this.encoded_string = ""
    for (var i = 0; i < this.str.length; i++) {
        this.encoded_string += this.encoding[str[i]];
    }
}

HuffmanEncoding.prototype._generate_encoding = function(ary, prefix) {
    if (ary instanceof Array) {
        this._generate_encoding(ary[0], prefix + "0");
        this._generate_encoding(ary[1], prefix + "1");
    }
    else {
        this.encoding[ary] = prefix;
    }
}

function encode(text) {
    var huff = new HuffmanEncoding(text);
    return huff.encoded_string;
}



