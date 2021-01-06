var events = document.querySelectorAll('[data-eventid] [aria-hidden]>span') ;
for(value in events){
    if(events[value].innerText.match('(오전|오후)') === null ){
        events[value].innerHTML = '선약';
    }
}
// 이벤트가 모두 선약으로 바뀜

'10시'.match('(오전|오후)')

//bookmarklet (북마크에 코드를 저장시키는것 웹페이지 대상으로 실행됨)