function pyoDisplay() {
  //Search 버튼 눌렀을 때 표 표시
  const pyo = document.getElementById('pyo')
  if (pyo.style.visibility !== 'hidden') {
    pyo.style.visibility = 'visible'
  }
}

function notEntry() {
  //notice, 수강신청 및 수정/삭제, 개발자 소개 외의 버튼 눌렀을 때 실행
  alert("'수강신청 및 수정/삭제'를 눌러 측정을 시작하세요.")
}

function register1Click() {
  //첫 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc1 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-1')
      hide.style.display = 'none'
      count++
      rc1++
      done(1)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register2Click() {
  //두 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc2 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-2')
      hide.style.display = 'none'
      count++
      rc2++
      done(2)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register3Click() {
  //세 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc3 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-3')
      hide.style.display = 'none'
      count++
      rc3++
      done(3)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register4Click() {
  //네 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc4 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-4')
      hide.style.display = 'none'
      count++
      rc4++
      done(4)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register5Click() {
  //다섯 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc5 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-5')
      hide.style.display = 'none'
      count++
      rc5++
      done(5)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register6Click() {
  //여섯 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc6 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-6')
      hide.style.display = 'none'
      count++
      rc6++
      done(6)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register7Click() {
  //일곱 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc7 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-7')
      hide.style.display = 'none'
      count++
      rc7++
      done(7)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register8Click() {
  //여덟 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('해당 과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc8 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      let hide = document.getElementById('a-8')
      hide.style.display = 'none'
      count++
      rc8++
      done(8)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function stopStopwatch() {
  //스톱워치, register 총합 8번 눌렸을 시 스톱워치 종료
  var today2 = new Date()
  alert(`${(today2 - today1) / 1000}초 걸렸습니다.`) //스톱워치 종료시간에서 페이지 입장 시간을 뺌
  //location.replace('index.html');
}

function deleteDone(nowCnt) {
  var torf = confirm('해당 과목을 삭제 하시겠습니까?')
  if (torf === true) {
    const parent = document.getElementById('done')
    parent.deleteRow(nowCnt - 1)
    const children = parent.childNodes
    for (i = 0; i < children.length; i++) {
      children[i].childNodes[0].innerHTML = `<td>${i + 1}</td>`
      children[
        i
      ].childNodes[1].innerHTML = `<td><button class="delete" onClick=deleteDone(${
        i + 1
      })></button><td>`
      console.log(children[i].childNodes[1])
    }
    count -= 1
    alert(
      '예비수강신청함에서 선택한 과목이 삭제완료되었습니다.\n실제로 삭제되진 않습니다.'
    )
  }
}

//리스트 map을 통해 해당
function done(clicked) {
  //노드를 이용해 추후 삭제할 노드를 삭제
  //몇번을 클릭했느냐에 따라 함수 호출
  cnt += 1 //몇번째로 클릭했느냐에 따라 번호 출력
  // tr부분 요소
  let td = [] // td부분 요소
  let tr = document.createElement('tr')
  for (i = 0; i < 13; i++) {
    td.push(document.createElement('td'))
  }
  let text = [] //td에 저장할 텍스트
  let nowCnt = cnt
  //텍스트가 아닌 html요소 button을 입력하는 변수
  let btn = document.createElement('button')
  btn.setAttribute('class', 'delete')
  btn.setAttribute('onClick', `deleteDone(${nowCnt})`)
  let ipt = document.createElement('input')
  ipt.setAttribute('type', 'checkbox')

  if (clicked === 1) {
    //숫자인 변수를 저장하기위해 백틱`${}`사용
    text.push(document.createTextNode(`${cnt}`))
    //button들어갈 곳
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('전공'))
    text.push(document.createTextNode('T01234567'))
    text.push(document.createTextNode('F'))
    text.push(document.createTextNode('MacOS'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('3'))
    text.push(document.createTextNode('Bill Gates'))
    text.push(document.createTextNode('월 1 2 3 ( )'))
    text.push(document.createTextNode('0 / 100'))
    //input들어갈 곳
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 2) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('전공'))
    text.push(document.createTextNode('T87654321'))
    text.push(document.createTextNode('F'))
    text.push(document.createTextNode('How to use Facebook'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('3'))
    text.push(document.createTextNode('Mark Zuckerberg'))
    text.push(document.createTextNode('수 1 2 3 ( )'))
    text.push(document.createTextNode('0 / 60'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 3) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('전공'))
    text.push(document.createTextNode('S20212223'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('애플학개론'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('3'))
    text.push(document.createTextNode('이재용'))
    text.push(document.createTextNode('수 4 5 ( )'))
    text.push(document.createTextNode('0 / 23'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 4) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('전공'))
    text.push(document.createTextNode('I23398948'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('프론트엔드의 모든 것'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('임창용'))
    text.push(document.createTextNode('화 7 8 ( )'))
    text.push(document.createTextNode('0 / 14'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 5) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('과기'))
    text.push(document.createTextNode('T35140000'))
    text.push(document.createTextNode('F'))
    text.push(document.createTextNode('Tesla Mechanism'))
    text.push(document.createTextNode('-'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('Elon Musk'))
    text.push(document.createTextNode('월 7 8 ( )'))
    text.push(document.createTextNode('0 / 100'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 6) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('생활'))
    text.push(document.createTextNode('U19900905'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('체육(피겨)'))
    text.push(document.createTextNode('-'))
    text.push(document.createTextNode('1'))
    text.push(document.createTextNode('김연아'))
    text.push(document.createTextNode('금 3 4 ( )'))
    text.push(document.createTextNode('0 / 50'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 7) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('인성'))
    text.push(document.createTextNode('B20230213'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('밥상머리인성교육'))
    text.push(document.createTextNode('-'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('금 5 6 ( )'))
    text.push(document.createTextNode('0 / 10'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }
  if (clicked === 8) {
    text.push(document.createTextNode(`${cnt}`))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('사철'))
    text.push(document.createTextNode('H19540420'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode('한국외국어대학교사'))
    text.push(document.createTextNode('-'))
    text.push(document.createTextNode('2'))
    text.push(document.createTextNode('박정운'))
    text.push(document.createTextNode('화 5 6 ( )'))
    text.push(document.createTextNode('0 / 20'))
    text.push(document.createTextNode(''))
    text.push(document.createTextNode(''))
    for (i = 0; i < text.length; i++) {
      if (i === 1) {
        td[i].appendChild(btn)
      }
      if (i === 11) {
        td[i].appendChild(ipt)
      }
      if (i !== 1 && i !== 11) {
        td[i].appendChild(text[i])
      }
    }
  }

  for (i = 0; i < 13; i++) {
    //td에 저장한 노드들을 tr의 자식노드로 전달
    tr.appendChild(td[i])
  }
  tr.setAttribute('id', `${cnt}`)
  //마지막으로 id='done'이라는 태그 밑에 자식 노드로 tr을 전달
  document.getElementById('done').appendChild(tr)
}

var count = 0
let cnt = 0 //done()함수용 count 위랑 다릅니다
let doneList = []
let countList = []
var rc1 = 0
var rc2 = 0
var rc3 = 0
var rc4 = 0
var rc5 = 0
var rc6 = 0
var rc7 = 0
var rc8 = 0
var today1 = new Date() //수강신청 및 수정/삭제 페이지 들어오자마자의 시간
