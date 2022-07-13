// ==UserScript==
// @name         CSDN不用关注博主即可阅读全文
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  毒瘤论坛的毒瘤功能不能阻止学习的热情，现在不用关注博主也能直接查看文章啦。
// @author       lWaterLite
// @match        *://blog.csdn.net/*
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCWvSfhj8BPE3xQgN7ZpFp2kKSDqF6SqMR1CAAlsevT3rlfAXhg+M/Gmi6IGKLfXSQu69VQn5yPcLk/hXtf7VXjuXStQs/h/ojf2domnWsfn28B2iRiMoh9VVdpx3LZPQV+N4TD0vYzxWIu4RaSS0bb6X6JLVn9eZrj8UsXSyzL7KrUTk5NXUILRu2l227JXt1ZS1j9kLXI9Llu9B17TfEDxZ3W8R8tmI/hU5Kk+xIrwa4gktZ5IZo2imjYo6OMFWBwQR65rZ8H+ONc8BaqNR0LUJLC6xtYrhlcejKchh9R71kXd3Nf3c1zcSNLcTO0kkjdWYnJJ+pNc+JnhakYuhBwfVXuvK3U7cuoZlh5zhja0asNOVqPLK/VNLS21mtTrfg34gtvC/xR8N6leOI7WK7VZZG6IrgoWPsN2fwr0P8Aaz8Canp3xFuvEgtpJtJ1KOJhdIpKRukaxlGPY4QEZ6546GvCa9k+H/7UfivwRpcWl3Mdvr2nQrsiS8yJY1HRQ4PI/wB4H06V1YWvQlh5YTEtxTakmleztbVdmjzc0wWNp4+nmuXxU5Ri4ShJ8vNFu6alZpNPvozzHwz4U1bxjqsWnaNYTX93IQAkS5C+7Hoo9zgU3xN4a1Hwfr15o+qwfZtQtH2Sx7g2MgEEEcEEEEH0Ne56l+2ZrjWbw6R4d03S5G/5aOzS4PqANoz9c14Rr+v6h4o1m61XVLl7y/un3yzPgFjjA4HAAAAAHAArDE08HTglQqOcr6u1lb563O3L6+bYitKWNoRpU7aLm5pN33bSSSt03P/Z
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const article_content = document.getElementById("article_content");
article_content.removeAttribute("style");

const hide_article_box = document.getElementsByClassName("hide-article-box");
hide_article_box[0].remove();

})();