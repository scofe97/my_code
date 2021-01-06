var http = require('http');
var fs = require('fs');
var url = require('url'); // require 요구함
// url이라는 모듈을 사용할거다
var qs = require('querystring');
var template = require('./lib/template.js')
// 외부에서 들어온 정보 변환?
var path = require('path')
var sanitizeHtml = require('sanitize-html');


var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function (err, filelist) {
                // var title = 'Welcome';
                // var description = 'HelloWorld';

                // var list = templateList(filelist);

                // var template = templateHTML(title, list, 
                //     `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);

                // response.writeHead(200);
                // response.end(template);

                var title = 'Welcome';
                var description = 'HelloWorld';

                var list = template.list(filelist);
                var html = template.HTML(title, list, 
                    `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
                response.writeHead(200);
                response.end(html);
            })
        } else {
            fs.readdir('./data', function (err, filelist) {
                var fillterId = path.parse(queryData.id).base;
                fs.readFile(`data/${fillterId}`, 'utf8', function (err, description) {
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title)
                    var sanitizedDescription = sanitizeHtml(description,{allowedTags:['h1']});
                    var list = template.list(filelist);
                    var html = template.HTML(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
                    `<a href="/create">create</a>
                    <a href="/update?id=${sanitizedTitle}">update</a>
                    <form action="delete_process" method="post">
                    <input type="hidden" name="id" value="${sanitizedTitle}">
                    <input type="submit" value="delete">
                    </form>`)
                    
                    response.writeHead(200);
                    response.end(html);
                })
            })
        }
    }else if(pathname ==='/create'){
        fs.readdir('./data', function (err, filelist) {
            var title = 'Web - create';

            var list = template.list(filelist);

            var html = template.HTML(title, list, `<form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
            <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
            <input type="submit">
            </p>
            </form>`,
            ``);

            response.writeHead(200);
            response.end(html);
        })
    }else if(pathname ==='/create_process'){
        var body = '';
        request.on('data',function(data){
            // 웹브라우저에 전송된 내용이 많을경우
            // data단위로 정보를 계속해서 쪼개받고 꽉차면 보내줌
            body = body + data;
        });
        request.on('end',function(){
            // 수신이 끝남 post에 body내용담음
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            // 파일을 만드는 부분
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                response.writeHead(302, {Location:`/?id=${title}`});
                response.end('sucess');
                // 작성한 글페이지로 리다이렉션을 해준다
            })
        });
    }else if(pathname === '/update'){
        fs.readdir('./data', function (err, filelist) {           
            var fillterId = path.parse(queryData.id).base;        
            fs.readFile(`data/${fillterId}`, 'utf8', function (err, description) {
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.HTML(title, list, 
                `<form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                <input type="submit">
                </p>
                </form>`,
                `<a href="/create">create</a>
                <a href="/update?id=${title}">update</a>`)
                
                response.writeHead(200);
                response.end(html);
            })
        })
    }else if(pathname ==='/update_process'){
        //POST방식으로 보낸걸 해석함
        var body = '';
        request.on('data',function(data){
            // 웹브라우저에 전송된 내용이 많을경우
            // data단위로 정보를 계속해서 쪼개받고 꽉차면 보내줌
            body = body + data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title
            var description = post.description;

            fs.rename(`data/${id}`, `data/${title}`, function(error){
                fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                    response.writeHead(302, {Location:`/?id=${title}`});
                    response.end();
                    // 작성한 글페이지로 리다이렉션을 해준다
                })
            })
        });
    }else if(pathname ==='/delete_process'){
        //POST방식으로 보낸걸 해석함
        var body = '';
        request.on('data',function(data){
            // 웹브라우저에 전송된 내용이 많을경우
            // data단위로 정보를 계속해서 쪼개받고 꽉차면 보내줌
            body = body + data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;

            // 파일 삭제부분
            var fillterId = path.parse(id).base; 
            fs.unlink(`data/${fillterId}`, function(error){
                response.writeHead(302, {Location:`/`});
                response.end();
            })
        });
    }else {
        response.writeHead(404);
        // writeHead 웹서버 브라우저 사이에 제대로된건지 통신하기 위한 약속
        //
        response.end('Not Found');
    }
});
app.listen(3000);